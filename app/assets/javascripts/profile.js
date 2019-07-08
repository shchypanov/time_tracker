document.addEventListener('DOMContentLoaded', function() {
  var buttonAddTask = document.getElementsByClassName("profile_button-addTask")[0];
  console.log(buttonAddTask);

  if (buttonAddTask) {

    buttonAddTask.onclick = function() {
      var taskBlock = document.querySelector('#profile_container-second .profile_block-client');
      var newForm = document.createElement('form');
/*      var buttonStart = document.getElementsByClassName('profile_button-start')[0];
      var buttonPause = document.getElementsByClassName('profile_button-pause')[0];
      var buttonStop = document.getElementsByClassName('profile_button-stop')[0];
*/

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

/*      if (buttonStart) {
        buttonStart.onclick = function() {
          buttonPause.style.display = "inline-block";
          buttonStop.style.display = "inline-block";
          buttonStart.style.display = "none";

        };*/
      };
    };
  };
});