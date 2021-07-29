// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Effect = require("../Effect/index.js");
var semigroupEffectFn9 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn9(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return function (f) {
                                    return function (g) {
                                        return function (h) {
                                            return function (i) {
                                                return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn9(f1)(a)(b)(c)(d)(e)(f)(g)(h)(i))($foreign.runEffectFn9(f2)(a)(b)(c)(d)(e)(f)(g)(h)(i));
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn8 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn8(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return function (f) {
                                    return function (g) {
                                        return function (h) {
                                            return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn8(f1)(a)(b)(c)(d)(e)(f)(g)(h))($foreign.runEffectFn8(f2)(a)(b)(c)(d)(e)(f)(g)(h));
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn7 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn7(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return function (f) {
                                    return function (g) {
                                        return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn7(f1)(a)(b)(c)(d)(e)(f)(g))($foreign.runEffectFn7(f2)(a)(b)(c)(d)(e)(f)(g));
                                    };
                                };
                            };
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn6 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn6(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return function (f) {
                                    return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn6(f1)(a)(b)(c)(d)(e)(f))($foreign.runEffectFn6(f2)(a)(b)(c)(d)(e)(f));
                                };
                            };
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn5 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn5(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn5(f1)(a)(b)(c)(d)(e))($foreign.runEffectFn5(f2)(a)(b)(c)(d)(e));
                            };
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn4 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn4(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn4(f1)(a)(b)(c)(d))($foreign.runEffectFn4(f2)(a)(b)(c)(d));
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn3 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn3(function (a) {
                return function (b) {
                    return function (c) {
                        return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn3(f1)(a)(b)(c))($foreign.runEffectFn3(f2)(a)(b)(c));
                    };
                };
            });
        };
    });
};
var semigroupEffectFn2 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn2(function (a) {
                return function (b) {
                    return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn2(f1)(a)(b))($foreign.runEffectFn2(f2)(a)(b));
                };
            });
        };
    });
};
var semigroupEffectFn10 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn10(function (a) {
                return function (b) {
                    return function (c) {
                        return function (d) {
                            return function (e) {
                                return function (f) {
                                    return function (g) {
                                        return function (h) {
                                            return function (i) {
                                                return function (j) {
                                                    return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn10(f1)(a)(b)(c)(d)(e)(f)(g)(h)(i)(j))($foreign.runEffectFn10(f2)(a)(b)(c)(d)(e)(f)(g)(h)(i)(j));
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            });
        };
    });
};
var semigroupEffectFn1 = function (dictSemigroup) {
    return new Data_Semigroup.Semigroup(function (f1) {
        return function (f2) {
            return $foreign.mkEffectFn1(function (a) {
                return Data_Semigroup.append(Effect.semigroupEffect(dictSemigroup))($foreign.runEffectFn1(f1)(a))($foreign.runEffectFn1(f2)(a));
            });
        };
    });
};
var monoidEffectFn9 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn9(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn9(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return function (v5) {
                            return function (v6) {
                                return function (v7) {
                                    return function (v8) {
                                        return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    }));
};
var monoidEffectFn8 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn8(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn8(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return function (v5) {
                            return function (v6) {
                                return function (v7) {
                                    return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                                };
                            };
                        };
                    };
                };
            };
        };
    }));
};
var monoidEffectFn7 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn7(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn7(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return function (v5) {
                            return function (v6) {
                                return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                            };
                        };
                    };
                };
            };
        };
    }));
};
var monoidEffectFn6 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn6(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn6(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return function (v5) {
                            return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                        };
                    };
                };
            };
        };
    }));
};
var monoidEffectFn5 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn5(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn5(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                    };
                };
            };
        };
    }));
};
var monoidEffectFn4 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn4(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn4(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                };
            };
        };
    }));
};
var monoidEffectFn3 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn3(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn3(function (v) {
        return function (v1) {
            return function (v2) {
                return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
            };
        };
    }));
};
var monoidEffectFn2 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn2(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn2(function (v) {
        return function (v1) {
            return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
        };
    }));
};
var monoidEffectFn10 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn10(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn10(function (v) {
        return function (v1) {
            return function (v2) {
                return function (v3) {
                    return function (v4) {
                        return function (v5) {
                            return function (v6) {
                                return function (v7) {
                                    return function (v8) {
                                        return function (v9) {
                                            return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    }));
};
var monoidEffectFn1 = function (dictMonoid) {
    return new Data_Monoid.Monoid(function () {
        return semigroupEffectFn1(dictMonoid.Semigroup0());
    }, $foreign.mkEffectFn1(function (v) {
        return Data_Monoid.mempty(Effect.monoidEffect(dictMonoid));
    }));
};
module.exports = {
    semigroupEffectFn1: semigroupEffectFn1,
    semigroupEffectFn2: semigroupEffectFn2,
    semigroupEffectFn3: semigroupEffectFn3,
    semigroupEffectFn4: semigroupEffectFn4,
    semigroupEffectFn5: semigroupEffectFn5,
    semigroupEffectFn6: semigroupEffectFn6,
    semigroupEffectFn7: semigroupEffectFn7,
    semigroupEffectFn8: semigroupEffectFn8,
    semigroupEffectFn9: semigroupEffectFn9,
    semigroupEffectFn10: semigroupEffectFn10,
    monoidEffectFn1: monoidEffectFn1,
    monoidEffectFn2: monoidEffectFn2,
    monoidEffectFn3: monoidEffectFn3,
    monoidEffectFn4: monoidEffectFn4,
    monoidEffectFn5: monoidEffectFn5,
    monoidEffectFn6: monoidEffectFn6,
    monoidEffectFn7: monoidEffectFn7,
    monoidEffectFn8: monoidEffectFn8,
    monoidEffectFn9: monoidEffectFn9,
    monoidEffectFn10: monoidEffectFn10,
    mkEffectFn1: $foreign.mkEffectFn1,
    mkEffectFn2: $foreign.mkEffectFn2,
    mkEffectFn3: $foreign.mkEffectFn3,
    mkEffectFn4: $foreign.mkEffectFn4,
    mkEffectFn5: $foreign.mkEffectFn5,
    mkEffectFn6: $foreign.mkEffectFn6,
    mkEffectFn7: $foreign.mkEffectFn7,
    mkEffectFn8: $foreign.mkEffectFn8,
    mkEffectFn9: $foreign.mkEffectFn9,
    mkEffectFn10: $foreign.mkEffectFn10,
    runEffectFn1: $foreign.runEffectFn1,
    runEffectFn2: $foreign.runEffectFn2,
    runEffectFn3: $foreign.runEffectFn3,
    runEffectFn4: $foreign.runEffectFn4,
    runEffectFn5: $foreign.runEffectFn5,
    runEffectFn6: $foreign.runEffectFn6,
    runEffectFn7: $foreign.runEffectFn7,
    runEffectFn8: $foreign.runEffectFn8,
    runEffectFn9: $foreign.runEffectFn9,
    runEffectFn10: $foreign.runEffectFn10
};
