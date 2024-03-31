# Little Big Details

## Stack

Starter repository including:

- Vite (incl. self signed SSL certificates for development)
- Typescript
- React
- Panda CSS ([Docs](https://panda-css.com/docs))
- ESLing & Prettier incl configuration

## Development

If you are using GitHub, the repository will automatically run `npm run lint` & `npm run build` on every commit.

Install all dependencies

```
npm i
```

Generate self-signed SSL certificates and start development server

```
npm run setup-ssl
npm run dev
```

Now visit the development server at https://localhost:3030

You can run the linter with (add `:fix` to automatically fix some lint errors)

```
npm run lint
npm run lint:fix
```

## Production

Get a preview (Vite starts a local web server that serves the built)

```
npm run preview
```

Build files for production at `./dist`

```
npm run build
```
