<!-- omit in toc -->

# Contributing to Zuri Main Web App

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

Before you ask a question, it is best to search for existing [Issues](https://github.com/zurichat/zc_main/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/zurichat/zc_main/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

Once again, reach out to your Team Lead about any confusion you might face.

## I Want To Contribute

In order to contribute to this project, the entire process follows the following structure

- You identify an [issue](https://github.com/zurichat/zc_main/issues) you want to work on, or is assigned to you.
- You make changes that solves this issue, you then write tests (Where required) and ensure that it passes.
- You open a pull request, which will be reviewed by your Team lead or PR Lead, and merged if it checks the right boxes.

Congratulations, you have just contributed,🎉🎉🎉 now pick another [issue](https://github.com/zurichat/zc_main/issues) and repeat the same process.

### Contributing As a Team

This project is actively worked on by three Teams:

- Team Aristotle
- Team Einstein
- Team Voltaire

Therefore, to check issues specific to your team, follow these instructions:

- For Team Aristotle: [Here](https://github.com/zurichat/zc_main/issues?q=is%3Aopen+is%3Aissue+label%3Ateam-aristotle)
- For Team Einstein: [Here](https://github.com/zurichat/zc_main/issues?q=is%3Aopen+is%3Aissue+label%3Ateam-einstein)
  -For Team Voltaire: [Here](https://github.com/zurichat/zc_main/issues?q=is%3Aopen+is%3Aissue+label%3A%22Team+Voltaire%22)

<!-- omit in toc -->

#### First Time Contributing?

Everyone was a beginner at a point, and it goes without saying that, to become a master, you need to be a learner. Therefore, if this is your first time contributing, relax, read the following instructions and I promise you won't mess things up.

> And even if you do, the PR managers will catch it. But please don't. Mark won't be pleased

So here is a run down of how you would go about contributing:

- Fork your own copy of the Repository: The first thing you will want to do is fork [this](https://github.com/zurichat/zc_main) repository. What this mean, is that you get your own copy of this repository. You can then safely make changes to your own copy, and then later, you can submit your changes, and tell the PR leads to combine the changes you made to this repository. Here is a short [Video](https://youtu.be/ATz2mZG78MU) showing how to do that.

- Clone the Repository on your Local Machine: The next thing you want to do is clone (make a copy) of that your copy, to your local machine (Laptop, PC, MacBook). To do that,
  -- Copy the link of your (Zuri main repository)
  -- Open the folder you want to work in on your machine
  -- Open your favourite editor
  -- run `git clone [Link to your copy of the repo]`

Again, here is a link to a [short video](https://youtu.be/RXDja3ZkqZY) showing how you can do this.

- Configure the upstream: Now that you have the local copy of Zuri main. There are a lot of developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :
  - copy this link here `https://github.com/zurichat/zc_main.git`
  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/zurichat/zc_main.git`

Now, your local copy can fetch (update) from the original source, and you won't miss out on any update. Here is a [short video](https://youtu.be/EAMzEcg0EmY) showing the instruction.

- Commiting your changes: Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup button component`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages, referencing your issue number with a close action.
    > e.g adds signup button to the sign up page close #21
    > What this mean is that, when the PR leads merge your pull request (More on that below). Issue #21 is automatically closed.
  - run `git push origin develop`
    Which pushes your changes to your online copy, after which you then open a pull request.

- Opening Pull requests: Now that you have updated your online copy. You will need a way to inform the PR Leads handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on your own copy of the repository.
  - Click on the Pull request tab and you will see the option to open a pull request.
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.

- Constantly update from upstream: Now that you have your issues, you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:
  - In the directory of the project, in the terminal.
  - Run `git pull upstream dev`

## Styleguides

We advocate for clean code and well structured codes. It is easier said than done, which is why there are linting configurations set up in the repository. Endeavour to keep the code you write clean and maintainable. Software is not only a science, but also an art.

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. Failure to follow this would result in the pull request being rejected.

Let's build the next generation workspace, shall we ?🎉
