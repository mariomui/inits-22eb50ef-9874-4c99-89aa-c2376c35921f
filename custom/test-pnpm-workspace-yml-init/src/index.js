const x = require('pnpm-workspace-yml-init');
const y = require('pnpm-workspace-yml-init/package.json');
console.log(x);
console.log(
  y.bin,
  'when changing the exports to ./package.json, i get access to libraries package.json. ONLY the bin',
  'I guess only the bin is reinstalled when we do a pnpm install.'
);
