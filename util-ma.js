(function (exported) {
  if (typeof define === 'function' && define.amd) {
    define(exported);
  } else if (typeof process !== 'undefined' &&
             typeof process.versions.node !== 'undefined') {
    module.exports = exported;
  } else {
    window.u = exported;
  }
})((function () {
  'use strict';
  // arrays
  function moveArrItem(a, f, t) { // array, from, to
    a.splice( t, 0, a.splice(f, 1)[0] );
  }
  // strings
  function isEmptyStr(v) {
    return typeof v === 'string'  &&  v.length === 0;
  }
  function substrBeforeLast(c, s) {
    return isStr(c) && isStr(s) ? s.substr( 0, s.lastIndexOf(c) ) : undefined;
  }
  function substrAfterLast(c, s) {
    return isStr(c) && isStr(s) ? s.substring(s.lastIndexOf(c) + 1) : undefined;
  }
  function substrBeforeFirst(c, s) {
    return isStr(c) && isStr(s) ? s.substr( 0, s.indexOf(c) ) : undefined;
  }
  function substrAfterFirst(c, s) {
    return isStr(c) && isStr(s) ? s.substring(s.indexOf(c) + 1) : undefined;
  }
  // numbers
  function isInt(n) {
    return isNum(n)  &&  n % 1 === 0;
  }
  function isNumOdd(n) {
    return isNum(n)  &&  (n % 2);
  }
  function negateNum(n) {
    return isNum(n) ? Math.abs(n) * -1 : undefined;
  }
  function positNum(n) {
    return isNum(n) ? Math.abs(n) : undefined;
  }
  function reverseNumSign(n) {
    if ( isNum(n) ) {
      if (n > 0) {
        return negateNum(n);
      } else if (n < 0) {
        return positNum(n);
      }
    }
  }
  function randInt(min, max) { // default between 0 and 10
    min = min ? Math.ceil(min) : 0;
    max = max ? Math.floor(max) : 10;
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randFloat(min, max) { // default between 0 and 10
    min = min ? min : 0;
    max = max ? max : 10;
    return Math.random() * (max - min) + min;
  }
  function toDecimalPlace(n, p) {
    return isNum(n) ? parseFloat( n.toFixed(p) ) : undefined;
  }
  // misc
  function isNull(v) {
    return typeof v === 'object' && v === null;
  }
  // objects
  function isObj(v) {
    return (
      v &&
      typeof v === 'object' &&
      typeof v !== null &&
      Object.prototype.toString.call(v) === '[object Object]'
    ) ? true : false;
  }
  function isEmptyObj(o) {
    if ( isObj(o) ) {
      return Object.getOwnPropertyNames(o).length === 0;
    }
    return false;
  }
  function extend() {
    var args = getArgs(arguments),
      len = args.length,
      arr = [],
      objects = [],
      first, last,
      result;

    if (len === 1) {
      first = args[0];
      if ( isArr(first)  &&  first.length > 1 ) {
        last = first.pop();
        objects = first;
      } else if ( isObj(first) ){
        result = Object.create(first);
      }
    } else if (len === 2) {
      first = args[0];
      last = args[len-1];
      if ( isObj(first) ) {
        result = Object.create(first);
      }
    } else if (len > 2) {
      last = args.pop();
      objects = args;
    }

    if (objects.length !== 0) {
      arr.push( {} );
      objects.forEach(function (el, i) {
        if ( isObj(el) ) {
          Object.keys(el).forEach(function (k) {
            arr[i][k] = el[k];
          });
          arr.push( Object.create(arr[i]) );
        }
      });
      result = arr[arr.length-1];
    }

    if ( last && isObj(last) ) {
      Object.keys(last).forEach(function (key) {
        result[key] = last[key];
      });
    }
    return result;
  }
	
  return {
    isObj,
    isArr,
    getArgs,
    moveArrItem,
    isInt,
    negateNum,
    positNum,
    reverseNumSign,
    isNumOdd,
    randInt,
    randFloat,
    toDecimalPlace,
    isEmptyObj,
    isFn,
    isStr,
    isNum,
    isNAN,
    isBool,
    isUndef,
    isNull,
    isEmptyStr,
    objLength,
    substrBeforeLast,
    substrAfterLast,
    substrBeforeFirst,
    substrAfterFirst,
    extend
  };
})());

