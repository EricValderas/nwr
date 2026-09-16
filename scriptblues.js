
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
          if(randomScript==1){arrayTitle=jlhookerwhiskey}
          
          
          
                    
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

 const jlhookerwhiskey = [
        [
         "Boom boom - John Lee Hooker",
         "Boogie chillun’ - John Lee Hooker",
         "Dimples - John Lee Hooker",
         "I´m in the mood  - John Lee Hooker",
         "I love you honey  - John Lee Hooker",
         "Whiskey and wimmen  - John Lee Hooker",
         "I need some money  - John Lee Hooker",
         "Grinder man  - John Lee Hooker",

         "I'm going upstairs - John Lee Hooker",
         "Big legs, tight skirt - John Lee Hooker",
         "No more doggin - John Lee Hooker",
         "No shoes - John Lee Hooker",
         "Crawlin´ king snake - John Lee Hooker",
         "Frisco blues - John Lee Hooker",
         "It serves it right - John Lee Hooker",
         "Time is marching - John Lee Hooker",
        
        ],[
          "https://www.dropbox.com/scl/fi/44qt3c21qsx4lhnrtxbza/01-John-Lee-Hooker-Boom-Boom.mp3?rlkey=1ae3b7nlkh3ijrpoi4t2v8wlh&st=ewzm209h&dl=1",
          "https://www.dropbox.com/scl/fi/0ru759c7ghhob1cxebgpb/02-John-Lee-Hooker-Boogie-Chillun.mp3?rlkey=kuf4d7ba4j9br7s9z6k7o2h91&st=ewrfzx7w&dl=1",
          "https://www.dropbox.com/scl/fi/82jmb7iaaxbnlbh3gcm9c/03-John-Lee-Hooker-Dimples.mp3?rlkey=s59llbximc5iptxorecawit5f&st=glnp988w&dl=1",
          "https://www.dropbox.com/scl/fi/5ynwrxeur89u5kk7ebxlr/04-John-Lee-Hooker-I-m-In-The-Mood.mp3?rlkey=yw5swy345v8yaru0www0mgwiq&st=obibxldc&dl=1",
          "https://www.dropbox.com/scl/fi/1e8qbzfuipih7bcq4myrf/05-John-Lee-Hooker-I-Love-You-Honey.mp3?rlkey=i98uq9sp0ypdgd538b9k1qdin&st=5kvva6nl&dl=1",
          "https://www.dropbox.com/scl/fi/aoqvqzioanf5lh23ejcr8/06-John-Lee-Hooker-Whiskey-And-Wimmen.mp3?rlkey=47cy72dq46lbe2ujq70mowpef&st=b6imaa5s&dl=1",
          "https://www.dropbox.com/scl/fi/i8ladlj7avrge7r3zr1e5/07-John-Lee-Hooker-I-Need-Some-Money.mp3?rlkey=cwkvg8qv8v7h1we4vkbw4qzrk&st=igjsepkb&dl=1",
          "https://www.dropbox.com/scl/fi/phdufleye45lnczndaljp/08-John-Lee-Hooker-Grinder-Man.mp3?rlkey=11lycd4enqscow4vtqwp14xlw&st=29f8i12i&dl=1",

          "https://www.dropbox.com/scl/fi/taochd9o3s9i2omq6k2tl/09-John-Lee-Hooker-I-m-Going-Upstairs.mp3?rlkey=p46j4el9gt0gxar1ycdhojtcy&st=biluf11a&dl=1",
          "https://www.dropbox.com/scl/fi/gl733uw348sl74wikarft/10-John-Lee-Hooker-Big-Legs-Tight-Skirt.mp3?rlkey=j4bc42isdutoil8jsrs79dgx0&st=7nc779uk&dl=1",
          "https://www.dropbox.com/scl/fi/wq40gggq3ka7pgjj8y2fi/11-John-Lee-Hooker-No-More-Doggin.mp3?rlkey=yqs0c58kqbsu3tg7f4n1ib3bt&st=xwd93sjt&dl=1",
          "https://www.dropbox.com/scl/fi/lu1633cerh2gt9xa25kui/12-John-Lee-Hooker-No-Shoes.mp3?rlkey=7e3u1uxez6s0fxn421elgudrq&st=vqqlx87i&dl=1",
          "https://www.dropbox.com/scl/fi/hl1h50uznqtptbql0u5l8/13-John-Lee-Hooker-Crawlin-King-Snake.mp3?rlkey=k5h0kaftuicis7rcmikf303nn&st=0ovpm08w&dl=1",
          "https://www.dropbox.com/scl/fi/ic6bh2nxpt0d1ns87yvq9/14-John-Lee-Hooker-Frisco-Blues.mp3?rlkey=tcjtsrm257ybtq507blklh2m4&st=3tuj2pvl&dl=1",
          "https://www.dropbox.com/scl/fi/kqdr0rn1umvi5w6ksq6wc/15-John-Lee-Hooker-It-Serves-Me-Right.mp3?rlkey=z815ov2w8zojkwgxqgk054zno&st=0mru6ofd&dl=1",
          "https://www.dropbox.com/scl/fi/r7mxepqitosuoozi2aep7/16-John-Lee-Hooker-Time-Is-Marching.mp3?rlkey=p3c55wlc8l3n65zzqgiicm481&st=dxstt3ys&dl=1",
          
        ]
      ,[
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",

        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        "https://www.dropbox.com/scl/fi/ciaj1x7hikmpjm4qs3fw2/jlhookerwhiskey.jpg?rlkey=0uqde3o9nfodxurtp8hkprzcw&st=1hz6yx1u&dl=1",
        
       
      ] 
      ];
      