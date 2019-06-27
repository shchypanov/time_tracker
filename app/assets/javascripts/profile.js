function contLoaded() {
  var buttonAddTask = document.getElementById("profile_button-addTask");
  /*  buttonAddTask.addEventListener('click', addTaskClick);
    console.log(buttonAddTask);*/
  buttonAddTask.onclick = function() {
    document.getElementById('profile_container-second').style.display = 'block';
    buttonAddTask.onclick = function() {
      var blockClient = document.getElementById('profile_container-second');
      var allBlock = blockClient.querySelector('.profile_block-client');
      var clone = allBlock.cloneNode(true);
      blockClient.appendChild(clone);
      /*var selectClient = document.getElementById('profile_select-client__select');
      console.log(123)
      console.log(selectClient);
      var newSelectClient = document.createElement("select");
      selectClient.appendChild(newSelectClient);
      console.log(newSelectClient);*/
    }
  }
}
/*  function addTaskClick(evt) {
  	console.log(evt)
  }
*/
document.addEventListener('DOMContentLoaded', contLoaded);