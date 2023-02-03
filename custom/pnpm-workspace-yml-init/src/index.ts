(async function () {
  try {
    const url = await import('url');
    const path = await import('path');

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    console.log({ __dirname, __filename });
  } catch (err) {
    await genRunNodeProcess().catch(console.log);
    console.log('food');
  }
  async function genRunNodeProcess() {
    console.log(' the import url does not exist');

    const process = await import('process').catch((cause) => {
      throw new Error('bad', { cause });
    });
    console.log(process?.cwd(), 'dkfdkjfd');
  }
})();
console.log('mjs');
export default {
  mario: 5,
};
