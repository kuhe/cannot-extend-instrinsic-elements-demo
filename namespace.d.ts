import {JSXInternal} from "preact/src/jsx";

declare global {
    namespace JSXInternal {
        interface IntrinsicElements {
            [tag: string]: any
        }
    }
}
