// Generated by purs version 0.14.3
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Effect = require("../Effect/index.js");
var Next_Document = require("../Next.Document/index.js");
var React_Basic_DOM = require("../React.Basic.DOM/index.js");
var React_Basic_DOM_Generated = require("../React.Basic.DOM.Generated/index.js");
var React_Basic_Hooks = require("../React.Basic.Hooks/index.js");
var React_Basic_Hooks_Internal = require("../React.Basic.Hooks.Internal/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var mkDocument = (function () {
    var render = Next_Document.html()({
        children: [ Next_Document.head()({
            children: [ React_Basic_DOM_Generated.title_([ React_Basic_DOM.text("Next.js with Purescript Example") ]) ]
        }), React_Basic_DOM_Generated.body()({
            className: "font-sans antialiased leading-normal tracking-wider bg-gray-200",
            children: [ Next_Document.main()({}), Next_Document.nextScript()({}) ]
        }) ]
    });
    return Control_Bind.bindFlipped(Effect.bindEffect)(Next_Document.unsafeDocument)(React_Basic_Hooks.reactComponent()()()("Document")(function (v) {
        return Control_Applicative.pure(React_Basic_Hooks_Internal.applicativeRender(Type_Equality.refl))(render);
    }));
})();
module.exports = {
    mkDocument: mkDocument
};
