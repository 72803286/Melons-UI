import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { baseParse } from "@vue/compiler-core";
import fs from "fs";

const vueDemoPlugin = {
	name: "vue-block-demo",
	transform(code, path) {
		if (!/vue&type=demo/.test(path)) {
			return;
		}
		const filePath = path.split("?")[0];
		//异步读取文件内容，并转为string类型
		const file = fs.readFileSync(filePath).toString();
		//将读取到的文件中的自定义快渲染为AST
		const parsed = baseParse(file).children.find((n) => (n as any).tag === "demo");
		//读取自定义模块中的文本内容
		const title = (parsed as any).children[0].content;
		//将读取文件中的自定义块切分，并转为字符串类型
		const main = file.split(parsed.loc.source).join("").trim();
		//以JSON数据类型返回
		return `export default Comp => {
			Comp.__sourceCode = ${JSON.stringify(main)}
			Comp.__sourceCodeTitle = ${JSON.stringify(title)}
		}`;
	},
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
    vueDemoPlugin
  ],
})













