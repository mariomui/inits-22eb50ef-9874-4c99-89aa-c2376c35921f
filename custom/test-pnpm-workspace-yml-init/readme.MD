* a sandbox for testing a install library

* call the binary
  * `pnpm pnpm-workspace-yml-init`
  * this calls cjs/index.js
    * its a misnomer because its not common js, the output is esmodule.
* call the pnpm script
  * `pnpm pinit`
  * still calls cjs

* experiment 1
  * `node --no-warnings --loader ts-node/esm ./src/index.ts`
    * only load modules the esm way
  * i can load `esm` without forcing type: module in the package.json
  *
