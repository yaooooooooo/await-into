> A utility function to handle promise resolution with automatic retries and error handling. into allows you to easily await a promise while handling potential errors in a structured format, offering retries with customizable delay.

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

1. ES6 module with no retries

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

2.ES6 module with retries and delay

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

### Multiple Promises

```js
import into from 'await-into'

const bar = () => new Promise()
const foo = () => new Promise()

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
