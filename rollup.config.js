import json from 'rollup-plugin-json';
// import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';


export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [json(),
    // resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  sourceMap: true,
  dest: 'dist/bundle.js',
  moduleName:'bundle'
}
