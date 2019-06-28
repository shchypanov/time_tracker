function contLoaded() {
  var buttonAddTask = document.getElementById("profile_button-addTask");

  buttonAddTask.onclick = function() {
    if (document.getElementById('profile_container-second').style.display == 'block') {
      document.getElementById('profile_button-pause').style.display = 'none';
      document.getElementById('profile_button-stop').style.display = 'none';
      var blockClient = document.getElementById('profile_container-second');
      var allBlock = blockClient.querySelector('.profile_block-client');
      var clone = allBlock.cloneNode(true);
      blockClient.appendChild(clone);
    } else {
      document.getElementById('profile_container-second').style.display = 'block';
    }

/*    var buttonStart = document.getElementById('profile_button-start');
    buttonStart.onclick = function() {
      var buttonPause = document.getElementById('profile_button-pause');
      var buttonStop = document.getElementById('profile_button-stop');

      buttonStart.style.display = "none";
      buttonPause.style.display = "initial";
      buttonStop.style.display = "initial";*/
    }
  }

document.addEventListener('DOMContentLoaded', contLoaded);