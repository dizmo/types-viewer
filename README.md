[![NPM version](https://badge.fury.io/js/%40dizmo%2Ftypes-viewer.svg)](https://npmjs.org/package/@dizmo/types-viewer)
[![Build Status](https://travis-ci.org/dizmo/types-viewer.svg?branch=master)](https://travis-ci.org/dizmo/types-viewer)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/types-viewer/badge.svg?branch=master)](https://coveralls.io/github/dizmo/types-viewer?branch=master)

# @dizmo/types-viewer

Library module.

## Usage

### Install

```sh
npm install @dizmo/types-viewer --save-dev
```

### Require

```javascript
const { Viewer } = require('@dizmo/types-viewer');
```

### Examples

```typescript
import Viewer from '@dizmo/types-viewer'
```

```typescript
declare const viewer: Viewer;
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland
