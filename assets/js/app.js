//Make the loading and the info...................
$(window).load(function(){
  $('.loader').addClass('hidden');
  
});

var help=5;
$('#help').click(function(){
  help=0;
});
$('#dev').click(function(){
  window.open('http://kynchev.eu/');
  return true;
});
window.setInterval(function(){
  
  if(help==0){
    $('.info').removeClass('hidden');
    $('.step1').removeClass('hidden');
    $('.bass').css('opacity', 0.8);
    $('.drum').css('opacity', 0.2);
    $('.sound').css('opacity', 0.2);
    $('.info').click(function(){help=1;});
  }else if(help==1){
    $('.step1').addClass('hidden');
    $('.step2').removeClass('hidden');
    $('.bass').css('opacity', 0.2);
    $('.drum').css('opacity', 0.8);
    $('.sound').css('opacity', 0.2);
    $('.info').click(function(){help=2;});
  }else if(help==2){
    $('.step2').addClass('hidden');
    $('.step3').removeClass('hidden');
    $('.bass').css('opacity', 0.2);
    $('.drum').css('opacity', 0.2);
    $('.sound').css('opacity', 0.8);
    $('.info').click(function(){help=3;});
  }else if(help==3){
    $('.step3').addClass('hidden');
    $('.step4').removeClass('hidden');
    $('.bass').css('opacity', 0.4);
    $('.drum').css('opacity', 0.4);
    $('.sound').css('opacity', 0.4);
    $('.info').click(function(){help=4;});
  }else if(help==4){
    $('.step4').addClass('hidden');
    $('.step5').removeClass('hidden');
    $('.info').click(function(){help=5;});
  }else{
    $('.info').addClass('hidden');
    $('.step5').addClass('hidden');
  }
}, 100);


var row, pad;
//Get the X(row), Y(pad) of the pad

//Find the .row position in the .launchpad
$('.row').click(function() {
    //Get the index of the .row child
    var place = $(this).index();
    if (place === 0) {
        row = 1;
    }
    if (place === 1) {
        row = 2;
    }
    if (place === 2) {
        row = 3;
    }
    if (place === 3) {
        row = 4;
    }
    if (place === 4) {
        row = 5;
    }
    if (place === 5) {
        row = 6;
    }
    //Display .row's position
    console.log('Row:' + row);
});

//Find .pad position in the .row
$('.pad').click(function() {
    //Get the index of the .pad child
    var place = $(this).index();
    if (place === 0) {
        pad = 1;
    }
    if (place === 1) {
        pad = 2;
    }
    if (place === 2) {
        pad = 3;
    }
    if (place === 3) {
        pad = 4;
    }
    if (place === 4) {
        pad = 5;
    }
    if (place === 5) {
        pad = 6;
    }
    //Display .pad's position
    console.log('Pad:' + pad);
});

//Vars for the samples
var bass, drum, sound1, sound2, sound3;

//Vars for sync bar
var options = {
  bg: '#fff',

  // id for new nanobar
  id: 'syncroniser'
};
var nanobar = new Nanobar( options );

$(document).ready(function(){
//Set everything to 0 on load
bass=0;
drum=0;
sound1=0;
sound2=0;
sound3=0;
  
bar=0;
 
});

//Load buffer for sample
var soundcount=1;
window.setInterval(function(){

  //Bass part
  if(pad==1 && row==3){
    bass=1;
    
  }
  if(pad==1 && row==4){
    bass=2;
  }
  if(pad==2 && row==4){
    bass=3;
  }
  if(pad==1 && row==5){
    bass=4;
  }
  if(pad==2 && row==5){
    bass=5;
  }
  if(pad==3 && row==5){
    bass=6;
  }
  if(pad==1 && row==6){
    bass=7;
  }
  if(pad==2 && row==6){
    bass=8;
  }
  if(pad==3 && row==6){
    bass=9;
  }
  if(pad==4 && row==6){
    bass=10;
  }
  //Drum part
  if(pad==3 && row==1){
    drum=1;
  }
  if(pad==4 && row==1){
    drum=2;
  }
  if(pad==5 && row==1){
    drum=3;
  }
  if(pad==6 && row==1){
    drum=4;
  }
  if(pad==4 && row==2){
    drum=5;
  }
  if(pad==5 && row==2){
    drum=6;
  }
  if(pad==6 && row==2){
    drum=7;
  }
  if(pad==5 && row==3){
    drum=8;
  }
  if(pad==6 && row==3){
    drum=9;
  }
  if(pad==6 && row==4){
    drum=10;
  }
  
  //Sound part
  if(soundcount==1){
    if(pad==1 && row==1){
      sound1=1;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==2 && row==1){
      sound1=2;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==1 && row==2){
      sound1=3;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==2 && row==2){
      sound1=4;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==3 && row==2){
      sound1=5;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==2 && row==3){
      sound1=6;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==3 && row==3){
      sound1=7;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==4 && row==3){
      sound1=8;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==3 && row==4){
      sound1=9;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==4 && row==4){
      sound1=10;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==5 && row==4){
      sound1=11;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==4 && row==5){
      sound1=12;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==5 && row==5){
      sound1=13;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==6 && row==5){
      sound1=14;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==5 && row==6){
      sound1=15;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==6 && row==6){
      sound1=16;
      soundcount++;
      pad=0;
      row=0;
    }
  }else if(soundcount==2){
    if(pad==1 && row==1){
      sound2=1;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==2 && row==1){
      sound2=2;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==1 && row==2){
      sound2=3;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==2 && row==2){
      sound2=4;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==3 && row==2){
      sound2=5;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==2 && row==3){
      sound2=6;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==3 && row==3){
      sound2=7;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==4 && row==3){
      sound2=8;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==3 && row==4){
      sound2=9;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==4 && row==4){
      sound2=10;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==5 && row==4){
      sound2=11;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==4 && row==5){
      sound2=12;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==5 && row==5){
      sound2=13;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==6 && row==5){
      sound2=14;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==5 && row==6){
      sound2=15;
      soundcount++;
      pad=0;
      row=0;
    }
    if(pad==6 && row==6){
      sound2=16;
      soundcount++;
      pad=0;
      row=0;
    }
  }else if(soundcount==3){
    if(pad==1 && row==1){
      sound3=1;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==2 && row==1){
      sound3=2;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==1 && row==2){
      sound3=3;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==2 && row==2){
      sound3=4;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==3 && row==2){
      sound3=5;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==2 && row==3){
      sound3=6;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==3 && row==3){
      sound3=7;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==4 && row==3){
      sound3=8;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==3 && row==4){
      sound3=9;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==4 && row==4){
      sound3=10;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==5 && row==4){
      sound3=11;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==4 && row==5){
      sound3=12;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==5 && row==5){
      sound3=13;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==6 && row==5){
      sound3=14;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==5 && row==6){
      sound3=15;
      soundcount=1;
      pad=0;
      row=0;
    }
    if(pad==6 && row==6){
      sound3=16;
      soundcount=1;
      pad=0;
      row=0;
    }
  }
}, 100);

window.setInterval(function(){
  $('.pad').removeClass('opacity');
  if(bass==1){
    $('.13').addClass('opacity');
    $('.13').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==2){
    $('.14').addClass('opacity');
    $('.14').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==3){
    $('.24').addClass('opacity');
    $('.24').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==4){
    $('.15').addClass('opacity');
    $('.15').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==5){
    $('.25').addClass('opacity');
    $('.25').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==6){
    $('.35').addClass('opacity');
    $('.35').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==7){
    $('.16').addClass('opacity');
    $('.16').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==8){
    $('.26').addClass('opacity');
    $('.26').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==9){
    $('.36').addClass('opacity');
    $('.36').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(bass==10){
    $('.46').addClass('opacity');
    $('.46').dblclick(function(){
      bass=0;
      pad=0;
      row=0;
    });
  }
  if(drum==1){
    $('.31').addClass('opacity');
    $('.31').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==2){
    $('.41').addClass('opacity');
    $('.41').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==3){
    $('.51').addClass('opacity');
    $('.51').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==4){
    $('.61').addClass('opacity');
    $('.61').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==5){
    $('.42').addClass('opacity');
    $('.42').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==6){
    $('.52').addClass('opacity');
    $('.52').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==7){
    $('.62').addClass('opacity');
    $('.62').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==8){
    $('.53').addClass('opacity');
    $('.53').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==9){
    $('.63').addClass('opacity');
    $('.63').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(drum==10){
    $('.64').addClass('opacity');
    $('.64').dblclick(function(){
      drum=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==1){
    $('.11').addClass('opacity');
    $('.11').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==2){
    $('.21').addClass('opacity');
    $('.21').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==3){
    $('.12').addClass('opacity');
    $('.12').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==4){
    $('.22').addClass('opacity');
    $('.22').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==5){
    $('.32').addClass('opacity');
    $('.32').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==6){
    $('.23').addClass('opacity');
    $('.23').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==7){
    $('.33').addClass('opacity');
    $('.33').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==8){
    $('.43').addClass('opacity');
    $('.43').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==9){
    $('.34').addClass('opacity');
    $('.34').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==10){
    $('.44').addClass('opacity');
    $('.44').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==11){
    $('.54').addClass('opacity');
    $('.54').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==12){
    $('.45').addClass('opacity');
    $('.45').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==13){
    $('.55').addClass('opacity');
    $('.55').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==14){
    $('.65').addClass('opacity');
    $('.65').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==15){
    $('.56').addClass('opacity');
    $('.56').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound1==16){
    $('.66').addClass('opacity');
    $('.66').dblclick(function(){
      sound1=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==1){
    $('.11').addClass('opacity');
    $('.11').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==2){
    $('.21').addClass('opacity');
    $('.21').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==3){
    $('.12').addClass('opacity');
    $('.12').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==4){
    $('.22').addClass('opacity');
    $('.22').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==5){
    $('.32').addClass('opacity');
    $('.32').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==6){
    $('.23').addClass('opacity');
    $('.23').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==7){
    $('.33').addClass('opacity');
    $('.33').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==8){
    $('.43').addClass('opacity');
    $('.43').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==9){
    $('.34').addClass('opacity');
    $('.34').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==10){
    $('.44').addClass('opacity');
    $('.44').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==11){
    $('.54').addClass('opacity');
    $('.54').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==12){
    $('.45').addClass('opacity');
    $('.45').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==13){
    $('.55').addClass('opacity');
    $('.55').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==14){
    $('.65').addClass('opacity');
    $('.65').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==15){
    $('.56').addClass('opacity');
    $('.56').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound2==16){
    $('.66').addClass('opacity');
    $('.66').dblclick(function(){
      sound2=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==1){
    $('.11').addClass('opacity');
    $('.11').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==2){
    $('.21').addClass('opacity');
    $('.21').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==3){
    $('.12').addClass('opacity');
    $('.12').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==4){
    $('.22').addClass('opacity');
    $('.22').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==5){
    $('.32').addClass('opacity');
    $('.32').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==6){
    $('.23').addClass('opacity');
    $('.23').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==7){
    $('.33').addClass('opacity');
    $('.33').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==8){
    $('.43').addClass('opacity');
    $('.43').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==9){
    $('.34').addClass('opacity');
    $('.34').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==10){
    $('.44').addClass('opacity');
    $('.44').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==11){
    $('.54').addClass('opacity');
    $('.54').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==12){
    $('.45').addClass('opacity');
    $('.45').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==13){
    $('.55').addClass('opacity');
    $('.55').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==14){
    $('.65').addClass('opacity');
    $('.65').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==15){
    $('.56').addClass('opacity');
    $('.56').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
  if(sound3==16){
    $('.66').addClass('opacity');
    $('.66').dblclick(function(){
      sound3=0;
      pad=0;
      row=0;
    });
  }
}, 100);


window.setInterval(function(){
  if(bass!=0){
    console.log('Playing bass.1.'+bass);
    var bassAudio = new Audio('assets/media/bass/bass.1.'+bass+'.mp3');
    bassAudio.play();
  } else {
    
  }
  
  if(drum!=0){
    console.log('Playing drum.1.'+drum);
    var drumAudio = new Audio('assets/media/drum/drum.1.'+drum+'.mp3');
    drumAudio.play();
  } else {
    
  }
  if(sound1!=0){
    console.log('Playing sound.1.'+sound1);
    var sound1Audio = new Audio('assets/media/sounds/sounds.1.'+sound1+'.mp3');
    sound1Audio.play();
  } else {
    
  }
  if(sound2!=0){
    console.log('Playing sound.1.'+sound2);
    var sound2Audio = new Audio('assets/media/sounds/sounds.1.'+sound2+'.mp3');
    sound2Audio.play();
  } else {
    
  }
  if(sound3!=0){
    console.log('Playing sound.1.'+sound3);
    var sound3Audio = new Audio('assets/media/sounds/sounds.1.'+sound3+'.mp3');
    sound3Audio.play();
  } else {
    
  }
}, 4400);


var bar;
window.setInterval(function(){
  nanobar.go(bar);
  bar++;
  if(bar>100){
    bar=0;
    console.log('clr');
  }
}, 42,5);