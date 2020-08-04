/* eslint-disable */
import {version} from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';

export default [
    {
        input: './src/PuixDev.ts',
        plugins: [
            typescript({tsconfig: "tsconfig.development.json"}),
            resolve({dedupe: ['puix']}),
            // clear({ targets: ['development'] }),
            copy({
                targets: [
                    { 
                        src: 'assets/development/index.html',
                        dest: 'development',
                        transform: (contents) => contents.toString().replace('{{version}}', version)
                    },
                    // { src: 'assets/fonts/**.*', dest: 'development' }
                ]
            })
        ],
        output: {
            file: './development/esnext.' + version + '.js',
            format: 'esm',
            sourcemap: true,
        }
    }
]
