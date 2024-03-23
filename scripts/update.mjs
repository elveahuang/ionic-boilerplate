import { resolve } from 'node:path';
import { execTask, updateModule } from './utils.mjs';

const root = resolve(process.cwd());
console.log(`Current workspace - ${root}`);
console.log(`${root} - module update...`);
await updateModule(resolve(root));
console.log(`${root} - module install...`);
await execTask(`pnpm install`, root);
console.log(`${root} - code format...`);
await execTask(`pnpm run prettier`, root);
