// Generated by purs version 0.14.3
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Data_DateTime_Instant = require("../Data.DateTime.Instant/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Int = require("../Data.Int/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Time_Duration = require("../Data.Time.Duration/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Effect_Now = require("../Effect.Now/index.js");
var Effect_Ref = require("../Effect.Ref/index.js");
var React_Basic_Hooks_Suspense = require("../React.Basic.Hooks.Suspense/index.js");
var Web_HTML = require("../Web.HTML/index.js");
var Web_HTML_Window = require("../Web.HTML.Window/index.js");
var SuspenseStore = function (x) {
    return x;
};
var mkSuspenseStore = function (dictOrd) {
    return function (defaultMaxAge) {
        return function (backend) {
            return function __do() {
                var ref = Effect_Ref["new"](Data_Map_Internal.empty)();
                var isExpired = function (maxAge) {
                    return function (now$prime) {
                        return function (v) {
                            return Data_Ord.lessThan(Data_Time_Duration.ordMilliseconds)(Data_DateTime_Instant.unInstant(now$prime))(Data_Semigroup.append(Data_Time_Duration.semigroupMilliseconds)(Data_DateTime_Instant.unInstant(v.value1))(maxAge));
                        };
                    };
                };
                var pruneCache = (function () {
                    if (defaultMaxAge instanceof Data_Maybe.Nothing) {
                        return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
                    };
                    if (defaultMaxAge instanceof Data_Maybe.Just) {
                        return function __do() {
                            var now$prime = Effect_Now.now();
                            Data_Functor["void"](Effect.functorEffect)(Effect_Ref.modify(Data_Map_Internal.filter(dictOrd)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean))))(isExpired)(defaultMaxAge.value0)(now$prime)))(ref))();
                            return Data_Functor["void"](Effect.functorEffect)(Control_Bind.bind(Effect.bindEffect)(Web_HTML.window)(Web_HTML_Window.requestIdleCallback({
                                timeout: Data_Int.ceil(Data_Newtype.un()(Data_Time_Duration.Milliseconds)(defaultMaxAge.value0))
                            })(pruneCache)))();
                        };
                    };
                    throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 44, column 7 - line 54, column 27): " + [ defaultMaxAge.constructor.name ]);
                })();
                var tryFromCache = function (itemMaxAge) {
                    return function (k) {
                        return function __do() {
                            var rMaybe = Data_Functor.map(Effect.functorEffect)(Data_Map_Internal.lookup(dictOrd)(k))(Effect_Ref.read(ref))();
                            if (rMaybe instanceof Data_Maybe.Nothing) {
                                return Data_Maybe.Nothing.value;
                            };
                            if (rMaybe instanceof Data_Maybe.Just) {
                                var v1 = Control_Alt.alt(Data_Maybe.altMaybe)(itemMaxAge)(defaultMaxAge);
                                if (v1 instanceof Data_Maybe.Nothing) {
                                    return new Data_Maybe.Just(rMaybe.value0.value0);
                                };
                                if (v1 instanceof Data_Maybe.Just) {
                                    var now$prime = Effect_Now.now();
                                    var $15 = isExpired(v1.value0)(now$prime)(rMaybe.value0);
                                    if ($15) {
                                        Effect_Ref.modify(Data_Map_Internal["delete"](dictOrd)(k))(ref)();
                                        return Data_Maybe.Nothing.value;
                                    };
                                    return new Data_Maybe.Just(rMaybe.value0.value0);
                                };
                                throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 61, column 11 - line 69, column 30): " + [ v1.constructor.name ]);
                            };
                            throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 58, column 7 - line 69, column 30): " + [ rMaybe.constructor.name ]);
                        };
                    };
                };
                var getCacheOrBackend = function (itemMaxAge) {
                    return function (k) {
                        return function __do() {
                            var c = tryFromCache(itemMaxAge)(k)();
                            if (c instanceof Data_Maybe.Just) {
                                return c.value0;
                            };
                            if (c instanceof Data_Maybe.Nothing) {
                                var fiber = Effect_Aff.launchAff(Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff.attempt(backend(k)))(function (r) {
                                    return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)((function () {
                                        var v = (function () {
                                            if (r instanceof Data_Either.Left) {
                                                return new React_Basic_Hooks_Suspense.Failed(r.value0);
                                            };
                                            if (r instanceof Data_Either.Right) {
                                                return new React_Basic_Hooks_Suspense.Complete(r.value0);
                                            };
                                            throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 81, column 23 - line 83, column 44): " + [ r.constructor.name ]);
                                        })();
                                        return function __do() {
                                            var d = Effect_Now.now();
                                            Effect_Ref.modify(Data_Map_Internal.alter(dictOrd)(function (v1) {
                                                if (v1 instanceof Data_Maybe.Nothing) {
                                                    return new Data_Maybe.Just(new Data_Tuple.Tuple(v, d));
                                                };
                                                if (v1 instanceof Data_Maybe.Just) {
                                                    var $26 = Data_Ord.greaterThan(Data_DateTime_Instant.ordDateTime)(d)(v1.value0.value1);
                                                    if ($26) {
                                                        return new Data_Maybe.Just(new Data_Tuple.Tuple(v, d));
                                                    };
                                                    return new Data_Maybe.Just(v1.value0);
                                                };
                                                throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 89, column 41 - line 95, column 44): " + [ v1.constructor.name ]);
                                            })(k))(ref)();
                                            if (r instanceof Data_Either.Left) {
                                                return Control_Monad_Error_Class.throwError(Control_Monad_Error_Class.monadThrowEffect)(r.value0)();
                                            };
                                            if (r instanceof Data_Either.Right) {
                                                return r.value0;
                                            };
                                            throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 97, column 17 - line 99, column 38): " + [ r.constructor.name ]);
                                        };
                                    })());
                                }))();
                                var v = new React_Basic_Hooks_Suspense.InProgress(fiber);
                                var d = Effect_Now.now();
                                Effect_Ref.modify(Data_Map_Internal.insert(dictOrd)(k)(new Data_Tuple.Tuple(v, d)))(ref)();
                                return v;
                            };
                            throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 73, column 7 - line 104, column 17): " + [ c.constructor.name ]);
                        };
                    };
                };
                (function __do() {
                    var r = Effect_Exception["try"](pruneCache)();
                    if (r instanceof Data_Either.Left) {
                        return Effect_Console.warn("Failed to initialize the suspense store cleanup task. Ensure you're using it in a browser with `requestIdleCallback` support.")();
                    };
                    if (r instanceof Data_Either.Right) {
                        return Data_Unit.unit;
                    };
                    throw new Error("Failed pattern match at React.Basic.Hooks.Suspense.Store (line 107, column 5 - line 109, column 27): " + [ r.constructor.name ]);
                })();
                return {
                    cache: ref,
                    get: (function () {
                        var $39 = Data_Functor.map(Data_Functor.functorFn)(React_Basic_Hooks_Suspense.Suspended);
                        return function ($40) {
                            return $39(getCacheOrBackend($40));
                        };
                    })()
                };
            };
        };
    };
};
var get$prime = function (v) {
    return function (d) {
        return v.get(new Data_Maybe.Just(d));
    };
};
var get = function (v) {
    return v.get(Data_Maybe.Nothing.value);
};
module.exports = {
    mkSuspenseStore: mkSuspenseStore,
    get: get,
    "get'": get$prime
};
