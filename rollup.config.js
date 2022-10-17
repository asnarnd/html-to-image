import config from '@bubkoo/rollup-config'

export default config({
  input: './es6',
  output: [
    {
      name: 'htmlToImage',
      format: 'es',
      file: 'dist/html-to-image.js',
      sourcemap: false
    },
  ],
})
