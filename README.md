# Nu Disco Theme 🌃

[![Version](https://vsmarketplacebadge.apphb.com/version/dbanksdesign.nu-disco.svg?style=for-the-badge&colorA=4B1E97&colorB=280E54)](https://marketplace.visualstudio.com/items?itemName=dbanksdesign.nu-disco)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-star/dbanksdesign.nu-disco.svg?style=for-the-badge&colorA=E62472&colorB=B6034B)](https://marketplace.visualstudio.com/items?itemName=dbanksdesign.nu-disco)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads-short/dbanksdesign.nu-disco.svg?style=for-the-badge&colorA=0CABA6&colorB=00837F)](https://marketplace.visualstudio.com/items?itemName=dbanksdesign.nu-disco)

A [Style Dictionary](https://styledictionary.com) powered theme built by [Danny Banks](https://twitter.com/dbanksdesign).

👩‍🎤👨‍🎤💃🕺

## Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/)
1. Launch Visual Studio Code
1. Choose **Extensions** from menu
1. Search for `nu disco`
1. Click **Install** to install the extension
1. Click **Reload** to reload VS Code
1. From the menu bar click: Code > Preferences > Color Theme > **Nu Disco Dark**

## Using this as a template

I build this theme as a proof-of-concept to use Style Dictionary to build a VS Code theme. Feel free to use this as a starting point for creating your own VS Code theme!. I wrote a blog post about this as well.

### Getting started

1. Click on the 'use this template' button on [Github](https://github.com/dbanksdesign/nu-disco-vscode-theme)
1. Install dependencies using yarn or npm
1. Run `npm run build` to create the theme files or run `npm run watch` to watch for file changes and run the build process

When you run `npm run build` or `npm run watch` it will run the **build.js** file which uses Style Dictionary to create the VS Code theme files. Those files will be created in the **build/** directory. 

### What to look at

If you are unfamiliar with [Style Dictionary](https://styledictionary.com), take a look at the docs to get yourself acquainted. 

* **build.js**: the build script that runs to create the VSCode theme files in the **build/** directory.
* **tokens/**: contains core design tokens that are aliased/referenced in the theme
* **tokens/core.json5**: defines the core/base color palette that is then referenced in theme tokens
* **tokens/[dark/light]/**: defines the theme tokens which are then reference in application and syntax tokens
* **tokens/application**: defines the styles of the editor
* **tokens/syntax**: defines the syntax highlighting colors, which are called 'tokenColors' in a VSCode theme
* **package.json**: take a look at the scripts which run the build process and look at the VS Code specific attributes

### Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Open `File > Preferences > Color Themes` and pick your color theme.
* Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Inspect TM Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) .

### Making changes

The files you will edit to make changes to the theme are in the **tokens/** directory. If you run `npm start` it will watch for changes to files in those directories and re-run the build process to build new theme files. If you have the Extension Development window open, it will update when it sees changes.

An easy place to start playing around is the **tokens/dark** or **tokens/light** directories. These define theme tokens, which are then referenced in **tokens/application** and **tokens/syntax**.

#### Application styles

In the VSCode theme file these are the colors in `colors` object. I found it easier to think of these as the styles that affect the VSCode application, which is outside of syntax highlighting. Making changes in these files will affect VSCode, but not syntax highlighting.

#### Syntax styles

These define syntax highlighting styles in the editor. Syntaxes break up a plain text file into scopes, which resemble scopes in Javascript. Each part of the text is part of one or more scopes. 

To learn more about scopes and how they're used, check out the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

https://code.visualstudio.com/api/references/theme-color
https://www.sublimetext.com/docs/3/scope_naming.html

## Install your extension

* To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.