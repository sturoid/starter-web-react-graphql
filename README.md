# starter-web-react-graphql
Starter web project for React and GraphQL with Parcel for build system, Apollo for GraphQL integration, and code formatting and enforcement with eslint, prettier, and husky. Includes sign in, sign up, forgot password, reset password, and many helpful things that almost all projects need.

## Setup

> npm install

## Run project

> npm run dev

## Testing

### Run and watch tests with Jest and enzyme:

> npm run test

### Run e2e testing with cypress:

> npm run teste2e

This will open up the cypress GUI where the tests can be run and interacted with.

## Code

### File Naming

- React components should ollow the name of the component (CoolComponent.js, OtherComponent.js).
- Files that are directly linked to a component such as utils, styles, and files to grab data should have the name of the component and then be namespaced with a period (e.g. MyButtom.scss, MyButton.utils.js, MyButton.data.js).
- Non component related files should be lowercase and dash separated (some-file.js, some-other-file.js).
