// Generated by purs version 0.14.3
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Show = require("../Data.Show/index.js");
var Preserve = (function () {
    function Preserve() {

    };
    Preserve.value = new Preserve();
    return Preserve;
})();
var Select = (function () {
    function Select() {

    };
    Select.value = new Select();
    return Select;
})();
var Start = (function () {
    function Start() {

    };
    Start.value = new Start();
    return Start;
})();
var End = (function () {
    function End() {

    };
    End.value = new End();
    return End;
})();
var showSelectionMode = new Data_Show.Show(function (v) {
    if (v instanceof Preserve) {
        return "Preserve";
    };
    if (v instanceof Select) {
        return "Select";
    };
    if (v instanceof Start) {
        return "Start";
    };
    if (v instanceof End) {
        return "End";
    };
    throw new Error("Failed pattern match at Web.HTML.SelectionMode (line 17, column 10 - line 21, column 17): " + [ v.constructor.name ]);
});
var print = function (v) {
    if (v instanceof Preserve) {
        return "preserve";
    };
    if (v instanceof Select) {
        return "select";
    };
    if (v instanceof Start) {
        return "start";
    };
    if (v instanceof End) {
        return "end";
    };
    throw new Error("Failed pattern match at Web.HTML.SelectionMode (line 32, column 9 - line 36, column 15): " + [ v.constructor.name ]);
};
var parse = function (v) {
    if (v === "preserve") {
        return new Data_Maybe.Just(Preserve.value);
    };
    if (v === "select") {
        return new Data_Maybe.Just(Select.value);
    };
    if (v === "start") {
        return new Data_Maybe.Just(Start.value);
    };
    if (v === "end") {
        return new Data_Maybe.Just(End.value);
    };
    return Data_Maybe.Nothing.value;
};
var eqSelectionMode = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Preserve && y instanceof Preserve) {
            return true;
        };
        if (x instanceof Select && y instanceof Select) {
            return true;
        };
        if (x instanceof Start && y instanceof Start) {
            return true;
        };
        if (x instanceof End && y instanceof End) {
            return true;
        };
        return false;
    };
});
var ordSelectionMode = new Data_Ord.Ord(function () {
    return eqSelectionMode;
}, function (x) {
    return function (y) {
        if (x instanceof Preserve && y instanceof Preserve) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Preserve) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Preserve) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Select && y instanceof Select) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Select) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Select) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof Start && y instanceof Start) {
            return Data_Ordering.EQ.value;
        };
        if (x instanceof Start) {
            return Data_Ordering.LT.value;
        };
        if (y instanceof Start) {
            return Data_Ordering.GT.value;
        };
        if (x instanceof End && y instanceof End) {
            return Data_Ordering.EQ.value;
        };
        throw new Error("Failed pattern match at Web.HTML.SelectionMode (line 14, column 1 - line 14, column 54): " + [ x.constructor.name, y.constructor.name ]);
    };
});
module.exports = {
    Preserve: Preserve,
    Select: Select,
    Start: Start,
    End: End,
    parse: parse,
    print: print,
    eqSelectionMode: eqSelectionMode,
    ordSelectionMode: ordSelectionMode,
    showSelectionMode: showSelectionMode
};
