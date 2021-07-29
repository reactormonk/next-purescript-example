// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable/index.js");
var Data_Semigroup_Traversable = require("../Data.Semigroup.Traversable/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var NonEmptyArray = function (x) {
    return x;
};
var unfoldable1NonEmptyArray = Data_Unfoldable1.unfoldable1Array;
var traversableWithIndexNonEmptyArray = Data_TraversableWithIndex.traversableWithIndexArray;
var traversableNonEmptyArray = Data_Traversable.traversableArray;
var showNonEmptyArray = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(NonEmptyArray " + (Data_Show.show(Data_Show.showArray(dictShow))(v) + ")");
    });
};
var semigroupNonEmptyArray = Data_Semigroup.semigroupArray;
var ordNonEmptyArray = function (dictOrd) {
    return Data_Ord.ordArray(dictOrd);
};
var ord1NonEmptyArray = Data_Ord.ord1Array;
var monadNonEmptyArray = Control_Monad.monadArray;
var functorWithIndexNonEmptyArray = Data_FunctorWithIndex.functorWithIndexArray;
var functorNonEmptyArray = Data_Functor.functorArray;
var foldableWithIndexNonEmptyArray = Data_FoldableWithIndex.foldableWithIndexArray;
var foldableNonEmptyArray = Data_Foldable.foldableArray;
var foldable1NonEmptyArray = new Data_Semigroup_Foldable.Foldable1(function () {
    return foldableNonEmptyArray;
}, function (dictSemigroup) {
    return Data_Semigroup_Foldable.foldMap1DefaultL(foldable1NonEmptyArray)(functorNonEmptyArray)(dictSemigroup);
}, $foreign.foldl1Impl, $foreign.foldr1Impl);
var traversable1NonEmptyArray = new Data_Semigroup_Traversable.Traversable1(function () {
    return foldable1NonEmptyArray;
}, function () {
    return traversableNonEmptyArray;
}, function (dictApply) {
    return Data_Semigroup_Traversable.sequence1Default(traversable1NonEmptyArray)(dictApply);
}, function (dictApply) {
    return $foreign.traverse1Impl(Control_Apply.apply(dictApply))(Data_Functor.map(dictApply.Functor0()));
});
var eqNonEmptyArray = function (dictEq) {
    return Data_Eq.eqArray(dictEq);
};
var eq1NonEmptyArray = Data_Eq.eq1Array;
var bindNonEmptyArray = Control_Bind.bindArray;
var applyNonEmptyArray = Control_Apply.applyArray;
var applicativeNonEmptyArray = Control_Applicative.applicativeArray;
var altNonEmptyArray = Control_Alt.altArray;
module.exports = {
    NonEmptyArray: NonEmptyArray,
    showNonEmptyArray: showNonEmptyArray,
    eqNonEmptyArray: eqNonEmptyArray,
    eq1NonEmptyArray: eq1NonEmptyArray,
    ordNonEmptyArray: ordNonEmptyArray,
    ord1NonEmptyArray: ord1NonEmptyArray,
    semigroupNonEmptyArray: semigroupNonEmptyArray,
    functorNonEmptyArray: functorNonEmptyArray,
    functorWithIndexNonEmptyArray: functorWithIndexNonEmptyArray,
    foldableNonEmptyArray: foldableNonEmptyArray,
    foldableWithIndexNonEmptyArray: foldableWithIndexNonEmptyArray,
    foldable1NonEmptyArray: foldable1NonEmptyArray,
    unfoldable1NonEmptyArray: unfoldable1NonEmptyArray,
    traversableNonEmptyArray: traversableNonEmptyArray,
    traversableWithIndexNonEmptyArray: traversableWithIndexNonEmptyArray,
    traversable1NonEmptyArray: traversable1NonEmptyArray,
    applyNonEmptyArray: applyNonEmptyArray,
    applicativeNonEmptyArray: applicativeNonEmptyArray,
    bindNonEmptyArray: bindNonEmptyArray,
    monadNonEmptyArray: monadNonEmptyArray,
    altNonEmptyArray: altNonEmptyArray
};
