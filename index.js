"use strict";
var requestStatusCodes;
(function (requestStatusCodes) {
    requestStatusCodes[requestStatusCodes["error"] = 400] = "error";
    requestStatusCodes[requestStatusCodes["success"] = 200] = "success";
})(requestStatusCodes || (requestStatusCodes = {}));
var requestWrongCodes;
(function (requestWrongCodes) {
    requestWrongCodes["missingParameter"] = "A";
    requestWrongCodes["wrongParameterType"] = "B";
    requestWrongCodes["invalidToken"] = "C";
})(requestWrongCodes || (requestWrongCodes = {}));
console.log(requestStatusCodes.error);
