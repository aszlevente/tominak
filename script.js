function secret(num) {
  
  var id = setInterval(pic, 5);
  
  var mySound = new sound('assets/matrix-printer.wav');
  mySound.play();
  
  document.getElementById('btn'+num).disabled = true;
  document.getElementById('image'+num).style.display = 'block';
  document.getElementById('wrapper'+num).style.marginBottom = 0;
  
  
  var text = '';
  var ftext = '';
  var desText = '';
  var fdesText = '';
  var i = 0;
  var l = 0;
  
  if (num === 1) {
    text = 'Pablo Escobar';
    desText = 'Interferencia';
  } else if (num === 2) {
    text = 'Anatoly Dyatlov';
    desText = '';
  } else {
    text = 'El Chapo';
    desText = '';
  }
  
  var letters = text.split('');
  var desLetters = desText.split('');
  
  var t = setInterval(scripting, 500);
  
  var elem = document.getElementById('image'+num);
  //console.log(ftext);
  
  // időzítés a setTimeout paranccsal: https://www.w3schools.com/jsref/met_win_settimeout.asp 
  
   function scripting() {
    if (i >= letters.length-1) {
      clearInterval(t);
      i = 0;
      var t2 = setInterval(scriptingDes, 200);
    }
    ftext = ftext + letters[i];
    document.getElementById('secret'+num).innerHTML = ftext;
    i++;
  }
  
  if (letters.length === ftext.length) {
    mySound.stop();
  }
  
  function scriptingDes () {
    fdesText = fdesText + desLetters[i];
    console.log('Hello');
    
    if (i === desLetters.length-1) {
      clearInterval(t2)
    }
  }
  
  

  function pic() {
    if (num !== 2) {
      if (l === 30) {
        clearInterval(id);
      } else {
        elem.style.marginLeft = l+'rem';
        l++;
      }
    } else {
      if (l === 27) {
        clearInterval(id);
      } else {
        elem.style.marginLeft = l+'rem';
        l++;
      }
    }
  }
}

function goToTop() {
  document.documentElement.scrollTop = 0;
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}