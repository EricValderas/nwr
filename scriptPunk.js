
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
  
          randomScript = Math.floor(Math.random()*1);

          
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
                     randomNumber = Math.floor(Math.random()*dancingDevilsDjibuti[0].length);
                     navigator.mediaSession.metadata = new MediaMetadata({
                     title: dancingDevilsDjibuti[0][randomNumber],
                     artist: "Nervous Wreck Radio - Word",
                     album: "",
                     artwork: [{ src: dancingDevilsDjibuti[2][randomNumber] }],
                     
                   });
           
                     
                     audioElement.src= dancingDevilsDjibuti[1][randomNumber];
                     audioElement.play();
                     document.title = dancingDevilsDjibuti[0][randomNumber];
                     priceDesc.innerHTML = dancingDevilsDjibuti[0][randomNumber];
                     Portada.src = dancingDevilsDjibuti[2][randomNumber];
                    // nota.innerHTML = "9 / 10";
                     
           
                   
           
          }
     
            if(randomScript==2)
          {
            arrayTitle=chambacu;
            randomNumber = Math.floor(Math.random()*arrayTitle[0].length);
           
            navigator.mediaSession.metadata = new MediaMetadata({
            title: arrayTitle[0][randomNumber],
            artist: "Nervous Wreck Radio - Blues",
            album: "",
            artwork: [{  src: arrayTitle[2][randomNumber] }],  
          });
  
            audioElement.src= arrayTitle[1][randomNumber];
            audioElement.play();
            document.title = arrayTitle[0][randomNumber];
            priceDesc.innerHTML = arrayTitle[0][randomNumber];
            Portada.src =  arrayTitle[2][randomNumber];
  
          }

           if(randomScript==3)
                  {
                    randomNumber = Math.floor(Math.random()*jambuAmazonia[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: jambuAmazonia[0][randomNumber],
                    artist: "Nervous Wreck Radio - World",
                    album: "",
                    artwork: [{ src: jambuAmazonia[2][randomNumber] }],
                    
                  });
                    audioElement.src= jambuAmazonia[1][randomNumber];
                    audioElement.play();
                    document.title = jambuAmazonia[0][randomNumber];
                    priceDesc.innerHTML = jambuAmazonia[0][randomNumber];
                    Portada.src = jambuAmazonia[2][randomNumber];
          
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

          "Atochita - Ruca y El Quinde de Barbacoas",
          "El Iragüilde - Ruca y El Quinde de Barbacoas",
          "Indirita - Ruca y El Quinde de Barbacoas",
          "La Muluta - Ruca y El Quinde de Barbacoas",
          "Me Piden Currulao - Ruca y El Quinde de Barbacoas",
          "Dale Duro al Bombo - Ruca y El Quinde de Barbacoas",
          "La Brinca Brinca - Ruca y El Quinde de Barbacoas",
          "El Clavito de Pablito - Ruca y El Quinde de Barbacoas",
          "Rumba pa' Gozá - Ruca y El Quinde de Barbacoas",
          "Paz Verdadera - Ruca y El Quinde de Barbacoas",
          "A Ritmo de Caramba - Ruca y El Quinde de Barbacoas",
          "El Agua Turbia - Ruca y El Quinde de Barbacoas",
          "Alaé Alaá - Ruca y El Quinde de Barbacoas",
          "África Negra - Ruca y El Quinde de Barbacoas",

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

// Disco 10

//


