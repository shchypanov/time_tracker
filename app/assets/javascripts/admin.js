// window.onresize = function (even) {
//   var table = document.getElementById('user-table');
//   if( window.innerHeight >= 900 ){
//     table.style.height="600px"
//   }
//   if( window.innerHeight <= 900 ){
//     table.style.height="400px"
//   }
//   if( window.innerHeight <= 700 ){
//     table.style.height="300px"
//   }
// }
function select_tab(evt, select_tab) {
  var i, admin_tabcontent, admin_tablinks;
  admin_tabcontent = document.getElementsByClassName("admin_tabcontent");
  for (i = 0; i < admin_tabcontent.length; i++) {
    admin_tabcontent[i].style.display = "none";
  }
  admin_tablinks = document.getElementsByClassName("admin_tablinks");
  for (i = 0; i < admin_tablinks.length; i++) {
    admin_tablinks[i].className = admin_tablinks[i].className.replace(" active", "");
  }
  document.getElementById(select_tab).style.display = "block";
  evt.currentTarget.className += " active";
}

window.addEventListener("DOMContentLoaded", function() {

  var customerSubmit = document.getElementsByClassName("input-admin-create-customer-submit")[0];
  customerSubmit.onclick = function validate_form(evt) {
    var customerInput = document.getElementsByClassName("admin-create-customer")[0];
    if (customerInput.value == '') {
      evt.preventDefault();
      alert("Please fill in the customer field.");
      return false;
    }
  }

});