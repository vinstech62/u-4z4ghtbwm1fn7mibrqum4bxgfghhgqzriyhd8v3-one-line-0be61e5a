// One Line, One Laugh — make.fun bounty entry
// Writes exactly one funny line to /output/entry.txt.
// Deterministic: same bytes on every run. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "I asked my AI assistant for a joke, and now it wants co-author credit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
