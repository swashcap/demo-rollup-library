const babel = require('@rollup/plugin-babel').default;
const commonJS = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const pkg = require('./package.json');

module.exports = {
  external: Object.keys(pkg.peerDependencies),
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
