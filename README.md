# cannot-extend-instrinsic-elements-demo
how do I extend intrinsic elements type in Preact X?

```typescript jsx

import { h as createElement } from 'preact';

export function main() {
    return <my-custom-element attr={5} />
}

main();

```

This results in a compiler error in Preact X, but not Preact 8. 
A former method of extending IntrinsicElements to allow for custom names no longer works.

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
