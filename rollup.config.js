const babel = require('@rollup/plugin-babel').default;
const commonJS = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-auto-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      sourcemap: 'inline',
    },
    {
      dir: path.dirname(pkg.module),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonJS(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
};
