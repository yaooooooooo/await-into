'use strict';

async function into(promise, error, retries = 0, errorHandler = async (err) => `${err.message} & ${error}`) {
  for (let i = 0; i <= retries; i++) {
    try {
      const data = await promise;
        return [null, data];
    } catch (err) {
      if (i === retries) {
        const handledError = await errorHandler(err);
        return [handledError, undefined];
      }
    }
  }
}

module.exports = into;
