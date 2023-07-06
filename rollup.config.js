// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'  //把typescript变成js
import vue from 'rollup-plugin-vue'        //把.vue文件变成js
import scss from 'rollup-plugin-scss'        //把.scss文件变成js
import dartSass from 'sass';                  //用于支持rollup-plugin-scss插件
import { terser } from "rollup-plugin-terser"  //用于把js代码变得看不懂，变丑

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'Melons',
    file: 'dist/lib/gulu.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' ,
      jsx: 'transform',
      loaders: {
        // Enable JSX in .js files too
        '.js': 'jsx',
      },
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}