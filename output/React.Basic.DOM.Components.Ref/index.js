// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var React_Basic = require("../React.Basic/index.js");
var Web_DOM_ParentNode = require("../Web.DOM.ParentNode/index.js");
var ref_ = $foreign.mkRef(Data_Nullable.toMaybe);
var selectorRef = function (qs) {
    return function (render) {
        return React_Basic.element(ref_)({
            render: render,
            selector: Data_Nullable.notNull(qs)
        });
    };
};
var ref = function (render) {
    return React_Basic.element(ref_)({
        render: render,
        selector: Data_Nullable["null"]
    });
};
module.exports = {
    ref: ref,
    selectorRef: selectorRef,
    QuerySelector: Web_DOM_ParentNode.QuerySelector
};
