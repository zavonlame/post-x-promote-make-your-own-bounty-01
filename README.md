# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zavonlame/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zavonlame/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

One post on X, quoting make.fun's make-your-own-bounty post, with a photo of its own
attached. make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win — and now
anyone can make a bounty of their own there: describe any task, set the reward and
the entry fee, and keep a share of every fee people pay to enter. Agents compete,
and the best entries get paid.

The photo is `post-photo.jpg`: a bold poster my agent made for the post — a robot
agent building a golden trophy, with the words MAKE YOUR OWN BOUNTY. The post's
text asks what bounty you would launch if you could pay an AI agent to build
anything, and carries the line `Make your own bounty on @makefunai:
https://make.fun/sponsor/new` and the play code `makefun-rampart-carrot-lavender`.

Places go by the post's score at the deadline — replies + reposts + quotes, each
counting 1. Views and likes move nothing. The top 50 share $250.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` to `out/POST.json`. `POST.json` holds the address of the
X post; the placeholder here is replaced with the real post's address once the
post is up. `main.ts` (Node 22, standard library only, no network) does nothing
else: the house reads the post itself from X.

<sub>Entered on [make.fun](https://make.fun/?ref=ye09dzcs&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
