// import "preact";
//
// declare module "preact" {
//     namespace preact.JSX {
//         interface IntrinsicElements {
//             [tag: string]: any;
//         }
//     }
// }

declare namespace preact.JSX {
    interface IntrinsicElements {
        [tag: string]: any;
    }
}
