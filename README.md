<div style="text-align: center;" align="center">

# await-into

Async await wrapper for easy error handling

[![License][license-image]][license-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[Documentation](https://www.yaooooooooo.com/await-into)** • **[Change Log](./CHANGELOG.md)**

**Read this in other languages: English | [简体中文](./README-zh_CN.md)**

</div>

## Installing

```bash
# use pnpm
$ pnpm install await-into

# use npm
$ npm install await-into

# use yarn
$ yarn add await-into
```

## Usage

### Simple Usage

1. ES6 module

```js
import into from 'await-into'

const [err, data] = await into(/* promise function */)
```

2.重试策略

```js
import into from 'await-into'

const [err, data] = await on(someAsyncOperation, { retries: 3 });
```

3.Node.js require

```js
const into = require('await-into')

const [err, data] = await into(/* promise function */)
```

### Multiple Promises

```js
import into from 'await-into'

const bar = () => new Promise<boolean>()
const foo = () => new Promise<string>()

const [err, data] = await into(bar(), foo()) // data = [boolean, string]
// or pass in an Array
const [err, data] = await into([bar(), foo()]) // data = [boolean, string]
```

### Using unpkg CDN

```html
<script src="https://unpkg.com/await-into@latest/dist/index.global.prod.js"></script>
<script>
  ;(async () => {
    const into = window.awaitToDone
    const [err, data] = await into(/* promise function */)
  })()
</script>
```

## Support & Issues

Please open an issue [here](https://github.com/yaooooooooo/await-into/issues).

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/await-into
[download-url]: https://npmjs.org/package/await-into
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
