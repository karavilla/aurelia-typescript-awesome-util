define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjectTool = (function () {
        function ObjectTool() {
        }
        ObjectTool.getPropertyValueFromObject = function (obj, prop) {
            if (typeof obj === 'undefined') {
                return false;
            }
            var _index = prop.indexOf('.');
            if (_index > -1) {
                return this.getPropertyValueFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
            }
            return obj[prop];
        };
        return ObjectTool;
    }());
    exports.default = ObjectTool;
});
//# sourceMappingURL=object-tool.js.map