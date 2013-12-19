// Filename: domopacitytest.js  
// Timestamp: 2013.12.18-20:48:10 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: domopacity.js

var domopacitytest = {
  init : function () {
    var elem = document.getElementById('Block');

    domopacity(elem, .50);
    domopacity.rm(elem);
    domopacity(elem, .30);
  }
};
