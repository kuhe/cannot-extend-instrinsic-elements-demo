"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
function main() {
    var x = {};
    return preact_1.h("my-custom-element", { attr: 5, attr2: x });
}
exports.main = main;
main();
