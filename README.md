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
 
- Check if there are any linting errors by running `yarn lint` before commiting your code.
- Please make sure your commit messages and pr titles give enough info about the changes you've made.
 
 
# Pull Requests
 
- Take note of all instructions above
- The main branch for development would be the **DEVELOP** branch
- Do not make a pull request with changes to the main branch
- Create a branch in the format...Feat/(Task) e.g Feat/ Button Component and implement your work only in such branch
- Whatever task it is that you do must be responsive on all screens
- Add a live link to your Pull Request
- Make sure your commit messages and PR title are precise and meaningful, no..."it is now working" or "finally" commit messages, else your PR may not be merged
- Add a screenshot of what it is that you've worked on for all screens...mobile, tab, desktop screens
- Make sure your branch is up to date with the main branch and without conflicts before making your pull request, if not your PR may not be merged
- Push your code as soon as you can [ASAP]
- Link whatever issue it is that you worked on to your pull request
- Add all other neccessary links you may have to your pull request inluding the link to the design
- In the comment section of the pull request, document your work thoroughly(a helpful description)
- In a situation where you work on functional parts add a show `what it does` video if you can
- Do `git fetch` at least twice a day to be up to date with the repo
- Always do a git fetch or pull of the main branch before you write code and before making your pull request
- Your pull request must not change the work of others
- Your work should be pixel perfect
