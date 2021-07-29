// Generated by purs version 0.14.3
"use strict";
var Data_Symbol = require("../Data.Symbol/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Equals = {};
var uncons = function (dictCons) {
    return function (v) {
        return {
            head: Type_Proxy["Proxy"].value,
            tail: Type_Proxy["Proxy"].value
        };
    };
};
var equalsSymbol = function (dictCompare) {
    return function (dictEquals) {
        return Equals;
    };
};
var equals = function (dictEquals) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var compare = function (dictCompare) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var append = function (dictAppend) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
module.exports = {
    append: append,
    compare: compare,
    uncons: uncons,
    Equals: Equals,
    equals: equals,
    equalsSymbol: equalsSymbol,
    SProxy: Data_Symbol.SProxy,
    IsSymbol: Data_Symbol.IsSymbol,
    reflectSymbol: Data_Symbol.reflectSymbol,
    reifySymbol: Data_Symbol.reifySymbol
};
