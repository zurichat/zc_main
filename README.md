# ZC_MAIN

This is the Zuri Chat Frontend built with [React](https://reactjs.org/) (Frontend)

## Getting Started.

Make sure you have nodejs installed by running the following command:

```bash
node -v
```

If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

After installing nodejs install [yarn](https://www.npmjs.com/package/yarn)
if you have it then install the project's dependencies:

```bash
yarn install
```

## STARTING THE SERVER

To start the whole application server

```bash
yarn dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

### **Building**

```bash
yarn build
```

To remove dist folder

```bash
yarn clean
```

To remove all node_modules

```bash
yarn clean-fresh
```

## Editor setup

We're using eslint for js linting, and prettier for code formating, make sure you install eslint and prettier plugins in your editor so you can
see linting errors as you code and have your code formatted on save by prettier. If formatOnSave doesn't work please google how to set up
format on save for the eslint & prettier plugins in your editor 🙃

## Contributing

For detailed information on how to go about contributing to this project. Check out the

- [Contribution Guide](docs/CONTRIBUTING.md)
- [Styling Guide](docs/STYLING.md)

**Before send PR or making a merge make sure you code is properly formatted.** You can easily do that by running

```bash
yarn lint # to lint all files # in project directory
yarn lint:js # to lint only js,jsx files # in project directory

yarn prettify # to prettify files # in project directory
```

you can also lint for all files in the repo by running that command in the root folder.
