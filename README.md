# Next.js Boilerplate 
## With TailwindCSS, ESLint, Prettier, Commitlint, Stylelint, and Lefthook

This is a starter project for Next.js that includes some useful tools to help you develop your project:

- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [ESLint](https://eslint.org/) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Prettier](https://prettier.io/) - An opinionated code formatter that enforces a consistent code style.
- [Commitlint](https://commitlint.js.org/) - A tool for linting commit messages.
- [Stylelint](https://stylelint.io/) - A tool that helps you avoid errors and enforce conventions in your styles.
- [Lefthook](https://github.com/Arkweid/lefthook) - A fast and powerful Git hooks manager.

## Getting Started

To get started with this project, you should first clone this repository:

```
git clone https://github.com/Whoandozco/next-boilerplate
```

Then, install the dependencies using `npm`

### `npm install`

You can then start the development server:

### `npm run dev`

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the development server.

### `npm run build`

Builds the app for production.

### `npm run start`

Starts the app in production mode.

### `npm run lint`

Runs ESLint and Stylelint to check for linting errors.

### `npm run format`

Runs Prettier to format the code.

## Git Hooks

This project uses Lefthook to manage Git hooks. Lefthook is a fast and powerful Git hooks manager that allows you to easily manage pre-commit and commit-msg hooks.

### Pre-Commit Hooks

The pre-commit hook runs ESLint, Stylelint, and Prettier to check for linting errors and ensure that the code is formatted correctly.

### Commit-Msg Hooks

The commit-msg hook runs Commitlint to ensure that the commit message follows the specified format.

## Customization

This boilerplate is meant to be customized to fit your project's needs. Here are some things you might want to customize:

- **TailwindCSS configuration** - You can modify the `tailwind.config.js` file to customize the configuration of TailwindCSS.
- **ESLint configuration** - You can modify the `.eslintrc.js` file to customize the configuration of ESLint.
- **Prettier configuration** - You can modify the `.prettier.config.js` file to customize the configuration of Prettier.
- **Commitlint configuration** - You can modify the `commitlint.config.js` file to customize the configuration of Commitlint.
- **Stylelint configuration** - You can modify the `.stylelint.config.js` file to customize the configuration of Stylelint.

## License
This project is licensed under the MIT License.
