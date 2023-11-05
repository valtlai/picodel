# picodel

[![NPM](https://img.shields.io/npm/v/picodel.svg)](https://www.npmjs.com/package/picodel)

Delete files and directories inside the current working directory

- Zero dependencies
- Only static paths, no glob patterns
- ESM and async only

## Install

```
npm install --save-dev picodel
```

## Usage

### CLI

Syntax:

```
picodel [...paths]
```

Example CLI prompt:

```
npx picodel .cache public
```

Example npm script:

```json
{
	"scripts": {
		"clean": "picodel .cache public"
	}
}
```

### Module

Syntax:

```ts
picodel(...paths: string[])
```

Example:

```js
import picodel from 'picodel';

await picodel('.cache', 'public');
```
