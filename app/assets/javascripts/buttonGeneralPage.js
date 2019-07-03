window.addEventListener('DOMContentLoaded', function(){

  var buttonStart = document.getElementById('profile_button-start');
  var buttonPause = document.getElementById('profile_button-pause');
  var buttonStop = document.getElementById('profile_button-stop');
  
  buttonStart.onclick = pushButtonStart;
  buttonPause.onclick = pushButtonPause;
  buttonStop.onclick = pushButtonStop;
  
  function pushButtonStart(event){
    buttonPause.style.display = "inline-block";
    buttonStop.style.display = "inline-block";
    buttonStart.style.display = "none";
  }
  function pushButtonPause(event){
    buttonPause.style.display = "none";
    buttonStop.style.display = "inline-block";
    buttonStart.style.display = "inline-block";
  }
  function pushButtonStop(event){
    buttonPause.style.display = "none";
    buttonStop.style.display = "none";
    buttonStart.style.display = "inline-block";
  }
});
