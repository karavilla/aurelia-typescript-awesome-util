"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
var HelloWorld = (function () {
    function HelloWorld() {
        alert('hello world!');
    }
    HelloWorld.prototype.end = function () {
        alert('goodbye world!');
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
