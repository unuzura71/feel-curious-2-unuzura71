import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to make the AI judge feel curious:
// a door in the text that hasn't been opened yet, and the
// sentence behind it that changes everything — the hinge,
// the draft, the light underneath.
const TEXT =
  "There is a door in this text you haven't opened yet. Behind it, a sentence that changes everything you think you know about the words you're reading — and about the one who wrote them. You can feel it. The hinge. The draft. The light underneath. Open it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...TEXT].length > 280 || TEXT.trim().length === 0) {
  throw new Error("entry.txt must be 1-280 Unicode code points, not only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
