// Generated by purs version 0.14.3
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Plus = function (Alt0, empty) {
    this.Alt0 = Alt0;
    this.empty = empty;
};
var plusArray = new Plus(function () {
    return Control_Alt.altArray;
}, [  ]);
var empty = function (dict) {
    return dict.empty;
};
module.exports = {
    Plus: Plus,
    empty: empty,
    plusArray: plusArray,
    Alt: Control_Alt.Alt,
    alt: Control_Alt.alt,
    Functor: Data_Functor.Functor,
    map: Data_Functor.map,
    "void": Data_Functor["void"]
};
