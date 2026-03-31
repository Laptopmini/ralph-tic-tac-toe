# ralph-html

A fork of [ralph-node](https://github.com/Laptopmini/ralph-node) with a simple boilerplate to serve a static HTML based application.

- **PRDs:** [View all Product Requirements Documents](/.prds)
- **TDD:** [View all backpressure tests](/tests)
- **Ralph Loop:** [View latest Ralph execution](/.ralph.log)

Fork this repo and drop in a new `PRD.md` to start building something with the loop already bootstrapped.

For full documentation on how the Ralph Loop works and how to use these repos, see the [original ralph-node README](https://github.com/Laptopmini/ralph-node#readme).

## Changelog

This repo uses [ralph-html](https://github.com/Laptopmini/ralph-html) as a starting point.

- **TypeScript** — `tsconfig.json` with ES2022 target, NodeNext modules, strict mode, and `dist/` output
- **Jest** — `jest.config.js` with `@swc/jest` transform scoped to unit tests, plus a sanity test
- **Playwright** — `playwright.config.ts` targeting Chromium at `localhost:3000`, plus a sanity E2E test
- **Root test script** — `npm test` wired to run unit then E2E tests sequentially
- **Static HTML website** — Configured to serve a static HTML based application
- **Playwright webServer** — Updated Playwright configuration with webServer block for proper test execution
- **Create the 3x3 grid** — Centered grid with CSS Grid layout, 4px gaps showing black borders, 300x300px sizing
- **Add a click event for tiles** — Alternating X/O turns, prevents re-clicking filled tiles
- **Add a reset button** — Clears board and resets player state, styled with blue background and hover effects
- **Detect a win** — Win detection for rows, columns, and diagonals with victory message display
- **Detect a draw** — Draw detection when all tiles are filled or when remaining move cannot result in a win

## Stack

| Tool | Role |
|------|------|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Default AI engine |
| [OpenCode](https://opencode.ai/docs) | Alternative AI engine |
| [Jest](https://jestjs.io/) | Unit testing |
| [Playwright](https://playwright.dev/) | E2E testing |
| [Biome](https://biomejs.dev/) | Linting and formatting |
| [serve](https://github.com/vercel/serve) | Static File Server |

## License

Apache 2.0
