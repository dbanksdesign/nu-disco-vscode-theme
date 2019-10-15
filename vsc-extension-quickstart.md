# VS Code Color Theme with Style Dictionary

## Getting started

1. Install dependencies using yarn or npm
1. Run `npm run build` to create the theme files or run `npm run watch` to watch for file changes and run the build process

## What to look at

* **build.js**: this is the manifest file that defines the location of the theme file and specifies the base theme of the theme.
* **tokens/**: this contains core design tokens that are aliased/referenced in the theme
* **theme/**: defines the theme colors of the editor
* **theme/tokenColors**: defines the syntax highlighting colors, which are called 'tokenColors' in a VS Code theme
* **package.json**:

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Open `File > Preferences > Color Themes` and pick your color theme.
* Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Inspect TM Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) .

## Make changes

* Changes to the theme file are automatically applied to the Extension Development Host window.

## Adopt your theme to Visual Studio Code

* The token colorization is done based on standard TextMate themes. Colors are matched against one or more scopes.

To learn more about scopes and how they're used, check out the [color theme](https://code.visualstudio.com/api/extension-guides/color-theme) documentation.

https://code.visualstudio.com/api/references/theme-color
https://www.sublimetext.com/docs/3/scope_naming.html

## Install your extension

* To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
* To share your extension with the world, read on https://code.visualstudio.com/docs about publishing an extension.
