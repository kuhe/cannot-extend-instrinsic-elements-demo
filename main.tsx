import { h as createElement } from 'preact';

export function main() {
    const x: SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded = {};

    return <my-custom-element attr={5} attr2={x} />
}

main();
