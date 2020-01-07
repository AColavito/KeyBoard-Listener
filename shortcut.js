
//- SOLUTION 2 ----
injectListeners(window.top.document);


function injectListeners(d){
  d.addEventListener("keyup", function unicodeKeyCode(event) {
    var activeID = d.activeElement.id;
    if (event.keyCode === 110) {
      var myText = d.getElementById(activeID).value;
      myText = myText.replace('.',',');
      d.getElementById(activeID).value = myText;
    }
  });

  var frames = d.getElementsByTagName("IFRAME");

  //alert(frames.length);

  for (var i = 0; i < frames.length; i++)
    injectListeners(frames[i].contentDocument);

}


// - SOLUTION 0 ----

/*
window.top.document.addEventListener("keyup", function unicodeKeyCode(event) {
  var activeID = document.activeElement.id;
  if (event.keyCode === 110) {
      var myText = document.getElementById(activeID).value;
      myText = myText.replace('.',',');
      document.getElementById(activeID).value = myText;
  }
});
*/

/*
window.frameElement.contentDocument.addEventListener("keyup", function unicodeKeyCode(event) {
  var activeID = document.activeElement.id;
  if (event.keyCode === 110) {
      var myText = document.getElementById(activeID).value;
      myText = myText.replace('.',',');
      document.getElementById(activeID).value = myText;
  }
});
*/

// - SOLUTION 1 ---- chiamato da AL

/*
(function () {

  window.RegisterKeypress = function(keypress, changeWith){
    window.frameElement.contentDocument.addEventListener("keyup", function unicodeKeyCode(event) {
      var activeID = document.activeElement.id;
      if (event.keyCode === 110) {
          var myText = document.getElementById(activeID).value;
          myText = myText.replace('.',',');
          document.getElementById(activeID).value = myText;
      }
    });
  }
})();

*/



/* OTHER TEST

// window.onhashchange = function() { 
//   alert('hash changed in:' + location.hash);
// }


alert(window.location.href);
var FirstFrames = window.top.document.getElementsByTagName("IFRAME");
alert(FirstFrames.location.href);


// function hashHandler(){
//   this.oldHash = window.location.hash;
//   this.Check;

//   alert(window.location.hash);

//   var that = this;
//   var detect = function(){
//       if(that.oldHash!=window.location.hash){
//           alert("HASH CHANGED - new has" + window.location.hash);
//           that.oldHash = window.location.hash;
//       }
//   };
//   this.Check = setInterval(function(){ detect() }, 100);
// }

// var hashDetection = new hashHandler();



*/