// A one-line roast of the smart fridge that locks at midnight.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast = "A $3,000 box of mayonnaise with a midnight curfew: you're not a smart fridge, you're my mom with a compressor.";
const limit = 199;

if ([...roast].length > limit) throw new Error("roast is 200 characters or more");
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), roast);
