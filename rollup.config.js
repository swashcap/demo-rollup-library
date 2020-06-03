const babel = require('@rollup/plugin-babel').default;
const commonJS = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-auto-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
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
