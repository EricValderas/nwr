
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
  const loader = document.getElementById('pantalla-carga');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 100); // Coincide con la transición de CSS
});

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
  
          randomScript = Math.floor(Math.random()*8);

          
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
                        randomNumber = Math.floor(Math.random()*criminaltrapAnticimex[0].length);
                        navigator.mediaSession.metadata = new MediaMetadata({
                        title: criminaltrapAnticimex[0][randomNumber],
                        artist: "Nervous Wreck Radio - Punk",
                        album: "",
                        artwork: [{ src: criminaltrapAnticimex[2][randomNumber] }],
                        });
                        
                      
                      audioElement.src= criminaltrapAnticimex[1][randomNumber];
                      audioElement.play();
                      document.title = criminaltrapAnticimex[0][randomNumber];
                      priceDesc.innerHTML = criminaltrapAnticimex[0][randomNumber];
                      Portada.src = criminaltrapAnticimex[2][randomNumber];
            
                    
                     
                    }

            if(randomScript==5)
                   {
                       randomNumber = Math.floor(Math.random()*MOB47TillsDor[0].length);
                       navigator.mediaSession.metadata = new MediaMetadata({
                       title: MOB47TillsDor[0][randomNumber],
                       artist: "Nervous Wreck Radio - Punk",
                       album: "",
                       artwork: [{ src: MOB47TillsDor[2][randomNumber] }],
                       });
                       
                     
                     audioElement.src= MOB47TillsDor[1][randomNumber];
                     audioElement.play();
                     document.title = MOB47TillsDor[0][randomNumber];
                     priceDesc.innerHTML = MOB47TillsDor[0][randomNumber];
                     Portada.src = MOB47TillsDor[2][randomNumber];
           
                   
                    
                   }

         if(randomScript==6)
                 {
                     randomNumber = Math.floor(Math.random()*pipebomb[0].length);
                     navigator.mediaSession.metadata = new MediaMetadata({
                     title: pipebomb[0][randomNumber],
                     artist: "Nervous Wreck Radio - Punk",
                     album: "",
                     artwork: [{ src: pipebomb[2][randomNumber] }],
                   
                   });
         
                   
                   audioElement.src= pipebomb[1][randomNumber];
                   audioElement.play();
                   document.title = pipebomb[0][randomNumber];
                   priceDesc.innerHTML = pipebomb[0][randomNumber];
                   Portada.src = pipebomb[2][randomNumber];
                  
                   
                 }

           if(randomScript==7)
                {
                    randomNumber = Math.floor(Math.random()*elcorazondelsapoImaginacion[0].length);
                    navigator.mediaSession.metadata = new MediaMetadata({
                    title: elcorazondelsapoImaginacion[0][randomNumber],
                    artist: "Nervous Wreck Radio - Punk",
                    album: "",
                    artwork: [{ src: elcorazondelsapoImaginacion[2][randomNumber] }],
                  
                  });
        
                  
                  audioElement.src= elcorazondelsapoImaginacion[1][randomNumber];
                  audioElement.play();
                  document.title = elcorazondelsapoImaginacion[0][randomNumber];
                  priceDesc.innerHTML = elcorazondelsapoImaginacion[0][randomNumber];
                  Portada.src = elcorazondelsapoImaginacion[2][randomNumber];
                  
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






