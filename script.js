document.addEventListener("DOMContentLoaded", function() {
  
  var foo = document.querySelector("div");
  var text = document.querySelector("span");
  var loop;
  window.running = false;
  document.querySelector("span footer").textContent = navigator.userAgent.match(/iPhone|iPad|iPod|Android/i) ? "(tap anywhere to start)" : "(press the spacebar to start)";
  
  document.addEventListener("touchend", function() {
    if (!window.running) start(), window.running = true;
    var borderWidth = parseFloat(foo.style.borderWidth.replace("vw", "")) - 2;
    foo.style.borderWidth = borderWidth + "vw";
  });
  
  document.addEventListener("keyup", function(e) {
    if ((e.keyCode || e.which) != 32) return;
    if (!window.running) start(), window.running = true;
    var borderWidth = parseFloat(foo.style.borderWidth.replace("vw", "")) - 2;
    foo.style.borderWidth = borderWidth + "vw";
  });
  
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });
  
  function start() {
    foo.style.borderWidth = 0;
    foo.style.borderColor = "";
    foo.style.transition = "";
    foo.style.animation = "none";
    
    var startTime = new Date();
    
    var loop = setInterval(function() {
      var borderWidth = parseFloat(foo.style.borderWidth.replace("vw", "")) + .1;
      foo.style.borderWidth = borderWidth + "vw";
      
      if (borderWidth >= 50) {
        clearInterval(loop);
        foo.style.borderWidth = "calc(" + (window.innerWidth / 2) + "px - 10vh)";
        foo.style.borderColor = "#c00";
        foo.style.transition = ".4s";
        window.running = false;
      }
      
      text.textContent = Math.round((new Date() - startTime) / 1000);
    }, 1);
  }
  
});
