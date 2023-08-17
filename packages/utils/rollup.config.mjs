import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts', // 진입 경로
  output: [
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    nodeResolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      include: ['src/**/*'],
    }),
    typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.spec.ts'] }),
    terser(),
  ],
};
