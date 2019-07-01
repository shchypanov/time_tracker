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

  var adminCreateCustomerSubmit = document.getElementById("input-admin-create-customer-submit");
  adminCreateCustomerSubmit.onclick = function(evt) {
    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'phones.json', false);
    xhr.send();
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      alert(xhr.responseText);
    }


    /*  var formData = new FormData(document.forms.form-admin-create-new-customers);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/url");
        xhr.send(formData);*/
  }

});