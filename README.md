# 介绍

Melons UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库其实是我为了总结自己这几年的技术经验而写的，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也几乎都是我自己写的。

所以如果强烈不建议你将此 UI 库用于生产环境。但如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了 https://github.com/72803286/Melons-UI。
历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例。


# 安装

打开终端运行下列命令：

```
npm install melons-ui
```

或

```
yarn add melons-ui
```

# 开始使用

在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "melons-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "melons-ui"
export default {
  components: {Button}
}
</script>
```
