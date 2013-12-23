// Filename: domopacity.js  
// Timestamp: 2013.12.22-20:53:15 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// if undefined, getComputedStyle should be defined by polyfill.
//
// the 'is' method for the IE branch is from Garret Smith's APE library:
//   - http://www.highdots.com/forums/javascript/get-opacity-value-291932.html
//   - https://github.com/GarrettS/ape-javascript-library

var domopacity = (function (s, p, deffn) {
  
  s = document.documentElement.style;
  deffn = function () {};

  if ('opacity' in s) {
    p = function (elem, percent) {
      elem.style.opacity = percent;
    };
    p.rm = function (elem) {
      elem.style.opacity = '';
    };
    p.is = function (elem) {
      return getComputedStyle(elem, null).getPropertyValue('opacity');
    };
  } else if ('filter' in s) {
    p = function (elem, percent) {
      elem.style.filter = 'alpha(opacity=:o)'.replace(/:o/, percent * 100);
    };
    p.rm = function (elem) {
      elem.style.filter = '';
    };
    p.is = function (elem) {
      var re = /\Wopacity\s*=\s*([\d]+)/i,
          cs = elem.currentStyle, f, o;

      if (typeof cs === 'object') {
        f = cs.filter;
        if (!re.test(f)) {
          return 1;
        } else {
          o = re.exec(f);
          return o[1]/100;      
        }
      };
    };
  } else {
    p = p.rm = p.is = deffn;
  }
  
  return p;

}());
