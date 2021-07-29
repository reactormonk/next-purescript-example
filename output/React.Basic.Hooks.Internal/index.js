// Generated by purs version 0.14.3
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Applicative_Indexed = require("../Control.Applicative.Indexed/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Apply_Indexed = require("../Control.Apply.Indexed/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Bind_Indexed = require("../Control.Bind.Indexed/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_Monad_Indexed = require("../Control.Monad.Indexed/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Indexed = require("../Data.Functor.Indexed/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Effect = require("../Effect/index.js");
var Render = function (x) {
    return x;
};
var unsafeRenderEffect = Render;
var unsafeHook = Render;
var semigroupRender = function (dictTypeEquals) {
    return function (dictSemigroup) {
        return new Data_Semigroup.Semigroup(function (v) {
            return function (v1) {
                return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))(v)(v1);
            };
        });
    };
};
var monoidRender = function (dictTypeEquals) {
    return function (dictMonoid) {
        return new Data_Monoid.Monoid(function () {
            return semigroupRender(dictTypeEquals)(dictMonoid.Semigroup0());
        }, Data_Monoid.mempty(Effect.monoidEffect(dictMonoid)));
    };
};
var ixFunctorRender = new Data_Functor_Indexed.IxFunctor(function (f) {
    return function (v) {
        return Data_Functor.map(Effect.functorEffect)(f)(v);
    };
});
var ixApplyRender = new Control_Apply_Indexed.IxApply(function () {
    return ixFunctorRender;
}, function (v) {
    return function (v1) {
        return Control_Apply.apply(Effect.applyEffect)(v)(v1);
    };
});
var ixBindRender = new Control_Bind_Indexed.IxBind(function () {
    return ixApplyRender;
}, function (v) {
    return function (f) {
        return function __do() {
            var a = v();
            var v1 = f(a);
            return v1();
        };
    };
});
var ixApplicativeRender = new Control_Applicative_Indexed.IxApplicative(function () {
    return ixApplyRender;
}, function (a) {
    return Control_Applicative.pure(Effect.applicativeEffect)(a);
});
var ixMonadRender = new Control_Monad_Indexed.IxMonad(function () {
    return ixApplicativeRender;
}, function () {
    return ixBindRender;
});
var functorRender = new Data_Functor.Functor(function (f) {
    return function (v) {
        return Data_Functor.map(Effect.functorEffect)(f)(v);
    };
});
var discard = function (dictIxBind) {
    return Control_Bind_Indexed.ibind(dictIxBind);
};
var coerceHook = function (dictNewtype) {
    return function (v) {
        return v;
    };
};
var bind = function (dictIxBind) {
    return Control_Bind_Indexed.ibind(dictIxBind);
};
var applyRender = function (dictTypeEquals) {
    return new Control_Apply.Apply(function () {
        return functorRender;
    }, function (v) {
        return function (v1) {
            return Control_Apply.apply(Effect.applyEffect)(v)(v1);
        };
    });
};
var bindRender = function (dictTypeEquals) {
    return new Control_Bind.Bind(function () {
        return applyRender(dictTypeEquals);
    }, function (v) {
        return function (f) {
            return function __do() {
                var a = v();
                var v1 = f(a);
                return v1();
            };
        };
    });
};
var applicativeRender = function (dictTypeEquals) {
    return new Control_Applicative.Applicative(function () {
        return applyRender(dictTypeEquals);
    }, function (a) {
        return Control_Applicative.pure(Effect.applicativeEffect)(a);
    });
};
var monadRender = function (dictTypeEquals) {
    return new Control_Monad.Monad(function () {
        return applicativeRender(dictTypeEquals);
    }, function () {
        return bindRender(dictTypeEquals);
    });
};
module.exports = {
    coerceHook: coerceHook,
    unsafeHook: unsafeHook,
    unsafeRenderEffect: unsafeRenderEffect,
    bind: bind,
    discard: discard,
    ixFunctorRender: ixFunctorRender,
    ixApplyRender: ixApplyRender,
    ixApplicativeRender: ixApplicativeRender,
    ixBindRender: ixBindRender,
    ixMonadRender: ixMonadRender,
    functorRender: functorRender,
    applyRender: applyRender,
    applicativeRender: applicativeRender,
    bindRender: bindRender,
    monadRender: monadRender,
    semigroupRender: semigroupRender,
    monoidRender: monoidRender
};
