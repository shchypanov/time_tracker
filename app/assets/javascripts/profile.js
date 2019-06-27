function contLoaded() {
  var buttonAddTask = document.getElementById("profile_button-addTask");
  buttonAddTask.onclick = function() {
    document.getElementById('profile_container-second').style.display = 'block';
    buttonAddTask.onclick = function() {
      document.getElementById('profile_button-pause').style.display = 'none';
      document.getElementById('profile_button-stop').style.display = 'none';
      var blockClient = document.getElementById('profile_container-second');
      var allBlock = blockClient.querySelector('.profile_block-client');
      var clone = allBlock.cloneNode(true);
      blockClient.appendChild(clone);
    }
  }
}
document.addEventListener('DOMContentLoaded', contLoaded);