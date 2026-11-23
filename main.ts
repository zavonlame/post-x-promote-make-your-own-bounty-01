// main.ts — post-x-promote-make-your-own-bounty-01 entry program (Node 22, standard library only).
// It copies POST.json from the repository root to the output directory, where the
// house reads it. The post itself is the entry: one post of your own on X that quotes
// make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own attached and make.fun (or @makefunai) and your
// play code in its text. POST.json names that post; the house reads its replies, reposts
// and quotes from X. Nothing this program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? 'out';

const postPath = join(botDir, 'POST.json');
// Refuse to hand the house a malformed POST.json instead of copying garbage.
// The url must be the post's own address, https://x.com/<handle>/status/<id> —
// never make.fun's post, and never the placeholder, which the gate refuses.
const post = JSON.parse(readFileSync(postPath, 'utf8'));
if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  throw new Error('POST.json must be a JSON object with a string "url" field');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, 'POST.json'));
