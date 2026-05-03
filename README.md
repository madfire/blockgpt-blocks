# BlockGPT Blocks

BlockGPT Blocks contains the block definitions, toolbox behavior, and code generators used by the BlockGPT graphical programming experience.

## Responsibilities

- Scratch / Blockly style block definitions
- generator logic for supported targets
- hardware-related blocks
- custom blocks introduced by BlockGPT features

## Local development

```bash
npm install
npm link
```

If you modify this repository, run:

```bash
npm run prepublish
```

Then restart BlockGPT GUI so the updated block package is reloaded.

## Notes

- Avoid problematic proxy settings during install if package resolution stalls.
- If you run into registry issues, using a mirror such as `https://registry.npmmirror.com` can help.

## Product role

This repository is where BlockGPT's visual programming language is defined. It directly supports the project goal of helping learners understand AI and programming through editable graphical blocks.
