# react-lib-starter

React Lib Starter - A boilerplate for creating a React library, using Storybook.

## Getting started

```
git clone https://github.com/senntyou/react-lib-starter.git --depth=1

cd react-lib-starter

npm install             # install dependencies

npm run storybook       # develop using storybook

npm run build           # build distribution files
```

## Features

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) style languages support.
- [Flow](https://flow.org/) syntax, [jest](https://jestjs.io/en/) + [enzyme](https://github.com/airbnb/enzyme) test support.
- Using [storybook](https://storybook.js.org/) to develop, preview, deploy static site.

## Project

```
- src
  - index.{js,jsx}           # js entry file
  - styles
    - index.{less,scss}      # style entry file

- .storybook                 # for storybook
- stories                    # for storybook
```

By default, styles use `less` language, if you want to use `scss` language, you should modify `package.json` by:

```
"scripts": {
  - "build:styles": "npm run build:less",
  + "build:styles": "npm run build:scss",
}
```

## Note

- `.js` files only for pure JavaScript, and `.jsx` for React components.
