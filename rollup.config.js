const babel = require('@rollup/plugin-babel').default;
const resolve = require('@rollup/plugin-node-resolve').default;
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    /@babel\/runtime.*/,
  ],
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
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
};
