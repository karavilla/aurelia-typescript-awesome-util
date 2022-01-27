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
