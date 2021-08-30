# zc_main_nodereact

This is the Zuri Chat frontend built with [ExpressJS](http://expressjs.com/) (Backend) and [React](https://reactjs.org/) (Frontend)

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

## Run the Server

Run the development server from the root folder using either of the following commands:

```bash
npm run dev
# or
yarn dev
```

## Run the application -- Frontend specific

Open the frontend folder `zc_frontend` in your terminal and run the application from the folder using either of the following commands:

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
- Assets are in the assets folder, including images

## Contributing

For detailed information on how to go about contribution. Check out the [Contribution Guide](docs/CONTRIBUTING.md)
