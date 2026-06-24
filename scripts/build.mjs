import { resolve } from 'node:path';
import { execTask } from './utils.mjs';

const root = resolve(process.cwd());
const args = process.argv.splice(2);
const profile = args && args.length && args.length > 0 ? args[0] : 'production';
console.log(`Current workspace - ${root}. profile - ${profile}`);
await execTask(`pnpm run build:${profile}`);
