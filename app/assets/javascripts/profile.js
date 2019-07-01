document.addEventListener('DOMContentLoaded', function() {

  var buttonAddTask = document.getElementById("profile_button-addTask");

  buttonAddTask.onclick = function() {
    var taskBlock = document.querySelector('#profile_container-second .profile_block-client');

    var newForm = document.createElement('form');
    newForm.innerHTML = (
      '<select class="profile_select-client__input" id="profile_select-client__select" name="project_id">' +
      '<option class="profile_select-client__option">Task 1</option>' +
      '<option class="profile_select-client__option">Task 2</option>' +
      '</select>' +
      '<input type="text" class="profile_select-client__input" placeholder="Task description" id="profile_select-client__input" name="description" required>' +
      '<button class="profile_button profile_button-start" type="button" id="profile_button-start">Start</button>' +
      '<button class="profile_button profile_button-pause" type="button" id="profile_button-pause">Pause</button>' +
      '<button class="profile_button profile_button-stop" type="button" id="profile_button-stop">Stop</button>'
    );

    taskBlock.appendChild(newForm);
  }
});