import babel from 'rollup-plugin-babel';

export default {
    input: './index.js',
    output: {
        format: 'esm'
    },
    plugins: [babel()]
}
