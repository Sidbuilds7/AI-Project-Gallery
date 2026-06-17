# AGENTS.md

## Cursor Cloud specific instructions

This repository is **documentation-only**. The single tracked file is `README.md`,
a portfolio index that links out to many separate ML/AI project repositories hosted
elsewhere on GitHub.

There is intentionally **nothing to install, build, lint, test, or run** in this repo:

- No dependency manifest (no `package.json`, `requirements.txt`, `pyproject.toml`, etc.).
- No application source code, no build system, no lint config, no test suite.
- The actual runnable projects live in the external repositories linked from the
  tables in `README.md`; clone those individually to work on a specific project.

Verification for changes here is limited to confirming `README.md` is valid,
well-formed Markdown that renders correctly (e.g. the two project tables render).
The update script is a no-op because there are no dependencies to refresh.
