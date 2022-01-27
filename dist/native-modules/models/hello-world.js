var HelloWorld = (function () {
    function HelloWorld() {
        alert('hello world!');
    }
    HelloWorld.prototype.end = function () {
        alert('goodbye world!');
    };
    return HelloWorld;
}());
export { HelloWorld };
