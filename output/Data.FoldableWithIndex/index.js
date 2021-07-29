// Generated by purs version 0.14.3
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor_Coproduct = require("../Data.Functor.Coproduct/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Monoid_Conj = require("../Data.Monoid.Conj/index.js");
var Data_Monoid_Disj = require("../Data.Monoid.Disj/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Monoid_Endo = require("../Data.Monoid.Endo/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var FoldableWithIndex = function (Foldable0, foldMapWithIndex, foldlWithIndex, foldrWithIndex) {
    this.Foldable0 = Foldable0;
    this.foldMapWithIndex = foldMapWithIndex;
    this.foldlWithIndex = foldlWithIndex;
    this.foldrWithIndex = foldrWithIndex;
};
var foldrWithIndex = function (dict) {
    return dict.foldrWithIndex;
};
var traverseWithIndex_ = function (dictApplicative) {
    return function (dictFoldableWithIndex) {
        return function (f) {
            return foldrWithIndex(dictFoldableWithIndex)(function (i) {
                var $160 = Control_Apply.applySecond(dictApplicative.Apply0());
                var $161 = f(i);
                return function ($162) {
                    return $160($161($162));
                };
            })(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
    };
};
var forWithIndex_ = function (dictApplicative) {
    return function (dictFoldableWithIndex) {
        return Data_Function.flip(traverseWithIndex_(dictApplicative)(dictFoldableWithIndex));
    };
};
var foldrDefault = function (dictFoldableWithIndex) {
    return function (f) {
        return foldrWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
    };
};
var foldlWithIndex = function (dict) {
    return dict.foldlWithIndex;
};
var foldlDefault = function (dictFoldableWithIndex) {
    return function (f) {
        return foldlWithIndex(dictFoldableWithIndex)(Data_Function["const"](f));
    };
};
var foldableWithIndexTuple = new FoldableWithIndex(function () {
    return Data_Foldable.foldableTuple;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(Data_Unit.unit)(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(z)(v.value1);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(v.value1)(z);
        };
    };
});
var foldableWithIndexMultiplicative = new FoldableWithIndex(function () {
    return Data_Foldable.foldableMultiplicative;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableMultiplicative)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableMultiplicative)(f(Data_Unit.unit));
});
var foldableWithIndexMaybe = new FoldableWithIndex(function () {
    return Data_Foldable.foldableMaybe;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableMaybe)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableMaybe)(f(Data_Unit.unit));
});
var foldableWithIndexLast = new FoldableWithIndex(function () {
    return Data_Foldable.foldableLast;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableLast)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableLast)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableLast)(f(Data_Unit.unit));
});
var foldableWithIndexIdentity = new FoldableWithIndex(function () {
    return Data_Foldable.foldableIdentity;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return f(Data_Unit.unit)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(z)(v);
        };
    };
}, function (f) {
    return function (z) {
        return function (v) {
            return f(Data_Unit.unit)(v)(z);
        };
    };
});
var foldableWithIndexFirst = new FoldableWithIndex(function () {
    return Data_Foldable.foldableFirst;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableFirst)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableFirst)(f(Data_Unit.unit));
});
var foldableWithIndexEither = new FoldableWithIndex(function () {
    return Data_Foldable.foldableEither;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            if (v instanceof Data_Either.Left) {
                return Data_Monoid.mempty(dictMonoid);
            };
            if (v instanceof Data_Either.Right) {
                return f(Data_Unit.unit)(v.value0);
            };
            throw new Error("Failed pattern match at Data.FoldableWithIndex (line 164, column 1 - line 170, column 42): " + [ f.constructor.name, v.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return z;
            };
            if (v1 instanceof Data_Either.Right) {
                return v(Data_Unit.unit)(z)(v1.value0);
            };
            throw new Error("Failed pattern match at Data.FoldableWithIndex (line 164, column 1 - line 170, column 42): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            if (v1 instanceof Data_Either.Left) {
                return z;
            };
            if (v1 instanceof Data_Either.Right) {
                return v(Data_Unit.unit)(v1.value0)(z);
            };
            throw new Error("Failed pattern match at Data.FoldableWithIndex (line 164, column 1 - line 170, column 42): " + [ v.constructor.name, z.constructor.name, v1.constructor.name ]);
        };
    };
});
var foldableWithIndexDual = new FoldableWithIndex(function () {
    return Data_Foldable.foldableDual;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableDual)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableDual)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableDual)(f(Data_Unit.unit));
});
var foldableWithIndexDisj = new FoldableWithIndex(function () {
    return Data_Foldable.foldableDisj;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableDisj)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableDisj)(f(Data_Unit.unit));
});
var foldableWithIndexConst = new FoldableWithIndex(function () {
    return Data_Foldable.foldableConst;
}, function (dictMonoid) {
    return function (v) {
        return function (v1) {
            return Data_Monoid.mempty(dictMonoid);
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            return z;
        };
    };
}, function (v) {
    return function (z) {
        return function (v1) {
            return z;
        };
    };
});
var foldableWithIndexConj = new FoldableWithIndex(function () {
    return Data_Foldable.foldableConj;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableConj)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableConj)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableConj)(f(Data_Unit.unit));
});
var foldableWithIndexAdditive = new FoldableWithIndex(function () {
    return Data_Foldable.foldableAdditive;
}, function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldMap(Data_Foldable.foldableAdditive)(dictMonoid)(f(Data_Unit.unit));
    };
}, function (f) {
    return Data_Foldable.foldl(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
}, function (f) {
    return Data_Foldable.foldr(Data_Foldable.foldableAdditive)(f(Data_Unit.unit));
});
var foldWithIndexM = function (dictFoldableWithIndex) {
    return function (dictMonad) {
        return function (f) {
            return function (a0) {
                return foldlWithIndex(dictFoldableWithIndex)(function (i) {
                    return function (ma) {
                        return function (b) {
                            return Control_Bind.bind(dictMonad.Bind1())(ma)(Data_Function.flip(f(i))(b));
                        };
                    };
                })(Control_Applicative.pure(dictMonad.Applicative0())(a0));
            };
        };
    };
};
var foldMapWithIndexDefaultR = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldrWithIndex(dictFoldableWithIndex)(function (i) {
                return function (x) {
                    return function (acc) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(f(i)(x))(acc);
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldableWithIndexArray = new FoldableWithIndex(function () {
    return Data_Foldable.foldableArray;
}, function (dictMonoid) {
    return foldMapWithIndexDefaultR(foldableWithIndexArray)(dictMonoid);
}, function (f) {
    return function (z) {
        var $163 = Data_Foldable.foldl(Data_Foldable.foldableArray)(function (y) {
            return function (v) {
                return f(v.value0)(y)(v.value1);
            };
        })(z);
        var $164 = Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Data_Tuple.Tuple.create);
        return function ($165) {
            return $163($164($165));
        };
    };
}, function (f) {
    return function (z) {
        var $166 = Data_Foldable.foldr(Data_Foldable.foldableArray)(function (v) {
            return function (y) {
                return f(v.value0)(v.value1)(y);
            };
        })(z);
        var $167 = Data_FunctorWithIndex.mapWithIndex(Data_FunctorWithIndex.functorWithIndexArray)(Data_Tuple.Tuple.create);
        return function ($168) {
            return $166($167($168));
        };
    };
});
var foldMapWithIndexDefaultL = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldlWithIndex(dictFoldableWithIndex)(function (i) {
                return function (acc) {
                    return function (x) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)(x));
                    };
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    };
};
var foldMapWithIndex = function (dict) {
    return dict.foldMapWithIndex;
};
var foldableWithIndexApp = function (dictFoldableWithIndex) {
    return new FoldableWithIndex(function () {
        return Data_Foldable.foldableApp(dictFoldableWithIndex.Foldable0());
    }, function (dictMonoid) {
        return function (f) {
            return function (v) {
                return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(f)(v);
            };
        };
    }, function (f) {
        return function (z) {
            return function (v) {
                return foldlWithIndex(dictFoldableWithIndex)(f)(z)(v);
            };
        };
    }, function (f) {
        return function (z) {
            return function (v) {
                return foldrWithIndex(dictFoldableWithIndex)(f)(z)(v);
            };
        };
    });
};
var foldableWithIndexCompose = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return new FoldableWithIndex(function () {
            return Data_Foldable.foldableCompose(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
        }, function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)((function () {
                        var $169 = foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid);
                        var $170 = Data_Tuple.curry(f);
                        return function ($171) {
                            return $169($170($171));
                        };
                    })())(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return foldlWithIndex(dictFoldableWithIndex)((function () {
                        var $172 = foldlWithIndex(dictFoldableWithIndex1);
                        var $173 = Data_Tuple.curry(f);
                        return function ($174) {
                            return $172($173($174));
                        };
                    })())(i)(v);
                };
            };
        }, function (f) {
            return function (i) {
                return function (v) {
                    return foldrWithIndex(dictFoldableWithIndex)(function (a) {
                        return Data_Function.flip(foldrWithIndex(dictFoldableWithIndex1)(Data_Tuple.curry(f)(a)));
                    })(i)(v);
                };
            };
        });
    };
};
var foldableWithIndexCoproduct = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return new FoldableWithIndex(function () {
            return Data_Foldable.foldableCoproduct(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
        }, function (dictMonoid) {
            return function (f) {
                return Data_Functor_Coproduct.coproduct(foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(function ($175) {
                    return f(Data_Either.Left.create($175));
                }))(foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid)(function ($176) {
                    return f(Data_Either.Right.create($176));
                }));
            };
        }, function (f) {
            return function (z) {
                return Data_Functor_Coproduct.coproduct(foldlWithIndex(dictFoldableWithIndex)(function ($177) {
                    return f(Data_Either.Left.create($177));
                })(z))(foldlWithIndex(dictFoldableWithIndex1)(function ($178) {
                    return f(Data_Either.Right.create($178));
                })(z));
            };
        }, function (f) {
            return function (z) {
                return Data_Functor_Coproduct.coproduct(foldrWithIndex(dictFoldableWithIndex)(function ($179) {
                    return f(Data_Either.Left.create($179));
                })(z))(foldrWithIndex(dictFoldableWithIndex1)(function ($180) {
                    return f(Data_Either.Right.create($180));
                })(z));
            };
        });
    };
};
var foldableWithIndexProduct = function (dictFoldableWithIndex) {
    return function (dictFoldableWithIndex1) {
        return new FoldableWithIndex(function () {
            return Data_Foldable.foldableProduct(dictFoldableWithIndex.Foldable0())(dictFoldableWithIndex1.Foldable0());
        }, function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(function ($181) {
                        return f(Data_Either.Left.create($181));
                    })(v.value0))(foldMapWithIndex(dictFoldableWithIndex1)(dictMonoid)(function ($182) {
                        return f(Data_Either.Right.create($182));
                    })(v.value1));
                };
            };
        }, function (f) {
            return function (z) {
                return function (v) {
                    return foldlWithIndex(dictFoldableWithIndex1)(function ($183) {
                        return f(Data_Either.Right.create($183));
                    })(foldlWithIndex(dictFoldableWithIndex)(function ($184) {
                        return f(Data_Either.Left.create($184));
                    })(z)(v.value0))(v.value1);
                };
            };
        }, function (f) {
            return function (z) {
                return function (v) {
                    return foldrWithIndex(dictFoldableWithIndex)(function ($185) {
                        return f(Data_Either.Left.create($185));
                    })(foldrWithIndex(dictFoldableWithIndex1)(function ($186) {
                        return f(Data_Either.Right.create($186));
                    })(z)(v.value1))(v.value0);
                };
            };
        });
    };
};
var foldlWithIndexDefault = function (dictFoldableWithIndex) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap()(Data_Newtype.unwrap()(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Dual.monoidDual(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn)))(function (i) {
                    var $187 = Data_Function.flip(c(i));
                    return function ($188) {
                        return Data_Monoid_Dual.Dual(Data_Monoid_Endo.Endo($187($188)));
                    };
                })(xs)))(u);
            };
        };
    };
};
var foldrWithIndexDefault = function (dictFoldableWithIndex) {
    return function (c) {
        return function (u) {
            return function (xs) {
                return Data_Newtype.unwrap()(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(function (i) {
                    var $189 = c(i);
                    return function ($190) {
                        return Data_Monoid_Endo.Endo($189($190));
                    };
                })(xs))(u);
            };
        };
    };
};
var surroundMapWithIndex = function (dictFoldableWithIndex) {
    return function (dictSemigroup) {
        return function (d) {
            return function (t) {
                return function (f) {
                    var joined = function (i) {
                        return function (a) {
                            return function (m) {
                                return Data_Semigroup.append(dictSemigroup)(d)(Data_Semigroup.append(dictSemigroup)(t(i)(a))(m));
                            };
                        };
                    };
                    return Data_Newtype.unwrap()(foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Endo.monoidEndo(Control_Category.categoryFn))(joined)(f))(d);
                };
            };
        };
    };
};
var foldMapDefault = function (dictFoldableWithIndex) {
    return function (dictMonoid) {
        return function (f) {
            return foldMapWithIndex(dictFoldableWithIndex)(dictMonoid)(Data_Function["const"](f));
        };
    };
};
var findWithIndex = function (dictFoldableWithIndex) {
    return function (p) {
        var go = function (v) {
            return function (v1) {
                return function (v2) {
                    if (v1 instanceof Data_Maybe.Nothing && p(v)(v2)) {
                        return new Data_Maybe.Just({
                            index: v,
                            value: v2
                        });
                    };
                    return v1;
                };
            };
        };
        return foldlWithIndex(dictFoldableWithIndex)(go)(Data_Maybe.Nothing.value);
    };
};
var findMapWithIndex = function (dictFoldableWithIndex) {
    return function (f) {
        var go = function (v) {
            return function (v1) {
                return function (v2) {
                    if (v1 instanceof Data_Maybe.Nothing) {
                        return f(v)(v2);
                    };
                    return v1;
                };
            };
        };
        return foldlWithIndex(dictFoldableWithIndex)(go)(Data_Maybe.Nothing.value);
    };
};
var anyWithIndex = function (dictFoldableWithIndex) {
    return function (dictHeytingAlgebra) {
        return function (t) {
            var $191 = Data_Newtype.unwrap();
            var $192 = foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Disj.monoidDisj(dictHeytingAlgebra))(function (i) {
                var $194 = t(i);
                return function ($195) {
                    return Data_Monoid_Disj.Disj($194($195));
                };
            });
            return function ($193) {
                return $191($192($193));
            };
        };
    };
};
var allWithIndex = function (dictFoldableWithIndex) {
    return function (dictHeytingAlgebra) {
        return function (t) {
            var $196 = Data_Newtype.unwrap();
            var $197 = foldMapWithIndex(dictFoldableWithIndex)(Data_Monoid_Conj.monoidConj(dictHeytingAlgebra))(function (i) {
                var $199 = t(i);
                return function ($200) {
                    return Data_Monoid_Conj.Conj($199($200));
                };
            });
            return function ($198) {
                return $196($197($198));
            };
        };
    };
};
module.exports = {
    FoldableWithIndex: FoldableWithIndex,
    foldrWithIndex: foldrWithIndex,
    foldlWithIndex: foldlWithIndex,
    foldMapWithIndex: foldMapWithIndex,
    foldrWithIndexDefault: foldrWithIndexDefault,
    foldlWithIndexDefault: foldlWithIndexDefault,
    foldMapWithIndexDefaultR: foldMapWithIndexDefaultR,
    foldMapWithIndexDefaultL: foldMapWithIndexDefaultL,
    foldWithIndexM: foldWithIndexM,
    traverseWithIndex_: traverseWithIndex_,
    forWithIndex_: forWithIndex_,
    surroundMapWithIndex: surroundMapWithIndex,
    allWithIndex: allWithIndex,
    anyWithIndex: anyWithIndex,
    findWithIndex: findWithIndex,
    findMapWithIndex: findMapWithIndex,
    foldrDefault: foldrDefault,
    foldlDefault: foldlDefault,
    foldMapDefault: foldMapDefault,
    foldableWithIndexArray: foldableWithIndexArray,
    foldableWithIndexMaybe: foldableWithIndexMaybe,
    foldableWithIndexFirst: foldableWithIndexFirst,
    foldableWithIndexLast: foldableWithIndexLast,
    foldableWithIndexAdditive: foldableWithIndexAdditive,
    foldableWithIndexDual: foldableWithIndexDual,
    foldableWithIndexDisj: foldableWithIndexDisj,
    foldableWithIndexConj: foldableWithIndexConj,
    foldableWithIndexMultiplicative: foldableWithIndexMultiplicative,
    foldableWithIndexEither: foldableWithIndexEither,
    foldableWithIndexTuple: foldableWithIndexTuple,
    foldableWithIndexIdentity: foldableWithIndexIdentity,
    foldableWithIndexConst: foldableWithIndexConst,
    foldableWithIndexProduct: foldableWithIndexProduct,
    foldableWithIndexCoproduct: foldableWithIndexCoproduct,
    foldableWithIndexCompose: foldableWithIndexCompose,
    foldableWithIndexApp: foldableWithIndexApp
};
