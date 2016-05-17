(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.gentoo = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.accum = accum;
  exports.compose = compose;
  exports.dedupe = dedupe;
  exports.filter = filter;
  exports.forEach = forEach;
  exports.lastValue = lastValue;
  exports.map = map;
  exports.nthValue = nthValue;
  exports.partition = partition;
  exports.pluck = pluck;
  exports.skip = skip;
  exports.take = take;
  exports.loop = loop;
  exports.everyN = everyN;
  exports.reduce = reduce;
  exports.range = range;
  exports.limit = limit;
  exports.takeWhile = takeWhile;
  exports.chain = chain;

  var _marked = [accum, compose, dedupe, filter, map, partition, pluck, loop, everyN, range, limit, takeWhile].map(regeneratorRuntime.mark);

  function accum(gen) {
    var results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;

    return regeneratorRuntime.wrap(function accum$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            results = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = gen[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 14;
              break;
            }

            v = _step.value;

            results = results.concat(v);
            _context.next = 11;
            return results.slice();

          case 11:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 20:
            _context.prev = 20;
            _context.prev = 21;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 23:
            _context.prev = 23;

            if (!_didIteratorError) {
              _context.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context.finish(23);

          case 27:
            return _context.finish(20);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _marked[0], this, [[4, 16, 20, 28], [21,, 23, 27]]);
  }

  function compose() {
    for (var _len = arguments.length, gens = Array(_len), _key = 0; _key < _len; _key++) {
      gens[_key] = arguments[_key];
    }

    var i;
    return regeneratorRuntime.wrap(function compose$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < gens.length)) {
              _context2.next = 6;
              break;
            }

            return _context2.delegateYield(gens[i], "t0", 3);

          case 3:
            i++;
            _context2.next = 1;
            break;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked[1], this);
  }

  function dedupe(gen, _eqFn) {
    var previousValue, valueSeen, eqFn, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, v;

    return regeneratorRuntime.wrap(function dedupe$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            previousValue = void 0;
            valueSeen = false;
            eqFn = _eqFn || identity;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context3.prev = 6;
            _iterator2 = gen[Symbol.iterator]();

          case 8:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context3.next = 18;
              break;
            }

            v = _step2.value;

            if (!(!valueSeen || !eqFn(v, previousValue))) {
              _context3.next = 13;
              break;
            }

            _context3.next = 13;
            return v;

          case 13:

            valueSeen = true;
            previousValue = v;

          case 15:
            _iteratorNormalCompletion2 = true;
            _context3.next = 8;
            break;

          case 18:
            _context3.next = 24;
            break;

          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](6);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t0;

          case 24:
            _context3.prev = 24;
            _context3.prev = 25;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 27:
            _context3.prev = 27;

            if (!_didIteratorError2) {
              _context3.next = 30;
              break;
            }

            throw _iteratorError2;

          case 30:
            return _context3.finish(27);

          case 31:
            return _context3.finish(24);

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _marked[2], this, [[6, 20, 24, 32], [25,, 27, 31]]);
  }

  function filter(gen, fn, thisValue) {
    var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, v;

    return regeneratorRuntime.wrap(function filter$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context4.prev = 3;
            _iterator3 = gen[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context4.next = 13;
              break;
            }

            v = _step3.value;

            if (!fn.call(thisValue, v)) {
              _context4.next = 10;
              break;
            }

            _context4.next = 10;
            return v;

          case 10:
            _iteratorNormalCompletion3 = true;
            _context4.next = 5;
            break;

          case 13:
            _context4.next = 19;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](3);
            _didIteratorError3 = true;
            _iteratorError3 = _context4.t0;

          case 19:
            _context4.prev = 19;
            _context4.prev = 20;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 22:
            _context4.prev = 22;

            if (!_didIteratorError3) {
              _context4.next = 25;
              break;
            }

            throw _iteratorError3;

          case 25:
            return _context4.finish(22);

          case 26:
            return _context4.finish(19);

          case 27:
          case "end":
            return _context4.stop();
        }
      }
    }, _marked[3], this, [[3, 15, 19, 27], [20,, 22, 26]]);
  }

  function forEach(gen, fn, thisValue) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = gen[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var v = _step4.value;

        fn.call(thisValue, v);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  function lastValue(gen) {
    var arr = Array.from(gen);
    return arr[arr.length - 1];
  }

  function map(gen, fn, thisValue) {
    var v, result;
    return regeneratorRuntime.wrap(function map$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!true) {
              _context5.next = 11;
              break;
            }

            v = gen.next();

            if (!(v.done && !v.value)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return");

          case 4:
            result = fn.call(thisValue, v.value);

            if (!v.done) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", result);

          case 7:
            _context5.next = 9;
            return result;

          case 9:
            _context5.next = 0;
            break;

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _marked[4], this);
  }

  function nthValue(gen, n) {
    for (var i = 0; i < n; i++) {
      gen.next();
    }

    return gen.next().value;
  }

  function partition(gen, fn) {
    var yes, no, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, v;

    return regeneratorRuntime.wrap(function partition$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            yes = [];
            no = [];
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context6.prev = 5;
            _iterator5 = gen[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
              _context6.next = 15;
              break;
            }

            v = _step5.value;

            if (fn(v)) {
              yes.push(v);
            } else {
              no.push(v);
            }

            _context6.next = 12;
            return [yes.slice(), no.slice()];

          case 12:
            _iteratorNormalCompletion5 = true;
            _context6.next = 7;
            break;

          case 15:
            _context6.next = 21;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](5);
            _didIteratorError5 = true;
            _iteratorError5 = _context6.t0;

          case 21:
            _context6.prev = 21;
            _context6.prev = 22;

            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }

          case 24:
            _context6.prev = 24;

            if (!_didIteratorError5) {
              _context6.next = 27;
              break;
            }

            throw _iteratorError5;

          case 27:
            return _context6.finish(24);

          case 28:
            return _context6.finish(21);

          case 29:
          case "end":
            return _context6.stop();
        }
      }
    }, _marked[5], this, [[5, 17, 21, 29], [22,, 24, 28]]);
  }

  function pluck(gen, name) {
    var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, v;

    return regeneratorRuntime.wrap(function pluck$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _iteratorNormalCompletion6 = true;
            _didIteratorError6 = false;
            _iteratorError6 = undefined;
            _context7.prev = 3;
            _iterator6 = gen[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
              _context7.next = 12;
              break;
            }

            v = _step6.value;
            _context7.next = 9;
            return v[name];

          case 9:
            _iteratorNormalCompletion6 = true;
            _context7.next = 5;
            break;

          case 12:
            _context7.next = 18;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](3);
            _didIteratorError6 = true;
            _iteratorError6 = _context7.t0;

          case 18:
            _context7.prev = 18;
            _context7.prev = 19;

            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }

          case 21:
            _context7.prev = 21;

            if (!_didIteratorError6) {
              _context7.next = 24;
              break;
            }

            throw _iteratorError6;

          case 24:
            return _context7.finish(21);

          case 25:
            return _context7.finish(18);

          case 26:
          case "end":
            return _context7.stop();
        }
      }
    }, _marked[6], this, [[3, 14, 18, 26], [19,, 21, 25]]);
  }

  function skip(gen, n) {
    for (var i = 0; i < n; i++) {
      if (gen.next().done) {
        return;
      }
    }
  }

  function take(gen, n) {
    var results = [];

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = gen[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var v = _step7.value;

        if (results.length >= n) {
          break;
        }
        results.push(v);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7.return) {
          _iterator7.return();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    return results;
  }

  function loop(gen) {
    var results, i, v;
    return regeneratorRuntime.wrap(function loop$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            results = [];
            i = 0;

          case 2:
            if (!true) {
              _context8.next = 13;
              break;
            }

            v = gen.next();

            if (!v.done) {
              _context8.next = 8;
              break;
            }

            return _context8.abrupt("break", 13);

          case 8:
            results.push(v.value);
            _context8.next = 11;
            return v.value;

          case 11:
            _context8.next = 2;
            break;

          case 13:
            if (!true) {
              _context8.next = 19;
              break;
            }

            _context8.next = 16;
            return results[i++];

          case 16:

            i = i % results.length;
            _context8.next = 13;
            break;

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _marked[7], this);
  }

  function everyN(gen, n) {
    var takeFirst = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    var count, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, v;

    return regeneratorRuntime.wrap(function everyN$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            count = 0;

            if (!takeFirst) {
              _context9.next = 4;
              break;
            }

            _context9.next = 4;
            return gen.next().value;

          case 4:
            _iteratorNormalCompletion8 = true;
            _didIteratorError8 = false;
            _iteratorError8 = undefined;
            _context9.prev = 7;
            _iterator8 = gen[Symbol.iterator]();

          case 9:
            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
              _context9.next = 19;
              break;
            }

            v = _step8.value;

            count++;

            if (!(count === n)) {
              _context9.next = 16;
              break;
            }

            _context9.next = 15;
            return v;

          case 15:
            count = 0;

          case 16:
            _iteratorNormalCompletion8 = true;
            _context9.next = 9;
            break;

          case 19:
            _context9.next = 25;
            break;

          case 21:
            _context9.prev = 21;
            _context9.t0 = _context9["catch"](7);
            _didIteratorError8 = true;
            _iteratorError8 = _context9.t0;

          case 25:
            _context9.prev = 25;
            _context9.prev = 26;

            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }

          case 28:
            _context9.prev = 28;

            if (!_didIteratorError8) {
              _context9.next = 31;
              break;
            }

            throw _iteratorError8;

          case 31:
            return _context9.finish(28);

          case 32:
            return _context9.finish(25);

          case 33:
          case "end":
            return _context9.stop();
        }
      }
    }, _marked[8], this, [[7, 21, 25, 33], [26,, 28, 32]]);
  }

  function reduce(gen, fn, initial) {
    var memo = initial;

    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = gen[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var v = _step9.value;

        memo = fn(memo, v);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }

    return memo;
  }

  function range(start, stop, step) {
    var modifiedStep, i;
    return regeneratorRuntime.wrap(function range$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            modifiedStep = step || 1;
            i = start;

          case 2:
            if (!(i < stop)) {
              _context10.next = 8;
              break;
            }

            _context10.next = 5;
            return i;

          case 5:
            i += modifiedStep;
            _context10.next = 2;
            break;

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _marked[9], this);
  }

  function limit(gen, n) {
    var i, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, v;

    return regeneratorRuntime.wrap(function limit$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            i = 0;
            _iteratorNormalCompletion10 = true;
            _didIteratorError10 = false;
            _iteratorError10 = undefined;
            _context11.prev = 4;
            _iterator10 = gen[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
              _context11.next = 17;
              break;
            }

            v = _step10.value;

            if (!(i++ < n)) {
              _context11.next = 13;
              break;
            }

            _context11.next = 11;
            return v;

          case 11:
            _context11.next = 14;
            break;

          case 13:
            return _context11.abrupt("break", 17);

          case 14:
            _iteratorNormalCompletion10 = true;
            _context11.next = 6;
            break;

          case 17:
            _context11.next = 23;
            break;

          case 19:
            _context11.prev = 19;
            _context11.t0 = _context11["catch"](4);
            _didIteratorError10 = true;
            _iteratorError10 = _context11.t0;

          case 23:
            _context11.prev = 23;
            _context11.prev = 24;

            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }

          case 26:
            _context11.prev = 26;

            if (!_didIteratorError10) {
              _context11.next = 29;
              break;
            }

            throw _iteratorError10;

          case 29:
            return _context11.finish(26);

          case 30:
            return _context11.finish(23);

          case 31:
          case "end":
            return _context11.stop();
        }
      }
    }, _marked[10], this, [[4, 19, 23, 31], [24,, 26, 30]]);
  }

  function takeWhile(gen, fn) {
    var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, v;

    return regeneratorRuntime.wrap(function takeWhile$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _iteratorNormalCompletion11 = true;
            _didIteratorError11 = false;
            _iteratorError11 = undefined;
            _context12.prev = 3;
            _iterator11 = gen[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
              _context12.next = 16;
              break;
            }

            v = _step11.value;

            if (!fn(v)) {
              _context12.next = 12;
              break;
            }

            _context12.next = 10;
            return v;

          case 10:
            _context12.next = 13;
            break;

          case 12:
            return _context12.abrupt("break", 16);

          case 13:
            _iteratorNormalCompletion11 = true;
            _context12.next = 5;
            break;

          case 16:
            _context12.next = 22;
            break;

          case 18:
            _context12.prev = 18;
            _context12.t0 = _context12["catch"](3);
            _didIteratorError11 = true;
            _iteratorError11 = _context12.t0;

          case 22:
            _context12.prev = 22;
            _context12.prev = 23;

            if (!_iteratorNormalCompletion11 && _iterator11.return) {
              _iterator11.return();
            }

          case 25:
            _context12.prev = 25;

            if (!_didIteratorError11) {
              _context12.next = 28;
              break;
            }

            throw _iteratorError11;

          case 28:
            return _context12.finish(25);

          case 29:
            return _context12.finish(22);

          case 30:
          case "end":
            return _context12.stop();
        }
      }
    }, _marked[11], this, [[3, 18, 22, 30], [23,, 25, 29]]);
  }

  function chain(value) {
    var wrapper = {};
    wrapper._wrapped = value;
    var funcs = [accum, compose, dedupe, filter, forEach, lastValue, map, nthValue, partition, pluck, skip, take, loop, everyN, reduce, range, limit, takeWhile];
    funcs.forEach(function (func) {
      wrapper[func.name] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        wrapper._wrapped = func.apply(undefined, [wrapper._wrapped].concat(args));
        return wrapper;
      };
    });
    wrapper.value = function () {
      return wrapper._wrapped;
    };
    return wrapper;
  }

  function identity(a, b) {
    return a === b;
  }
});