import { readFile } from "fs/promises";
import { createRequire } from 'module';

const require = createRequire(import.meta.url)
const buffer = await readFile(require.resolve("./yoga.wasm"))
console.log(`yoga.wasm: ${buffer.byteLength} bytes`)