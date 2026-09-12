

document.getElementById("worldImage1").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };  
document.getElementById("worldImage2").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage3").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage4").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage5").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage6").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage7").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage8").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  };   
document.getElementById("worldImage9").onclick = function() {window.open("https://ericvalderas.github.io/nwr/world.html","_self");  }; 

document.getElementById("punkImage1").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage2").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage3").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage4").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage5").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage6").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage7").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage8").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage9").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage10").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage11").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage12").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage13").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 
document.getElementById("punkImage14").onclick = function() {window.open("https://ericvalderas.github.io/nwr/punk.html","_self");  }; 



const audioElement = document.querySelector("audio");
var song = document.getElementById("myAudio");
let arrayTitle =[[],[],[]];
let randomScript = 0;
let randomNumber = 0;
let musicBego = false;
let kaaosBoolean = false;
let priceDesc = document.getElementById('price');

window.addEventListener('load', () => {
  const loader = document.getElementById('pantalla-carga');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 100); // Coincide con la transición de CSS
});


  
        
