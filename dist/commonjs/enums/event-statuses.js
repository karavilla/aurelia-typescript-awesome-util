"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventStatuses;
(function (EventStatuses) {
    EventStatuses[EventStatuses["None"] = 0] = "None";
    EventStatuses[EventStatuses["Started"] = 1] = "Started";
    EventStatuses[EventStatuses["Completed"] = 2] = "Completed";
    EventStatuses[EventStatuses["Pending"] = 3] = "Pending";
    EventStatuses[EventStatuses["Active"] = 4] = "Active";
    EventStatuses[EventStatuses["Cancelled"] = 5] = "Cancelled";
    EventStatuses[EventStatuses["Closed"] = 6] = "Closed";
    EventStatuses[EventStatuses["NotStarted"] = 7] = "NotStarted";
    EventStatuses[EventStatuses["Error"] = 8] = "Error";
    EventStatuses[EventStatuses["ClientError"] = 9] = "ClientError";
    EventStatuses[EventStatuses["ServerError"] = 10] = "ServerError";
})(EventStatuses || (EventStatuses = {}));
exports.default = EventStatuses;
