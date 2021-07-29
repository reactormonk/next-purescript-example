// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Data_Function = require("../Data.Function/index.js");
var Foreign = require("../Foreign/index.js");
var Index = function (errorAt, hasOwnProperty, hasProperty, index) {
    this.errorAt = errorAt;
    this.hasOwnProperty = hasOwnProperty;
    this.hasProperty = hasProperty;
    this.index = index;
};
var Indexable = function (ix) {
    this.ix = ix;
};
var unsafeReadProp = function (dictMonad) {
    return function (k) {
        return function (value) {
            return $foreign.unsafeReadPropImpl(Foreign.fail(dictMonad)(new Foreign.TypeMismatch("object", Foreign.typeOf(value))), Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(dictMonad)), k, value);
        };
    };
};
var readProp = function (dictMonad) {
    return unsafeReadProp(dictMonad);
};
var readIndex = function (dictMonad) {
    return unsafeReadProp(dictMonad);
};
var ix = function (dict) {
    return dict.ix;
};
var index = function (dict) {
    return dict.index;
};
var indexableExceptT = function (dictMonad) {
    return new Indexable(function (dictIndex) {
        return function (f) {
            return function (i) {
                return Control_Bind.bindFlipped(Control_Monad_Except_Trans.bindExceptT(dictMonad))(Data_Function.flip(index(dictIndex))(i))(f);
            };
        };
    });
};
var indexableForeign = function (dictMonad) {
    return new Indexable(function (dictIndex) {
        return index(dictIndex);
    });
};
var hasPropertyImpl = function (v) {
    return function (value) {
        if (Foreign.isNull(value)) {
            return false;
        };
        if (Foreign.isUndefined(value)) {
            return false;
        };
        if (Foreign.typeOf(value) === "object" || Foreign.typeOf(value) === "function") {
            return $foreign.unsafeHasProperty(v, value);
        };
        return false;
    };
};
var hasProperty = function (dict) {
    return dict.hasProperty;
};
var hasOwnPropertyImpl = function (v) {
    return function (value) {
        if (Foreign.isNull(value)) {
            return false;
        };
        if (Foreign.isUndefined(value)) {
            return false;
        };
        if (Foreign.typeOf(value) === "object" || Foreign.typeOf(value) === "function") {
            return $foreign.unsafeHasOwnProperty(v, value);
        };
        return false;
    };
};
var indexInt = function (dictMonad) {
    return new Index(Foreign.ErrorAtIndex.create, hasOwnPropertyImpl, hasPropertyImpl, Data_Function.flip(readIndex(dictMonad)));
};
var indexString = function (dictMonad) {
    return new Index(Foreign.ErrorAtProperty.create, hasOwnPropertyImpl, hasPropertyImpl, Data_Function.flip(readProp(dictMonad)));
};
var hasOwnProperty = function (dict) {
    return dict.hasOwnProperty;
};
var errorAt = function (dict) {
    return dict.errorAt;
};
module.exports = {
    Index: Index,
    Indexable: Indexable,
    readProp: readProp,
    readIndex: readIndex,
    ix: ix,
    index: index,
    hasProperty: hasProperty,
    hasOwnProperty: hasOwnProperty,
    errorAt: errorAt,
    indexString: indexString,
    indexInt: indexInt,
    indexableForeign: indexableForeign,
    indexableExceptT: indexableExceptT
};
