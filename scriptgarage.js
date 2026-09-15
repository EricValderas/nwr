
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
  
          randomScript = Math.floor(Math.random()*2);

          
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
          if(randomScript==1)
                  {
                    arrayTitle=vivenWhau,
                    randomNumber = Math.floor(Math.random()*arrayTitle[0].length)
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

      const vivenWhau = [
    [
        "Bli blu bla - Wau y los Arrrghs!!!",
        "Copa, raya, paliza - Wau y los Arrrghs!!!",
        "Delincuente - Wau y los Arrrghs!!!",
        "Dicen - Wau y los Arrrghs!!!",
        "Help me find myself - Wau y los Arrrghs!!!",
        "It´s great - Wau y los Arrrghs!!!",
        "La cueva - Wau y los Arrrghs!!!",
        "No mientas más - Wau y los Arrrghs!!!",
        "Piedras - Wau y los Arrrghs!!!",
        "Viva Link Wray - Wau y los Arrrghs!!!",
        "¿Dónde están? - Wau y los Arrrghs!!!",
    ],
    [
        "https://www.dropbox.com/scl/fi/xvulmtimh4j0zrw4h4dth/02-Wau-y-los-Arrrghs-Bli-Blu-Bla.mp3?rlkey=m6o7cswxtrljcjwyjuncizwb8&st=vhpw28kf&dl=1",
        "https://www.dropbox.com/scl/fi/qit3rcdudlb76ftiss5th/07-Wau-y-los-Arrrghs-Copa-Raya-Paliza.mp3?rlkey=q7zw28jaw55j5qi1m044bz2kf&st=e2lo62ut&dl=1",
        "https://www.dropbox.com/scl/fi/nxg18vyu0zphrsfmxxprj/01-Wau-y-los-Arrrghs-Delincuente.mp3?rlkey=9pc4dolp3vtrnv3zw54nqa13y&st=y4j0ed0x&dl=1",
        "https://www.dropbox.com/scl/fi/k002ifwqd836e43ekv8xp/08-Wau-y-los-Arrrghs-Dicen.mp3?rlkey=g2ut3x3drcuk0l9in3p2zss6u&st=crb6q3yc&dl=1",
        "https://www.dropbox.com/scl/fi/vuhi2lpjgf9h0m0o024ys/10-Wau-y-los-Arrrghs-Help-Me-Find-Myself.mp3?rlkey=30c5pnciw11r144wigfu93m0x&st=9q0omgje&dl=1",
        "https://www.dropbox.com/scl/fi/sn0ey6279wqnj0rqyk5hv/04-Wau-y-los-Arrrghs-It-s-Great.mp3?rlkey=5vupiu5j10atni9bnpmb9d0aj&st=29f22jft&dl=1",
        "https://www.dropbox.com/scl/fi/dc9g7ebnjkzqfily1ff7w/05-Wau-y-los-Arrrghs-La-Cueva.mp3?rlkey=ah2oe2iorsdqg08ogia68s1m3&st=oyrh953b&dl=1",
        "https://www.dropbox.com/scl/fi/brosbdkevtt4o7lnp6ij2/06-Wau-y-los-Arrrghs-No-Mientas-Mas.mp3?rlkey=1w5fefzt0tqq8xy6b90m9hw1w&st=vktdpfpu&dl=1",
        "https://www.dropbox.com/scl/fi/bhbdpmzq1usmcmp06a6qp/09-Wau-y-los-Arrrghs-Piedras.mp3?rlkey=m5yv5q4hmu1c5kf6wpw21w87g&st=tuxz3edm&dl=1",
        "https://www.dropbox.com/scl/fi/8mn8rxrfstvdpltvtrvj0/11-Wau-y-los-Arrrghs-Viva-Link-Wray.mp3?rlkey=hmvooxzyhba11tkp0f703lc28&st=li5azarx&dl=1",
        "https://www.dropbox.com/scl/fi/jh0u074vs1m49cwhacew5/03-Wau-y-los-Arrrghs-Donde-Estan_.mp3?rlkey=tn4mksnhl3jx1lzi80jhoew2f&st=2e23wees&dl=1"

    ],
    [
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
        "https://www.dropbox.com/scl/fi/3669ua6wlnon79w2wzbro/vivenwuah.jpg?rlkey=ykj1ax5tc6u1sc4ot6rvlg80g&st=gjrr3gbz&dl=1",
    ],
]
