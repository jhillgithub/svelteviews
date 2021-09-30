# Svelteviews

This repository scaffolds out a basic vscode extension that uses sveltejs webviews.

## Usage

Create a new project from this template using degit.

```shell
npx degit jhillgithub/svelteviews my-extension
```

You can then cd into the project to install the dependencies. Note, in the current iteration, you have to npm install the sveltejs subfolder and then the extension dependencies.

```shell
cd my-extension/webviews
npm i
cd ../
npm i
```

## Credits

Most of this code was cobbled together from multiple online resources including:

https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample

https://github.com/kkukshtel/vscode-svelte-custom-editor

https://github.com/benawad/vstodo
