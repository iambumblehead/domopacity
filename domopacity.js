// Filename: domopacity.js  
// Timestamp: 2013.12.18-20:49:14 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

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
  } else if ('filter' in s) {
    p = function (elem, percent) {
      elem.style.filter = 'alpha(opacity=:o)'.replace(/:o/, percent * 100);
    };
    p.rm = function (elem) {
      elem.style.filter = '';
    };
  } else {
    p = deffn;
    p.rm = deffn;
  }
  
  return p;

}());
