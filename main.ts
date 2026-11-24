// Fortune Cookie Wisdom for Developers — entry program.
//
// Reads the single fortune line from fortune.txt (shipped beside this
// file) and writes it, unchanged, to /output/entry.txt.
// Deterministic: the same input always produces the same output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "fortune.txt"), "utf8").trim();

if (line.length === 0 || line.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${line.length}`);
}
if (/[\r\n]/.test(line)) {
  throw new Error("fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
