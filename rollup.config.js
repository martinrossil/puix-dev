/* eslint-disable */
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import clear from 'rollup-plugin-clear'
import copy from 'rollup-plugin-copy'
import {version} from './package.json';

export default {
    input: './src/PuixDev.ts',
    plugins: [
        typescript({ tsconfig: "tsconfig.esnext.json" }),
        resolve({ dedupe: ['puix'] }),
        strip(),
        clear({ targets: ['public'] }),
        copy({
            targets: [
                { 
                    src: 'assets/index.html',
                    dest: 'public',
                    transform: (contents) => contents.toString().replace('{{version}}', version)
                },
                { src: 'assets/customElements.js', dest: 'public' },
                { src: 'assets/polyfills.js', dest: 'public' }
            ]
        })
    ],
    output: [
        {
            file: './public/es6.'  + version + '.js',
            format: 'esm',
            plugins: [
                compiler({
                    language_in: "ECMASCRIPT_NEXT",
                    compilation_level: 'ADVANCED',
                    language_out: "ECMASCRIPT_2015"
                })
            ]
        },
        {
            file: './public/es5.'  + version + '.js',
            format: 'iife',
            plugins: [
                compiler({
                    language_in: "ECMASCRIPT_NEXT",
                    compilation_level: 'ADVANCED',
                    language_out: "ECMASCRIPT5"
                })
            ]
        }
    ]
}