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
};



