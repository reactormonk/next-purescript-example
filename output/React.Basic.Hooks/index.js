// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Function_Uncurried = require("../Data.Function.Uncurried/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Tuple_Nested = require("../Data.Tuple.Nested/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Uncurried = require("../Effect.Uncurried/index.js");
var React_Basic = require("../React.Basic/index.js");
var React_Basic_Hooks_Internal = require("../React.Basic.Hooks.Internal/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Unsafe_Reference = require("../Unsafe.Reference/index.js");
var UnsafeReference = function (x) {
    return x;
};
var Reducer = function (x) {
    return x;
};
var writeRef = Effect_Uncurried.runEffectFn2($foreign.writeRef_);
var useState = function (initialState) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useState_(Data_Function_Uncurried.mkFn2(Data_Tuple.Tuple.create), initialState);
    });
};
var useState$prime = function (initialState) {
    return Data_Functor.mapFlipped(React_Basic_Hooks_Internal.functorRender)(useState(initialState))(Data_Bifunctor.rmap(Data_Bifunctor.bifunctorTuple)(function (v) {
        return function ($27) {
            return v(Data_Function["const"]($27));
        };
    }));
};
var useRef = function (initialValue) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useRef_(initialValue);
    });
};
var useReducer = function (initialState) {
    return function (v) {
        return React_Basic_Hooks_Internal.unsafeHook(function () {
            return $foreign.useReducer_(Data_Function_Uncurried.mkFn2(Data_Tuple.Tuple.create), v, initialState);
        });
    };
};
var useMemo = function (dictEq) {
    return function (deps) {
        return function (computeA) {
            return React_Basic_Hooks_Internal.unsafeHook(function () {
                return $foreign.useMemo_(Data_Function_Uncurried.mkFn2(Data_Eq.eq(dictEq)), deps, computeA);
            });
        };
    };
};
var useLayoutEffectOnce = function (effect) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useLayoutEffect_(function (v, v1) {
            return true;
        }, Data_Unit.unit, effect);
    });
};
var useLayoutEffectAlways = function (effect) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useLayoutEffectAlways_(effect);
    });
};
var useLayoutEffect = function (dictEq) {
    return function (deps) {
        return function (effect) {
            return React_Basic_Hooks_Internal.unsafeHook(function () {
                return $foreign.useLayoutEffect_(Data_Function_Uncurried.mkFn2(Data_Eq.eq(dictEq)), deps, effect);
            });
        };
    };
};
var useEqCache = function (dictEq) {
    return function (a) {
        return React_Basic_Hooks_Internal.unsafeHook(function () {
            return $foreign.useEqCache_(Data_Function_Uncurried.mkFn2(Data_Eq.eq(dictEq)), a);
        });
    };
};
var useEffectOnce = function (effect) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useEffect_(function (v, v1) {
            return true;
        }, Data_Unit.unit, effect);
    });
};
var useEffectAlways = function (effect) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useEffectAlways_(effect);
    });
};
var useEffect = function (dictEq) {
    return function (deps) {
        return function (effect) {
            return React_Basic_Hooks_Internal.unsafeHook(function () {
                return $foreign.useEffect_(Data_Function_Uncurried.mkFn2(Data_Eq.eq(dictEq)), deps, effect);
            });
        };
    };
};
var useDebugValue = function (debugValue) {
    return function (display) {
        return React_Basic_Hooks_Internal.unsafeHook(function () {
            return $foreign.useDebugValue_(debugValue, display);
        });
    };
};
var useDebugValue$prime = function (dictShow) {
    return function (debugValue) {
        return useDebugValue(debugValue)(Data_Show.show(dictShow));
    };
};
var useContext = function (context) {
    return React_Basic_Hooks_Internal.unsafeHook(function () {
        return $foreign.useContext_(context);
    });
};
var unsafeReactFunctionComponent = Unsafe_Coerce.unsafeCoerce;
var unsafeDiscardRenderEffects = Unsafe_Coerce.unsafeCoerce;
var unsafeReactComponent = function (dictLacks) {
    return function (dictLacks1) {
        return function (name) {
            return function (renderFn) {
                var c = unsafeReactFunctionComponent(function (props) {
                    return unsafeDiscardRenderEffects(renderFn(props))();
                });
                return function () {
                    return $foreign.unsafeSetDisplayName(name, c);
                };
            };
        };
    };
};
var runReducer = function (v) {
    return Data_Function_Uncurried.runFn2(v);
};
var readRef = Effect_Uncurried.runEffectFn1($foreign.readRef_);
var readRefMaybe = function (a) {
    return Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe)(readRef(a));
};
var reactComponentWithChildren = function (dictLacks) {
    return function (dictLacks1) {
        return unsafeReactComponent()();
    };
};
var reactComponent = function (dictLacks) {
    return function (dictLacks1) {
        return function (dictLacks2) {
            return unsafeReactComponent()();
        };
    };
};
var reactComponentFromHook = function (dictLacks) {
    return function (dictLacks1) {
        return function (dictLacks2) {
            return function (name) {
                return function (propsToHook) {
                    return reactComponent()()()(name)(function (props) {
                        return Data_Functor.map(React_Basic_Hooks_Internal.functorRender)(props.render)(propsToHook(props));
                    });
                };
            };
        };
    };
};
var reactChildrenFromArray = Unsafe_Coerce.unsafeCoerce;
var newtypeUnsafeReference = new Data_Newtype.Newtype(function () {
    return undefined;
});
var mkReducer = (function () {
    var $28 = Control_Applicative.pure(Effect.applicativeEffect);
    return function ($29) {
        return $28(Reducer(Data_Function_Uncurried.mkFn2($29)));
    };
})();
var memo = Data_Function.flip(Control_Bind.bind(Effect.bindEffect))(Effect_Uncurried.runEffectFn1($foreign.memo_));
var eqUnsafeReference = new Data_Eq.Eq(Unsafe_Reference.unsafeRefEq);
var component = function (name) {
    return function (renderFn) {
        return function __do() {
            var c = reactComponent()()()(name)(function ($30) {
                return renderFn((function (v) {
                    return v.nested;
                })($30));
            })();
            var $31 = React_Basic.element(c);
            return function ($32) {
                return $31((function (v) {
                    return {
                        nested: v
                    };
                })($32));
            };
        };
    };
};
module.exports = {
    component: component,
    reactComponent: reactComponent,
    reactComponentWithChildren: reactComponentWithChildren,
    reactComponentFromHook: reactComponentFromHook,
    reactChildrenFromArray: reactChildrenFromArray,
    memo: memo,
    useState: useState,
    "useState'": useState$prime,
    useEffect: useEffect,
    useEffectOnce: useEffectOnce,
    useEffectAlways: useEffectAlways,
    useLayoutEffect: useLayoutEffect,
    useLayoutEffectOnce: useLayoutEffectOnce,
    useLayoutEffectAlways: useLayoutEffectAlways,
    mkReducer: mkReducer,
    runReducer: runReducer,
    useReducer: useReducer,
    readRef: readRef,
    readRefMaybe: readRefMaybe,
    writeRef: writeRef,
    useRef: useRef,
    useContext: useContext,
    useEqCache: useEqCache,
    useMemo: useMemo,
    useDebugValue: useDebugValue,
    UnsafeReference: UnsafeReference,
    newtypeUnsafeReference: newtypeUnsafeReference,
    eqUnsafeReference: eqUnsafeReference,
    reactChildrenToArray: $foreign.reactChildrenToArray,
    displayName: $foreign.displayName,
    consumer: React_Basic.consumer,
    contextConsumer: React_Basic.contextConsumer,
    contextProvider: React_Basic.contextProvider,
    createContext: React_Basic.createContext,
    element: React_Basic.element,
    elementKeyed: React_Basic.elementKeyed,
    empty: React_Basic.empty,
    fragment: React_Basic.fragment,
    keyed: React_Basic.keyed,
    provider: React_Basic.provider,
    bind: React_Basic_Hooks_Internal.bind,
    coerceHook: React_Basic_Hooks_Internal.coerceHook,
    discard: React_Basic_Hooks_Internal.discard,
    unsafeHook: React_Basic_Hooks_Internal.unsafeHook,
    unsafeRenderEffect: React_Basic_Hooks_Internal.unsafeRenderEffect
};
