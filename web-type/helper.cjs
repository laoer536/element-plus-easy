// eslint-disable-next-line @typescript-eslint/no-var-requires
const {main} = require('components-helper')
main({
  name: 'element-plus-easy',
  version: '0.0.36',
  entry: './src/components/**/*.md', // 插件是按照执行的根目录为参照的
  outDir: 'dist',
  space: 2,
})
