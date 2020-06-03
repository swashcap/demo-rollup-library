# Demo Rollup Library

_A demo library built with [rollup.js](https://rollupjs.org/guide/en/)_

This demo builds a basic [TypeScript](https://reactjs.org) [React](https://reactjs.org) component library using:

* `@rollup/plugin-commonjs` and `@rollup/plugin-node-resolve`: Standard rollup.js plugins for handling module resolution and dependencies
* [`@rollup/plugin-babel`](https://github.com/rollup/plugins/tree/master/packages/babel): Transpile modules with [babel](https://babeljs.io)
  * `@babel/preset-typescript`: strip TypeScript types
  * `@babel/plugin-transform-runtime`: use `@babel/runtime`

## Building

1. Use [nvm](https://github.com/nvm-sh/nvm) to select the correct version of Node.js

    ```shell
    $ cd demo-rollup-library
    $ nvm use
    # ...
    ```
2. Install dependencies with [yarn](https://github.com/nvm-sh/nvm):

    ```shell
    $ yarn
    # ...
    ```
3. Build:

    ```shell
    $ yarn build
    # ...
    ```