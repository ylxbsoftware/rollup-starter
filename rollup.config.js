import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [json(),
    postcss({
      extensions: ['.css'],
      plugins:[cssnano()]
    }),
    resolve(),
    uglify(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  sourceMap: true,
  dest: 'dist/bundle.js',
  moduleName: 'bundle'
}
