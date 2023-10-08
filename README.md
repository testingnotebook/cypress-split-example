# cypress-split-example

[![Cypress Tests](https://github.com/testingnotebook/cypress-split-example/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/testingnotebook/cypress-split-example/actions/workflows/main.yml)

This project supports the following blog post https://www.testingnotebook.com/posts/running-cypress-tests-in-parallel-on-multiple-github-actions-agents/ which demonstrates how to run Cypress tests in parallel on multiple GitHub Actions Agents. Please click the link for more information.

## Clone project

```bash
git clone git@github.com:testingnotebook/cypress-split-example.git
```

## Install dependencies

```bash
npm i
```

## Run tests using a normal Cypress Run

```bash
npm t
```

## Run tests using Cypress-split Plugin

See the workflow in `.github/workflows` on how to do this as a GitHub Workflow.
