# Contributing

## Install

```
npm install
```

## Default commands

Usage explanation of scripts in `package.json`.

### build

Build the application in `dist` folder.

### build:docs

Generate documentation with esdoc.

### lint

Run eslint to check on the project.

### lint:fix

Run eslint to fix on the project.

### lint:report

Generate issues report with eslint for sonar.

### test

Run all the unit tests.

### test:coverage

Run all the unit tests and generate coverage report of the unit tests for sonar.

## Development

### How to test your plugin in leto-modelizer

When you are working on your plugin, you can start by writing your unit tests (TDD: test-driven development).

Alternatively, if you want to test your plugin in leto-modelizer, it can be tedious to rebuild and reinstall your plugin every time you edit its code. Thankfully, there is a trick to auto-reload the Quazar dev server every time you edit your plugin's source code. Here is how to do it:

1. Make sure you cloned the [leto-modelizer](https://github.com/ditrit/leto-modelizer) and your plugin repositories.
   * You also need to install the dependencies of each cloned repository (by running `cd <repository_path>` and then `npm install`).
2. Make sure your plugin uses relative imports for internal modules:
   * For example: `import MyPluginDrawer from '../draw/MyPluginDrawer';`
   * Instead of: `import MyPluginDrawer from 'src/draw/MyPluginDrawer';`
3. In `leto-modelizer/src/plugins/index.js`, import your plugin with a relative import:
   ```js
   import myPlugin from '../../../my-plugin/src'

   export default {
     myPlugin,
   };
   ```
4. In `leto-modelizer`, run `npm run dev`.
5. You are now ready to work: the Quazar dev server will automatically reload your plugin and refresh your browser every time you edit your plugin's source code.

### How to release

We use [Semantic Versioning](https://semver.org/spec/v2.0.0.html) as guideline for the version management.

Steps to release:
- Create a new branch labeled `release/vX.Y.Z` from the latest `main`.
- Improve the version number in `package.json`, `package-lock.json` and `changelog.md`.
- Verify the content of the `changelog.md`.
- Commit the modifications with the label `Release version X.Y.Z`.
- Create a pull request on github for this branch into `main`.
- Once the pull request validated and merged, tag the `main` branch with `vX.Y.Z`.
- After the tag is pushed, make the release on the tag in GitHub.

### Git: Default branch

The default branch is `main`. Direct commit on it is forbidden. The only way to update the `main` branch is through pull request.

Release tag are only done on the `main` branch.

### Git: Branch naming policy

`[BRANCH_TYPE]/[BRANCH_NAME]`

* `BRANCH_TYPE` is a prefix to describe the purpose of the branch. Accepted prefixes are:
  * `feature`, used for feature development
  * `bugfix`, used for bug fix
  * `improvement`, used for refacto
  * `library`, used for updating library
  * `prerelease`, used for preparing the branch for the release
  * `release`, used for releasing project
  * `hotfix`, used for applying a hotfix on main
* `BRANCH_NAME` is managed by this regex: `[a-z0-9._-]` (`_` is used as space character).
