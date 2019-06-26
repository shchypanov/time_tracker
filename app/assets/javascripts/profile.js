function contLoaded() {
  var buttonAddTask = document.getElementById("profile_button-addTask");
  buttonAddTask.addEventListener('click', addTaskClick);
  console.log(buttonAddTask);
}

function addTaskClick(evt) {
	console.log(evt)
}

document.addEventListener('DOMContentLoaded', contLoaded);

