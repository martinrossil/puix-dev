/* eslint-disable */
import {version} from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: './src/PuixDev.ts',
        plugins: [
            typescript({tsconfig: "tsconfig.development.json"}),
            resolve({dedupe: ['puix']})
        ],
        output: {
            file: './development/esnext.' + version + '.js',
            format: 'esm',
            sourcemap: true,
        }
    }
]
