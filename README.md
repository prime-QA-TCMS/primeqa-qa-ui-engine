# Prime QA — QA UI Engine

Reusable browser automation engine for Prime QA test automation.

## Responsibility

This repository owns browser-level execution primitives only: browser/page lifecycle, navigation, locator interaction, waits, screenshots, and UI-facing helpers.

It must **not** contain Prime QA business test cases or cross-layer scenarios. Those belong in `primeqa-qa-test-automation`.

## Dependency direction

`primeqa-qa-test-automation` → `primeqa-qa-ui-engine` → Browser/UI

The UI engine must not depend on the API engine.

## Usage

```ts
import { UiEngine } from '@primeqa/qa-ui-engine';

const ui = new UiEngine(page, { baseUrl: process.env.UI_BASE_URL! });
await ui.goto('/projects');
await ui.fill('[data-testid="project-name"]', 'Example');
await ui.click('[data-testid="save-project"]');
```

The central automation repository should build domain-specific flows on top of these primitives.
