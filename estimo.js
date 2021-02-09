const estimo = require('estimo')

async function doThis() {
  const report = await estimo(['http://localhost:3000/error-boundary', 'http://localhost:3000/optional-chaining'], {
    runs: 5, emulateCpuThrottling: true,
    cpuThrottlingRate: 4,
  })

  console.log({ report });
}

doThis();