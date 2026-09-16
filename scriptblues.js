
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
  
          randomScript = Math.floor(Math.random()*4);
          if(randomScript==0){arrayTitle = bobandlollipops};
          
          
          
                    
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

        

       const bobandlollipops = [
    [
       "Are you ever coming home - Little Bob and the Lollipops",
       "I got loaded - Little Bob and the Lollipops",
       "Look Out Mr. Heartache - Little Bob and the Lollipops",
       "My heart´s on fire - Little Bob and the Lollipops",
       "Nobody but you - Little Bob and the Lollipops",
       "So in need - Little Bob and the Lollipops",
       "Stop - Little Bob and the Lollipops",
       "The high road - Little Bob and the Lollipops",
       "The Way It's Got To Be - Little Bob and the Lollipops",
       "With these hands - Little Bob and the Lollipops",
        
       
    ],
    [
        "https://www.dropbox.com/scl/fi/qm7iunct42ccn8kbqpo4j/05-Little-Bob-and-the-Lollipops-Are-You-Ever-Coming-Home.mp3?rlkey=8j35mzi0m92ounblpdfpbbs9s&st=kyr5v9vy&dl=1",
        "https://www.dropbox.com/scl/fi/fj7z0y04boxgfc7oyqhgp/02-Little-Bob-and-the-Lollipops-I-Got-Loaded.mp3?rlkey=ezdw2pycrieaprnlwyjyja8vh&st=ozy5ehv3&dl=1",
        "https://www.dropbox.com/scl/fi/9y0mboifjjsiqeca6jkmi/09-Little-Bob-and-the-Lollipops-Look-Out-Mr.-Heartache.mp3?rlkey=u7j4b9txi3npgwavy5rykb674&st=glv6ty4t&dl=1",
        "https://www.dropbox.com/scl/fi/plp1ct63p6zzw1d4srcw6/04-Little-Bob-and-the-Lollipops-My-Heart-s-On-Fire.mp3?rlkey=drftu6kpkic7xrf56ryy5mbmf&st=1mvw0hrm&dl=1",
        "https://www.dropbox.com/scl/fi/6r4ye73pynn539rbfipwd/01-Little-Bob-and-the-Lollipops-Nobody-But-You.mp3?rlkey=muug9jgoacwpyto84db1zj9g0&st=jkoalc19&dl=1",

        "https://www.dropbox.com/scl/fi/robk9vmm1dkqxvgkomyfb/06-Little-Bob-and-the-Lollipops-So-In-Need.mp3?rlkey=zltzelczl31nfx24g99pp9djn&st=7htcbx18&dl=1",
        "https://www.dropbox.com/scl/fi/zgktga5gcsi6xepwv2wn6/10-Little-Bob-and-the-Lollipops-Stop.mp3?rlkey=folghkhsix6mqbwu76ygyad5z&st=i0b1r83e&dl=1",
        "https://www.dropbox.com/scl/fi/rf3l1aoonh6s49jeiizeq/08-Little-Bob-and-the-Lollipops-The-High-Road.mp3?rlkey=s66v5cgsef32d00q3qsh9o6gc&st=hznefksu&dl=1",
        "https://www.dropbox.com/scl/fi/xld8zqxebsrz2r7fru5w2/03-Little-Bob-and-the-Lollipops-The-Way-It-s-Got-To-Be.mp3?rlkey=cgthzxf7nq73t178zgzgoxr53&st=vjr5lsv5&dl=1",
        "https://www.dropbox.com/scl/fi/kw8cz3rxg9scokdplt1w8/07-Little-Bob-and-the-Lollipops-With-These-Hands.mp3?rlkey=oa29yso1c1omlg47vlt9w8l6x&st=aw1js7px&dl=1",
    ],  
    [
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",

        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
        "https://www.dropbox.com/scl/fi/2mgolka1eftz7z7c9w0il/littlebobandlollipops.jpg?rlkey=01q9snmf4dqcx0thkx3rcete8&st=487w1dua&dl=1",
     
    ]
];
      