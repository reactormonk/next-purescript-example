// Generated by purs version 0.14.3
"use strict";
var Data_Ordering = require("../Data.Ordering/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var OProxy = (function () {
    function OProxy() {

    };
    OProxy.value = new OProxy();
    return OProxy;
})();
var IsOrdering = function (reflectOrdering) {
    this.reflectOrdering = reflectOrdering;
};
var Invert = {};
var Equals = {};
var Append = {};
var reflectOrdering = function (dict) {
    return dict.reflectOrdering;
};
var isOrderingLT = new IsOrdering(function (v) {
    return Data_Ordering.LT.value;
});
var isOrderingGT = new IsOrdering(function (v) {
    return Data_Ordering.GT.value;
});
var isOrderingEQ = new IsOrdering(function (v) {
    return Data_Ordering.EQ.value;
});
var reifyOrdering = function (v) {
    return function (f) {
        if (v instanceof Data_Ordering.LT) {
            return f(isOrderingLT)(Type_Proxy["Proxy"].value);
        };
        if (v instanceof Data_Ordering.EQ) {
            return f(isOrderingEQ)(Type_Proxy["Proxy"].value);
        };
        if (v instanceof Data_Ordering.GT) {
            return f(isOrderingGT)(Type_Proxy["Proxy"].value);
        };
        throw new Error("Failed pattern match at Type.Data.Ordering (line 35, column 1 - line 35, column 91): " + [ v.constructor.name, f.constructor.name ]);
    };
};
var invertOrderingLT = Invert;
var invertOrderingGT = Invert;
var invertOrderingEQ = Invert;
var invert = function (dictInvert) {
    return function (v) {
        return Type_Proxy["Proxy"].value;
    };
};
var equalsLTLT = Equals;
var equalsLTGT = Equals;
var equalsLTEQ = Equals;
var equalsGTLT = Equals;
var equalsGTGT = Equals;
var equalsGTEQ = Equals;
var equalsEQLT = Equals;
var equalsEQGT = Equals;
var equalsEQEQ = Equals;
var equals = function (dictEquals) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var appendOrderingLT = Append;
var appendOrderingGT = Append;
var appendOrderingEQ = Append;
var append = function (dictAppend) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
module.exports = {
    OProxy: OProxy,
    IsOrdering: IsOrdering,
    reflectOrdering: reflectOrdering,
    reifyOrdering: reifyOrdering,
    Append: Append,
    append: append,
    Invert: Invert,
    invert: invert,
    Equals: Equals,
    equals: equals,
    isOrderingLT: isOrderingLT,
    isOrderingEQ: isOrderingEQ,
    isOrderingGT: isOrderingGT,
    appendOrderingLT: appendOrderingLT,
    appendOrderingEQ: appendOrderingEQ,
    appendOrderingGT: appendOrderingGT,
    invertOrderingLT: invertOrderingLT,
    invertOrderingEQ: invertOrderingEQ,
    invertOrderingGT: invertOrderingGT,
    equalsEQEQ: equalsEQEQ,
    equalsLTLT: equalsLTLT,
    equalsGTGT: equalsGTGT,
    equalsEQLT: equalsEQLT,
    equalsEQGT: equalsEQGT,
    equalsLTEQ: equalsLTEQ,
    equalsLTGT: equalsLTGT,
    equalsGTLT: equalsGTLT,
    equalsGTEQ: equalsGTEQ
};
