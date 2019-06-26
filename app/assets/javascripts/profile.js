function contLoaded() {
  var buttonAddTask = document.getElementById("profile_button-addTask");
/*  buttonAddTask.addEventListener('click', addTaskClick);
  console.log(buttonAddTask);*/
   buttonAddTask.onclick = function() {
   document.getElementById('profile_container-second').style.display = 'block';
 }
}
/*
function addTaskClick(evt) {
	console.log(evt)
}
*/
document.addEventListener('DOMContentLoaded', contLoaded);

