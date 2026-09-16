
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
          if(randomScript==0){arrayTitle = buskingProblems};
          if(randomScript==1){arrayTitle = vivenWhau};
          if(randomScript==2){arrayTitle = theratsdesperatered};
          if(randomScript==3){arrayTitle = osees};
          
          
                    
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