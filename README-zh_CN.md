<div style="text-align: center;" align="center">

# await-into

Async await 封装器可轻松处理错误

[![License][license-image]][license-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[API 文档](https://www.yaooooooooo.com/await-into)** • **[更新日志](./CHANGELOG.md)**

**使用其他语言阅读：[English](./README.md) | 简体中文**

</div>

## 安装

```bash
# 使用pnpm
$ pnpm install await-into

# 使用npm
$ npm install await-into

# 使用yarn
$ yarn add await-into
```

## 使用

### 简单用法

1. ES6 模块方式引入

```js
import into from 'await-into'

async function example() {
    const [error, result] = await into(fetchData());
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Result:', result);
    }
}
```

2.重试策略

```js
import into from 'await-into'

async function exampleWithRetries() {
    const [error, result] = await into(fetchData(), { retries: 3, retryDelay: 1000 });
    if (error) {
        console.error('Error after retries:', error);
    } else {
        console.log('Successful result:', result);
    }
}
```

3.Node.js require
```js
const into = require('await-into')

const [err, data] = await into(/* promise function */)
```

### 传入多个Promise

```js
import into from 'await-into'

const bar = () => new Promise<boolean>()
const foo = () => new Promise<string>()

const [err, data] = await into(bar(), foo()) // data = [boolean, string]
// 或者传入数组形式
const [err, data] = await into([bar(), foo()]) // data = [boolean, string]
```

### 传入多个Promise

```js
import into from 'await-into'

const bar = () => new Promise<boolean>()
const foo = () => new Promise<string>()

const [err, data] = await into(bar(), foo()) // data = [boolean, string]
// 或者传入数组形式
const [err, data] = await into([bar(), foo()]) // data = [boolean, string]
```

## 问题和支持

Please open an issue [here](https://github.com/yaooooooooo/await-into/issues).

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/await-into
[download-url]: https://npmjs.org/package/await-into
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
