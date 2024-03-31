import { exec } from 'child_process';
import os from 'os';
import { promisify } from 'util';
import 'dotenv/config';

const execAsync = promisify(exec);

const siteUrl = process.env.VITE_URL || 'localhost';

const execShellCommand = async (cmd: string): Promise<void> => {
  try {
    const { stdout, stderr } = await execAsync(cmd);
    console.log(stdout || stderr);
  } catch (error) {
    console.error(`🚨 Error executing command: ${cmd}`, error);
    throw error;
  }
};

const setupMkcert = async (): Promise<void> => {
  try {
    console.log('🔎 Checking mkcert installation...');

    const isMkcertInstalled = async (): Promise<boolean> => {
      try {
        await execAsync('mkcert -version');
        return true;
      } catch {
        return false;
      }
    };

    if (await isMkcertInstalled()) {
      console.log('✅ mkcert is already installed');
      return;
    }

    console.log('🕓 Installing mkcert...');

    if (os.type() === 'Linux') {
      await execShellCommand('sudo apt install libnss3-tools');
    } else if (os.type() === 'Darwin') {
      await execShellCommand('brew install mkcert');
      await execShellCommand('brew install nss');
    } else {
      console.log('🚨 Please install mkcert manually');
      return;
    }

    await execShellCommand('mkcert -install');
    console.log('✅ mkcert installed successfully');
  } catch (error) {
    console.error('🚨 Failed to install mkcert', error);
    throw error;
  }
};

const generateCerts = async (): Promise<void> => {
  try {
    console.log('🕓 Generating SSL certificates...');
    await execShellCommand(`mkcert -key-file ./config/key.pem -cert-file ./config/cert.pem ${siteUrl}`);
    console.log('✅ SSL certificates generated');
  } catch (error) {
    console.error('🚨 Failed to generate SSL certificates', error);
    throw error;
  }
};

const setupSSL = async (): Promise<void> => {
  await setupMkcert();
  await generateCerts();
};

setupSSL();
