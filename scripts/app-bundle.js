var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/hello-world',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HelloWorld = void 0;
    var HelloWorld = (function () {
        function HelloWorld() {
            this.message = '';
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], HelloWorld.prototype, "message", void 0);
        return HelloWorld;
    }());
    exports.HelloWorld = HelloWorld;
});
;
define('text!__dot_dot__/src/elements/hello-world.css',[],function(){return ".hello-world {\n  background-color: lightgreen;\n}\n";});;
define('text!__dot_dot__/src/elements/hello-world.html',[],function(){return "<template>\n  <require from=\"./hello-world.css\"></require>\n  <h3 class=\"hello-world\">Hello world ${message}</h3>\n</template>\n";});;
define('__dot_dot__/src/enums/authorization-types',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthorizationTypes;
    (function (AuthorizationTypes) {
        AuthorizationTypes[AuthorizationTypes["None"] = 0] = "None";
        AuthorizationTypes[AuthorizationTypes["NoAuth"] = 1] = "NoAuth";
        AuthorizationTypes[AuthorizationTypes["BearerToken"] = 2] = "BearerToken";
        AuthorizationTypes[AuthorizationTypes["BasicAuth"] = 3] = "BasicAuth";
        AuthorizationTypes[AuthorizationTypes["DigestAuth"] = 4] = "DigestAuth";
        AuthorizationTypes[AuthorizationTypes["OAuth1_0"] = 5] = "OAuth1_0";
        AuthorizationTypes[AuthorizationTypes["OAuth2_0"] = 6] = "OAuth2_0";
        AuthorizationTypes[AuthorizationTypes["NTLM"] = 7] = "NTLM";
    })(AuthorizationTypes || (AuthorizationTypes = {}));
    exports.default = AuthorizationTypes;
});
;
define('__dot_dot__/src/enums/event-statuses',["require", "exports"], function (require, exports) {
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
});
;
define('__dot_dot__/src/enums/event-types',["require", "exports"], function (require, exports) {
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
;
define('__dot_dot__/src/index',["require", "exports", "./models/hello-world", "./enums/event-statuses", "./enums/event-types", "./models/system-event", "./enums/authorization-types", "./models/http-tool", "./models/key-value-store", "./models/api-exception", "./models/json-tool", "./models/object-tool", "./models/html-tool"], function (require, exports, hello_world_1, event_statuses_1, event_types_1, system_event_1, authorization_types_1, http_tool_1, key_value_store_1, api_exception_1, json_tool_1, object_tool_1, html_tool_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HtmlTool = exports.ObjectTool = exports.JsonTool = exports.ApiException = exports.KeyValueStore = exports.HttpTool = exports.AuthorizationTypes = exports.SystemEvent = exports.EventTypes = exports.EventStatuses = exports.HelloWorld = void 0;
    Object.defineProperty(exports, "HelloWorld", { enumerable: true, get: function () { return hello_world_1.HelloWorld; } });
    exports.EventStatuses = event_statuses_1.default;
    exports.EventTypes = event_types_1.default;
    exports.SystemEvent = system_event_1.default;
    exports.AuthorizationTypes = authorization_types_1.default;
    exports.HttpTool = http_tool_1.default;
    exports.KeyValueStore = key_value_store_1.default;
    Object.defineProperty(exports, "ApiException", { enumerable: true, get: function () { return api_exception_1.ApiException; } });
    exports.JsonTool = json_tool_1.default;
    exports.ObjectTool = object_tool_1.default;
    exports.HtmlTool = html_tool_1.default;
});
;
define('__dot_dot__/src/interfaces/i-key-value-pair',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
;
define('__dot_dot__/src/interfaces/i-key-value-store',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('__dot_dot__/src/models/api-exception',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiException = void 0;
    var ApiException = (function (_super) {
        __extends(ApiException, _super);
        function ApiException(message, status, response, headers, result) {
            var _this = _super.call(this) || this;
            _this.isApiException = true;
            _this.message = message;
            _this.status = status;
            _this.response = response;
            _this.headers = headers;
            _this.result = result;
            return _this;
        }
        ApiException.isApiException = function (obj) {
            return obj.isApiException === true;
        };
        ApiException.throwException = function (message, status, response, headers, result) {
            if (result !== null && result !== undefined)
                throw result;
            else
                throw new ApiException(message, status, response, headers, null);
        };
        return ApiException;
    }(Error));
    exports.ApiException = ApiException;
});
;
define('__dot_dot__/src/models/hello-world',["require", "exports"], function (require, exports) {
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
});
;
define('__dot_dot__/src/models/html-tool',["require", "exports"], function (require, exports) {
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
;
define('__dot_dot__/src/models/http-tool',["require", "exports", "aurelia-fetch-client", "../enums/authorization-types"], function (require, exports, aurelia_fetch_client_1, authorization_types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpTool = (function () {
        function HttpTool() {
        }
        HttpTool.addAuthorizationHeader = function (baseApiUrl, type, token, httpClient) {
            if (!httpClient) {
                httpClient = new aurelia_fetch_client_1.HttpClient();
            }
            httpClient.configure(function (config) {
                config
                    .withBaseUrl(baseApiUrl);
            });
            switch (type) {
                case authorization_types_1.default.None:
                    break;
                case authorization_types_1.default.NoAuth:
                    break;
                case authorization_types_1.default.BearerToken:
                    if (!token) {
                        throw new TypeError("Authorization type " + type + " requres a token.");
                    }
                    httpClient.configure(function (config) {
                        config.withDefaults({
                            headers: {
                                'Authorization': 'Bearer ' + token
                            }
                        });
                    });
                    break;
                case authorization_types_1.default.NTLM:
                    httpClient.configure(function (config) {
                        config
                            .useStandardConfiguration()
                            .withDefaults({
                            mode: "cors",
                            credentials: 'include',
                        });
                    });
                    break;
            }
            return httpClient;
        };
        HttpTool.getBasePath = function () {
            var p = window.location.pathname;
            console.log(p);
            console.log('location.pathname: ' + window.location.pathname);
            console.table(window.location);
            console.log(window.location.pathname.substr(0));
            console.log(window.location.pathname.substr(1));
            if (p.length > 1) {
                p = window.location.pathname.substr(1).match(/[A-z_0-1]*/i)[0];
                console.log(p);
            }
            return p;
        };
        HttpTool.handlePromiseError = function (error, displayProperty, progress, alertUser) {
            if (!error) {
                if (progress) {
                    console.table(progress.getEvents());
                }
                return '';
            }
            if (error.status == 500) {
                if (error.statusText) {
                    if (progress) {
                        progress.setError(error.statusText);
                        console.table(progress.getEvents());
                    }
                    else {
                        if (alertUser) {
                            alert(error.statusText);
                        }
                    }
                    return error.statusText;
                }
                else {
                    if (progress) {
                        progress.setError();
                        console.table(progress.getEvents());
                    }
                    else {
                        if (alertUser) {
                            alert('Error');
                        }
                    }
                    return 'Error';
                }
            }
            else if (error.status == 401) {
                if (error.statusText) {
                    if (progress) {
                        progress.setError(error.statusText);
                        console.table(progress.getEvents());
                    }
                    else {
                        if (alertUser) {
                            alert(error.statusText);
                        }
                    }
                    return error.statusText;
                }
                else {
                    if (progress) {
                        progress.setError();
                        console.table(progress.getEvents());
                    }
                    else {
                        if (alertUser) {
                            alert('Error');
                        }
                    }
                    return 'Error';
                }
            }
            else if (error.status == 400) {
                var display = error.statusText;
                error.json().then(function (data) {
                    console.log(data);
                    if (typeof data === 'string') {
                        if (progress) {
                            progress.setError(data);
                            console.table(progress.getEvents());
                        }
                        else {
                            if (alertUser) {
                                alert(data);
                            }
                        }
                        return data;
                    }
                    else if (data instanceof String) {
                        if (progress) {
                            progress.setError(data.toString());
                            console.table(progress.getEvents());
                        }
                        else {
                            if (alertUser) {
                                alert(data.toString());
                            }
                        }
                        return data.toString();
                    }
                    else {
                        var displayValue = HttpTool.getPropertyValueFromObject(data, displayProperty);
                        if (displayValue) {
                            if (progress) {
                                progress.setError(displayValue);
                                console.table(progress.getEvents());
                            }
                            else {
                                if (alertUser) {
                                    alert(displayValue);
                                }
                            }
                            return displayValue;
                        }
                        else {
                            if (progress) {
                                progress.setError();
                                console.table(progress.getEvents());
                            }
                            else {
                                if (alertUser) {
                                    alert('Error');
                                }
                            }
                            return 'Error';
                        }
                    }
                });
            }
            else if (error.status == 200) {
                var display = error.statusText;
                error.json().then(function (data) {
                    console.log(data);
                    if (typeof data === 'string') {
                        if (progress) {
                            progress.setError(data);
                            console.table(progress.getEvents());
                        }
                        else {
                            if (alertUser) {
                                alert(data);
                            }
                        }
                        return data;
                    }
                    else if (data instanceof String) {
                        if (progress) {
                            progress.setError(data.toString());
                            console.table(progress.getEvents());
                        }
                        else {
                            if (alertUser) {
                                alert(data.toString());
                            }
                        }
                        return data.toString();
                    }
                    else {
                        var displayValue = HttpTool.getPropertyValueFromObject(data, displayProperty);
                        if (displayValue) {
                            if (progress) {
                                progress.setError(displayValue);
                                console.table(progress.getEvents());
                            }
                            else {
                                if (alertUser) {
                                    alert(displayValue);
                                }
                            }
                            return displayValue;
                        }
                        else {
                            if (progress) {
                                progress.setError();
                                console.table(progress.getEvents());
                            }
                            else {
                                if (alertUser) {
                                    alert('Error');
                                }
                            }
                            return 'Error';
                        }
                    }
                });
            }
            else {
                if (typeof error === 'string') {
                    if (progress) {
                        progress.setError(error);
                        console.table(progress.getEvents());
                    }
                    else {
                        if (alertUser) {
                            alert(error);
                        }
                    }
                    return error;
                }
                else if (error instanceof String) {
                    if (progress) {
                        progress.setError(error.toString());
                        console.table(progress.getEvents());
                    }
                    else {
                        if (alertUser) {
                            alert(error.toString());
                        }
                    }
                    return error.toString();
                }
                else {
                    var displayValue = HttpTool.getPropertyValueFromObject(error, displayProperty);
                    if (displayValue) {
                        if (progress) {
                            progress.setError(displayValue);
                            console.table(progress.getEvents());
                        }
                        else {
                            if (alertUser) {
                                alert(displayValue);
                            }
                        }
                        return displayValue;
                    }
                    else {
                        if (progress) {
                            progress.setError();
                            console.table(progress.getEvents());
                        }
                        else {
                            if (alertUser) {
                                alert('Error');
                            }
                        }
                        return 'Error';
                    }
                }
            }
        };
        HttpTool.getPropertyValueFromObject = function (obj, prop) {
            if (typeof obj === 'undefined') {
                return false;
            }
            var _index = prop.indexOf('.');
            if (_index > -1) {
                return HttpTool.getPropertyValueFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
            }
            return obj[prop];
        };
        return HttpTool;
    }());
    exports.default = HttpTool;
});
;
define('__dot_dot__/src/models/json-tool',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JsonTool = (function () {
        function JsonTool() {
        }
        JsonTool.jsonParseReviver = undefined;
        return JsonTool;
    }());
    exports.default = JsonTool;
});
;
define('__dot_dot__/src/models/key-value-store',["require", "exports"], function (require, exports) {
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
;
define('__dot_dot__/src/models/object-tool',["require", "exports"], function (require, exports) {
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
;
define('__dot_dot__/src/models/system-event',["require", "exports"], function (require, exports) {
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
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "../src/models/hello-world", "aurelia-framework"], function (require, exports, hello_world_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    var App = (function () {
        function App(helloWorld) {
            this.helloWorld = helloWorld;
            this.message = 'from Aurelia!';
            this.helloWorld = helloWorld;
            this.helloWorld.end();
        }
        App.prototype.clicked = function () {
            alert('A primary button click or a touch');
        };
        App = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [hello_world_1.HelloWorld])
        ], App);
        return App;
    }());
    exports.App = App;
});
;
define('text!app.html',[],function(){return "<template>\r\n  <h1>Hello, this is the dev app for plugin aurelia-typescript-awesome-util</h1>\r\n  <p>This dev app is bundled to scripts/ folder (ignored in .gitignore). If you commit the bundle files to github, this app can serve as a <a href=\"https://pages.github.com\" target=\"_blank\">github page</a>!</p>\r\n\r\n  <p>Please read the <a href=\"README.md\">README</a> file in your project for more information.</p>\r\n\r\n  <hr>\r\n  <h2>Custom element \"hello-world\"</h2>\r\n  <p>Usage:&nbsp;<code>&lt;hello-world message.bind=\"message\"&gt;&lt;/hello-world&gt;</code></p>\r\n  <hello-world message.bind=\"message\"></hello-world>\r\n\r\n</template>\r\n";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('main',["require", "exports", "./environment", "core-js/stable"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=app-bundle.js.map