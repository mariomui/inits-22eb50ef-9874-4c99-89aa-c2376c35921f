# Overaching goal create a package that

* a sandbox for testing a install library

* call the binary
  * `pnpm pnpm-workspace-yml-init`
  * this calls cjs/index.js
    * its a misnomer because its not common js, the output is esmodule.
* call the pnpm script
  * `pnpm pinit`
  * still calls cjs

* experiment 1
  * set package.json type to modules to make node expect imports to be esm
  * `node --no-warnings --loader ts-node/esm ./src/index.ts`
  * without the package.json modules field, this thing crashes.

* experiment 2
  * `node --no-warnings --loader ts-node/esm ./src/index.mts`
  * the imports grab from the mjs folder file, like i specified in the library's package.json.
  * import.meta.url works
****

* pnpm pinit
  * executes the script that calls `pnpm-workspace-yml-init`
  * script calls pnpm-workspace-yml-init

* pnpm pnpm-workspace-yml-init
  * executes the script that calls `pnpm-workspace-yml-init`
  * the bin command was previously installed in the dependencies
  * the bin command is named pnpm-workspace-yml-init
  * if i go to the library and chain main to a different location, you see the corresponding change in our consuming test sandbox.
    * TEST:
      * in the test sandbox, run the `pnpm-workspace-yml-init` again
        * it fails
      * in the test sandbox, run pnpm i
        * run `pnpm-workspace-yml-init` again
          * this succeeds.
    * CONCLUSION:
      * Theory 1:
        * package.json is cached by the test sandbox
          * WRONG!!!!
        * <https://github.com/pnpm/pnpm/blob/59ee5367875e84d0be77a2eba1e1b763a8a30717/pkg-manager/core/src/install/index.ts#L116>
        * Test And Expect 1:
          * changing the exports in my library to include package json during module loading should cause an error in the consuming sandbox.
          * Actual:
            * This does not.
      * Theory 1.1:
        * When executing pnpm [library name], it is not referring to the updated package.json but whatever is in some cached bin somewhere.
        * Induction Test And Expect 1.1.1
          * The compiled bin should show the updated directory when i run change the bin mappings to xjs ONLY after I reinstall
          * `cat ./node_modules/.bin/pnpm-workspace-yml-init`
            * YUP!!!
