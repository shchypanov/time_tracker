window.onload = function() {
  var tabLinks = document.querySelectorAll('.admin_tablinks');
  var tabContents = document.querySelectorAll('.admin_tabcontent');
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var id = this.hash.replace('#', '');
      for (var j = 0; j < tabContents.length; j++) {
				var tabContent = tabContents[j];
        tabContent.classList.remove('active_tab');
        tabLinks[j].classList.remove('active');
        if (tabContent.id === id) {
          tabContent.classList.add('active_tab');
        }
      }
      this.classList.add('active');
    });
  }
}
