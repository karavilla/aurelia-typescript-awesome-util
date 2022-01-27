define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventTypes;
    (function (EventTypes) {
        EventTypes[EventTypes["None"] = 0] = "None";
        EventTypes[EventTypes["Info"] = 1] = "Info";
        EventTypes[EventTypes["Warning"] = 2] = "Warning";
        EventTypes[EventTypes["Error"] = 3] = "Error";
        EventTypes[EventTypes["Debug"] = 4] = "Debug";
        EventTypes[EventTypes["Trace"] = 5] = "Trace";
    })(EventTypes || (EventTypes = {}));
    exports.default = EventTypes;
});
//# sourceMappingURL=event-types.js.map