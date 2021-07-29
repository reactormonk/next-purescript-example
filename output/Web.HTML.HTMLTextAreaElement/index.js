// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_HTML_SelectionMode = require("../Web.HTML.SelectionMode/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var setRangeText$prime = function (rpl) {
    return function (s) {
        return function (e) {
            return function (mode) {
                return function (area) {
                    return function () {
                        return $foreign["_setRangeText"](rpl, s, e, Web_HTML_SelectionMode.print(mode), area);
                    };
                };
            };
        };
    };
};
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLTextAreaElement");
var form = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($1) {
        return $0($foreign["_form"]($1));
    };
})();
module.exports = {
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    form: form,
    "setRangeText'": setRangeText$prime,
    autocomplete: $foreign.autocomplete,
    setAutocomplete: $foreign.setAutocomplete,
    autofocus: $foreign.autofocus,
    setAutofocus: $foreign.setAutofocus,
    cols: $foreign.cols,
    setCols: $foreign.setCols,
    dirName: $foreign.dirName,
    setDirName: $foreign.setDirName,
    disabled: $foreign.disabled,
    setDisabled: $foreign.setDisabled,
    maxLength: $foreign.maxLength,
    setMaxLength: $foreign.setMaxLength,
    minLength: $foreign.minLength,
    setMinLength: $foreign.setMinLength,
    name: $foreign.name,
    setName: $foreign.setName,
    placeholder: $foreign.placeholder,
    setPlaceholder: $foreign.setPlaceholder,
    readOnly: $foreign.readOnly,
    setReadOnly: $foreign.setReadOnly,
    required: $foreign.required,
    setRequired: $foreign.setRequired,
    rows: $foreign.rows,
    setRows: $foreign.setRows,
    wrap: $foreign.wrap,
    setWrap: $foreign.setWrap,
    type_: $foreign.type_,
    defaultValue: $foreign.defaultValue,
    setDefaultValue: $foreign.setDefaultValue,
    value: $foreign.value,
    setValue: $foreign.setValue,
    textLength: $foreign.textLength,
    willValidate: $foreign.willValidate,
    validity: $foreign.validity,
    validationMessage: $foreign.validationMessage,
    checkValidity: $foreign.checkValidity,
    reportValidity: $foreign.reportValidity,
    setCustomValidity: $foreign.setCustomValidity,
    labels: $foreign.labels,
    select: $foreign.select,
    selectionStart: $foreign.selectionStart,
    setSelectionStart: $foreign.setSelectionStart,
    selectionEnd: $foreign.selectionEnd,
    setSelectionEnd: $foreign.setSelectionEnd,
    selectionDirection: $foreign.selectionDirection,
    setSelectionDirection: $foreign.setSelectionDirection,
    setRangeText: $foreign.setRangeText,
    setSelectionRange: $foreign.setSelectionRange
};
