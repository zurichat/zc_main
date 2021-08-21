This is the Zuri Chat frontend built using [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)

## Getting Started.

Make sure you have nodejs installed by running the following command:

```bash
node -v
```

If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

After installing nodejs install [yarn](https://www.npmjs.com/package/yarn) if you don't have it then install the project's dependencies:

```bash
yarn install
```

Run the development server using either of the following commands:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Editor setup

We're using eslint for linting and prettier for code formating, make sure you install eslint and prettier plugins in your editor so you can
see linting errors as you code and have your code formatted on save by prettier. If formatOnSave doesn't work please google how to set up
format on save for the eslint & prettier plugins in your editor 🙃

## Project structure

- All components are in the components folder and styles for those components are in the styles folder.
- The frontend routes are in the pages folder, learn more about Next.js pages [here](https://nextjs.org/docs/basic-features/pages).
- Api routes are in the ./pages/api folder, learn more about Next.js api routes [here](https://nextjs.org/learn/basics/api-routes).
- Assets are in the public folder

## Contributing

- Check if there are any linting errors by running `yarn lint` before commiting your code.
- Please make sure your commit messages and pr titles give enough info about the changes you've made.
