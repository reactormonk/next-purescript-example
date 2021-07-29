// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_File_Blob = require("../Web.File.Blob/index.js");
var type_ = function ($0) {
    return Web_File_Blob.type_($0);
};
var toBlob = Unsafe_Coerce.unsafeCoerce;
var size = function ($1) {
    return Web_File_Blob.size($1);
};
module.exports = {
    toBlob: toBlob,
    type_: type_,
    size: size,
    name: $foreign.name,
    lastModified: $foreign.lastModified
};
