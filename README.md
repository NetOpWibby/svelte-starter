# svelte-starter

> A starting point for modern Svelte applications.



## Requirements

- [Node.js](https://nodejs.org) (version 12 or higher)

## Installation

```bash
git clone https://code.webb.page/Starters/svelte-starter
cd svelte-starter && npm i
```

## Description

I optimized this project to target only modern browsers and to be as pleasant as possible to work with.

## Features

- [ChronVer](https://chronver.org) (versioning)
- [Intern](https://theintern.io) (testing)
- [Rollup](https://rollupjs.org) (bundling)
- [Sucrase](https://sucrase.io) (transpiling)
- [Svelte](https://svelte.dev) (UI)
- [TypeScript](https://www.typescriptlang.org) (testing, and armor...stop hitting yourself)

## Notes

- To change the port number of your app, edit `PORT` (found in the `start` and `watch` scripts in your `package.json`).

## Production

- To disable logs, add `--quiet` to the end of the `start` script.

## Tests

They exist but are unable to complete due to Intern (the test runner) *not yet* understanding how to process Svelte components. The issue is being tracked [here](https://github.com/theintern/intern/issues/1016).
