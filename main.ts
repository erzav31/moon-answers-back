// The Moon Finally Answers Back — entry program.
//
// Writes one line (148 characters) to /output/entry.txt:
// the Moon, after 312 wishes and zero kept promises, finally
// answers by granting the one whispered at 3 a.m. — the promise
// about finally leaving him. Wry, old, a little tired of being
// wished upon; the twist lands on the last word.
// The Moon speaks in the first person throughout: it is the one
// acting now, granting a wish instead of just listening to it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You have wished on me 312 times and kept none of those promises, so tonight I am granting the one you whispered at 3 a.m. about finally leaving him.";

// The gate allows 1 to 240 characters; fail loudly instead of
// shipping a line the scorer would refuse.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
