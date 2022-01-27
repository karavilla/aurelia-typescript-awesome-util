define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HtmlTool = (function () {
        function HtmlTool() {
        }
        HtmlTool.generateId = function () {
            return (Math.random().toString(16) + '000000000').substr(2, 8);
        };
        return HtmlTool;
    }());
    exports.default = HtmlTool;
});
//# sourceMappingURL=html-tool.js.map