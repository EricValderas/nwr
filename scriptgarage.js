
document.getElementById("next").onclick = function() {  functionNext(); };  
  

const audioElement = document.querySelector("audio");
let arrayTitle =[[],[],[]];
let randomScript = 0;
let randomNumber = 0;
let Portada = document.getElementById("portada");
let priceDesc = document.getElementById('price');


window.addEventListener('load', () => {
  const loader = document.getElementById('pantalla-cargaw');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 100); // Coincide con la transición de CSS
});

function functionNext(){
  
  BluesFunction();

  if ("mediaSession" in navigator) {
       navigator.mediaSession.setActionHandler("nexttrack", () => {

        BluesFunction();
  
  });
  }

  audioElement.addEventListener(
        "ended",
        () => 
      {
        BluesFunction();
      },
        
      );


 }



   function BluesFunction(){
  
          randomScript = Math.floor(Math.random()*1);

          
          if(randomScript==0)
                  {
                    arrayTitle = buskingProblems,
                    randomNumber = Math.floor(Math.random()*arrayTitle[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: arrayTitle[0][randomNumber],
                    artist: "Nervous Wreck Radio - Garage",
                    album: "",
                    artwork: [{ src: arrayTitle[2][randomNumber] }],
                  });
          
                    audioElement.src= arrayTitle[1][randomNumber];
                    audioElement.play();
                    document.title = arrayTitle[0][randomNumber];
                    priceDesc.innerHTML = arrayTitle[0][randomNumber];
                    Portada.src = arrayTitle[2][randomNumber];
            
          
                }

            
        }

        

         const buskingProblems = [
        [
         "Haircut - Lady Banana",
        "Watermelon - Lady Banana",
        "Pepe - Lady Banana",
        "Tally Ho - Lady Banana",
        ],[
          "https://www.dropbox.com/scl/fi/w6q4nx5smbwsr4mmiks7w/01-LADY-BANANA-Haircut.mp3?rlkey=q7wpyh6ylx9hlqeanko4678ez&st=x613bq0s&dl=1",
          "https://www.dropbox.com/scl/fi/oyr6znhdb133bnromv9kc/02-LADY-BANANA-Watermelon.mp3?rlkey=wv3pfnygc4qjzyqahir04zcfo&st=nr0yrrq9&dl=1",
          "https://www.dropbox.com/scl/fi/2h9ik4qv2nu8goxjz3eeg/03-LADY-BANANA-Pepe.mp3?rlkey=fdl7oks1b0uqi1ge8x9aos55e&st=jra4fwhh&dl=1",
          "https://www.dropbox.com/scl/fi/bjbioo1f12vu1wqm4qf83/04-LADY-BANANA-Tally-Ho.mp3?rlkey=d0w03rk7xiw8id8fkbi12p2o0&st=rjm4u90v&dl=1",
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/6nqptw5jdv2mznf62kieu/buskingProblems.jpg?rlkey=w9ul0wn2fk8xujjptlq654343&st=5bel1027&dl=1",
        "https://www.dropbox.com/scl/fi/6nqptw5jdv2mznf62kieu/buskingProblems.jpg?rlkey=w9ul0wn2fk8xujjptlq654343&st=5bel1027&dl=1",
        "https://www.dropbox.com/scl/fi/6nqptw5jdv2mznf62kieu/buskingProblems.jpg?rlkey=w9ul0wn2fk8xujjptlq654343&st=5bel1027&dl=1",
        "https://www.dropbox.com/scl/fi/6nqptw5jdv2mznf62kieu/buskingProblems.jpg?rlkey=w9ul0wn2fk8xujjptlq654343&st=5bel1027&dl=1",
      ] 
      ];
