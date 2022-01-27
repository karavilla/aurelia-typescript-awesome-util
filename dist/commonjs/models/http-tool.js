"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var authorization_types_1 = require("../enums/authorization-types");
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
