async function into(promise, options = {}) {
  const {
    retries = 0,
    retryDelay = 0,
    error = '',
  } = options;

  if (!promise || typeof promise.then !== 'function') {
    throw new Error('A valid Promise is required');
  }

  for (let i = 0; i <= retries; i++) {
    try {
      const data = await promise;
      return [null, data];
    } catch (err) {
      if (i === retries) {
        return [err.message || error || 'Unknown error', undefined];
      }

      if (retryDelay > 0) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }
  }
}

export default into;
