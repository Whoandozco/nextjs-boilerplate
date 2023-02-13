module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      { ts: "never", tsx: "never" },
    ],
    "react/jsx-one-expression-per-line": [0],
  },
  overrides: [
    {
      files: ["cypress.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": ["off"],
        "import/no-extraneous-dependencies": ["off"],
      },
    },
  ],
};
