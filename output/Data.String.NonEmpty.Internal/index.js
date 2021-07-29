// Generated by purs version 0.14.3
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_CodeUnits = require("../Data.String.CodeUnits/index.js");
var Data_String_Common = require("../Data.String.Common/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var NonEmptyString = function (x) {
    return x;
};
var NonEmptyReplacement = function (x) {
    return x;
};
var MakeNonEmpty = function (nes) {
    this.nes = nes;
};
var toUpper = function (v) {
    return Data_String_Common.toUpper(v);
};
var toString = function (v) {
    return v;
};
var toLower = function (v) {
    return Data_String_Common.toLower(v);
};
var showNonEmptyString = new Data_Show.Show(function (v) {
    return "(NonEmptyString.unsafeFromString " + (Data_Show.show(Data_Show.showString)(v) + ")");
});
var showNonEmptyReplacement = new Data_Show.Show(function (v) {
    return "(NonEmptyReplacement " + (Data_Show.show(showNonEmptyString)(v) + ")");
});
var semigroupNonEmptyString = Data_Semigroup.semigroupString;
var semigroupNonEmptyReplacement = semigroupNonEmptyString;
var replaceAll = function (pat) {
    return function (v) {
        return function (v1) {
            return Data_String_Common.replaceAll(pat)(v)(v1);
        };
    };
};
var replace = function (pat) {
    return function (v) {
        return function (v1) {
            return Data_String_Common.replace(pat)(v)(v1);
        };
    };
};
var prependString = function (s1) {
    return function (v) {
        return s1 + v;
    };
};
var ordNonEmptyString = Data_Ord.ordString;
var ordNonEmptyReplacement = ordNonEmptyString;
var nonEmptyNonEmpty = function (dictIsSymbol) {
    return new MakeNonEmpty(function (p) {
        return Data_Symbol.reflectSymbol(dictIsSymbol)(p);
    });
};
var nes = function (dict) {
    return dict.nes;
};
var makeNonEmptyBad = function (dictFail) {
    return new MakeNonEmpty(function (v) {
        return "";
    });
};
var localeCompare = function (v) {
    return function (v1) {
        return Data_String_Common.localeCompare(v)(v1);
    };
};
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};
var joinWith1 = function (dictFoldable1) {
    return function (v) {
        var $46 = Data_Foldable.intercalate(dictFoldable1.Foldable0())(Data_Monoid.monoidString)(v);
        return function ($47) {
            return NonEmptyString($46($47));
        };
    };
};
var joinWith = function (dictFoldable) {
    return function (splice) {
        var $48 = Data_Foldable.intercalate(dictFoldable)(Data_Monoid.monoidString)(splice);
        return function ($49) {
            return $48($49);
        };
    };
};
var join1With = function (dictFoldable1) {
    return function (splice) {
        var $50 = joinWith(dictFoldable1.Foldable0())(splice);
        return function ($51) {
            return NonEmptyString($50($51));
        };
    };
};
var fromString = function (v) {
    if (v === "") {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(v);
};
var stripPrefix = function (pat) {
    return Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(fromString)(liftS(Data_String_CodeUnits.stripPrefix(pat)));
};
var stripSuffix = function (pat) {
    return Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(fromString)(liftS(Data_String_CodeUnits.stripSuffix(pat)));
};
var trim = function (v) {
    return fromString(Data_String_Common.trim(v));
};
var unsafeFromString = function (dictPartial) {
    var $52 = Data_Maybe.fromJust();
    return function ($53) {
        return $52(fromString($53));
    };
};
var eqNonEmptyString = Data_Eq.eqString;
var eqNonEmptyReplacement = eqNonEmptyString;
var contains = function ($54) {
    return liftS(Data_String_CodeUnits.contains($54));
};
var appendString = function (v) {
    return function (s2) {
        return v + s2;
    };
};
module.exports = {
    nes: nes,
    NonEmptyString: NonEmptyString,
    MakeNonEmpty: MakeNonEmpty,
    NonEmptyReplacement: NonEmptyReplacement,
    fromString: fromString,
    unsafeFromString: unsafeFromString,
    toString: toString,
    appendString: appendString,
    prependString: prependString,
    stripPrefix: stripPrefix,
    stripSuffix: stripSuffix,
    contains: contains,
    localeCompare: localeCompare,
    replace: replace,
    replaceAll: replaceAll,
    toLower: toLower,
    toUpper: toUpper,
    trim: trim,
    joinWith: joinWith,
    join1With: join1With,
    joinWith1: joinWith1,
    liftS: liftS,
    eqNonEmptyString: eqNonEmptyString,
    ordNonEmptyString: ordNonEmptyString,
    semigroupNonEmptyString: semigroupNonEmptyString,
    showNonEmptyString: showNonEmptyString,
    makeNonEmptyBad: makeNonEmptyBad,
    nonEmptyNonEmpty: nonEmptyNonEmpty,
    eqNonEmptyReplacement: eqNonEmptyReplacement,
    ordNonEmptyReplacement: ordNonEmptyReplacement,
    semigroupNonEmptyReplacement: semigroupNonEmptyReplacement,
    showNonEmptyReplacement: showNonEmptyReplacement
};
