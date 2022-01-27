define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SystemEvent = (function () {
        function SystemEvent(text, type, status) {
            this.text = text;
            this.type = type;
            if (status) {
                this.status = status;
            }
            this.timestamp = Date.now();
        }
        return SystemEvent;
    }());
    exports.default = SystemEvent;
});
//# sourceMappingURL=system-event.js.map