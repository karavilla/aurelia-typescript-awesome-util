define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeyValueStore = (function () {
        function KeyValueStore() {
            this.data = new Map();
        }
        KeyValueStore.prototype.add = function (pair) {
            this.data.set(pair.key, pair.value);
        };
        KeyValueStore.prototype.getByKey = function (key) {
            return this.data.get(key);
        };
        KeyValueStore.prototype.deleteOneByKey = function (key) {
            return this.data.delete(key);
        };
        KeyValueStore.prototype.deleteAll = function () {
            this.data.clear();
        };
        KeyValueStore.prototype.hasKey = function (key) {
            return this.data.has(key);
        };
        KeyValueStore.prototype.size = function () {
            return this.data.size;
        };
        KeyValueStore.prototype.toString = function (format) {
            if (format) {
                console.table(this.data);
            }
            else {
                console.log(this.data.toString());
            }
        };
        return KeyValueStore;
    }());
    exports.default = KeyValueStore;
});
//# sourceMappingURL=key-value-store.js.map