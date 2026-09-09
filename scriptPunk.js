
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

function functionNext(){
  if(musicBego==false){
    if(kaaosBoolean==true){parrillaKM();}
    if(kaaosBoolean==false){parrilla();}
  }
  if(musicBego==true){parrillaBego();}
  

  if ("mediaSession" in navigator) {
       navigator.mediaSession.setActionHandler("nexttrack", () => {

        if(musicBego==false){
          if(kaaosBoolean==true){parrillaKM();}
          if(kaaosBoolean==false){parrilla();}
        }
        if(musicBego==true){parrillaBego();}
  
  });
  }

  audioElement.addEventListener(
        "ended",
        () => 
      {
        if(musicBego==false){
          if(kaaosBoolean==true){parrillaKM();}
          if(kaaosBoolean==false){parrilla();}
        }
        if(musicBego==true){parrillaBego();}
        
      
      },
        
      );


 }

  function parrillaKM(){};
  function parrillaBego(){};

  function parrilla(){
    BluesFunction();
  };


   function BluesFunction(){
  
          randomScript = Math.floor(Math.random()*4);

          
          if(randomScript==0)
                  {
                    randomNumber = Math.floor(Math.random()*punkHourExp[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: punkHourExp[0][randomNumber],
                    artist: "Nervous Wreck Radio - Punk",
                    album: "",
                    artwork: [{ src: punkHourExp[2][randomNumber] }],
                    
                  });
          
                   
                    audioElement.src= punkHourExp[1][randomNumber];
                    audioElement.play();
                    document.title = punkHourExp[0][randomNumber];
                    priceDesc.innerHTML = punkHourExp[0][randomNumber];
                    Portada.src = punkHourExp[2][randomNumber];
          
                    
          
                  }
          
                   if(randomScript==1)
                  {
                     randomNumber = Math.floor(Math.random()*CriseCardiaque[0].length);
                     navigator.mediaSession.metadata = new MediaMetadata({
                      title: CriseCardiaque[0][randomNumber],
                      artist: "Nervous Wreck Radio - Punk",
                      album: "",
                      artwork: [{ src: CriseCardiaque[2][randomNumber] }],
                      });
          
                    
                    audioElement.src= CriseCardiaque[1][randomNumber];
                    audioElement.play();
                    document.title = CriseCardiaque[0][randomNumber];
                    priceDesc.innerHTML = CriseCardiaque[0][randomNumber];
                    Portada.src = CriseCardiaque[2][randomNumber];
          
                   
                  }
     
           if(randomScript==2)
                   {
                       randomNumber = Math.floor(Math.random()*zorrasAsignaturas[0].length);
                       navigator.mediaSession.metadata = new MediaMetadata({
                       title: zorrasAsignaturas[0][randomNumber],
                       artist: "Nervous Wreck Radio - Punk",
                       album: "",
                       artwork: [{ src: zorrasAsignaturas[2][randomNumber] }],
                       });
           
                    
                     audioElement.src= zorrasAsignaturas[1][randomNumber];
                     audioElement.play();
                     document.title = zorrasAsignaturas[0][randomNumber];
                     priceDesc.innerHTML = zorrasAsignaturas[0][randomNumber];
                     Portada.src = zorrasAsignaturas[2][randomNumber];
           
                   }

           if(randomScript==3)
                   {
                       randomNumber = Math.floor(Math.random()*descanseenpazRDP[0].length);
                       navigator.mediaSession.metadata = new MediaMetadata({
                       title: descanseenpazRDP[0][randomNumber],
                       artist: "Nervous Wreck Radio - Punk",
                       album: "",
                       artwork: [{ src: descanseenpazRDP[2][randomNumber] }],
                       });
           
                    
                     audioElement.src= descanseenpazRDP[1][randomNumber];
                     audioElement.play();
                     document.title = descanseenpazRDP[0][randomNumber];
                     priceDesc.innerHTML = descanseenpazRDP[0][randomNumber];
                     Portada.src = descanseenpazRDP[2][randomNumber];
           
                  
                    
                   }

            if(randomScript==4)
                  {
                            randomNumber = Math.floor(Math.random()*maratonico[0].length);
                            navigator.mediaSession.metadata = new MediaMetadata({
                            title: maratonico[0][randomNumber],
                            artist: "Nervous Wreck Radio - World",
                            album: "",
                            artwork: [{ src: maratonico[2][randomNumber] }],
                            
                  });
                            audioElement.src= maratonico[1][randomNumber];
                            audioElement.play();
                            document.title = maratonico[0][randomNumber];
                            priceDesc.innerHTML = maratonico[0][randomNumber];
                            Portada.src = maratonico[2][randomNumber];
                  
                  }

           if(randomScript==5)
                  {
                    arrayTitle=lovarititirobin;
                    randomNumber = Math.floor(Math.random()*arrayTitle[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: arrayTitle[0][randomNumber],
                    artist: "Nervous Wreck Radio - World",
                    album: "",
                    artwork: [{ src: arrayTitle[2][randomNumber] }],  
                  });
          
                    audioElement.src= arrayTitle[1][randomNumber];
                    audioElement.play();
                    document.title = arrayTitle[0][randomNumber];
                    priceDesc.innerHTML = arrayTitle[0][randomNumber];
                    Portada.src = arrayTitle[2][randomNumber];
          
                  }

          if(randomScript==6)
                  {
                    arrayTitle=cumbiadejuventud;
                    randomNumber = Math.floor(Math.random()*arrayTitle[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: arrayTitle[0][randomNumber],
                    artist: "Nervous Wreck Radio - World",
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

// Disco 10

//


