// Generated by purs version 0.14.3
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Function_Uncurried = require("../Data.Function.Uncurried/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Effect = require("../Effect/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var React_Basic_Hooks = require("../React.Basic.Hooks/index.js");
var React_Basic_Hooks_Internal = require("../React.Basic.Hooks.Internal/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var UseAff = function (x) {
    return x;
};
var AffReducer = function (x) {
    return x;
};
var UseAffReducer = function (x) {
    return x;
};
var runAffReducer = function (v) {
    return Data_Function_Uncurried.runFn2(v);
};
var ntUseAffReducer = new Data_Newtype.Newtype(function () {
    return undefined;
});
var useAffReducer = function (initialState) {
    return function (affReducer) {
        return React_Basic_Hooks_Internal.coerceHook()(React_Basic_Hooks_Internal.bind(React_Basic_Hooks_Internal.ixBindRender)(React_Basic_Hooks.useMemo(React_Basic_Hooks.eqUnsafeReference)(affReducer)(function (v) {
            return Effect_Unsafe.unsafePerformEffect(React_Basic_Hooks.mkReducer(function (v1) {
                return runAffReducer(affReducer)(v1.state);
            }));
        }))(function (reducer$prime) {
            return React_Basic_Hooks_Internal.bind(React_Basic_Hooks_Internal.ixBindRender)(React_Basic_Hooks.useReducer({
                state: initialState,
                effects: [  ]
            })(reducer$prime))(function (v) {
                return React_Basic_Hooks_Internal.discard(React_Basic_Hooks_Internal.ixBindRender)(React_Basic_Hooks.useEffect(React_Basic_Hooks.eqUnsafeReference)(v.value0.effects)(function __do() {
                    Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableArray)(v.value0.effects)(function (aff) {
                        return Effect_Aff.launchAff_(Control_Bind.bind(Effect_Aff.bindAff)(aff)(function (actions) {
                            return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableArray)(actions)(v.value1));
                        }));
                    })();
                    return Data_Monoid.mempty(Effect.monoidEffect(Effect.monoidEffect(Data_Monoid.monoidUnit)))();
                }))(function () {
                    return Control_Applicative.pure(React_Basic_Hooks_Internal.applicativeRender(Type_Equality.refl))(new Data_Tuple.Tuple(v.value0.state, v.value1));
                });
            });
        }));
    };
};
var ntUseAff = new Data_Newtype.Newtype(function () {
    return undefined;
});
var useAff = function (dictEq) {
    return function (deps) {
        return function (aff) {
            return React_Basic_Hooks_Internal.coerceHook()(React_Basic_Hooks_Internal.bind(React_Basic_Hooks_Internal.ixBindRender)(React_Basic_Hooks.useState(Data_Maybe.Nothing.value))(function (v) {
                return React_Basic_Hooks_Internal.discard(React_Basic_Hooks_Internal.ixBindRender)(React_Basic_Hooks.useEffect(dictEq)(deps)(function __do() {
                    v.value1(Data_Function["const"](Data_Maybe.Nothing.value))();
                    var fiber = Effect_Aff.launchAff(Control_Bind.bind(Effect_Aff.bindAff)(Control_Monad_Error_Class["try"](Effect_Aff.monadErrorAff)(aff))(function (r) {
                        return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(v.value1(function (v1) {
                            return new Data_Maybe.Just(r);
                        }));
                    }))();
                    return Effect_Aff.launchAff_(Effect_Aff.killFiber(Effect_Exception.error("Stale request cancelled"))(fiber));
                }))(function () {
                    return React_Basic_Hooks_Internal.unsafeRenderEffect((function () {
                        if (v.value0 instanceof Data_Maybe.Just && v.value0.value0 instanceof Data_Either.Left) {
                            return Control_Monad_Error_Class.throwError(Control_Monad_Error_Class.monadThrowEffect)(v.value0.value0.value0);
                        };
                        if (v.value0 instanceof Data_Maybe.Just && v.value0.value0 instanceof Data_Either.Right) {
                            return Control_Applicative.pure(Effect.applicativeEffect)(new Data_Maybe.Just(v.value0.value0.value0));
                        };
                        if (v.value0 instanceof Data_Maybe.Nothing) {
                            return Control_Applicative.pure(Effect.applicativeEffect)(Data_Maybe.Nothing.value);
                        };
                        throw new Error("Failed pattern match at React.Basic.Hooks.Aff (line 53, column 24 - line 56, column 30): " + [ v.value0.constructor.name ]);
                    })());
                });
            }));
        };
    };
};
var noEffects = function (state) {
    return {
        state: state,
        effects: [  ]
    };
};
var mkAffReducer = (function () {
    var $23 = Control_Applicative.pure(Effect.applicativeEffect);
    return function ($24) {
        return $23(AffReducer(Data_Function_Uncurried.mkFn2($24)));
    };
})();
module.exports = {
    useAff: useAff,
    useAffReducer: useAffReducer,
    mkAffReducer: mkAffReducer,
    runAffReducer: runAffReducer,
    noEffects: noEffects,
    ntUseAff: ntUseAff,
    ntUseAffReducer: ntUseAffReducer
};
