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
export default ObjectTool;
