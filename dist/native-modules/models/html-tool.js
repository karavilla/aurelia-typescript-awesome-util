var HtmlTool = (function () {
    function HtmlTool() {
    }
    HtmlTool.generateId = function () {
        return (Math.random().toString(16) + '000000000').substr(2, 8);
    };
    return HtmlTool;
}());
export default HtmlTool;
