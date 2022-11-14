<!-- omit in toc -->

# Contributing to Zuri Main Web App

## IMPORTANT!!! : OPEN YOUR PULL REQUESTS ON `dev` BRANCH, NOT `main`

First off, thanks for taking the time to be part of this awesome project ❤️

All Team members contribution are valued and encouraged, therefore, do not hesitate to contribute. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for the Team leads and PR Leads and smooth out the experience for all involved. Can't wait to collaborate and build an elegant Zuri Chat Application 🎉

## Table of Contents

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Contributing As a Team](#contributing-as-a-team)
  - [First Time Contributing?](#first-time-contributing?)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)

## I Have a Question

> If you want to ask a question, we assume that you have read the available instructions, if you still face any confusion, Kindly reach out to your team lead, and they will be willing to help.

Before you ask a question, it is best to search for existing [Issues](https://linear.app/zurichat2/team/ZUR/active) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://linear.app/zurichat2/team/ZUR/all).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

Once again, reach out to your Team Lead about any confusion you might face.

## I Want To Contribute

In order to contribute to this project, the entire process follows the following structure

- You identify an [issue](https://linear.app/zurichat2/team/ZUR/all) you want to work on, or is assigned to you.
- You make changes that solves this issue, you then write tests (Where required) and ensure that it passes.
- You open a pull request, which will be reviewed by your Team lead or PR Lead, and merged if it checks the right boxes.

Congratulations, you have just contributed,🎉🎉🎉 now pick another [issue](https://linear.app/zurichat2/team/ZUR/all) and repeat the same process.

<!-- ### Contributing As a Team

This project is actively worked on by three Teams:

- Team Aristotle
- Team Einstein
- Team Voltaire

Therefore, to check issues specific to your team, follow these instructions:

- For Team Aristotle: [Here](https://github.com/zurichat/zc_main/issues?q=is%3Aopen+is%3Aissue+label%3Ateam-aristotle)
- For Team Einstein: [Here](https://github.com/zurichat/zc_main/issues?q=is%3Aopen+is%3Aissue+label%3Ateam-einstein)
- For Team Voltaire: [Here](https://github.com/zurichat/zc_main/issues?q=is%3Aopen+is%3Aissue+label%3A%22Team+Voltaire%22) -->

<!-- omit in toc -->

#### First Time Contributing?

Everyone was a beginner at a point, and it goes without saying that, to become a master, you need to be a learner. Therefore, if this is your first time contributing, relax, read the following instructions and I promise you won't mess things up.

> And even if you do, the PR managers will catch it. But please don't. Mark won't be pleased

So here is a run down of how you would go about contributing:

- #### Fork your own copy of the Repository

  The first thing you will want to do is fork [this](https://github.com/zurichat/zc_main) repository. What this mean, is that you get your own copy of this repository. You can then safely make changes to your own copy, and then later, you can submit your changes, and tell the PR leads to combine (merge) the changes you made to the central/main repository. Here is a short [Video](https://youtu.be/ATz2mZG78MU) showing how to do that.

- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) the zc_main on your profile, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the link of your own Zc main repository (the one you forked).
  - Open the folder you want to work on your machine.
  - Open your favourite editor.
  - Open the terminal.
  - run `git clone [Link to your copy of the zc main repository]`.
    > The link should look like this : `https://github.com/<your username>/zc_main.git`

  Again, here is a link to a [short video](https://youtu.be/RXDja3ZkqZY) showing how you can do this.

- #### Configure the upstream

  Now that you have the local copy of Zuri main. There are a lot of developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

  - copy this link here `https://github.com/zurichat/zc_main.git`
  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/zurichat/zc_main.git`

  Now, your local copy can fetch (update) from the original source, and you won't miss out on any update. Here is a [short video](https://youtu.be/EAMzEcg0EmY) showing the instruction.

- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup button component`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages, referencing your issue number with a close action.
    > e.g `git commit -m "adds signup button to the sign up page close #21"`
    >
    > What this mean is that, when the PR leads merge your pull request (More on that below). Issue #21 is automatically closed.
  - run `git push origin [name of the repo you created]`
    > For the example above, you run
    >
    > `git push origin feat/signup`
    >
    > Which pushes your changes to your online copy, after which you then open a pull request.
  - Here is a [Video](https://youtu.be/VY4-yw7dbY8) showing how to perform that.

- #### Opening Pull requests

  Now that you have updated your online copy. You will need a way to inform the PR Leads handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine(merge) your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on your own copy of the zc_main repository.
  - You will see the option to open a pull request.
  - Create your pull request with the title `ZUR-123 My PR adds a feature` where ZUR is the issue ID
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  <!--   - Copy the link and head over to #issue-review channel on slack and paste it there. -->
  - Add comments where neccesary and wait for the PR Leads to check.
    Here is a [Video](https://youtu.be/3_LgvC0-Om4) showing how to go about it.

- #### Constantly update from upstream

  Now that you have your issues, you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream main`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

## Styleguides

We advocate for clean code and well structured codes. It is easier said than done, which is why there are linting configurations set up in the repository. Endeavour to keep the code you write clean and maintainable. Software is not only a science, but also an art.

The structure of the repo is the SPA format, you would be working in `main` folder mostly, there are three main folders there as we have our `sidebar` as a standalone as well as out `topbar`, In `main` you'd find a src folder and in it a pages folder, in each page's folder there's an **assets** folder, **components** and **styles**, do not keep your files outside of your pages folder, also now that there are timelines for milestones, there'd be deadlines for making PRs, **moving forward 30 mins to deadline no PR would be merged or go live**, for general components, there's a components folder in `main` folder and a sister component-assets folder and brother component-styles folder strictly for general components e.g header, footer...if you peradventure leave your pages component there it will not be merged

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. Failure to follow this would result in the pull request being rejected.

Let's build the next generation workspace, shall we ?🎉

## Other Information

- Check if there are any linting errors by running `yarn check-format` before commiting your code.
- Please make sure your commit messages and pr titles give enough info about the changes you've made.

- ### Pull Requests

  - Take note of all instructions above
  - The main branch for development would be the **DEVELOP** branch
  - Do not make a pull request with changes to the main branch
  <!--   - Create a branch in the format...Feat/(Task) e.g Feat/ Button Component and implement your work only in such branch -->
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
