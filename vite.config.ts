import path from 'path';
import dns from 'dns';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode as string, process.cwd()) };

  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

  const getHttpsConfig = () => {
    if (isGitHubActions || mode === 'production') {
      return undefined;
    } else {
      return {
        key: fs.readFileSync('./config/key.pem'),
        cert: fs.readFileSync('./config/cert.pem'),
      };
    }
  };

  return {
    resolve: {
      alias: {
        '~/styles': path.resolve(__dirname, './styled-system'),
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'build',
    },
    server: {
      https: getHttpsConfig(),
      port: process.env.VITE_PORT ? Number(process.env.VITE_PORT) : 3007,
      host: process.env.VITE_HOST || 'localhost',
      hmr: {
        https: getHttpsConfig(),
        host: process.env.VITE_HOST || 'localhost',
        port: process.env.VITE_PORT ? Number(process.env.VITE_PORT) : 3007,
      },
    },
    plugins: [react()],
  };
});
