// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var EqRecord = function (eqRecord) {
    this.eqRecord = eqRecord;
};
var Eq = function (eq) {
    this.eq = eq;
};
var Eq1 = function (eq1) {
    this.eq1 = eq1;
};
var eqVoid = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqUnit = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqString = new Eq($foreign.eqStringImpl);
var eqRowNil = new EqRecord(function (v) {
    return function (v1) {
        return function (v2) {
            return true;
        };
    };
});
var eqRecord = function (dict) {
    return dict.eqRecord;
};
var eqRec = function (dictRowToList) {
    return function (dictEqRecord) {
        return new Eq(eqRecord(dictEqRecord)(Type_Proxy["Proxy"].value));
    };
};
var eqProxy3 = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqProxy2 = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqProxy = new Eq(function (v) {
    return function (v1) {
        return true;
    };
});
var eqNumber = new Eq($foreign.eqNumberImpl);
var eqInt = new Eq($foreign.eqIntImpl);
var eqChar = new Eq($foreign.eqCharImpl);
var eqBoolean = new Eq($foreign.eqBooleanImpl);
var eq1 = function (dict) {
    return dict.eq1;
};
var eq = function (dict) {
    return dict.eq;
};
var eqArray = function (dictEq) {
    return new Eq($foreign.eqArrayImpl(eq(dictEq)));
};
var eq1Array = new Eq1(function (dictEq) {
    return eq(eqArray(dictEq));
});
var eqRowCons = function (dictEqRecord) {
    return function (dictCons) {
        return function (dictIsSymbol) {
            return function (dictEq) {
                return new EqRecord(function (v) {
                    return function (ra) {
                        return function (rb) {
                            var tail = eqRecord(dictEqRecord)(Type_Proxy["Proxy"].value)(ra)(rb);
                            var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Type_Proxy["Proxy"].value);
                            var get = Record_Unsafe.unsafeGet(key);
                            return eq(dictEq)(get(ra))(get(rb)) && tail;
                        };
                    };
                });
            };
        };
    };
};
var notEq = function (dictEq) {
    return function (x) {
        return function (y) {
            return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
        };
    };
};
var notEq1 = function (dictEq1) {
    return function (dictEq) {
        return function (x) {
            return function (y) {
                return eq(eqBoolean)(eq1(dictEq1)(dictEq)(x)(y))(false);
            };
        };
    };
};
module.exports = {
    Eq: Eq,
    eq: eq,
    notEq: notEq,
    Eq1: Eq1,
    eq1: eq1,
    notEq1: notEq1,
    EqRecord: EqRecord,
    eqRecord: eqRecord,
    eqBoolean: eqBoolean,
    eqInt: eqInt,
    eqNumber: eqNumber,
    eqChar: eqChar,
    eqString: eqString,
    eqUnit: eqUnit,
    eqVoid: eqVoid,
    eqArray: eqArray,
    eqRec: eqRec,
    eqProxy: eqProxy,
    eqProxy2: eqProxy2,
    eqProxy3: eqProxy3,
    eq1Array: eq1Array,
    eqRowNil: eqRowNil,
    eqRowCons: eqRowCons
};
