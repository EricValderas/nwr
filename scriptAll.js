
document.getElementById("next").onclick = function() {  functionNext(); };  
  

const audioElement = document.querySelector("audio");
var song = document.getElementById("myAudio");
let arrayTitle =[[],[],[]];
let randomScript = 0;
let randomNumber = 0;
let musicBego = false;
let kaaosBoolean = false;
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

  function parrillaKM(){};
  function parrillaBego(){};

  function parrilla(){
    BluesFunction();
  };


   function BluesFunction(){
  
          randomScript = Math.floor(Math.random()*34);

          if(randomScript==0){arrayTitle = bobandlollipops};
          if(randomScript==1){arrayTitle=jlhookerwhiskey}
          if(randomScript==2){arrayTitle=worldHour}
          if(randomScript==3){arrayTitle=dancingDevilsDjibuti}
          if(randomScript==4){arrayTitle=chambacu}
          if(randomScript==5){arrayTitle=jambuAmazonia}
          if(randomScript==6){arrayTitle=maratonico}
          if(randomScript==7){arrayTitle=lovarititirobin}
          if(randomScript==8){arrayTitle=cumbiadejuventud}
          if(randomScript==9){arrayTitle = buskingProblems};
          if(randomScript==10){arrayTitle = vivenWhau};
          if(randomScript==11){arrayTitle = theratsdesperatered};
          if(randomScript==12){arrayTitle = osees};
          if(randomScript==13){arrayTitle = punkHourExp};
          if(randomScript==14){arrayTitle = CriseCardiaque};
          if(randomScript==15){arrayTitle = zorrasAsignaturas};
          if(randomScript==16){arrayTitle = descanseenpazRDP};
          if(randomScript==17){arrayTitle = criminaltrapAnticimex};
          if(randomScript==18){arrayTitle = MOB47TillsDor};
          if(randomScript==19){arrayTitle = pipebomb};
          if(randomScript==20){arrayTitle = elcorazondelsapoImaginacion};
          if(randomScript==21){arrayTitle = otanjodeles};
          if(randomScript==22){arrayTitle = pussywhippedbikinikill};
          if(randomScript==23){arrayTitle = guerrasocial};
          if(randomScript==24){arrayTitle = txacoli};
          if(randomScript==25){arrayTitle = activemindstt};
          if(randomScript==26){arrayTitle = electricWar};
          if(randomScript==27){arrayTitle = trashmetal1};
          if(randomScript==28){arrayTitle = trashmetal2};
          if(randomScript==29){arrayTitle = yellowgoat};
          if(randomScript==30){arrayTitle = leyendatiempo};
          if(randomScript==31){arrayTitle = laniñadelapueblaimalways};
          if(randomScript==32){arrayTitle = lastkindwords};
          if(randomScript==33){arrayTitle = zaybx};
          
          
          
                    
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
           

  const chambacu = [
        [
         "Carino lindo - Aurita y su conjunto",
         "Chambacu - Aurita y su conjunto",
         "Eco de tambores - Aurita y su conjunto",
         "El vaquero - Aurita y su conjunto",
         "Festival en Guarare - Aurita y su conjunto",
         "Lamento de sirena - Aurita y su conjunto",
         "Las polleras - Aurita y su conjunto",
         "Me quiebro, me desbarato - Aurita y su conjunto",
         "Me siento desbaratar - Aurita y su conjunto",
         "Mompoxina - Aurita y su conjunto",
         "Puya tropicana - Aurita y su conjunto",
         "Soy la cumbia - Aurita y su conjunto",
        
        ],
        [
          "https://www.dropbox.com/scl/fi/jdnmdxq5sakj7tadhi9nd/carino-lindo.mp3?rlkey=l60q36p8sdhgq7x91peng10h2&st=hk5sl2x9&dl=1",
          "https://www.dropbox.com/scl/fi/mxmryqvjgrwfy3n9hl4zb/chambacu.mp3?rlkey=g1hypjmd8yb4cygxb8vi6iis9&st=ka6dffhd&dl=1",
          "https://www.dropbox.com/scl/fi/ulrbgxz2ov23d0dgywqcg/eco-de-tambores.mp3?rlkey=oz6ldqg1m87ep1nmymz7k85k0&st=2dx3znv2&dl=1",
          "https://www.dropbox.com/scl/fi/22a3j2yie018ow9g5wgxh/el-vaquero.mp3?rlkey=3c90kn5awaa7rmnsw3ty5xhmb&st=f8yh7l3q&dl=1",
          "https://www.dropbox.com/scl/fi/nnf1vhekrncuf0kd30zts/festival-en-guarare.mp3?rlkey=bduqe1q9ihskzringq8fhgvge&st=1iupdnkz&dl=1",
          "https://www.dropbox.com/scl/fi/icpgwlmma0zwxg36kvx9f/lamento-de-sirena.mp3?rlkey=oq93z3jlc2j6f4d5f24wvse9y&st=920tlk0s&dl=1",
          "shttps://www.dropbox.com/scl/fi/tg5wns763gc17kku7csbj/las-polleras.mp3?rlkey=tg41gfk3lbpg9y4do1u9sb447&st=ssjubmol&dl=1",
          "https://www.dropbox.com/scl/fi/35ctg9mkflz4bnf8ygp3d/me-quiebro-me-desbarato.mp3?rlkey=83gj22vpn97rnglhfout8i6k4&st=0sjtxe7o&dl=1",
          "https://www.dropbox.com/scl/fi/wfjlvx86pj6oa9n6bg43x/me-siento-desbaratar.mp3?rlkey=5pt6tm4vnssb5cg5gdred2vzx&st=gnggojbq&dl=1",
          "https://www.dropbox.com/scl/fi/r5r3yd65wphfc5q2eqwbc/mompoxima.mp3?rlkey=n8un012wvvclmlj4typ9eizx3&st=8ho86gze&dl=1",
          "https://www.dropbox.com/scl/fi/rstbejcutb3jes9v101tt/puya-tropicana.mp3?rlkey=pp1ky88lyfm4j1xv6x4q319ev&st=7ki6nu4l&dl=1",
          "https://www.dropbox.com/scl/fi/htb1wqmb8dpx8goynkoi3/soy-la-cumbia.mp3?rlkey=p9nl59bn35se6t3arslb5qd7l&st=nih8d6en&dl=1",
        ],
        [

        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
        "https://www.dropbox.com/scl/fi/guluifksqygo5veyd909l/chambacu.jpg?rlkey=72ujl4kzzbj2q6s77x7e6mlc1&st=xy8t3otm&dl=1",
       
      ] 
      ];

      const worldHour = [

        [

          "Kushimoto Bushi (Cumbia) -  Minyo Crusaders",
          "Hohai Bushi (Afro) -  Minyo Crusaders",
          "Otemoyan (Reggae) -  Minyo Crusaders",
          "Mamurogawa Ondo (Beguine) -  Minyo Crusaders",
          "Yasugi Bushi (Bolero) -  Minyo Crusaders",
          "Akita Nikata Bushi (Ethiopian Groove) -  Minyo Crusaders",
          "Toichin Bushi (Afro·funk) -  Minyo Crusaders",
          "Tanko Bushi (Boogaloo) -  Minyo Crusaders",
          "Aizu Bandaisan (Latin) -  Minyo Crusaders",
          "Sumo Jinku (A capella) -  Minyo Crusaders",

          "A Ritmo de Caramba - Ruca y El Quinde de Barbacoas",
          "África Negra - Ruca y El Quinde de Barbacoas",
          "Alaé Alaá - Ruca y El Quinde de Barbacoas",
          "Atochita - Ruca y El Quinde de Barbacoas",
          "Dale duro al bombo - Ruca y El Quinde de Barbacoas",
          "El Agua Turbia - Ruca y El Quinde de Barbacoas",
          "El Clavito de Pablito - Ruca y El Quinde de Barbacoas",
          "El Iragüilde - Ruca y El Quinde de Barbacoas",
          "Indirita - Ruca y El Quinde de Barbacoas",
          "La Brinca Brinca - Ruca y El Quinde de Barbacoas",
          "La Muluta - Ruca y El Quinde de Barbacoas",
          "Paz Verdadera - Ruca y El Quinde de Barbacoas",
          "Me Piden Currulao - Ruca y El Quinde de Barbacoas",
          "Rumba pa' Gozá - Ruca y El Quinde de Barbacoas",
         
          

          "Un destello diferente - Lucas y Marypaz",
          "Y la mañana nace - Lucas y Marypaz",
          "Estos hilos que yo enhebro - Lucas y Marypaz",
          "Pie que danza - Lucas y Marypaz",
       
        ],
        [
       
           // Mynyo Crusaders - Echoes

        "https://www.dropbox.com/scl/fi/x34ifg0uf1sms2ltf9pew/01-minyo-crusaders-Kushimoto-Bushi-Cumbia.mp3?rlkey=zykei7eydsf99wttem0p0u8p7&st=dkmamsx0&dl=1",
        "https://www.dropbox.com/scl/fi/8ftm1h024zbmeoz12uchy/02-minyo-crusaders-Hohai-Bushi-Afro.mp3?rlkey=njbsefxogely3ozvydblryoe0&st=nywwfpzz&dl=1",
        "https://www.dropbox.com/scl/fi/r7imi25cnubqpea8poiej/03-minyo-crusaders-Otemoyan-Reggae.mp3?rlkey=vq9t4ey22i83l0bngui6mfqps&st=sg7caxc6&dl=1",
        "https://www.dropbox.com/scl/fi/euxegnf9c205s8odsk1nk/04-minyo-crusaders-Mamurogawa-Ondo-Beguine.mp3?rlkey=mjtrv0haanlr8klkwwp9wjkaj&st=62z1zc1f&dl=1",
        "https://www.dropbox.com/scl/fi/y4hpueqeiexinra1bzxkt/05-minyo-crusaders-Yasugi-Bushi-Bolero.mp3?rlkey=vhzynmb63ttblb75b9fmjt5ir&st=cb1ewin0&dl=1",
        "https://www.dropbox.com/scl/fi/ni199b4smsbux6zpirc0p/06-minyo-crusaders-Akita-Nikata-Bushi-Ethiopian-Groove.mp3?rlkey=ndt5go0fcszeg6ykeuyy4zcln&st=oa8o7iay&dl=1",
        "https://www.dropbox.com/scl/fi/5cx6bwi6ld46rlb5ifs0s/07-minyo-crusaders-Toichin-Bushi-Afro-funk.mp3?rlkey=su4xt4hkqvqmr6i0g8qejqpk1&st=41lqqfxp&dl=1",
        "https://www.dropbox.com/scl/fi/sn7no1zaldr7dqb6ujgj8/08-minyo-crusaders-Tanko-Bushi-Boogaloo.mp3?rlkey=wss4m7rfcgbcer3waygayloir&st=pla0xekl&dl=1",
        "https://www.dropbox.com/scl/fi/0bz07tpz0qzvcwv95bbqm/09-minyo-crusaders-Aizu-Bandaisan-Latin.mp3?rlkey=gxdsn6r26hx483h6l9kuuut04&st=nqpo2wf5&dl=1",
        "https://www.dropbox.com/scl/fi/p8i9ox6ymmgnm97zopon1/10-minyo-crusaders-Sumo-Jinku-A-capella.mp3?rlkey=7fwzeakoqdjg0wexgdoep6ej2&st=velrsm4i&dl=1",

        "https://www.dropbox.com/scl/fi/jpapasmf58rgkl093k902/BandCampDownloader.app-A-ritmo-de-caramba-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=3763cgitpb2ka9hb2puvy7aaq&st=0edvnqv2&dl=1",
        "https://www.dropbox.com/scl/fi/v10i9bv6fp9flakafclnt/BandCampDownloader.app-Africa-negra-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=6ktxjt9uq3e5wgil7pq6upo72&st=0439ivcj&dl=1",
        "https://www.dropbox.com/scl/fi/vju0u18s4daqquxx01c3m/BandCampDownloader.app-Ala-ala-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=m9sj0jdu7twc8v0mm3t5299kv&st=8iwhjqn9&dl=1",
        "https://www.dropbox.com/scl/fi/jsb6sq2p29il6nlc0xx20/BandCampDownloader.app-Atochita-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=00qc7xxu9bgmprjh269mwpjc1&st=xw5cmgjk&dl=1",
        "https://www.dropbox.com/scl/fi/mpcam0b6tma6njkah2fhi/BandCampDownloader.app-Dale-duro-al-bombo-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=0gmjhv9fbgsqloc53glwa0zat&st=vc7wm7x5&dl=1",
        "https://www.dropbox.com/scl/fi/hispj7cizthzah8zu3asj/BandCampDownloader.app-El-agua-turbia-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=06qirderoajoluia3qtw7yqgg&st=d0054pk4&dl=1",
        "https://www.dropbox.com/scl/fi/hayqpwhui9wwxrhb82pr6/BandCampDownloader.app-El-clavito-de-Pablito-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=wzs5kznlv2kb286jvor7ji4gk&st=4i8k3iw0&dl=1",
        "https://www.dropbox.com/scl/fi/4g1z5njyfv6xr0gcflnfw/BandCampDownloader.app-El-irag-ilde-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=jq8rmwrd55y8egneo55jizpyt&st=q5xebubf&dl=1",
        "https://www.dropbox.com/scl/fi/9i1s7au1hss5n5twarcce/BandCampDownloader.app-Indirita-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=abyhnebctxhj5zbwt6jmvvnmq&st=9fj2us2i&dl=1",
        "https://www.dropbox.com/scl/fi/ze713y0oi59osdefo2ub7/BandCampDownloader.app-La-brinca-brinca-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=qvif3nf76p2kaajsyjzk6plhb&st=520z9d7x&dl=1",
        "https://www.dropbox.com/scl/fi/apkp4a7n3x6rw2a2rrebe/BandCampDownloader.app-La-muluta-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=dysrtsel0t9449wvstp21bn3a&st=4ezi1xz3&dl=1",
        "https://www.dropbox.com/scl/fi/am7uvdi3fgh84c2nf33wi/BandCampDownloader.app-La-paz-verdadera-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=znek5yjff0g2qjsmkr9cm9aos&st=y7lzts2l&dl=1",
        "https://www.dropbox.com/scl/fi/fkh9lftmslfxozedlac1z/BandCampDownloader.app-Me-piden-currulao-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=xufaiomsux861xjlkx0gws79f&st=59rp1sr4&dl=1",
        "https://www.dropbox.com/scl/fi/7gsww907bshb9jgrg2sw3/BandCampDownloader.app-Rumba-pa_-goz-Ruca-_-El-Quinde-de-Barbacoas.mp3?rlkey=mmz65awbh0ag3spkv11irylqn&st=3bqijfsb&dl=1",

      "https://www.dropbox.com/scl/fi/65mu38q1226w2clxju3gz/01-Lucas-y-Marypaz-Un-destello-diferente.mp3?rlkey=c4yyxm2pwghj8kaz63kvwe4z9&st=avx2ig38&dl=1",
      "https://www.dropbox.com/scl/fi/1wej21qskf4hv3w1gzcfr/02-Lucas-y-Marypaz-Y-la-ma-ana-nace.mp3?rlkey=hz5klrl744bee2k4i9c3kj6jz&st=v8rgjnbs&dl=1",
      "https://www.dropbox.com/scl/fi/sxjjodqowxaychdpb57cj/03-Lucas-y-Marypaz-Estos-hilos-que-yo-enhebro.mp3?rlkey=n6d9m72f3gzjnuxn6oje8paa4&st=n9auq7ai&dl=1",
      "https://www.dropbox.com/scl/fi/7l4m8p2vifiksiyfo8r05/04-Lucas-y-Marypaz-Pie-que-danza.mp3?rlkey=s0s5q2555d8kw5ywys0hfay1n&st=ejaepxo9&dl=1",
          
          
        ],
        [
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",
          "https://www.dropbox.com/scl/fi/qz92f9a113dbmmy46w0mq/echoesjapanmynyocrusaders.jpg?rlkey=zvwfoacwittbdj01gybtf1fkd&st=g5nqg6bu&dl=1",

          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",
          "https://www.dropbox.com/scl/fi/ja6tqz5249fm9hjcsq2fk/rucayelquindedebarbacoas.jpg?rlkey=5esmljg1jdsacs2zclpuxfvwh&st=6qp0qov6&dl=1",

          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",
          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",
          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",
          "https://www.dropbox.com/scl/fi/yde9yrs7sr6t120j8e4z5/tawamuyu.jpg?rlkey=aw6zz6h25w0phng1h46zewc8o&st=i8j7ywfm&dl=1",

        ]
      ];

      const dancingDevilsDjibuti= [
        [
         "Alto's Interlude - Groupe RTD",
         "Asma Omar - Buuraha U Dheer",
         "Asma Omar - Raga Kaan Ka'Eegtow",
         "Danse Tradiotionnelle - Wiil Wille",
        "Guessod Abdo Hamargod - Kuusha Caarey",
        "Guessod Abdo Hamargod- liso Daymo",
        "Hasan Omar Housein - Uurkan Kaadonaya",
        "Hassan Omar Housein - Halkaasad Dhigi Magtiisa",
        "Hassan Omar Housein - Raani",
        "Hassan Omar Housein - Suuban",
        ],[
       
    "https://www.dropbox.com/scl/fi/tw2guz48g56pq005bgsmn/Alto-s-Interlude.mp3?rlkey=so55ar5yht51m5mw8vqycuhoq&st=ya9ymbnd&dl=1",
    "https://www.dropbox.com/scl/fi/zlqfdxwsqk6gess55z0yg/Asma-Omar-Buuraha-U-Dheer.mp3?rlkey=hcrv3j94vv6qz5a2rgi4hw1pz&st=ie9cacke&dl=1",
    "https://www.dropbox.com/scl/fi/hotgdrx33wen6sr8gcikb/Asma-Omar-Raga-Kaan-Ka-Eegtow.mp3?rlkey=oudpbfb1pbz1vbtngfxwlwhk9&st=oqyvu408&dl=1",
    "https://www.dropbox.com/scl/fi/58h1vs6vedqjksr2sb7xa/Danse-Tradiotionnelle-Wiil-Wille.mp3?rlkey=x94w485lsugbztkmef7fpdgco&st=8zrp6g6u&dl=1",
    "https://www.dropbox.com/scl/fi/mbgc29ixx5av273rj0jhy/Guessod-Abdo-Hamargod-Kuusha-Caarey.mp3?rlkey=kqesch7k9dxt3bma0warn43ey&st=xd5s6t6o&dl=1",
    "https://www.dropbox.com/scl/fi/9mdqt8g24rzg8c0fixvky/Guessod-Abdo-Hamargod-liso-Daymo.mp3?rlkey=z03oev378u5j9fz44mjpysyx6&st=vlcd6jpm&dl=1",
    "https://www.dropbox.com/scl/fi/6csp7in8lgcl3nwx6yhrw/Hasan-Omar-Housein-Uurkan-Kaadonaya.mp3?rlkey=90rlvcq2e8fqj38sjosn6i4tv&st=o71jb965&dl=1",
    "https://www.dropbox.com/scl/fi/u0e57gh11z178pie75k82/Hassan-Omar-Housein-Halkaasad-Dhigi-Magtiisa.mp3?rlkey=ovgdsqru1nu0n1o63veisfqta&st=fpiceafp&dl=1",
    "https://www.dropbox.com/scl/fi/2twyg0si5emqc0v0ldvu9/Hassan-Omar-Housein-Raani.mp3?rlkey=chqfyo3tvshqhojk9qo5yc2kh&st=dbs403tq&dl=1",
    "https://www.dropbox.com/scl/fi/3bdqmy3ev4mptwys18mjc/Hassan-Omar-Housein-Suuban.mp3?rlkey=p94zjgw386rlc3bwj3ek0pjfr&st=0o06fah1&dl=1",
         
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",

        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
        "https://www.dropbox.com/scl/fi/udt1hej9tzkkemik2h446/dancingdevils.jpeg?rlkey=bnmf0rbaqlivhjgz4wqr9ys5x&st=tfwn0uya&dl=1",
       
        
      ] 
      ];

      const jambuAmazonia = [
        [
            "Lundun da yaya - Grupo da pesada",
            "Võa Andorinha - Grupo da pesada",
            "Janjão - Meu Barquinho",
            "Magalhães e Sua Guitarra - Xangô",
            "Messias Holanda - Carimbó Da Pimenta",

            "Messias Holanda - O Galo Canta, O Macaco Assovia",
            "Mestre Cupijó e Seu Ritmo - Despedida",
            "O Conjunto De Orlando Pereira - Carimbó Para Yemanjá",
            "O Conjunto De Orlando Pereira - Maruda",
            "Os Muiraquitãns - A Misturada",

            "Os Quentes de Terra Alta - Praia Do Algodoal",
            "Pinduca - Coco Da Bahia",
            "Pinduca - Pai Xangô",
            "Pinduca - Vamos Farrear",
            "Verequete e O Conjunto Uirapurú - Da Garrafa uma pinga",

            "Verequete e O Conjunto Uirapurú - Mambo Assanhado",
            "Vieira e Seu Conjunto - Lambada Da Baleia",
            "Vieira e Seu Conjunto - Melô Do Bode",
        ],
        [
            "https://www.dropbox.com/scl/fi/r3fls0st0zfisz7tq40go/grupo-da-pesada-lundun-da-yaya.mp3?rlkey=wckki35odhqmhjykl8f8x62mw&st=4ppvw5qm&dl=1",
            "https://www.dropbox.com/scl/fi/7kmvcmruuthl2v6ahopaq/grupo-da-pesada-v-a-andorinha.mp3?rlkey=ws5ev7itx0k5z90ts13zbvq0h&st=jyju7ai4&dl=1",
            "https://www.dropbox.com/scl/fi/wrc3pf6cu5a2fclncg8f3/janj-o-meu-barquinho.mp3?rlkey=lg4rqrdl4jksa3fla1fa6v3tl&st=6gle55on&dl=1",
            "https://www.dropbox.com/scl/fi/oove275aap133u01lrfej/magalh-es-e-sua-guitarra-xang.mp3?rlkey=7e14xd8bzt7768x67f1y72t4k&st=kx2bp3ev&dl=1",
            "https://www.dropbox.com/scl/fi/rwzu8ts33zkzmbdagmxpi/messias-holanda-carimb-da-pimenta.mp3?rlkey=6hxi4s1w68nedxovmg8nzkxxm&st=b3n2yso5&dl=1",

            "https://www.dropbox.com/scl/fi/94reg0bnpt3kj6vyierug/messias-holanda-o-galo-canta-o-macaco-assovia.mp3?rlkey=ugoyeza2yl10x8e2991zs6v7b&st=9368m8x9&dl=1",
            "https://www.dropbox.com/scl/fi/sj9xbv3zinb8qaf7cvcwf/mestre-cupij-e-seu-ritmo-despedida.mp3?rlkey=tuj8tjbf003zv674tist5z236&st=1mn08bjb&dl=1",
            "https://www.dropbox.com/scl/fi/jj6ofd35m4ww0u6ttmnr0/o-conjunto-de-orlando-pereira-carimb-para-ye.mp3?rlkey=uvk9smprjeymredk2t3raw1zm&st=xc93ngk9&dl=1",
            "https://www.dropbox.com/scl/fi/k46gk6pym2wbkzabn2dnw/o-conjunto-de-orlando-pereira-maruda.mp3?rlkey=3v6vy5tf11fm1433va5s4xvh6&st=ckgi913e&dl=1",
            "https://www.dropbox.com/scl/fi/u4uwmw0qodb1db6kygold/os-muiraquit-ns-a-misturada.mp3?rlkey=edw6qst2a7qlaabrnat58hkha&st=ga0bl3ze&dl=1",

            "https://www.dropbox.com/scl/fi/xntlcd75b2ea5ddxnxj9a/os-quentes-de-terra-alta-praia-do-algodoal.mp3?rlkey=ox1u983tttismyof6no4xr9wx&st=0fw7n85l&dl=1",
            "https://www.dropbox.com/scl/fi/4s2pd30xvuuypbtay84dx/pinduca-coco-da-bahia.mp3?rlkey=px0bzu4u3ww078etap1b2mrjd&st=7bqu3iy3&dl=1",
            "https://www.dropbox.com/scl/fi/qgtb5srar55jk9m3nbu5p/pinduca-pai-xang.mp3?rlkey=avyf5nthwd2iu72vtgdv93v5k&st=nsexu2ob&dl=1",
            "https://www.dropbox.com/scl/fi/ehz20nj3axloyg6svkp55/pinduca-vamos-farrear.mp3?rlkey=sm2x2kzoh0d6iol4swlagz45c&st=ezzf7ken&dl=1",
            "https://www.dropbox.com/scl/fi/a3zx2ucfpd9pfk9zsm835/verequete-e-o-conjunto-uirapur-da-garrafa-um.mp3?rlkey=ju8rcs5r9bi3tlopc4d864kmw&st=y94s4ppp&dl=1",

            "https://www.dropbox.com/scl/fi/pet800rqwoolshxpbappr/verequete-e-o-conjunto-uirapur-mambo-assanha.mp3?rlkey=hbhx270ss384l7ppk4anmii67&st=4e7ix3sl&dl=1",
            "https://www.dropbox.com/scl/fi/6x7x14cum2torv5eozfwl/vieira-e-seu-conjunto-lambada-da-baleia.mp3?rlkey=ctayiucqy2975lyhcwuxzzgws&st=pw60gmed&dl=1",
            "https://www.dropbox.com/scl/fi/bqfds7a66d763vql4mrbw/vieira-e-seu-conjunto-mel-do-bode.mp3?rlkey=yv6g3oycnylwboaveabr70jt8&st=1381c076&dl=1",
        ],
        [
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",

            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",

            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",

            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            "https://www.dropbox.com/scl/fi/e1768f7h8t0577gnu7t7l/jambuAmazonia.jpg?rlkey=ylw5wjcamhalr3soafz2sjiwh&st=mv4rpyo4&dl=1",
            
            
        ],
];

//Disco7

const maratonico = [
    [
        
        "Cangrejeando en el apocalipsis - La Sonora Mazurén",
        "Cumbia de mochila - La Sonora Mazurén",
        "Cumbia Indigena - La Sonora Mazurén",
        "El 4 y el 5 - La Sonora Mazurén",
        "El zambito rumbero - La Sonora Mazurén",
        "Intro - La Sonora Mazurén",
        "Tiro al blanco - La Sonora Mazurén",
        "Todos juntos - La Sonora Mazurén",
        "Vida Mía Corazón - La Sonora Mazurén",
    ],
    [
        
        "https://www.dropbox.com/scl/fi/e3w2iyxaiqfxl2mxzqkxt/03-La-Sonora-Mazur-n-La-Sonora-Mazur-n-Cangrejeando-en-el-apocal-psis.mp3?rlkey=fudq2r3b2vy7ya4ljqw8b6qnu&st=mv21mkjv&dl=1",
        "https://www.dropbox.com/scl/fi/gk6fa6rji16a1hmy4pfas/07-La-Sonora-Mazur-n-Cumbia-de-Mochila.mp3?rlkey=34k6i3c52e36h961bpox94cky&st=cm5x5l9r&dl=1",
        "https://www.dropbox.com/scl/fi/loz0tp0t2xih1v9edezal/09-La-Sonora-Mazur-n-La-Sonora-Mazur-n-Cumbia-Ind-gena.mp3?rlkey=zz2utlb3py34ngltasxqqdnvb&st=y46u9g2y&dl=1",
        "https://www.dropbox.com/scl/fi/lluo900v8db727m9qwdt4/05-La-Sonora-Mazur-n-El-4-y-5.mp3?rlkey=9nujo8185zvsqe5ms0jblpsch&st=bzhcgtuc&dl=1",
        "https://www.dropbox.com/scl/fi/wckma6hli3p11kt2jwcrx/04-La-Sonora-Mazur-n-La-Sonora-Mazur-n-Zambito-rumbero.mp3?rlkey=uvl9ct3hy9zy6169sqmb73x94&st=8getjom7&dl=1",
        "https://www.dropbox.com/scl/fi/12xu3i58a5ktrfsnwxsp2/01-La-Sonora-Mazur-n-Intro.mp3?rlkey=wqsps0meesl1htq3qy81k9o53&st=w8i2w4vj&dl=1",
        "https://www.dropbox.com/scl/fi/ohyuxq20qyt7lnchifs60/02-La-Sonora-Mazur-n-Tiro-al-blanco.mp3?rlkey=ynwajzka8wu75zi4sgy6doljp&st=7t3fjr4o&dl=1",
        "https://www.dropbox.com/scl/fi/tby5zocqvmi33m9f87ku4/08-La-Sonora-Mazur-n-Todos-Juntos.mp3?rlkey=ir10nki5v1z5479b7r6psqvbx&st=1iihwzid&dl=1",
        "https://www.dropbox.com/scl/fi/ivu7ekveazjemcq24i6op/06-La-Sonora-Mazur-n-La-Sonora-Mazur-n-Vida-m-a-coraz-n.mp3?rlkey=cvgyfcowesqvbxrrvojh11a32&st=eteqtv0a&dl=1",
    ],
    [
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
        "https://www.dropbox.com/scl/fi/z7ccsmtch8r4wnvx4suvz/maratonicosandungonvol1.jpg?rlkey=qxak84a9lt4cb65iw6jbe0kog&st=30gwf0yj&dl=1",
    ],
]

// Disco 8

const lovarititirobin = [
        [
         "Jarna - Titi Robin",
         "Kicsi Kicsi Kém - Titi Robin",
         "L'aube Impatiente - Titi Robin",
         "La petite mer - Titi Robin",
         "Lovari - Titi Robin",
         "Ma Gavali Rumba - Titi Robin",
         "Mehdi - Titi Robin",
         "Memed Ve Seyrane - Titi Robin",
         "Sandhya - Titi Robin",
         
         
        
        ],
        [
          "https://www.dropbox.com/scl/fi/xbmxijqe2nuybbjx5hqkw/08-Titi-Robin-Jarna.mp3?rlkey=3e4miwwl6du6qxdkztcazr427&st=6d8fmp9m&dl=1",
          "https://www.dropbox.com/scl/fi/m3d7y6w7mnzclhjqemxya/04-Titi-Robin-Kicsi-Kicsi-K-m-Nu-No.-1.mp3?rlkey=8xa8vyfkig2pmkrlki54c6gk2&st=dhmou0cb&dl=1",
          "https://www.dropbox.com/scl/fi/oodu04e9jgrxyq85gf02j/01-Titi-Robin-L-aube-Impatiente.mp3?rlkey=3k5su3r1i8of1ypkpkmv9n4rg&st=gk0mwlkf&dl=1",
          "https://www.dropbox.com/scl/fi/s8i02uhozshhk8nvbyt38/05-Titi-Robin-La-Petite-Mer.mp3?rlkey=2vb4ygf8n3vxeplq8sw0n9r3z&st=95gyltnr&dl=1",
          "https://www.dropbox.com/scl/fi/d46r9s3toqw5510z5g4zt/03-Titi-Robin-Lovari.mp3?rlkey=tx8ltj5lahfnofkcn9arund88&st=gijb45mg&dl=1",
          "https://www.dropbox.com/scl/fi/8mhf97tt36012oactlk7d/06-Titi-Robin-Ma-Gavali-Rumba.mp3?rlkey=kco1k1th9puyhh0et4xk6v21p&st=r95szvd6&dl=1",
          "https://www.dropbox.com/scl/fi/q77yf8c41clwves7vb4c5/02-Titi-Robin-Mehdi.mp3?rlkey=5b4oxg8qn4ezx9me77slylgzd&st=qr8qmc14&dl=1",
          "https://www.dropbox.com/scl/fi/tktvbr9ul6822wz5kg7k5/07-Titi-Robin-Memed-Ve-Seyrane.mp3?rlkey=sc0jvnnprv1eo4oxv6t8yrys5&st=0gab8gf3&dl=1",
          "https://www.dropbox.com/scl/fi/nqo11zb3ij8vo9if68fpt/09-Titi-Robin-Sandhya.mp3?rlkey=e7brtzi89kj03ox6j6afwknim&st=8zeinyk8&dl=1",
          
        ],
        [

        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
        "https://www.dropbox.com/scl/fi/ijj81yu5uupib16y6zpqf/lovarititirobin.jpg?rlkey=45l1gtawf9oh2i71mbww6llcw&st=t7ut07cd&dl=1",
    
      ] 
      ];


//Disco 9

      const cumbiadejuventud = [
    [
        "A volar moscas - Los Golden Boys",
        "Cumbia de juventud - Los Golden Boys",
        "Cumbia y beso - Los Golden Boys",
        "El año viejo - Los Golden Boys",
        "El buena vida - Los Golden Boys",
        "El elevao - Los Golden Boys",
        "La cumbia de la marihuana - Los Golden Boys",
        "La luna y la playa - Los Golden Boys",
        "Las colombianas - Los Golden Boys",
        "Si me quieres - Los Golden Boys",
        "Sonrieme - Los Golden Boys",
        "Vengan a baila - Los Golden Boys",
        
       
    ],
    [
        "https://www.dropbox.com/scl/fi/06vov200tkh1f20eh6w0x/a-volar-moscas.mp3?rlkey=81e9xbu1icadlhp8wi8ed4kes&st=rut2ej2y&dl=1",
        "https://www.dropbox.com/scl/fi/ai5ah1ys7vd7fk7wtvox3/cumbia-de-juventud.mp3?rlkey=8p3vsk98mwm80g791se0cwfof&st=4qmficoe&dl=1",
        "https://www.dropbox.com/scl/fi/jd1djrh8744rwrzesi62i/cumbia-y-beso.mp3?rlkey=6wlzi734rs2cr2129fph9u5xu&st=oaqo8qq5&dl=1",
        "https://www.dropbox.com/scl/fi/tclrfnrrq1vt7u82ckt50/el-a-o-viejo.mp3?rlkey=nlrx05vcyk61s4y7b6z06quya&st=zwcg1q7e&dl=1",
        "https://www.dropbox.com/scl/fi/qz74hn44uclclq5jsb2dt/el-buena-vida.mp3?rlkey=7toc74vn25deefvk5ehh5c9q6&st=o042gyn7&dl=1",
        "https://www.dropbox.com/scl/fi/2o8nte8hlzyun6hf941bu/el-elevao.mp3?rlkey=cd19i9ho9pkpkw7lnibg8lcon&st=69109tru&dl=1",
        "https://www.dropbox.com/scl/fi/thass3zhnhfawuwlydli2/la-cumbia-de-la-mariguana.mp3?rlkey=2xbc7pv2uf8y8y30prpkk7bzs&st=ug35odnp&dl=1",
        "https://www.dropbox.com/scl/fi/r9b50wzcem535aiddcc2h/la-luna-y-la-playa.mp3?rlkey=jwu2wq089vktxqpx9wov0y6ni&st=3bqzbf0q&dl=1",
        "https://www.dropbox.com/scl/fi/8bu5hhbez298xmie9fz1h/los-colombianas.mp3?rlkey=dgjnrso7d39ropsgolu95pxe4&st=297mf4js&dl=1",
        "https://www.dropbox.com/scl/fi/78rzfx2tv319g9qkctjfx/si-me-quieres.mp3?rlkey=2tntsm97mh5xfkjeo659mw7y7&st=l4u36vm5&dl=1",
        "https://www.dropbox.com/scl/fi/dru28l1jb8vudsze7m1vj/sonrieme.mp3?rlkey=rfehdxr5inmllgcefw7j1ezo3&st=z36dan8t&dl=1",
        "https://www.dropbox.com/scl/fi/yzemuoy4gqoyc6ser1xh7/vengan-a-baila.mp3?rlkey=bzsrj5v6bk2t7jtujz74j34qf&st=855jmf0h&dl=1",
    ],  
    [
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",

      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",

      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
      "https://www.dropbox.com/scl/fi/folurffff3i3vtyhh0oas/cumbiadejuventud.jpg?rlkey=9j4sj51o6mqw0fquvhmcgrpj1&st=o26fijaf&dl=1",
    ]
];

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

const theratsdesperatered = [
        [
            "B sides - The Rats",
            "Broken wire telephone - The Rats",
            "Burnside - The Rats",
            "Can´t stand back - The Rats",

            "Come on today - The Rats",
            "Deterioration - The Rats",
            "I want you - The Rats",
            "Its a still you - The Rats",

            "Just a man - The Rats",
            "Leave me alone - The Rats",
            "My tragedy behind - The Rats",
            "Never coming home - The Rats",

            "Never say no - The Rats",
            "Stay - The Rats",
            "Tremelo - The Rats",
            "Working class - The Rats",
        ],
        [
            "https://www.dropbox.com/scl/fi/w3c6yv6jqzdypwmckzsrx/15-The-Rats-B-Sides.mp3?rlkey=xb0il1lf0m5ccxsaeowg9yk4b&st=9l3p6cl5&dl=1",
            "https://www.dropbox.com/scl/fi/fvl0ofo6a8tqwcy4aoa49/01-The-Rats-Broken-Wire-Telephone.mp3?rlkey=gkstcolyy6n3ktv8eqpkg362p&st=8fofnuk0&dl=1",
            "https://www.dropbox.com/scl/fi/fwoe2jw41swpkbuv78g5m/08-The-Rats-Burnside.mp3?rlkey=dqe60ltousszg29qzjx6o8yca&st=km883p1k&dl=1",
            "https://www.dropbox.com/scl/fi/q0jbbidafrln83u82w90h/02-The-Rats-Can-t-Stand-Back.mp3?rlkey=85n2v5sk1zl0n4796qry7schk&st=o39fw8lw&dl=1",

            "https://www.dropbox.com/scl/fi/1a56xqp4k4fq50hgp73ln/09-The-Rats-Come-On-Toody.mp3?rlkey=50jg45xrgrft9lqcnefwbc4ti&st=ww1hueou&dl=1",
            "https://www.dropbox.com/scl/fi/zzt2h6uub7gkgggg02z5r/05-The-Rats-Deterioration.mp3?rlkey=ubbn7yfh32irbm9w60425241w&st=nu0b6zl9&dl=1",
            "https://www.dropbox.com/scl/fi/03k37xkei3fmgf15gp9p2/13-The-Rats-I-Want-You.mp3?rlkey=0jipdtlssawfnymao9n8tynh4&st=vuc8oudp&dl=1",
            "https://www.dropbox.com/scl/fi/i0ancp31ni17x956wr0i1/03-The-Rats-It-s-Still-You.mp3?rlkey=t8jehofuv4vat4jg1pta4gxmv&st=t4ksow7n&dl=1",

            "https://www.dropbox.com/scl/fi/2q38ejjh9zv9kn8cgwkas/14-The-Rats-Just-A-Man.mp3?rlkey=moz2rogp1vrcr73rqr4uo5swc&st=ga85lnl2&dl=1",
            "https://www.dropbox.com/scl/fi/hzwhkwn37hddt9jeaauge/04-The-Rats-Leave-Me-Alone.mp3?rlkey=8bbelgmfvcl9oaxug67po7h0p&st=wfto5dbv&dl=1",
            "https://www.dropbox.com/scl/fi/jeh3uvqgl0h1372g4bw3d/11-The-Rats-My-Tragedy-Behind.mp3?rlkey=1wgve2qdit9akbeh3kwmmjo2x&st=7np1n7yr&dl=1",
            "https://www.dropbox.com/scl/fi/pg3bejb6n0cgo6fsu2ehu/16-The-Rats-Never-Coming-Home.mp3?rlkey=fc8ah4t5os29jk80ocmi4fwz4&st=mqtzebkr&dl=1",

            "https://www.dropbox.com/scl/fi/xynb8pb1k6xi4hmx3nu3b/06-The-Rats-Never-Say-No.mp3?rlkey=9dyru9kvoe9qx8u7qw3pa2wu6&st=h54r46uw&dl=1",
            "https://www.dropbox.com/scl/fi/dn2sg1irdp2nu4gs273q0/12-The-Rats-Stay.mp3?rlkey=rscbp8cwa86pf5et2q943b1mn&st=j78rruvy&dl=1",
            "https://www.dropbox.com/scl/fi/bvg45ftdxmgrm37xybs4v/10-The-Rats-Tremelo.mp3?rlkey=aad5gthkcye4zr0h09vfqpegr&st=yynp7acx&dl=1",
            "https://www.dropbox.com/scl/fi/m4q8e973w4vfqmr8oabl9/07-The-Rats-Working-Class.mp3?rlkey=9s8objp244o7tm1xzfijz445t&st=wsvrkngn&dl=1",
        ],
        [
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",

             "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",

            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",

            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
            "https://www.dropbox.com/scl/fi/szn1kmq61uds0g2rmnihq/inadesperateredtherats.jpg?rlkey=ibsp1diiqpuaztxw95p471raf&st=amcufp7x&dl=1",
        ],
];

 const osees = [
        [
            "Off course - Osees",
            "Hecate´s reflection is a trick - Osees",
            "The trick - Osees",
            "The brute on his knees - Osees",
        ],
        [
            "https://www.dropbox.com/scl/fi/1dahqa3rqt0sbrzvtwa5o/01-Osees-OFF-COURSE.mp3?rlkey=kqfip9ica1f07qtwogc1pqr9q&st=ou3yhbah&dl=1",
            "https://www.dropbox.com/scl/fi/mh3gobowbfv5oh8u2s7gg/02-Osees-HECATE-S-REFLECTION-IS-A-TRICK.mp3?rlkey=m60oqx85ypgud3ipsa4dq4ced&st=t6gg1qsd&dl=1",
            "https://www.dropbox.com/scl/fi/7krsxtu4769n58q09pu39/03-Osees-THE-TRICK.mp3?rlkey=k0z3sqw9sja2f8pw3h15tx0p2&st=nm667qlj&dl=1",
            "https://www.dropbox.com/scl/fi/l1vul8ai5q9omy9axaqqc/05-Osees-THE-BRUTE-ON-HIS-KNEES.mp3?rlkey=ux9l3r1letwttz1x2kabxrmho&st=3mbsucu9&dl=1",
        ],
        [

            "https://www.dropbox.com/scl/fi/ys3wnbu9k9gorw9f4v1s9/osees.jpg?rlkey=ijg71kpc3ckrzyfg23cchst0x&st=pb18jmua&dl=1",
            "https://www.dropbox.com/scl/fi/ys3wnbu9k9gorw9f4v1s9/osees.jpg?rlkey=ijg71kpc3ckrzyfg23cchst0x&st=pb18jmua&dl=1",
            "https://www.dropbox.com/scl/fi/ys3wnbu9k9gorw9f4v1s9/osees.jpg?rlkey=ijg71kpc3ckrzyfg23cchst0x&st=pb18jmua&dl=1",
            "https://www.dropbox.com/scl/fi/ys3wnbu9k9gorw9f4v1s9/osees.jpg?rlkey=ijg71kpc3ckrzyfg23cchst0x&st=pb18jmua&dl=1",
      
       
      ] 
      ];

 const punkHourExp = [
        [
          

          "Nigeria - Ataque de Caspa",
          "Lalala - Ataque de Caspa",
          "La pesca - Ataque de Caspa",
          "Cronica China - Ataque de Caspa",
          "La Militar - Ataque de Caspa",
          "Viaje a Egipto - Ataque de Caspa",

            "Odio - Puñal",
            "Reniego del Punk - Puñal",  
            "Cicatrices - Puñal",  
            "Jodido Personaje - Puñal", 
            "Amor - Puñal",
            "Carrera Criminal - Puñal",
            "Nadie te Puede Calmar  - Puñal",
            "Yo no he estado ahí  - Puñal",
            "Nada me Motiva - Puñal",
            "Jipis - Puñal", 

            "Antimilitar - Disolvente",
            "Manipulación genética - Disolvente",
            "Sufre y abstente - Disolvente",
            "Asquerosa policia - Disolvente",
            "Desamortización - Disolvente",
            "Volver a empezar - Disolvente",
            "Ama tus grilletes - Disolvente",
            "Funeral sostenible - Disolvente",
            "Constitucion española - Disolvente",
            "Jóvenes enfermos - Disolvente",
            "Dismaniacxs - Disolvente",
            "Cual será tu destino - Disolvente",
            "Desesperanza - Disolvente",
            "Ser de izquierdas - Disolvente",
            "Censuran - Disolvente",

            "Frontera Francesa - Larsen",
            "Vomitas Sangre - Larsen",
            "Lucha Contra El Techno - Larsen",
            "Nacido de la Pota de un Punk - Larsen",

            "El Juez - Chicharrica",
            "Encerrado - Chicharrica",
            "Quiero Romper - Chicharrica",
            "Defiance - Chicharrica",
            "Es Una Mierda - Chicharrica",
            "Colegas - Chicharrica",
            "El Odio - Chicharrica",
            "Escupiendo - Chicharrica",
            "ETT´s - Chicharrica",
            "Nada Quereis Saber - Chicharrica",
            "La Jaula - Chicharrica",
            "Amanece - Chicharrica",
            "La Calle - Chicharrica",

            "Kärnvapen Attack - Mob 47",  
            "Rustning Är Ett Brott - Mob 47", 
            "Res Dig Mot Överheten - Mob 47",    
            "Vi Rustar Dom Dör - Mob 47",
            "Det Är Upp Till Oss - Mob 47",
            "Dom Ljuger - Mob 47",
            "Ingen Framtid - Mob 47",
            "Animal Liberation - Mob 47",
            "Polisstat - Mob 47",
          ]
            ,
          [
         

            "https://www.dropbox.com/scl/fi/2rs8smqcfw39t40hl08l0/01-Ataque-de-Caspa-Nigeria.mp3?rlkey=edrww7t3r57dxd2129kzfad45&st=jt8pag9s&dl=1",
            "https://www.dropbox.com/scl/fi/e846bvfgrmt7wzhhq03tj/02-Ataque-de-Caspa-Lalala.mp3?rlkey=qfghebovjomctnjp1165uu9dw&st=qedh3mue&dl=1",
            "https://www.dropbox.com/scl/fi/jr2mva91270xlxqjjh1y2/03-Ataque-de-Caspa-La-Pesca.mp3?rlkey=7z70c6rcgyqcprw7v8xt4jhu5&st=0q6eva3x&dl=1",
            "https://www.dropbox.com/scl/fi/0hirzej5o479l9tbi1psg/04-Ataque-de-Caspa-Cr-nica-China.mp3?rlkey=tdavb6y10f09cjxaenoscsxyf&st=6absrxeo&dl=1",
            "https://www.dropbox.com/scl/fi/y8gfhu1s0b5vi7im93e3p/05-Ataque-de-Caspa-La-Militar.mp3?rlkey=kq5dkxz866do56bpml3m3zwek&st=n17du5lo&dl=1",
            "https://www.dropbox.com/scl/fi/3bvhdfkurtqw7bfm0sqda/06-Ataque-de-Caspa-Viaje-a-Egipto.mp3?rlkey=egkczwy7z4mn9zj85s5vqiy2w&st=xu5g30d7&dl=1",

            "https://www.dropbox.com/scl/fi/hfpuiq3zb7w79t5vlp6jl/01-Pu-al-Odio.mp3?rlkey=gec8yk0zfz98pzwas60ygpie8&st=9fes9xvk&dl=1",
            "https://www.dropbox.com/scl/fi/vt2cgzubcv45cuirq2zaf/02-Pu-al-Reniego-Del-Punk.mp3?rlkey=5u8ovnmfk2pq2stho06l9kw48&st=owhtzig5&dl=1",
            "https://www.dropbox.com/scl/fi/l28mlh6wuzya6h1sgxpwg/03-Pu-al-Cicatrices.mp3?rlkey=l4erj9hch00r4xr9agghzkzoo&st=1hh41z9g&dl=1",
            "https://www.dropbox.com/scl/fi/24xobee3hlwfaxw5ywmke/04-Pu-al-Jodido-Personaje.mp3?rlkey=3t7v9a6ik8w17s4tkgkfo8wul&st=z92n0a79&dl=1",
            "https://www.dropbox.com/scl/fi/lcbta3dpr7vs0wllv642z/05-Pu-al-Amor.mp3?rlkey=ayhokdnwnwjc5xzazc7a3batu&st=usae0p4z&dl=1",
            "https://www.dropbox.com/scl/fi/q7ikivs2acslxv19z6qjl/06-Pu-al-Carrera-Criminal.mp3?rlkey=96b3dw9pnq0a22a37v4ddop2v&st=2ye0du3x&dl=1",
            "https://www.dropbox.com/scl/fi/a344kzx30nu07w9m7sbxd/07-Pu-al-Nadie-Te-Puede-Calmar.mp3?rlkey=zubmwzl02wa2dsx9lm5w4m0ig&st=gik7yirc&dl=1",
            "https://www.dropbox.com/scl/fi/6o2qm06b529seqgrevytd/08-Pu-al-Yo-No-Estaba-Ah.mp3?rlkey=yrxubm3a16rkp531bxij2nfif&st=dv3wzb6w&dl=1",
            "https://www.dropbox.com/scl/fi/o2gd64i87tircw72jvtlz/09-Pu-al-Nada-Me-Motiva.mp3?rlkey=uyhejde5x025gkf47vnr6o7rx&st=om60v48k&dl=1",
            "https://www.dropbox.com/scl/fi/vfcn9d1aru5cbdumb5lsd/10-Pu-al-Jipis.mp3?rlkey=cyxldptw62dju2gpw9jdpwkbr&st=h4ntpdot&dl=1",

            "https://www.dropbox.com/scl/fi/f4wrbdsurtg5bydxyoeyh/01-Disolvente-1.Antimilitar.mp3?rlkey=52dv3a6t3tu4qo54a71uooazr&st=1z5pg619&dl=1",
            "https://www.dropbox.com/scl/fi/tdvdyxqtwg3ra8m40gb03/02-Disolvente-2.Manipulaci-n-gen-tica.mp3?rlkey=dj5wc330ik305gz371edxm10m&st=xl5enp5e&dl=1",
            "https://www.dropbox.com/scl/fi/sgft0mjfhciv10xilofr9/03-Disolvente-3.Sufre-y-abstente.mp3?rlkey=fhsbmqb1hbtca6g1hwi6ms3gn&st=th5xwv6a&dl=1",
            "https://www.dropbox.com/scl/fi/3681de699vtzwd2k9hltc/04-Disolvente-4.Asquerosa-policia.mp3?rlkey=rophpblm9qpeq5zr5sq1tfnss&st=tnsajwn8&dl=1",
            "https://www.dropbox.com/scl/fi/eiaeilmjhx0zxbww13amb/06-Disolvente-6.Desamortizaci-n.mp3?rlkey=0to0nv7jbsorxsgt88omvrize&st=hz2c0u91&dl=1",
            "https://www.dropbox.com/scl/fi/eiaeilmjhx0zxbww13amb/06-Disolvente-6.Desamortizaci-n.mp3?rlkey=0to0nv7jbsorxsgt88omvrize&st=40vrwl0i&dl=1",
            "https://www.dropbox.com/scl/fi/sm0j1i75xgpz0z8cxcz8n/07-Disolvente-7.Ama-tus-grilletes.mp3?rlkey=75h8mmfk13pke1hlfbyf7oqxj&st=axyso5b7&dl=1",
            "https://www.dropbox.com/scl/fi/789styqa5wrg5uyrdgzvj/08-Disolvente-8.Funeral-sostenible.mp3?rlkey=bs3uy7672qejqg5slzhxoq5ct&st=8i9b86l0&dl=1",
            "https://www.dropbox.com/scl/fi/fr9giph43bfo6uwzpsx1k/09-Disolvente-9.Constituci-n-espa-ola.mp3?rlkey=bbdzx9wbwx0sz67m941ioga2v&st=2hm6m3fy&dl=1",
            "https://www.dropbox.com/scl/fi/43gn4b0fb988x6rig9mu9/10-Disolvente-10.J-venes-enfermos.mp3?rlkey=x0tusxtgpoy75vcof8mpso4ha&st=z91jud08&dl=1",
            "https://www.dropbox.com/scl/fi/hm6c33rslgobapvxp0qkm/11-Disolvente-11.Dismaniac-s.mp3?rlkey=96yyhik7kuhcahixmfi0p9exj&st=edmxvjxl&dl=1",
            "https://www.dropbox.com/scl/fi/ac1cet4ti8g5tpy52rq9p/12-Disolvente-12.Cual-ser-tu-destino.mp3?rlkey=7iafx3dpty99qvzb5wdagi9uf&st=ftplzmb0&dl=1",
            "https://www.dropbox.com/scl/fi/bcrrhaabajo9qf8m254n3/13-Disolvente-13.Desesperanza.mp3?rlkey=xkquu4jbshinfehiwt17t45fu&st=rw44dtdw&dl=1",
            "https://www.dropbox.com/scl/fi/2797teq06cwguo0n1823d/14-Disolvente-14.Ser-de-izquierdas.mp3?rlkey=wulw6fonyozwy5mwepyniddaf&st=pov1egww&dl=1",
            "https://www.dropbox.com/scl/fi/oy5dwyvhs4xu9bx04fm3w/15-Disolvente-15.Censuran.mp3?rlkey=3bujkclp8ziu2lmhp8i1x55k3&st=0c9xo9ln&dl=1",
            

            "https://www.dropbox.com/scl/fi/hucsm5fpatnfuz1i25mbt/01-Larsen-Frontera-Francesa.mp3?rlkey=1lsyxmmz70vdnn54jv10pivda&st=xoqwxph3&dl=1",
            "https://www.dropbox.com/scl/fi/q36p4vlupzel6mwz1wh9e/02-Larsen-Vomitas-Sangre.mp3?rlkey=svffawbfir210q7fucihvy9qu&st=36gbrvuw&dl=1",
            "https://www.dropbox.com/scl/fi/jx6cm53gbeh16n09lv87r/03-Larsen-Nacido-De-La-Pota-De-Un-Punk.mp3?rlkey=z691kzdpafk65lngbf8xbz5it&st=dpdy90tr&dl=1",
            "https://www.dropbox.com/scl/fi/fw12e5tcb8ygq7xe8m7x2/04-Larsen-Lucha-Contra-El-Techno.mp3?rlkey=hp9grgir9cfjfos1coesh8urw&st=baervzt3&dl=1",

            "https://www.dropbox.com/scl/fi/2p81deo60s0g7i54phtxk/01-El-Juez.mp3?rlkey=midbwg6f4qjcv66qeh81td95t&st=m1dgxktd&dl=1",
            "https://www.dropbox.com/scl/fi/2msuabpvny36fiy619yv6/02-Encerrado.mp3?rlkey=9hsiigtkkdac0jvqctuwzxomn&st=4gfx4hon&dl=1",
            "https://www.dropbox.com/scl/fi/1ro6wp96kvm9jghw6eyln/03-Quiero-romper.mp3?rlkey=l5i18hzlfxl0klgjj3hjx8a2j&st=mwam69nv&dl=1",
            "https://www.dropbox.com/scl/fi/9sy99hnufn729ki1gxn8h/04-Defiance.mp3?rlkey=8wj3uqgd2j51hab8tk9j9poa8&st=os366k54&dl=1",
            "https://www.dropbox.com/scl/fi/okug45rd8jydanmn4q4wh/05-Es-una-mierda.mp3?rlkey=fru97ka9pdbw816jjzhdq7s3k&st=im5zkoqp&dl=1",
            "https://www.dropbox.com/scl/fi/6z585u67nwyw5ehi1y93u/06-Colegas.mp3?rlkey=n59pj34rxypsancaby93ixlxx&st=ort9n8dz&dl=1",
            "https://www.dropbox.com/scl/fi/om3vjrpyetf8x24autku0/07-El-Odio.mp3?rlkey=lvul0hqtp47arq713cge42jts&st=eniqxahw&dl=1",
            "https://www.dropbox.com/scl/fi/81i20xxcgezkquwl3eixe/08-Escupiendo.mp3?rlkey=y0w7dwcfpxcytcb7khx21a1e6&st=onasppxw&dl=1",
            "https://www.dropbox.com/scl/fi/ze8v8u108a2ie7hqfui9t/09-ETT-s.mp3?rlkey=wtboqifu3gpcy5qa74u9ibq9w&st=8ykqe5yt&dl=1",
            "https://www.dropbox.com/scl/fi/xhlzp80shw97q8xbxgo9s/10-Nada-quereis-saber.mp3?rlkey=6k11xhsngfp03jnsp8gdih1c9&st=v2wcdiy4&dl=1",
            "https://www.dropbox.com/scl/fi/06rqqfgjmmqufdztfatgd/11-La-jaula.mp3?rlkey=gnlr2zdj6xukx3ksjwwm8xo5x&st=a618y3jl&dl=1",
            "https://www.dropbox.com/scl/fi/8pqzjksr05jg9d492si4k/12-Amanece.mp3?rlkey=cnvo9a7m54c09uy3cbgjwunbu&st=cpu6ic2v&dl=1",
            "https://www.dropbox.com/scl/fi/nu4nle1fut4vdjnu3ilgq/13-La-calle.mp3?rlkey=epomzqum15u956swf19j8j711&st=cqjxic66&dl=1",

            "https://www.dropbox.com/scl/fi/g93i3o2yok1v15olrb7hb/01-Insane-Society-records-K-rnvapen-Attack.mp3?rlkey=6tyrt1isgj3lwhnhs4vil6pjd&st=ih1a3htc&dl=1",
            "https://www.dropbox.com/scl/fi/3vwxck6v3lpistv4dw2mh/02-Insane-Society-records-Rustning-r-Ett-Brott.mp3?rlkey=sd40243cvzxn6p9o0y1avc3kg&st=nn43g894&dl=1",
            "https://www.dropbox.com/scl/fi/x74qz8ir7o85s3z0zfr7i/03-Insane-Society-records-Res-Dig-Mot-verheten.mp3?rlkey=nb8hrib79u5k73h8r39vov648&st=volbmdu3&dl=1",
            "https://www.dropbox.com/scl/fi/i1ddrljj4r2od3lbjl6jp/04-Insane-Society-records-Vi-Rustar-Dom-D-r.mp3?rlkey=e6xycju9wqjto7dpg0c8ra75i&st=ldajsoa6&dl=1",
            "https://www.dropbox.com/scl/fi/7q17y6o8785hg6donhje0/05-Insane-Society-records-Det-r-Upp-Till-Oss.mp3?rlkey=qrk0msie2ye9kk9pkdh0ny5oq&st=86gv0jiv&dl=1",
            "https://www.dropbox.com/scl/fi/tho84jpqq68hyguh6p1f1/06-Insane-Society-records-Dom-Ljuger.mp3?rlkey=vd373i00t8x5ocu6d171aazt8&st=4wv8spik&dl=1",
            "https://www.dropbox.com/scl/fi/oy66ouf0ttzrw2hqp5rpz/07-Insane-Society-records-Ingen-Framtid.mp3?rlkey=avmcn6ya4wfkqrgdjfcz0065j&st=noagx7bi&dl=1",
            "https://www.dropbox.com/scl/fi/x4d87g7ucoa7wa9girh1d/08-Insane-Society-records-Animal-Liberation.mp3?rlkey=uufvqkk9dyzbm1xz5cj6st8im&st=kb6as23o&dl=1",
            "https://www.dropbox.com/scl/fi/7ob8sa63iybzm22m5013t/09-Insane-Society-records-Polisstat.mp3?rlkey=jb8lfiv1y80r6aq95odpvxcoj&st=61af5qg1&dl=1",

          


            ],
         [
        

          "https://www.dropbox.com/scl/fi/b6ceoxwm4htv53yx6p83l/ataquedecaspasupongamos.jpg?rlkey=m73so3psoj6byhbd4qqsc5es7&st=o5tac33v&dl=1",
          "https://www.dropbox.com/scl/fi/b6ceoxwm4htv53yx6p83l/ataquedecaspasupongamos.jpg?rlkey=m73so3psoj6byhbd4qqsc5es7&st=o5tac33v&dl=1",
          "https://www.dropbox.com/scl/fi/b6ceoxwm4htv53yx6p83l/ataquedecaspasupongamos.jpg?rlkey=m73so3psoj6byhbd4qqsc5es7&st=o5tac33v&dl=1",
          "https://www.dropbox.com/scl/fi/b6ceoxwm4htv53yx6p83l/ataquedecaspasupongamos.jpg?rlkey=m73so3psoj6byhbd4qqsc5es7&st=o5tac33v&dl=1",
          "https://www.dropbox.com/scl/fi/b6ceoxwm4htv53yx6p83l/ataquedecaspasupongamos.jpg?rlkey=m73so3psoj6byhbd4qqsc5es7&st=o5tac33v&dl=1",
          "https://www.dropbox.com/scl/fi/b6ceoxwm4htv53yx6p83l/ataquedecaspasupongamos.jpg?rlkey=m73so3psoj6byhbd4qqsc5es7&st=o5tac33v&dl=1",

          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",
          "https://www.dropbox.com/scl/fi/8tsk14x87607l4nzfpmgv/buscandolamuertepu-al.jpg?rlkey=82vcluntn03hetzb0ma61s7pn&st=z7y724s3&dl=1",

          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          "https://www.dropbox.com/scl/fi/lng8bgbgblwmd6jxw2cqg/dis.jpg?rlkey=y7t944kp0i435rldiqts6ossu&st=lqy0blkj&dl=1",
          

          "https://www.dropbox.com/scl/fi/2wjfi4nylqvrtcy4atsff/larsenno.jpg?rlkey=gh9kx2g0fekhtk8qnlb1sm8a5&st=ka47lwxa&dl=1",
          "https://www.dropbox.com/scl/fi/2wjfi4nylqvrtcy4atsff/larsenno.jpg?rlkey=gh9kx2g0fekhtk8qnlb1sm8a5&st=ka47lwxa&dl=1",
          "https://www.dropbox.com/scl/fi/2wjfi4nylqvrtcy4atsff/larsenno.jpg?rlkey=gh9kx2g0fekhtk8qnlb1sm8a5&st=ka47lwxa&dl=1",
          "https://www.dropbox.com/scl/fi/2wjfi4nylqvrtcy4atsff/larsenno.jpg?rlkey=gh9kx2g0fekhtk8qnlb1sm8a5&st=ka47lwxa&dl=1",

          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",
          "https://www.dropbox.com/scl/fi/dtkhd38i1k5mqlqaovab2/chicharricaquiero.jpg?rlkey=5yc56v71et2mgkxl09sm7dtcp&st=uo1byu0w&dl=1",

          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",
          "https://www.dropbox.com/scl/fi/ffgm4bnxds2tweqbq2ucj/mob47karnvapenattack.jpg?rlkey=xz9xw1jfbvhdxkw48rx2a6b2w&st=b6500uuz&dl=1",

        
        ],
      ]


      const CriseCardiaque = [
    [
        "Verglas - Durs Cœurs",
        "Tempête - Durs Cœurs",
         "L'Heure Sonnera - Durs Cœurs",
         "Électricité - Durs Cœurs",
         "L'Épée de Damoclès - Durs Cœurs",
         "Malajusté - Durs Cœurs",
         "Forces de L'Ordre - Durs Cœurs",
         "Calvaire - Durs Cœurs",
       

       
    ],
    [
        "https://www.dropbox.com/scl/fi/z7a37f4pdj1fa6l6jhd2f/01-Durs-C-urs-Verglas.mp3?rlkey=xahxw88ylg7lswsl2httobvp7&st=a01qepk1&dl=1",
        "https://www.dropbox.com/scl/fi/jp9fwekcmjvxmc7my82v2/02-Durs-C-urs-Temp-te.mp3?rlkey=l3hfrqndbpeiwfszoq7xxb4vg&st=wgm4jnc3&dl=1",
        "https://www.dropbox.com/scl/fi/2wetqhnlvpvgc1o5r504n/03-Durs-C-urs-L-Heure-Sonnera.mp3?rlkey=43z4qci84i3hvm7zcqtmyv946&st=foxfdpwy&dl=1",
        "https://www.dropbox.com/scl/fi/pqfol3meulfsrzaxqszej/04-Durs-C-urs-lectricit.mp3?rlkey=b7fbx9t3h6nz5netai05759ch&st=jdwpucin&dl=1",
        "https://www.dropbox.com/scl/fi/wy783n0p60cg2op9f9vef/05-Durs-C-urs-L-p-e-de-Damocl-s.mp3?rlkey=tys3v52gqbl0375xs1qn5i5hy&st=asmj7eux&dl=1",
        "https://www.dropbox.com/scl/fi/f3fmpy4oazmbb3worg4fs/06-Durs-C-urs-Malajust.mp3?rlkey=67hooonfktldjb5p562yh121d&st=xupyqct3&dl=1",
        "https://www.dropbox.com/scl/fi/yjyjuhi8wc4pry7kh4j79/07-Durs-C-urs-Forces-de-L-Ordre.mp3?rlkey=bw560mu75hzw6mnbh77ful9wj&st=k96u4sgi&dl=1",
        "https://www.dropbox.com/scl/fi/ofh0j88rfda744bh4mfhg/08-Durs-C-urs-Calvaire.mp3?rlkey=te2eig02nnrzxba1ejlzhff82&st=niqfzfvz&dl=1",
        

    
    ],
    [
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
        "https://www.dropbox.com/scl/fi/e9fqz65lv82vkmxxygrcs/criseCardiaque.jpg?rlkey=vu6wlu7vpnik4ngn2dmycrbmu&st=xte3desu&dl=1",
    ]
    ];

      const zorrasAsignaturas = [
        [
        "8 de agosto de 1969 - Zorras Adolescentes",
        "Autopista hacia el cielo - Zorras Adolescentes",
        "El flechazo - Zorras Adolescentes",
        "Fosa comun - Zorras Adolescentes",
        "G.G. Allin - Zorras Adolescentes",
        "Killer man (Gasoline Cover) - Zorras Adolescentes",
        "La habitacion - Zorras Adolescentes",
        "Lluvia de locura - Zorras Adolescentes",
        "Maxwell Smart - Zorras Adolescentes",
        "Mundo mutante - Zorras Adolescentes",

        "Putos Viejos - Zorras Adolescentes",
        "Putridos cuerpos - Zorras Adolescentes",
        "Relación Radioactiva - Zorras Adolescentes",
        "Sade love - Zorras Adolescentes",
        "Todo por amor - Zorras Adolescentes",
        "Un dia de furia - Zorras Adolescentes",
        ],[
          "https://www.dropbox.com/scl/fi/worz2c2xmjjwiqrxb06aq/01-Bazofia-Records.-ZORRAS-ADOLESCENTES-8-de-agosto-de-1969..mp3?rlkey=igee17qqud5cvylw8o30dg7l3&st=ovpmy3rn&dl=1",
          "https://www.dropbox.com/scl/fi/p183dgkbb5gdqv7qkvxbo/14-Bazofia-Records.-ZORRAS-ADOLESCENTES-Autopista-hacia-el-cielo..mp3?rlkey=xskrn8bxtofbtdwoojwa64jnp&st=dkxny8w4&dl=1",
          "https://www.dropbox.com/scl/fi/xfegna6t3a75odp97npsz/04-Bazofia-Records.-ZORRAS-ADOLESCENTES-El-flechazo..mp3?rlkey=oocbc7ajek7v5zzdy300wfhni&st=wmnycw17&dl=1",
          "https://www.dropbox.com/scl/fi/q94l01brojsmxotglsbu0/15-Bazofia-Records.-ZORRAS-ADOLESCENTES-Fosa-com-n..mp3?rlkey=1vym9tj703skxqbd69spqg9qp&st=u85ucn0j&dl=1",
          "https://www.dropbox.com/scl/fi/oijuq0w0qwvarcnq71io6/06-Bazofia-Records.-ZORRAS-ADOLESCENTES-G.G-Allin..mp3?rlkey=slqptlnrkriiriq9g2gglk1xe&st=83pt3shv&dl=1",
          "https://www.dropbox.com/scl/fi/5dy1yg8tz1syhl1any6bp/09-Bazofia-Records.-ZORRAS-ADOLESCENTES-Killer-man.-Gasoline-cover-..mp3?rlkey=gxnxvntbu6jlf92ppsp29n378&st=divn5hxk&dl=1",
          "https://www.dropbox.com/scl/fi/w9yrbrcip1x7ob730fv1c/10-Bazofia-Records.-ZORRAS-ADOLESCENTES-La-habitaci-n..mp3?rlkey=e29cizkc9lnudqsr0xa9r8qpe&st=2moss95w&dl=1",
          "https://www.dropbox.com/scl/fi/pxovnt11zs6hsqbgx1ezs/13-Bazofia-Records.-ZORRAS-ADOLESCENTES-Lluvia-de-locura..mp3?rlkey=o39tx2q35cwiljust9zott2mz&st=kb8nf2dj&dl=1",
          "https://www.dropbox.com/scl/fi/y2yls1t0drovcgc1ptj81/16-Bazofia-Records.-ZORRAS-ADOLESCENTES-Maxwell-Smart..mp3?rlkey=euqiiz9s07u1o1mytjayitemx&st=0answ89q&dl=1",
          "https://www.dropbox.com/scl/fi/ebct7sftghfq1xkn5pabg/12-Bazofia-Records.-ZORRAS-ADOLESCENTES-Mundo-mutante..mp3?rlkey=cix2jqkhuf2mrgbh925dgiq0q&st=2s6c15sw&dl=1",

          "https://www.dropbox.com/scl/fi/x9jx09d6y2fto66mpk3wt/08-Bazofia-Records.-ZORRAS-ADOLESCENTES-Putos-viejos..mp3?rlkey=egfevn7jzagr5vu0sls43i7l5&st=hf6f5i8h&dl=1",
          "https://www.dropbox.com/scl/fi/gs7zm3j6kcam0y2ctf4nm/11-Bazofia-Records.-ZORRAS-ADOLESCENTES-Putridos-cuerpos..mp3?rlkey=t5pnfkgymmbqlrmvnqohep3gn&st=r6gf50h4&dl=1",
          "https://www.dropbox.com/scl/fi/cqkiyutin9lbj61ctwlhd/02-Bazofia-Records.-ZORRAS-ADOLESCENTES-Relaci-n-radioactiva..mp3?rlkey=u83yj74ns3o3a998q6b4utojk&st=91bsv80m&dl=1",
          "https://www.dropbox.com/scl/fi/nlu8ruxhofh9854j5tx7p/05-Bazofia-Records.-ZORRAS-ADOLESCENTES-Sade-love..mp3?rlkey=9am1n3n424domshn9gnu6i24b&st=qii5mlcf&dl=1",
          "https://www.dropbox.com/scl/fi/qpg0lizvg8su5gptpoo1a/03-Bazofia-Records.-ZORRAS-ADOLESCENTES-Todo-por-amor..mp3?rlkey=yyh3n1tu7jha8hfuzeyvu8gdm&st=0oaqjrkm&dl=1",
          "https://www.dropbox.com/scl/fi/wv465q7o95wmw3k3bkgvg/07-Bazofia-Records.-ZORRAS-ADOLESCENTES-Un-d-a-de-furia..mp3?rlkey=l85fs3k2oqjgnnyfknha491o4&st=xu564gz8&dl=1",
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",

        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
        "https://www.dropbox.com/scl/fi/ey46bxs2bx9zmyquyrcb4/zorrasAsignaturas.jpg?rlkey=5bdgj4pj7xvhc6jvqp0hqlpf8&st=uywh4b8a&dl=1",
       
        
      ] 
      ];

const descanseenpazRDP = [
        [
         "Cerebros atomicos - Ratos de porão",
         "Morrer mais uma vez - Ratos de porão",
         "Velhus decréptus - Ratos de porão",
         "No junk - Ratos de porão",
         "Sofrimento real - Ratos de porão",
         "Juventude perdida - Ratos de porão",
         "Paranoia nuclear - Ratos de porão",
         "Descanse em Paz - Ratos de porão",
         "Fora EU - Ratos de porão",
         "Aviso final - Ratos de porão",
         "Zona - Ratos de porão",
         "Periferia - Ratos de porão",
         
        
        ],[
          "https://www.dropbox.com/scl/fi/ba0q51gg0vgrrylkg7x7d/01-Cerebros-Atomicos.mp3?rlkey=yjdh07vgf18c5yxjkp8s29ubj&st=dgjkl85v&dl=1",
          "https://www.dropbox.com/scl/fi/4sk41oi9c6fgvgcnv18rp/02-Morrer-Mais-Uma-Vez.mp3?rlkey=9ktn7jvquiuewbtfwea76nw4w&st=nxh5r456&dl=1",
          "https://www.dropbox.com/scl/fi/lxejgaqsnq8zkhmtidexs/03-Velhos-Decreptus.mp3?rlkey=tfri004w5lndnetspu3kharna&st=z5amq3f4&dl=1",
          "https://www.dropbox.com/scl/fi/6bzp1d4vj32t0owvqbnx0/04-No-Junk.mp3?rlkey=3tuybg2amccfbvpqk3mh3fsu7&st=cg1v1wzp&dl=1",
          "https://www.dropbox.com/scl/fi/7mwpvk38wpul4uap0lhmv/05-Sofrimento-Real.mp3?rlkey=olqcds08sxyttkirh20el7e0c&st=1g1euko2&dl=1",
          "https://www.dropbox.com/scl/fi/gaas7usiokt1o2pcq2i6s/06-Juventude-Perdida.mp3?rlkey=uwai6ovdpc5vytn6iz02k9ce0&st=xzrunla7&dl=1",
          "https://www.dropbox.com/scl/fi/b2gziad8fmgr6idj13wsh/07-Paranoia-Nuclear.mp3?rlkey=qxnn6evczk3karxifl13scfn5&st=5xpufk9b&dl=1",
          "https://www.dropbox.com/scl/fi/51fbn7pzp34sve1m8qqpy/08-Descanse-Em-Paz.mp3?rlkey=denc78cbhxjftquv0q6p9cuqc&st=ta3n8hdt&dl=1",
          "https://www.dropbox.com/scl/fi/dmo4rxlat1m29rscy2qso/09-Fora-Eu.mp3?rlkey=5cjluh4596p5yrdxu6tfsk4aw&st=ya2vgp34&dl=1",
          "https://www.dropbox.com/scl/fi/2a0b0arbnnz2k0swhhw8b/10-Aviso-Final.mp3?rlkey=l2mzfjnxehmtosbh7esgpecli&st=7es97ele&dl=1",
          "https://www.dropbox.com/scl/fi/k5zfl8gvcj19ocgogoblu/11-Zona.mp3?rlkey=yfrqsnvm34fdhigv4gtoggttg&st=in5s00i2&dl=1",
          "https://www.dropbox.com/scl/fi/4tcojg4q6v3ivgfvlzzzu/12-Periferia-Live-Bonus-Track-83.mp3?rlkey=iop1lk6qnl00wwl74wvqvidm9&st=5j184lzj&dl=1",
          
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
        "https://www.dropbox.com/scl/fi/osctenaosg65zlqvpwq9k/descanseenpaz.jpg?rlkey=oaz9fvc77uu4bxm2ugmvzhs5e&st=kx7jf9qo&dl=1",
      ] 
      ];


const criminaltrapAnticimex = [
        [
         "Daughter of pride - Anti Cimex",
         "Make my day - Anti Cimex",
         "Nailbiter - Anti Cimex",
         "New blood - Anti Cimex",
         "Pain killer - Anti Cimex",
         "Prelude E minor/Criminal trap - Anti Cimex",
         "Set me free - Anti Cimex",
         "Sister daylight - Anti Cimex",
         "Smell of silence - Anti Cimex",
         "Time to? - Anti Cimex",
         
         
        
        ],[
          "https://www.dropbox.com/scl/fi/ea1g3iidaaqmh9hvvr17a/daughter-of-pride.mp3?rlkey=kury44ls6w1xpgknzc7vk13yb&st=jpndn7f5&dl=1",
          "https://www.dropbox.com/scl/fi/8cx7pshs5myrmoyxkin7o/make-my-day.mp3?rlkey=kkc9xeglz9eqlfn382n3nwcdp&st=sinkuxb0&dl=1",
          "https://www.dropbox.com/scl/fi/acp49u80jt0vbawemeejf/nailbiter.mp3?rlkey=9tfbmbobbb2r24d851dhnimic&st=n24zrbhk&dl=1",
          "https://www.dropbox.com/scl/fi/tkubuqkdim5cv81m5temw/new-blood.mp3?rlkey=tcdewleaxw8ahxqmcrukwjewr&st=6e99kzyh&dl=1",
          "https://www.dropbox.com/scl/fi/tdbtzhg0memhju5lxznoh/pain-killer.mp3?rlkey=gcopybulsnepfl1fxt2iib8hm&st=mmluuzi7&dl=1",
          "https://www.dropbox.com/scl/fi/eb2oz7rxyznd95zwzjm7j/prelude-e-minor-criminal-trap.mp3?rlkey=wyk3xjh9lt2bdddwyq4v4clmi&st=za8bay2a&dl=1",
          "https://www.dropbox.com/scl/fi/cl8kf58ocdvuyy172bab4/set-me-free.mp3?rlkey=qacjt9rfvrdlhh2whwftatf3i&st=bst2oq86&dl=1",
          "https://www.dropbox.com/scl/fi/6h0ghxdjrto4c49ngrlk3/sister-daylight.mp3?rlkey=jzzjgdqi2s721k7vmkibmrj2x&st=jl6e3evp&dl=1",
          "https://www.dropbox.com/scl/fi/cglkq3pb8bc6uffm9wtan/smell-of-silence.mp3?rlkey=v191hzyj097b2w8k9011ryoqk&st=0620azoa&dl=1",
          "https://www.dropbox.com/scl/fi/rf3u3mk33jw5fu8o7f430/time-to.mp3?rlkey=tn3uitloueawh6eml4k5ihxwn&st=9wx2tgr6&dl=1",]
          
      ,[
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",
        "https://www.dropbox.com/scl/fi/vwuvm69w5swip3ujknsd1/criminaltrapanticimex.jpg?rlkey=cb896vzxcfj1e7ktj53ode6aa&st=79jfjkdq&dl=1",

       
       
       
      ] 
      ];

const MOB47TillsDor = [
        [
         "Bra TV - Mob 47",
         "Den Enes Brod - Mob 47",
         "Den Svenska Modellen - Mob 47",
         "Grisar I Kostym - Mob 47",
         "Jobba Tills Du Dor - Mob 47",
         "Masspsykos - Mob 47",
         "Misar Och Dod - Mob 47",
         "Moder Jord - Mob 47",
         "Pest Eller Kolera - Mob 47",
         "Punken Fostorde Mitt Liv - Mob 47",
         "På Ditt Satt - Mob 47",
         "Ratt Ska Va Ratt - Mob 47",
         "Religios Farsot - Mob 47",
         "Spela Bort Ditt Liv - Mob 47",
         "Tank Sjalv - Mob 47",
         "Ut Med Det Gamla - Mob 47"
         
        
        ],[
          "https://www.dropbox.com/scl/fi/atlq1d93j45tk60ic1vgc/bra-tv.mp3?rlkey=f010w3h987om42woeyzk360x5&st=ehospkpj&dl=1",
          "https://www.dropbox.com/scl/fi/sp03j15gvvdy7hgxa6n7m/den-enes-br_-_d.mp3?rlkey=xrt60wy5dryjc0h6x68hxko47&st=iym8jbys&dl=1",
          "https://www.dropbox.com/scl/fi/h8q4twelonspx5qnkvi4t/den-svenska-modellen.mp3?rlkey=zgw0nxxt13ppj6lh74x5t43dm&st=5t5u790h&dl=1",
          "https://www.dropbox.com/scl/fi/avlodpi67whq7r51gk183/grisar-i-kostym.mp3?rlkey=868f12dljoq31uezeu56vbbwp&st=f9wvzziw&dl=1",
          "https://www.dropbox.com/scl/fi/5pudgr0x86erttmvbx833/jobba-tills-du-d_-_r.mp3?rlkey=9zk80yi8f8px8b8rnc2zyo3u8&st=dt55xj77&dl=1",
          "https://www.dropbox.com/scl/fi/bx6kwqm80wmw38o6iag6t/masspsykos.mp3?rlkey=8f0yavulc5mcbupahxrbe3pqh&st=0h6r4g7l&dl=1",
          "https://www.dropbox.com/scl/fi/uoa60vrwi7iwe9dz6va29/mis_-_r-och-d_-_d.mp3?rlkey=i0ayrnsdgb867tyv342mj35iy&st=qsrru47d&dl=1",
          "https://www.dropbox.com/scl/fi/xuu85m6j53oxx3z2hv1zn/moder-jord.mp3?rlkey=7gsdy0n0k2bw7wui2pl2ujddp&st=a0fx5ld2&dl=1",
          "https://www.dropbox.com/scl/fi/6ys5rcqz0g6jcr4ya7bb0/pest-eller-kolera.mp3?rlkey=tw9ciqronfh9aipfmxhc09sm9&st=iedjui24&dl=1",
          "https://www.dropbox.com/scl/fi/fzpb7m3eb76ynphlbwjf7/punken-f_-_rst_-_rde-mitt-liv.mp3?rlkey=059pa8nlvmxve7sxgg4fetf00&st=m200s7om&dl=1",
          "https://www.dropbox.com/scl/fi/93iirwhjiim9npqxgu230/p-ditt-s_-_tt.mp3?rlkey=6enfarx3hdpiv7hb47s1t7ah3&st=cdj3cj51&dl=1",
          "https://www.dropbox.com/scl/fi/3c9c5561u9uoxf0qvsqa9/r_-_tt-ska-va-r_-_tt.mp3?rlkey=9yamlvfiok97mpnv74ayfwzz3&st=38bk03zj&dl=1",
          "https://www.dropbox.com/scl/fi/lojscmdf4h9u8mj3bqa96/religi_-_s-farsot.mp3?rlkey=qqili0zzjed9wiymxrkkq96hw&st=302r65jd&dl=1",
          "https://www.dropbox.com/scl/fi/vqi0hx7lean8iw2n6vajh/spela-bort-ditt-liv.mp3?rlkey=03acn2bof5uilqa3hsqq6d7ub&st=wogeb474&dl=1",
          "https://www.dropbox.com/scl/fi/io8nc0an8ifh8grsngpwb/t_-_nk-sj_-_lv.mp3?rlkey=y7wj683h1n5b4g86g7szpymur&st=0fie19y4&dl=1",
          "https://www.dropbox.com/scl/fi/c6j4fr5lqu14dohjb2c76/ut-med-det-gamla.mp3?rlkey=ol278wxw3yoxkp2saln5ytjra&st=byfzud60&dl=1",
         
        ] 
      ,[
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        "https://www.dropbox.com/scl/fi/xhuw6xflzlsryey96hk6b/Mob47Dor.jpg?rlkey=suvl28v7pfvg53kyy0ghwkfp6&st=k3dub9gx&dl=1",
        
      ] 
      ];


      const pipebomb = [
        [
        "This what i want - Front Seat Solidarity",
         "A hundred dollars - Front Seat Solidarity",
         "Board of tourism - Front Seat Solidarity",
         "Body count - Front Seat Solidarity",
         "Depression - Front Seat Solidarity",

         "Drunk punk - Front Seat Solidarity",
         "Forgotten not gone - Front Seat Solidarity",
         "Grampa - Front Seat Solidarity",
         "Hot diggety - Front Seat Solidarity",
         "Mouseteeth  - Front Seat Solidarity",

         "Selma - Front Seat Solidarity",
         "The argument - Front Seat Solidarity",
         "Trains and cops - Front Seat Solidarity",
         "We Shall Not Be Moved - Front Seat Solidarity",
        
        ],
        [
          "https://www.dropbox.com/scl/fi/jlu42l200ums43fijh0z1/01-THIS-BIKE-IS-A-PIPE-BOMB-This-Is-What-I-Want.mp3?rlkey=wb3qopvyk09vw43iblent3q3v&st=fl87n3ap&dl=1",
          "https://www.dropbox.com/scl/fi/akl8ue8lfcyurp5gvhf6z/06-THIS-BIKE-IS-A-PIPE-BOMB-A-Hundred-Dollars.mp3?rlkey=rxcpe1lx5eupsqm4vuhcictd3&st=0axufyt0&dl=1",
          "https://www.dropbox.com/scl/fi/bw58ar9pdh9v18h5m90kj/12-THIS-BIKE-IS-A-PIPE-BOMB-Board-of-Tourism.mp3?rlkey=vfcjhullg9ygrwkrt2hyvkg3n&st=83j389cx&dl=1",
          "https://www.dropbox.com/scl/fi/mri2w7mqs7uters3jem8w/03-THIS-BIKE-IS-A-PIPE-BOMB-Body-Count.mp3?rlkey=as1fyt4j4sp9781cci82eevan&st=3df2a9ac&dl=1",
          "https://www.dropbox.com/scl/fi/b4zotygrf64ffu6n6tlhk/07-THIS-BIKE-IS-A-PIPE-BOMB-Depression.mp3?rlkey=ab7lgp61eg3d66yx8wo1l0sdh&st=8q31b7z3&dl=1",

          "https://www.dropbox.com/scl/fi/3xbk3puou21cna1hozoaw/09-THIS-BIKE-IS-A-PIPE-BOMB-Drunk-Punk.mp3?rlkey=92e2aqo4e56x72392vmj6stg5&st=q1elrlas&dl=1",
          "https://www.dropbox.com/scl/fi/divjy8qlzxhli66l0t39d/14-THIS-BIKE-IS-A-PIPE-BOMB-Forgotten-Not-Gone.mp3?rlkey=h6ua297v8caavpl584qijhkka&st=wz1wea3v&dl=1",
          "https://www.dropbox.com/scl/fi/rcunk7bnd05d8nquk8jev/11-THIS-BIKE-IS-A-PIPE-BOMB-Grampa.mp3?rlkey=gi5gwt5lr2f5oeyuei3coeka1&st=j7ye5vss&dl=1",
          "https://www.dropbox.com/scl/fi/vqoxakeac17vsenodbxfd/10-THIS-BIKE-IS-A-PIPE-BOMB-Hot-Diggety.mp3?rlkey=v62l2mvysuqpj4fakr9caceyu&st=z03aqb9a&dl=1",
          "https://www.dropbox.com/scl/fi/2oy4ww39ztovxdp86541f/05-THIS-BIKE-IS-A-PIPE-BOMB-Mouseteeth.mp3?rlkey=47abzoh15cknsum97ycrordfz&st=y8sowj0h&dl=1",

          "https://www.dropbox.com/scl/fi/9r8xb2zmfdo9oja5t8rvd/02-THIS-BIKE-IS-A-PIPE-BOMB-Selma.mp3?rlkey=47qrz1jy8j1fl4gdpr4rgoag9&st=dtirpjc4&dl=1",
          "https://www.dropbox.com/scl/fi/ksoy7qi4ijp6kezysxved/08-THIS-BIKE-IS-A-PIPE-BOMB-The-Argument.mp3?rlkey=3ucr2ptlgxzm98xwq7ep49j2p&st=c19orllm&dl=1",
          "https://www.dropbox.com/scl/fi/wf2rhm9dz6h8i6chepk5p/04-THIS-BIKE-IS-A-PIPE-BOMB-Trains-and-Cops.mp3?rlkey=i8zlqh8zqkprjcvels93vyneu&st=66xeqve0&dl=1",
          "https://www.dropbox.com/scl/fi/9wfb55oykbyxvqxlanauz/13-THIS-BIKE-IS-A-PIPE-BOMB-We-Shall-Not-Be-Moved.mp3?rlkey=75zj35ea1abd7ivmrxwhbh8at&st=kbi1fstt&dl=1",
        ],
        [

        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",

        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",

        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        "https://www.dropbox.com/scl/fi/k8hex1v8wfm427uav3b11/thisbikeisapipebomb.jpg?rlkey=nhsth06d1e3db1wqifemv1cy6&st=5t6tk2zb&dl=1",
        
       
      ] 
      ];

      const elcorazondelsapoImaginacion = [
        [
         "Alto y claro - El corazón del sapo",
         "Circulos de cera - El corazón del sapo",
         "Campos - El corazón del sapo",
         "Desnudo rojo - El corazón del sapo",
         "El globo - El corazón del sapo",
         "El arbol - El corazón del sapo",
         "Juan meat for Jeremy - El corazón del sapo",
         "K.K.K. - El corazón del sapo",
         "La estatua - El corazón del sapo",
         "La noche de los cristales rotos - El corazón del sapo",
         "No me grites - El corazón del sapo",
         "Stop contol - El corazón del sapo",
        
        ],
        [
          
          "https://www.dropbox.com/scl/fi/y5dwspxjai93h9v28bkbn/04-filferro-Alto-y-Claro.mp3?rlkey=njl12whca7641pu4pj9gd4rc9&st=tggdjk5y&dl=1",
          "https://www.dropbox.com/scl/fi/xl22jp8kivi098prt9ahm/05-filferro-C-rculos-de-Cera.mp3?rlkey=rm6vbj633p5huslhk6jehl27q&st=3wpdy9bv&dl=1",
          "https://www.dropbox.com/scl/fi/iwn83mdys8g7tz0th8pdz/10-filferro-Campos.mp3?rlkey=kcq2r8ui2a35vgs0k1guf73b3&st=hpsxe1yh&dl=1",
          "https://www.dropbox.com/scl/fi/h72fa42ga4stywl5fkpc5/01-filferro-Desnudo-Rojo.mp3?rlkey=skimd6ff7x06k1eiinijvucrc&st=q128eynu&dl=1",
          "https://www.dropbox.com/scl/fi/0m4fm8yerr5klznr201l8/02-filferro-El-Globo.mp3?rlkey=f7weczak17725np2zpi0rwzml&st=jskyi7ii&dl=1",
          "https://www.dropbox.com/scl/fi/asbwlfnf0mikulqd979pl/12-filferro-El-rbol.mp3?rlkey=ezpedou1i2nud43eraguky64s&st=xfacpuzt&dl=1",
          "https://www.dropbox.com/scl/fi/8as5n3ep84tr07biwtx96/11-filferro-Juan-Meat-for-Jeremy.mp3?rlkey=2e759c8bci8n8rseiralulb5n&st=y9mb7v0y&dl=1",
          "https://www.dropbox.com/scl/fi/6w3rzekogtenvr794rjyj/09-filferro-K.K.K..mp3?rlkey=3bhed1voqugw80noaxrisfvbe&st=1i1zbonp&dl=1",
          "https://www.dropbox.com/scl/fi/tvzo9u5wuut0f8zh6pl5s/06-filferro-La-Estatua.mp3?rlkey=4yu4gqc0qi1t7g56bz3l4ahhs&st=d993eea1&dl=1",
          "https://www.dropbox.com/scl/fi/q3q57jqlvhiyi1mw6xgio/03-filferro-La-Noche-de-los-Cristales-Rotos.mp3?rlkey=8c5e6kzeiqb9u3pxrtfbdw3s8&st=kq949pzr&dl=1",
          "https://www.dropbox.com/scl/fi/gjferm9sn81cl7j2xlj1v/08-filferro-No-Me-Grites.mp3?rlkey=232xzfftifwyfepcwu784950k&st=avs16sle&dl=1",
          "https://www.dropbox.com/scl/fi/ow06yivyffkowjn0kkqza/07-filferro-Stop-Control.mp3?rlkey=boknkr3ddhvl4qwn0uobqrkfb&st=1i404tvt&dl=1",
        ],
        [

        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
        "https://www.dropbox.com/scl/fi/zwnqh4ouzcstjdfs55c4l/elcorazondelsapofuego.jpg?rlkey=e9ssicwbifpq5742qxeywha7h&st=7c5j0ia3&dl=1",
       
      ] 
      ];

      const otanjodeles = [
        [
            "Brutalidad policial - Otan",
            "¿Donde? - Otan",
            "Es esta mi vida - Otan",
            "Hablas por la espalda - Otan",
            "Juventud anarquista - Otan",

            "Politicx de mierda - Otan",
            "Puto asco - Otan",
            "Servicio militar - Otan",
            "Sientate y mira - Otan",
            "Vamos a acabar con la mierda - Otan",

            "Vivisección - Otan",
        ],
        [
            "https://www.dropbox.com/scl/fi/geygpfh3p6i0uotgm6v5f/Brutalidad-policial-Otan.mp3?rlkey=iz6bsyixa5lhph36jzc8bhua1&st=jhsgawir&dl=1",
            "https://www.dropbox.com/scl/fi/pynl5c59wz60tog952f79/Donde-Otan.mp3?rlkey=q3uvd3jjlhx9fjsandg8tlvtz&st=tent3z0a&dl=1",
            "https://www.dropbox.com/scl/fi/n1o7y8x4ft1ql2ur7r7qu/Es-esta-mi-vida-Otan.mp3?rlkey=dbfia9exnsyq0857ftyerqj2t&st=uw8lq170&dl=1",
            "https://www.dropbox.com/scl/fi/g5exspfah305e9cahm6sj/Hablas-por-la-espalda-Otan.mp3?rlkey=c74c5ozh2upu9sp558gor19sv&st=qzq0bd8r&dl=1",
            "https://www.dropbox.com/scl/fi/8j3j51t7mrivroygk7krh/Juventud-anarquista-Otan.mp3?rlkey=amp6vjpknggofycnft41padme&st=70kk3zil&dl=1",

            "https://www.dropbox.com/scl/fi/w10dykizv9mvuxow5txc3/Politicx-de-mierda-Otan.mp3?rlkey=1bciahmzdu74jyolpg8hpn6f5&st=wz2kzsf5&dl=1",
            "https://www.dropbox.com/scl/fi/mmjg10gzka8moca8hsw2v/Puto-asco-Otan.mp3?rlkey=b2cs0l6a9axqiww0niw5rcepv&st=wgx64smt&dl=1",
            "https://www.dropbox.com/scl/fi/icmv8bwf42te6hmwkzizt/Servicio-Militar-Otan.mp3?rlkey=31xp160ivhk69ksp6ggd7exu1&st=l74k3l9e&dl=1",
            "https://www.dropbox.com/scl/fi/tbninw0exlfwliqexj89l/Sientate-y-mira-Otan.mp3?rlkey=c5ognb3nen9qhj713mfdayqft&st=j9ry92xw&dl=1",
            "https://www.dropbox.com/scl/fi/c6a06j7m1pheam07u2p7x/Vamos-a-acabar-con-la-mierda-Otan.mp3?rlkey=j6u44fynqfxvhkxf9m84fzw2j&st=vtdkpkgk&dl=1",

            "https://www.dropbox.com/scl/fi/l8twyxsqns3ft7f2268y3/Vivisecci-n.mp3?rlkey=xldxd1cxipbk3g3mntge7f5gm&st=ybbk6hm2&dl=1",
        ],
        [
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",

            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",

            "https://www.dropbox.com/scl/fi/lgxh9nass5j9xwsqe1n4h/otanjodeles.jpg?rlkey=9tf6fgtf1xfmjmlsi79u0r68n&st=zvdddah2&dl=1",
                
        ],
    ];

    const pussywhippedbikinikill = [
        [
         "Alien she - Bikini kill",
         "Blood one - Bikini kill",
         "For Tammy Rae - Bikini kill",
         "Hamster baby - Bikini kill",
         "Lil red - Bikini kill",

         "Magnet - Bikini kill",
         "Rebel girl - Bikini kill",
         "Speed heart - Bikini kill",
         "Star Bellied Boy - Bikini kill",
         "Star fish - Bikini kill",
         
         "Sugar - Bikini kill",
         "Tell Me So - Bikini kill",
        
      
        ],[
          "https://www.dropbox.com/scl/fi/rcueb5rwh2gqq5rev8d1v/Alien-She_spotdown.org.mp3?rlkey=wy4s9ldj681bb6zvg8q431htu&st=vwiwv680&dl=1",
          "https://www.dropbox.com/scl/fi/pyntlyyilyeuo62z06k5f/Blood-One_spotdown.org.mp3?rlkey=h4qkz22keg8t4v557dtj6vx2u&st=dfuqloln&dl=1",
          "https://www.dropbox.com/scl/fi/icxn1c2sdee3xggyotbvv/For-Tammy-Rae_spotdown.org.mp3?rlkey=2rjrgf4m0tnb5wo5zk2rremn6&st=v2g1ag6z&dl=1",
          "https://www.dropbox.com/scl/fi/y7vfy34guarznszln456x/Hamster-Baby_spotdown.org.mp3?rlkey=rdl7h1oqkpc3r8yxs77htobrb&st=355zfyox&dl=1",
          "https://www.dropbox.com/scl/fi/3uix20dloi7poffwqd80n/Lil-Red_spotdown.org.mp3?rlkey=hpq31ns079iz9n675lmkb5lzb&st=crfl6nsd&dl=1",

          "https://www.dropbox.com/scl/fi/xv3jxd45pkvrtybcfhts0/Magnet_spotdown.org.mp3?rlkey=q1w6h7q6wq1kcp3a0rjog6ti8&st=3s7tljjq&dl=1",
          "https://www.dropbox.com/scl/fi/qb7fwsig714r90pczy6zc/Rebel-Girl_spotdown.org.mp3?rlkey=5ht1119yxpq63bsr7xsy6gt25&st=c72xym07&dl=1",
          "https://www.dropbox.com/scl/fi/sh2cggwsed8bdx5l61mhm/Speed-Heart_spotdown.org.mp3?rlkey=ufwe96sanolh1s51p6rx8u6ob&st=b1wod6l7&dl=1",
          "https://www.dropbox.com/scl/fi/4aq1u8wod8kau3jwqjhzl/Star-Bellied-Boy_spotdown.org.mp3?rlkey=5r51f8iax0us1ogtx8qz72vk4&st=whs3utzr&dl=1",
          "https://www.dropbox.com/scl/fi/s7urvji9wld7voqli48t6/Star-Fish_spotdown.org.mp3?rlkey=w0anaf6jbmwac5ebdzdmbxo6k&st=drltra9k&dl=1",

          "https://www.dropbox.com/scl/fi/a04xrhazy4zsqir3toc81/Sugar_spotdown.org.mp3?rlkey=xc5tnpyzkl9eo9w0mehbqai3x&st=3s93fj25&dl=1",
          "https://www.dropbox.com/scl/fi/mlzn4otonzh0g7du6myb9/Tell-Me-So_spotdown.org.mp3?rlkey=cflvae79l209zjbacp16bqj8o&st=qttace48&dl=1",
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",

        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        "https://www.dropbox.com/scl/fi/yrj7w9hmr2vhvf2aa8f2d/pussywhippedbikinikill.jpg?rlkey=3b833u78jph5nxd9c8zcevx0s&st=7a4hifhh&dl=1",
        
      ] 
      ];

      const guerrasocial = [
    [
        "Barrios - Necesidad de Luchar",
        "Contrarevolución - Necesidad de Luchar",
        "Ego versus Alium - Necesidad de Luchar",
        "El camino del Progreso - Necesidad de Luchar",
        "Estructurando mentes - Necesidad de Luchar",

        "La guerra social es inevitable - Necesidad de Luchar",
        "Miradas de cristal - Necesidad de Luchar",
        "Muerte accidental de un esclavo - Necesidad de Luchar",
        "Organiza tu rabia - Necesidad de Luchar",
        "Razones de estado - Necesidad de Luchar",

        "Sociedad asalariada - Necesidad de Luchar",
        "Subir y ganar - Necesidad de Luchar",
       
    ],
    [
        "https://www.dropbox.com/scl/fi/e7yh3l2g56lt716h916ev/11-Necesidad-de-luchar-Barrios.mp3?rlkey=2xluu7kv533tiaqxfjuzpyprw&st=vyprbjo0&dl=1",
        "https://www.dropbox.com/scl/fi/fqwp1gq31eqhmjiy5p5im/03-Necesidad-de-luchar-Contrarrevoluci-n-no-olvidamos.mp3?rlkey=536igv1ofpc3v7q8r0624av92&st=wd86evup&dl=1",
        "https://www.dropbox.com/scl/fi/ncrfyn8503fmrfj0rsrb2/08-Necesidad-de-luchar-Ego-versus-alium.mp3?rlkey=pddqzxbuisttip6bbqmpzbuhk&st=21qz0bef&dl=1",
        "https://www.dropbox.com/scl/fi/nvtf7t2zblylom069erda/12-Necesidad-de-luchar-El-camino-del-progreso.mp3?rlkey=x3y0w20m1j9ilesoif7iv9hsl&st=3qmovk94&dl=1",
        "https://www.dropbox.com/scl/fi/0r28ymw0pwmezq0urbh4y/07-Necesidad-de-luchar-Estructurando-mentes.mp3?rlkey=af00blkjpy204r50mggysseu1&st=80godi77&dl=1",
        "https://www.dropbox.com/scl/fi/1v3k9q2m9kvccqsqlmkc8/01-Necesidad-de-luchar-La-guerra-social-es-inevitable.mp3?rlkey=3m6qev4zmracism5vqzhd8sv8&st=35ta4461&dl=1",
        "https://www.dropbox.com/scl/fi/4yh68pyysc81fbb92v7k3/02-Necesidad-de-luchar-Miradas-de-cristal.mp3?rlkey=mqbqbdp87m66twju0wqvt8hec&st=ac4wsis3&dl=1",  
        "https://www.dropbox.com/scl/fi/1hsepywb7n5n8vpfioy90/10-Necesidad-de-luchar-Muerte-accidental-de-un-esclavo.mp3?rlkey=tazsmqatapzcp05q0bo2xv141&st=r7yw8szr&dl=1",
        "https://www.dropbox.com/scl/fi/c963n1lu91z1ijtsidmt3/06-Necesidad-de-luchar-Organiza-tu-rabia.mp3?rlkey=coclxgugbazib18gmu5ozgjx9&st=2rw3n9xj&dl=1",    
        "https://www.dropbox.com/scl/fi/jnthka0f5urio0a4lg1fn/09-Necesidad-de-luchar-Razones-de-estado.mp3?rlkey=4g5fi7zl4k7tsqgnub7j53c6z&st=ktbgm8u8&dl=1",  
        "https://www.dropbox.com/scl/fi/oagqmh17nt7y7dkbh5q58/04-Necesidad-de-luchar-Sociedad-asalariada.mp3?rlkey=6hlpm550ht66gikrbuuobn0rp&st=37cadu4e&dl=1",
        "https://www.dropbox.com/scl/fi/to0212k4kwn3vqvugy1di/05-Necesidad-de-luchar-Subir-y-ganar.mp3?rlkey=rcnnfqk9stskrdxtqoxi3i2sm&st=fkm8ttpk&dl=1",
    ],  
    [
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",

        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",
        "https://www.dropbox.com/scl/fi/j9wfx5gmpdmmu6ou68f3e/laguerrasocialesinevitable.jpg?rlkey=722lurnhyl4j8ayimqcx7d1qa&st=7m4vg01s&dl=1",

        
    ]
];

const txacoli = [
    [
        "Bombas - Txacoli Conflict",
        "Derechos humanos - Txacoli Conflict",
        "Silencio (Instro) - Txacoli Conflict",
        "Fútbol - Txacoli Conflict",
        "Banderas - Txacoli Conflict",
        "La radio comercial (Shampain) - Txacoli Conflict",

       
       
    ],
    [
        "https://www.dropbox.com/scl/fi/yamvd6b2rp2lvfma62u16/01-Txakoly-Conflict-Bombas.mp3?rlkey=0loe6ekl7sy23lbn5otyyt1me&st=dkxy2l70&dl=1",
        "https://www.dropbox.com/scl/fi/6mc1n3a3alaslgy9xgfzj/02-Txakoly-Conflict-Derechos-humanos.mp3?rlkey=aflbgr4twsyxohaeghz2y0g5c&st=605kh6yt&dl=1",
        "https://www.dropbox.com/scl/fi/2p2foo39ls4ee2gfdw3ot/03-Txakoly-Conflict-Silencio-Instrumental.mp3?rlkey=spz7ayfz4hjbgn1m45s58zovh&st=bvr8wtsr&dl=1",
        "https://www.dropbox.com/scl/fi/0aldhzcksqeo17j74ibw3/04-Txakoly-Conflict-F-tbol.mp3?rlkey=nbo2onk0qbqz1luptgy58dcph&st=udpucgvw&dl=1",
        "https://www.dropbox.com/scl/fi/kjv86ekbgk6uawhug3vux/05-Txakoly-Conflict-Banderas.mp3?rlkey=jacskdeaw0hdnfb4wtakraw3b&st=ki2adsz1&dl=1",
        "https://www.dropbox.com/scl/fi/8lqp7rn57poeu7wwc0abw/06-Txakoly-Conflict-La-Radio-Comercial-Shampain.mp3?rlkey=tsiyh9324ogtnuu040lulrqvy&st=tdrn49tq&dl=1",
        
    ],
    [
        "https://www.dropbox.com/scl/fi/m72u2gdac28i33fb6kcx5/txacoli.jpg?rlkey=viukvt044g1seylz7rocap1gv&st=dp8tqcbk&dl=1",
        "https://www.dropbox.com/scl/fi/m72u2gdac28i33fb6kcx5/txacoli.jpg?rlkey=viukvt044g1seylz7rocap1gv&st=dp8tqcbk&dl=1",
        "https://www.dropbox.com/scl/fi/m72u2gdac28i33fb6kcx5/txacoli.jpg?rlkey=viukvt044g1seylz7rocap1gv&st=dp8tqcbk&dl=1",
        "https://www.dropbox.com/scl/fi/m72u2gdac28i33fb6kcx5/txacoli.jpg?rlkey=viukvt044g1seylz7rocap1gv&st=dp8tqcbk&dl=1",
        "https://www.dropbox.com/scl/fi/m72u2gdac28i33fb6kcx5/txacoli.jpg?rlkey=viukvt044g1seylz7rocap1gv&st=dp8tqcbk&dl=1",
        "https://www.dropbox.com/scl/fi/m72u2gdac28i33fb6kcx5/txacoli.jpg?rlkey=viukvt044g1seylz7rocap1gv&st=dp8tqcbk&dl=1",
    ]
    ];

    const activemindstt = [
        [
         "1st Of October, 2017 - Active Minds",
         "Terrorvision - Active Minds",
         "The price of exporting excellence - Active Minds",
         "Titanic - Active Minds",
         "The man who fell to earth - Active Minds",
         "Some fucker on a horse - Active Minds",
         "Fear of a secular planet - Active Minds",
         "We need to talk about Saudi Arabia - Active Minds",
         "Beware The Fuckwitted, Egotistical Tycoons - Active Minds",
         "Not my reality - Active Minds",
         "Shamima - Active Minds",
         
         
        
      
        ],[
         "https://www.dropbox.com/scl/fi/opgdiurnixhqjz5f0u5ma/01-Active-Minds-1st-Of-October-2017.mp3?rlkey=vh7jrkh17yblo3bn3d8r1z2j6&st=1a20wso1&dl=1",
         "https://www.dropbox.com/scl/fi/275o4fkc6s6afms3a3xvy/02-Active-Minds-Terrorvision.mp3?rlkey=3c77m0bioo4zqrnb61w02igrp&st=61s41z2b&dl=1",
         "https://www.dropbox.com/scl/fi/egsguqcr476h6g6d8mecg/03-Active-Minds-The-Price-Of-Sporting-Excellence.mp3?rlkey=jg4wpeh6harltoed1xszmcs2j&st=71eqqbsx&dl=1",
         "https://www.dropbox.com/scl/fi/nj2pc1z4s69rw6nebtiur/04-Active-Minds-Titanic.mp3?rlkey=ljxos1k1229s8m2ieps9lwbjo&st=cxj4l8og&dl=1",
         "https://www.dropbox.com/scl/fi/vw2nnnshkw94sj18fou8e/05-Active-Minds-The-Man-Who-Fell-To-Earth.mp3?rlkey=dpotdhosq12lapfnlrv7nkaca&st=epzmind1&dl=1",
         "https://www.dropbox.com/scl/fi/eleja6d7rd5okjxrt36vt/06-Active-Minds-Some-Fucker-On-A-Horse.mp3?rlkey=2lylsy0e7l79blv2cxy67pcg6&st=yo54395p&dl=1",
         "https://www.dropbox.com/scl/fi/tr2tnveoefq32yn575kxy/07-Active-Minds-Fear-Of-A-Secular-Planet.mp3?rlkey=nas13pziwyo55v250k0h9hbqg&st=q10ap9k0&dl=1",
         "https://www.dropbox.com/scl/fi/yeu1evr504foeypcngr1g/08-Active-Minds-We-Need-To-Talk-About-Saudi-Arabia.mp3?rlkey=tz62hqw7bofegqd0iznpb0mwh&st=phhwllm1&dl=1",
         "https://www.dropbox.com/scl/fi/zjyjsecxfg251bkoziy1z/09-Active-Minds-Beware-The-Fuckwitted-Egotistical-Tycoons.mp3?rlkey=ji6snu3iay4i1tu7nsbh03762&st=nar4qfm1&dl=1",
         "https://www.dropbox.com/scl/fi/57jxs3dyncj89x0pgee0e/10-Active-Minds-Not-My-Reality.mp3?rlkey=7eki5cts7dfv9qkifgmpvvrj4&st=ndvfi96i&dl=1",
         "https://www.dropbox.com/scl/fi/8px69spc5g32fdtjkco7r/11-Active-Minds-Shamima.mp3?rlkey=adx8hyau18l5marill5yy24ql&st=hei73tjm&dl=1",
      ]  
      ,[
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",

       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",

       "https://www.dropbox.com/scl/fi/bkks95ukbzt9tm8pc4yk9/activemindsthingsthat.jpg?rlkey=bwdoubyj2j1mhz4avegyycx4a&st=ywhdem1x&dl=1",
       
       
      ] 
      ];

      const electricWar = [
        [
         "Electric War - Little Barrie",
        "Zero Sun - Little Barrie",
        "Spektato - Little Barrie",
        "Creaky - Little Barrie",
        "’Said Soul - Little Barrie",
        "Sick 8 - Little Barrie",
        "My Now - Little Barrie",
        "Count Of Four - Little Barrie",
        ],[
         "https://www.dropbox.com/scl/fi/vnulvlptyh2asx65e87jv/01-Little-Barrie-Electric-War.mp3?rlkey=uh4myt0kk7zpmmv3khkug6rkf&st=o1n7x96n&dl=1",
        "https://www.dropbox.com/scl/fi/aaa4ipswvhjf9qyhbwkik/02-Little-Barrie-Zero-Sun.mp3?rlkey=uo65pzpkjlm8xm5k6xwagcdmd&st=z7167q1s&dl=1",
        "https://www.dropbox.com/scl/fi/dx2g8sn3c2x3pcbjbed4b/03-Little-Barrie-Spektator.mp3?rlkey=0ijioexin2jrq5lj8x6gmi5i6&st=rc1dlyim&dl=1",
        "https://www.dropbox.com/scl/fi/b8f619yddzbfwshu5w9d0/04-Little-Barrie-Creaky.mp3?rlkey=i1nbzvitb6xn0uhkgrrtrvypd&st=9283peiu&dl=1",
        "https://www.dropbox.com/scl/fi/myc1dj8mqd7s275wd1z2e/05-Little-Barrie-Said-Soul.mp3?rlkey=0s5zyckx1fl72lc3xwyxg0mit&st=rm4p60cw&dl=1",
        "https://www.dropbox.com/scl/fi/vssk4um8ra07izekoxv6z/06-Little-Barrie-Sick-8.mp3?rlkey=41qtx7l8ub5f0soiazgg7kezi&st=9wmz4vs6&dl=1",
        "https://www.dropbox.com/scl/fi/v8ahenpjgzznkqb6a4prw/07-Little-Barrie-My-Now.mp3?rlkey=a37emts6i6usa29dldo41q9bh&st=vetjp59a&dl=1",
        "https://www.dropbox.com/scl/fi/9u92zlt6gwkvc2ixuq342/08-Little-Barrie-Count-Of-Four.mp3?rlkey=e3q0myco1kgvjslpzelrk6i5s&st=k2sgfxks&dl=1",
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        "https://www.dropbox.com/scl/fi/tojl4cz4lb1ug45bts3xf/electricwar.jpg?rlkey=sqjjw6j73ih9t0mo7zat7777f&st=84eszkrw&dl=1",
        
      ]
    ];

 const trashmetal2 = [
        [
              "Bastard of Hades - Hellripper",
              "Anneliese - Hellripper",
              "Demdike (In League with the Devil) - Hellripper",
              "Within the Everlasting Hellfire - Hellripper",
              "From Hell - Hellripper",
              "Black Invocation - Hellripper",
              "Conduit Closing - Hellripper",
              "Coagulating Darkness - Hellripper",
        ],[
          "https://www.dropbox.com/scl/fi/zv2nz6geyd15slag7b0qn/01-Hellripper-Bastard-of-Hades.mp3?rlkey=o64tq3dovhbzz6wk1yjeeqfd8&st=pwsxaoze&dl=1",
        "https://www.dropbox.com/scl/fi/ghr30l6nme8c7s1f5eghm/02-Hellripper-Anneliese.mp3?rlkey=gss0w3m075rov0h76p9ymm4pp&st=op045o1p&dl=1",
        "https://www.dropbox.com/scl/fi/l0crn7an0w34gn1jiopxp/03-Hellripper-Demdike-In-League-with-the-Devil.mp3?rlkey=bzjnyuntwhartanrvfhz03gpp&st=0rwshgtp&dl=1",
        "https://www.dropbox.com/scl/fi/1j4dx8p7nwr7ivafcpo9e/04-Hellripper-Within-the-Everlasting-Hellfire.mp3?rlkey=0zhp81dix4l41473881rf44qc&st=howzv5o1&dl=1",
        "https://www.dropbox.com/scl/fi/6how13zp631a2ybufvv3w/05-Hellripper-From-Hell.mp3?rlkey=ivkr10b0kfqqh842nnaahjd36&st=eqm6lj6e&dl=1",
        "https://www.dropbox.com/scl/fi/q7zhyu146dzkg5qtdsg92/06-Hellripper-Black-Invocation.mp3?rlkey=ag6sk2j7q6ft1bm35ytm5nyqc&st=zikcr7j1&dl=1",
        "https://www.dropbox.com/scl/fi/sncduvf5gd91njksnomuv/07-Hellripper-Conduit-Closing.mp3?rlkey=q4fhcj94o3ro0664j11dvy9xy&st=ols80k42&dl=1",
        "https://www.dropbox.com/scl/fi/iach18ttpdaxy15ddmw8v/08-Hellripper-Coagulating-Darkness.mp3?rlkey=dgdi7ycvrafe26jm9fhflbau7&st=gxkpunus&dl=1",
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        "https://www.dropbox.com/scl/fi/ioaq3c4u1j1xqixxfapcr/coagulating.jpg?rlkey=5z2i80aqehbfyh3pttzg4aoms&st=5qadij6k&dl=1",
        
      ]
    ];

    const trashmetal1 = [
        [
      "Hit The Lights - Metallica",
      "The Four Horsemen - Metallica",
      "Motorbreath - Metallica",
      "Jump In The Fire - Metallica",
      "(Anesthesia) Pulling Teeth - Metallica",
      "Whiplash - Metallica",
      "Phantom Lord - Metallica",
      "No Remorse - Metallica",
      "Seek & Destroy - Metallica",
      "Metal Militia - Metallica",
        ],[
          "https://www.dropbox.com/scl/fi/kvrjxcwta2llbjny788ma/Hit-The-Lights_spotdown.org.mp3?rlkey=sndxr1duen0s08hqg8j7fxe9x&st=yohjjfgr&dl=1",
"https://www.dropbox.com/scl/fi/16qnzwpkfj8jwlvq0s6tw/The-Four-Horsemen_spotdown.org.mp3?rlkey=96hsonapvmn7cafjwkonbsm1z&st=jsecso34&dl=1",
"https://www.dropbox.com/scl/fi/sff0nbcp9e0j0rz14rcfo/Motorbreath_spotdown.org.mp3?rlkey=904zl10q5dbi8w151zn439c5q&st=3kdp59ak&dl=1",
"https://www.dropbox.com/scl/fi/1ra9fkzysjdakw4pkosbv/Jump-In-The-Fire_spotdown.org.mp3?rlkey=tlaaft3j3z4rphlrj11uxm88k&st=35ri8612&dl=1",
"https://www.dropbox.com/scl/fi/k27ail8d8fr91ejfpqo7n/Anesthesia-Pulling-Teeth_spotdown.org.mp3?rlkey=j3o0eysi8g7vwgcvgee5scwal&st=jrn06fdr&dl=1",
"https://www.dropbox.com/scl/fi/uy7od7g1vk4wsj1cyfqt8/Whiplash_spotdown.org.mp3?rlkey=m8u71p4m48kvh5rxw1j0kjks6&st=31zkbvx8&dl=1",
"https://www.dropbox.com/scl/fi/l26lyb6cqyhid2t3zfz16/Phantom-Lord_spotdown.org.mp3?rlkey=havh7pfuqhag5rl7fof8k0das&st=nbzur19u&dl=1",
"https://www.dropbox.com/scl/fi/l26lyb6cqyhid2t3zfz16/Phantom-Lord_spotdown.org.mp3?rlkey=havh7pfuqhag5rl7fof8k0das&st=nbzur19u&dl=1",
"https://www.dropbox.com/scl/fi/gyouq3r2ouwp0jq8vlfwc/Seek-Destroy_spotdown.org.mp3?rlkey=9jbdiyd18rleb4xymcyespq28&st=fnkpymii&dl=1",
"https://www.dropbox.com/scl/fi/zj31bld5swo2arft4zvxo/Metal-Militia_spotdown.org.mp3?rlkey=4afua07oxwar986gdg15d9k3p&st=4uq5njcr&dl=1",
      ] 
      ,[
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",

        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        "https://www.dropbox.com/scl/fi/pyo2e0igmjg3x7ppk4aqp/killemall.jpg?rlkey=6th43cqybbidwlqpidsdb8wnz&st=dadg3vlu&dl=1",
        
        
      ]
    ];

const yellowgoat= [
    [
        "Ascension / Intro - Joel Grind",
        "Black order - Joel Grind",
        "Cross damnation - Joel Grind",
        "Descension (outro) - Joel Grind",
        "Foul spirit within - Joel Grind",
        "Grave encounters - Joel Grind",
        "Hail to cruelty - Joel Grind",
        "Hell's Master of Hell - Joel Grind",
        "The eternal one - Joel Grind",
        "Vengeance Spell - Joel Grind",
    ],[
        "https://www.dropbox.com/scl/fi/2m8c5abaybza5zvhbvan4/01-Joel-Grind-Ascension-Intro.mp3?rlkey=4ddbjbuxnw1032yjj768cbhiv&st=9ufp5xd4&dl=1",
        "https://www.dropbox.com/scl/fi/yvqmdgip04j6grp6qsgmc/07-Joel-Grind-Black-Order.mp3?rlkey=v0vks1pco13cxv5v5jkq8q3yr&st=vy51k5d3&dl=1",
        "https://www.dropbox.com/scl/fi/s46bc3mtsmu6wbler5r7j/05-Joel-Grind-Cross-Damnation.mp3?rlkey=4k3bi7focxknfdmpapfcuedgy&st=q64f7idq&dl=1",
        "https://www.dropbox.com/scl/fi/fof5deflwe23c9gmgl7nw/10-Joel-Grind-Descension-Outro.mp3?rlkey=oyz5ptw9txjvl8x64flw65qvs&st=czbl1y26&dl=1",
        "https://www.dropbox.com/scl/fi/m8qp3zw8r4q59i0wf904a/04-Joel-Grind-Foul-Spirit-Within.mp3?rlkey=m4q1vrzhlvshpem8aaghaq5lx&st=a5xbpvel&dl=1",
        "https://www.dropbox.com/scl/fi/t0bqa7oqmwme2qfo4q1rj/06-Joel-Grind-Grave-Encounters.mp3?rlkey=ckar5t55jks315u4lty7yl58b&st=zt806bvu&dl=1",
        "https://www.dropbox.com/scl/fi/dup15rlatyvb3vvddk9mm/09-Joel-Grind-Hail-to-Cruelty.mp3?rlkey=q3lbe5k823lenov0qm2lkp7x4&st=49s44f28&dl=1",
        "https://www.dropbox.com/scl/fi/23qneq8ds6419m0uozvuf/02-Joel-Grind-Hell-s-Master-of-Hell.mp3?rlkey=ucvw39k8322w3e1f3wn78x9kn&st=x03y8z7k&dl=1",
        "https://www.dropbox.com/scl/fi/jlgqt1x5d04x80hxmrqmb/08-Joel-Grind-The-Eternal-One.mp3?rlkey=2a4bk8csevriq4kzqtca8l47p&st=l73f4bvf&dl=1",
        "https://www.dropbox.com/scl/fi/td9i7pfwdeos9w0xhrfun/03-Joel-Grind-Vengeance-Spell.mp3?rlkey=ff7d88z2634efq35p92mb83c1&st=yralyuxi&dl=1",
    ],[
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
        "https://www.dropbox.com/scl/fi/8ep002dax01tmfh0bx4uk/yellowgoat.jpg?rlkey=fn2b7i68ksmepylwiylmafs48&st=e0t3grkk&dl=1",
    ],
];

const leyendatiempo= [
    [
      "Bahia de Cadiz - Camaron",
      "Homenaje a Federico - Camaron",
      "La Leyenda del Tiempo - Camaron",
      "La Tarara - Camaron",
      "Mi niña se fue a la Mar - Camaron",
      "Nana del Caballo Grande - Camaron",
      "Romance del Amargo - Camaron",
      "Tangos de la Sultana - Camaron",
      "Viejo Mundo - Camaron",
      "Volando Voy - Camaron",
    ],[
        "https://www.dropbox.com/scl/fi/c9zot9wse7oupufafiwc3/Bahia-De-Cadiz_spotdown.org.mp3?rlkey=r6mpyd0yzybm6jr6uiosazrxh&st=wly3xde4&dl=1",
        "https://www.dropbox.com/scl/fi/lj84wzkbnu03jxf1wv3r3/Homenaje-A-Federico_spotdown.org.mp3?rlkey=kx8cin6r9qt7x3ikn5nisqht9&st=b6e7oojo&dl=1",
        "https://www.dropbox.com/scl/fi/ltdaa3vau14vq5w8tefqv/La-Leyenda-Del-Tiempo_spotdown.org.mp3?rlkey=17yv58qohnxenekqpg1fhkg33&st=gupg68r7&dl=1",
        "https://www.dropbox.com/scl/fi/pc6wa1ec4uhbhi8kanpsz/La-Tarara_spotdown.org.mp3?rlkey=p6fbwkjghuwz1o42ufif6hzkl&st=4fju06oy&dl=1",
        "https://www.dropbox.com/scl/fi/gzximyurrnpchidggtf3h/Mi-Nina-Se-Fue-A-La-Mar_spotdown.org.mp3?rlkey=qc44y3deehcytbipox046wtco&st=t8wukz7i&dl=1",
        "https://www.dropbox.com/scl/fi/208f8xee14t1posaczefe/Nana-Del-Caballo-Grande_spotdown.org.mp3?rlkey=a98fdgp5oxmxtdt8sp707d7t7&st=9prrbhk5&dl=1",
        "https://www.dropbox.com/scl/fi/lzi8jrz8rgd9us1pazwlt/Romance-Del-Amargo_spotdown.org.mp3?rlkey=fqd2dtpfjkjjkxolf150p0xf8&st=bnhofy8n&dl=1",
        "https://www.dropbox.com/scl/fi/ak9vnfi75y2b71jbgm2uj/Tangos-De-La-Sultana_spotdown.org.mp3?rlkey=ow2ra1pcegwt3npjc41x9kqe9&st=oyepkn4q&dl=1",
        "https://www.dropbox.com/scl/fi/g46w2x8icwww58z0ar0sw/Volando-Voy_spotdown.org.mp3?rlkey=b4o1axp9dr3e1wk7ijqj1b594&st=nl00u3x1&dl=1",
        "https://www.dropbox.com/scl/fi/g46w2x8icwww58z0ar0sw/Volando-Voy_spotdown.org.mp3?rlkey=b4o1axp9dr3e1wk7ijqj1b594&st=tg1a8iuo&dl=1",
    ],[
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        "https://www.dropbox.com/scl/fi/v8w5v2cbhznl4o1lewbdg/leyendatiempo.jpg?rlkey=xl74g42d7cgqzndmgn5z5j990&st=4abaaubw&dl=1",
        

    ],
];

const laniñadelapueblaimalways = [
        [
         "Alone with you at the door - La niña de la puebla",
         "Because i cannot forget you - La niña de la puebla",
         "Between Brambles and Brambles - La niña de la puebla",
         "Darkness - La niña de la puebla",
         "Fate Brought Us Together - La niña de la puebla",
         "I´m always crying - La niña de la puebla",
         "If you leave - La niña de la puebla",
         "I´m always crying - La niña de la puebla",
         "In the Villages of My Andalusia - La niña de la puebla",
         "Mountain top - La niña de la puebla",
         "My pains are very big - La niña de la puebla",
         "My sister - La niña de la puebla",
         "The lass - La niña de la puebla",
         "The love of the Shepherdess - La niña de la puebla",
         "With the hope lost - La niña de la puebla",
         
        
        ],
        [
          "https://www.dropbox.com/scl/fi/oui0426vwevafl1u83sxa/12-Ni-a-de-la-Puebla-Alone-with-You-at-the-Door.mp3?rlkey=pmhs0i0uiwlg035fkg5vxde5l&st=ddam9etd&dl=1",
          "https://www.dropbox.com/scl/fi/z7hjk7gotjmg2d2wlc47b/04-Ni-a-de-la-Puebla-Because-I-Cannot-Forget-You.mp3?rlkey=zd8cpzp5mvpwb11nx6t0scu2y&st=skutykfn&dl=1",
          "https://www.dropbox.com/scl/fi/29z4jkn8kqgyqj1ntz5hf/14-Ni-a-de-la-Puebla-Between-Brambles-and-Brambles.mp3?rlkey=p2724zsburgwkpgvwbdl0u4hd&st=onnopolm&dl=1",
          "https://www.dropbox.com/scl/fi/o5y5b5wrwzk66a1islxj5/01-Ni-a-de-la-Puebla-Darkness.mp3?rlkey=l69rk6bn6axb7whki9xn8m3hq&st=iug93fw8&dl=1",
          "https://www.dropbox.com/scl/fi/sfmxtwbz38u665kcoejrc/13-Ni-a-de-la-Puebla-Fate-Brought-Us-Together.mp3?rlkey=jrfwr4gjf66lac08mwnblm8d2&st=1n8cunp1&dl=1",

          "https://www.dropbox.com/scl/fi/knsfqobw5887zjnp3jpt6/02-Ni-a-de-la-Puebla-I-m-Always-Crying.mp3?rlkey=7wgibue1wp1zvwmtzpzrcuhbx&st=rfb5vr6c&dl=1",
          "https://www.dropbox.com/scl/fi/vdkp8dc5rua50yr2q7dft/03-Ni-a-de-la-Puebla-If-You-Leave.mp3?rlkey=zyysj9wpmcjyj186rmssdqu2t&st=cs58e21l&dl=1",
          "https://www.dropbox.com/scl/fi/n15vl8s9e0k7581f4tj15/09-Ni-a-de-la-Puebla-In-the-Villages-of-My-Andalusia.mp3?rlkey=ddawcwa9m6e36rsad5tvbdv79&st=fosx3zgl&dl=1",
          "https://www.dropbox.com/scl/fi/yfsx6pfnf3zz0ucecyr9v/07-Ni-a-de-la-Puebla-Mountain-Top.mp3?rlkey=r3odnjnon0qadq7ojtkhyy9re&st=japfrr8k&dl=1",
          "https://www.dropbox.com/scl/fi/wiwqfqtjb65rmdvh0bh5f/06-Ni-a-de-la-Puebla-My-Pains-Are-Very-Big.mp3?rlkey=hb0w0g5g320eh3yxugn3t2qqo&st=54tluaso&dl=1",

          "https://www.dropbox.com/scl/fi/v427li77hitrc5x5sdcui/05-Ni-a-de-la-Puebla-My-Sister.mp3?rlkey=na7kmduf6ewdnm1wswiuy9m7h&st=1a9cr0cz&dl=1",
          "https://www.dropbox.com/scl/fi/0uvuxk62u7fifn2y5hj7a/11-Ni-a-de-la-Puebla-The-Lass.mp3?rlkey=1kr9nzab2rlc3d14oqjnl0qum&st=af37f8uj&dl=1",
          "https://www.dropbox.com/scl/fi/c90r2bd2ozwcwyxiqw3up/10-Ni-a-de-la-Puebla-The-Love-of-the-Shepherdess.mp3?rlkey=0pl32cjpm7s2210li1kl27lqq&st=i0pxsx94&dl=1",
          "https://www.dropbox.com/scl/fi/doxneqgi1myjvp1i6mf0f/08-Ni-a-de-la-Puebla-With-the-Hope-Lost.mp3?rlkey=oahtsnplybxpso38pqnfezvsv&st=evnwccpi&dl=1",
,        ],
        [

        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",

        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",

        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        "https://www.dropbox.com/scl/fi/8ns8s5nvwte7knhfvswr3/lani-adelapueblaimalways.jpg?rlkey=nk6avqz21kvvv2uac3p4tb5he&st=py2dic3y&dl=1",
        
       
      ] 
      ];



const lastkindwords = [
        [
         "Geechie Wiley - Last Kind Words",
         "Kid Prince Moore - Church Bells",
         "Robert Petway - Catfish Blues",
         "Sister O.M Terell - I'm Going To That City (No Die No More)",
         "Lottie Kimbrough - Rolling Log",

         "Louis McDaniels & Gid Smith - It's Hard To Believe You Sweet Love",
         "Lulu Jackson - Careless Love",
         "Robert Wilkins - It's No Way To Get Along",
         "It's No Way To Get Along – The Anglin Brothers - Money Cannot Buy Your Soul",
         "Blind Willie & Kate McTell - Don't Let Nobody Turn You 'Round",

         "Cannon's Jug Stompers - I'm Going To Germany",
         "Isaiah Nettles - It's Cold In China",
         "Memphis Minnie & Kansas Joe McCoy - I Called You This Morning",
         "Edward Clayborn - Death Is Only A Dream",
        ],
        [
         "https://www.dropbox.com/scl/fi/q4s87z4lurn4iox1bk5g2/01-Various-Artists-Geechie-Wiley-Last-Kind-Words.mp3?rlkey=k86qnq7vocfm3yh5t0hqs8rbl&st=o1dpbel9&dl=1",
         "https://www.dropbox.com/scl/fi/ia10zxmzgj0mr9vk4leny/02-Various-Artists-Kid-Prince-Moore-Church-Bells.mp3?rlkey=yq5xq91o3ez59lta40y9mdiq6&st=ja5x26ng&dl=1",
         "https://www.dropbox.com/scl/fi/8q1t35ochyt4kvjuanmml/03-Various-Artists-Robert-Petway-Catfish-Blues.mp3?rlkey=ouoed0w4xcjyjbixopvv34hi9&st=ep9oy7g8&dl=1",
         "https://www.dropbox.com/scl/fi/rym5kby3ppf48wjx38oge/04-Various-Artists-Sister-O.M-Terell-I-m-Going-To-That-City-No-Die-No-More.mp3?rlkey=8h937p7a4cppb508ekwxhmsee&st=ksqrmna0&dl=1",
         "https://www.dropbox.com/scl/fi/lxa476oceytaqtp6si5kw/05-Various-Artists-Lottie-Kimbrough-Rolling-Log.mp3?rlkey=us04m84pmd2i0r3qc4sj2dj98&st=l574qie6&dl=1",

         "https://www.dropbox.com/scl/fi/8s7iy77jnq4suq6g59bh9/06-Various-Artists-Louis-McDaniels-Gid-Smith-It-s-Hard-To-Believe-You-Sweet-Love.mp3?rlkey=1mf5jjhwkklqasqen33itvg1u&st=26k7cvpr&dl=1",
         "https://www.dropbox.com/scl/fi/x85fx2ghchsr806boki5q/07-Various-Artists-Lulu-Jackson-Careless-Love.mp3?rlkey=my0bptrnb7bg34afis7ky9frr&st=jhka4nzb&dl=1",
         "https://www.dropbox.com/scl/fi/lni4pg5mejgngkwnsvwsr/08-Various-Artists-Robert-Wilkins-It-s-No-Way-To-Get-Along.mp3?rlkey=bajb43l1cejc3crrtwcxnle3i&st=6zx5j9nd&dl=1",
         "https://www.dropbox.com/scl/fi/pmkjcs621wys5q16ke7iq/09-Various-Artists-It-s-No-Way-To-Get-Along_-The-Anglin-Brothers-Money-Cannot-Buy-Your-Soul.mp3?rlkey=k8wec3b81objqqsqq0b7e6q88&st=ig6xoxjg&dl=1",
         "https://www.dropbox.com/scl/fi/adhbgzsytma9qye56zaer/10-Various-Artists-Blind-Willie-Kate-McTell-Don-t-Let-Nobody-Turn-You-Round.mp3?rlkey=aair3pfv9z0uknk4zp8k41edf&st=2zv3nzha&dl=1",
         
         "https://www.dropbox.com/scl/fi/sh7v8xuw38rsdgvbdxs8r/11-Various-Artists-Cannon-s-Jug-Stompers-I-m-Going-To-Germany.mp3?rlkey=13uqzsh0doloyaszdxvwakmw5&st=dl6gt3lj&dl=1",
         "https://www.dropbox.com/scl/fi/exvltue8i309b984jtaqh/12-Various-Artists-Isaiah-Nettles-It-s-Cold-In-China.mp3?rlkey=ytohs74h4za55uu2cutrwkyu7&st=nh5613a4&dl=1",
         "https://www.dropbox.com/scl/fi/hmcsthso4c9j81xeeticu/13-Various-Artists-Memphis-Minnie-Kansas-Joe-McCoy-I-Called-You-This-Morning.mp3?rlkey=krw7phof1ukcsn3x20dwwqg27&st=qx0c5c8h&dl=1",
         "https://www.dropbox.com/scl/fi/psu0av90wgx3hzgto050i/14-Various-Artists-Edward-Clayborn-Death-Is-Only-A-Dream.mp3?rlkey=0xpgozg50teljr6s0sotzn0nb&st=yxhd8dgx&dl=1",
        ],
        [

        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",

        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",

        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        "https://www.dropbox.com/scl/fi/yvfqn0zgms91hkpt7ryg6/lastkindwords.jpg?rlkey=4wref5buwm71qh1jgfc5xwuk4&st=fcsrflpj&dl=1",
        
      ] 
      ];

      const zaybx = [
        [
         "Los A-tunes - Atraco a pez espada",
          "Blackball Bandits - Night Of The Vampire",
          "Los Tocadiscos - La cosa",
          "Johnny & the Waves - Battlescar",
          "I Fat Tones - La Sorella Di Christine",

          "Gein and the Graverobbers - Spectre Stomp",
          "LHD - Black Mask",
          "Los Surfistas Basura - Fin de la historia",
          "Los Banditos - Los Banditos",
          "Perro Agradecido - Cum Ea Ita Sint",

          "Pelo Mono - Sonido Amazonico",
          "Robert Johnson and Punchdrunks - Delirium Bullonate",
          "The Obsidians - Notre Histoire",
          "Toro Jones - Night Of The Fly",
          "Urban Zotel & Vid Jamnik - Summer Getaway",

          "Thálasses - ¿Quien Sera?",
          "The Surf Raiders - Rampage",
          "The Spiratones - Coach Surfer (Live)",
          "Die Zorros - Der Lachende Sarg",
          "Bronco Jedson - One Two Three Four",
        ],
        [
         "https://www.dropbox.com/scl/fi/892trqyzqcptzpibil4qj/01-Los-A-tunes-Atraco-a-pez-espada.mp3?rlkey=qv0luztb8kivngxs9t09kfvtj&st=48e83dk5&dl=1",
      "https://www.dropbox.com/scl/fi/4wwx9ekcbpbos7lmd2zmk/02-Blackball-Bandits-Night-Of-The-Vampire.mp3?rlkey=cwzwm2a0eb9ui009m7zxpivyv&st=pgaylkw5&dl=1",
      "https://www.dropbox.com/scl/fi/dzq65xd0hhi1qy3vdkjja/03-Los-Tocadiscos-La-cosa.mp3?rlkey=odmuagu8acle94sx25lrohu79&st=pa9ttqwy&dl=1",
      "https://www.dropbox.com/scl/fi/zwnf9k7lq0a47avg8am81/04-Johnny-the-Waves-Battlescar.mp3?rlkey=t69hhy23ge5mdsg1buks7dpyb&st=emfjd4cs&dl=1",
      "https://www.dropbox.com/scl/fi/0h0wnsl6ilq7jlo3ynqrj/06-I-Fat-Tones-La-Sorella-Di-Christine.mp3?rlkey=ilm16j6akpb7vhqvtn58ivvmm&st=r8ft7ia0&dl=1",

      "https://www.dropbox.com/scl/fi/zqjj6ybutu5pxb92v5z16/05-Gein-and-the-Graverobbers-Spectre-Stomp.mp3?rlkey=dnhp6pdem61wsaa2vpnux30wu&st=0szjtnn4&dl=1",
      "https://www.dropbox.com/scl/fi/1l36myjprjt8axyovhcpp/07-LHD-Black-Mask.mp3?rlkey=brxdvb7o56wutbq7l46fc2dd1&st=pm41z77v&dl=1",
      "https://www.dropbox.com/scl/fi/clj6yajzalufm0mdhuc35/08-Los-Surfistas-Basura-Fin-de-la-historia.mp3?rlkey=ayvdk3gtoo2yivoxgbwozxwla&st=waqinuyg&dl=1",
      "https://www.dropbox.com/scl/fi/bkjxxijc4yeclusltar7g/09-Los-Banditos-Los-Banditos.mp3?rlkey=tbzqix6yxwzts2lsa5mchvpwp&st=6zw3d6ju&dl=1",
      "https://www.dropbox.com/scl/fi/4w2p8uh4ihc2s6hrz375f/10-Perro-Agradecido-Cum-Ea-Ita-Sint.mp3?rlkey=achrtqso2vydjd6uqmkq983h1&st=b0lros6r&dl=1",

      "https://www.dropbox.com/scl/fi/jgxpv7jgkl5nyrkrc7kh6/11-Pelo-Mono-Sonido-Amazonico.mp3?rlkey=x1lt9vt4jd1ek031hq5vgfg27&st=5z3ezyo6&dl=1",
      "https://www.dropbox.com/scl/fi/rjn7w7q1rttfvojza1zvt/12-Robert-Johnson-and-Punchdrunks-Delirium-Bullonate.mp3?rlkey=4q9vnb6os3fl5u281ld8k2yca&st=6b5mf7jr&dl=1",
      "https://www.dropbox.com/scl/fi/4w2p8uh4ihc2s6hrz375f/10-Perro-Agradecido-Cum-Ea-Ita-Sint.mp3?rlkey=achrtqso2vydjd6uqmkq983h1&st=rgpj47l5&dl=1",
      "https://www.dropbox.com/scl/fi/h8jkgo7lsa8an2h8g0354/14-Toro-Jones-Night-Of-The-Fly.mp3?rlkey=fs4didp34i2vg4zzkkxuw6cdo&st=ict7lb2c&dl=1",
      "https://www.dropbox.com/scl/fi/mhklhkf7caw74h79b9t2i/15-Urban-Zotel-Vid-Jamnik-Summer-Getaway.mp3?rlkey=wzsqr1suxdby96cinb5waesgd&st=pwpiys0u&dl=1",

      "https://www.dropbox.com/scl/fi/mum7bmzzjcvdphu57lsnh/16-Th-lasses-Quien-Sera_.mp3?rlkey=8pvxbtu8c4ov6jfgd4mc4aoog&st=alxsdfcr&dl=1",
      "https://www.dropbox.com/scl/fi/coxw1xhf7255a06h15uz5/17-The-Surf-Raiders-Rampage.mp3?rlkey=8r59rceaf92ug56p1ibc4azsh&st=8wtegoy0&dl=1",
      "https://www.dropbox.com/scl/fi/j7hhwznv5aytdf1cwhlx9/18-The-Spiratones-Coach-Surfer-Live.mp3?rlkey=urdjivcld66jsmoluizm56uuz&st=7arskff7&dl=1",
      "https://www.dropbox.com/scl/fi/h365wfw0qk45adb3o62p6/19-Die-Zorros-Der-Lachende-Sarg.mp3?rlkey=4p2s972khlqn4gbzin74fsoi3&st=lgplyple&dl=1",
      "https://www.dropbox.com/scl/fi/2iytfby7568u7marwg5ox/20-Bronco-Jedson-One-Two-Three-Four.mp3?rlkey=4wc98pfsf8ay4kflxnrzhap3q&st=5risa0y8&dl=1",
        ],
        [

        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
    
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
    
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",

        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
        "https://www.dropbox.com/scl/fi/zqu4tixprhj8jyppmvtoy/zaybx.jpg?rlkey=fagp11q07i53y4r2iroez3rgn&st=f8gg8xct&dl=1",
 
        
      ] 
      ];

