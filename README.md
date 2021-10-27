# zc_main

This is the Zuri Chat frontend built with [ExpressJS](http://expressjs.com/) (Backend) and [React](https://reactjs.org/) (Frontend)

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

to only install for one of the folders(topbar, sidebar, control)

```bash
yarn setup:<FOLDER-NAME>
```

## STARTING THE SERVER

To start the whole application server

```bash
yarn dev
```

To only start a single application server run the following command

```bash
yarn dev:<FOLDER-NAME>
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

### **The apllications are served at**

Topbar : [http://localhost:8080](http://localhost:8080)

Sidebar : [http://localhost:8081](http://localhost:8081)

Control : [http://localhost:8082](http://localhost:8082)

PluginHeader : [http://localhost:8083](http://localhost:8083)

### **Building**

```bash
yarn build
```

To only build a single application server run the following command

```bash
yarn build:<FOLDER-NAME>
```

To remove all node_modules and yarn.lock

```bash
yarn clean:fresh
```

To open [app](http://localhost:9000) in the browser

```bash
yarn open
```

## Editor setup

We're using eslint for js linting, stylelint for css linting and prettier for code formating, make sure you install eslint and prettier plugins in your editor so you can
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
yarn lint:css # to lint only css files # in project directory

yarn prettify # to prettify files # in project directory
```

you can also lint for all files in the repo by running that command in the root folder.
