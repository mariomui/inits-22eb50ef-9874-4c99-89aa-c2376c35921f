# Commonly used generators

## webpack-cli init

```json
    "@webpack-cli/generators": "^3.0.1",
    "autoprefixer": "^10.4.13",
    "css-loader": "^6.7.3",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.7.2",
    "postcss": "^8.4.21",
    "postcss-loader": "^7.0.2",
    "prettier": "^2.8.3",
    "sass": "^1.58.0",
    "sass-loader": "^13.2.0",
    "style-loader": "^3.3.1",
    "ts-loader": "^9.4.2",
    "typescript": "^4.9.5",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
```

## `tsc init`

* generates only the tsconfig file

## eslint --init

* `npm init @eslint/config`
* react
```json
    "@typescript-eslint/eslint-plugin": "^5.50.0",
    "@typescript-eslint/parser": "^5.50.0",
    "eslint": "^8.33.0",
    "eslint-plugin-react": "^7.32.2"
```

## prettier + eslint

* To be combined with eslint
* `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`
* `touch .prettierrc`
* open .eslintrc file
  *
  ```json
  {
    "env": {
          "browser": true,
          "es2021": true,
    "jest": true // Add this line!
      },
  }
  ```
  *
  ```json
    ...
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier" // Add this line!
    ],
  }
  ```
  *
  ```json
  "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  ```
  ```json
  {
    ...
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
  }
  ```
  ```json
  {
    ...
    "scripts": {
      ...
      "lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
            "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
            "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
          },
  ...
  }
  ```
