# cannot-extend-instrinsic-elements-demo
bug report: cannot extend intrinsic elements type in Preact X

```typescript jsx

import { h as createElement } from 'preact';

export function main() {
    return <my-custom-element attr={5} />
}

main();

```

This results in a compiler error in Preact X, but not Preact 8. 
The former method of extending IntrinsicElements to allow for custom element names no longer works.

```
declare namespace JSX {
    interface IntrinsicElements {
        [tag: string]: any;
    }
}
```

To reproduce:

```
git clone git@github.com:kuhe/cannot-extend-instrinsic-elements-demo.git;
npm i;
npm run passes;
npm run fails;
```
