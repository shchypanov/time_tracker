window.addEventListener('DOMContentLoaded', function(){
  var openMenu = document.getElementById("sandwich_open");
  var closeNav = document.getElementById("close_nav_mobile");
  var offMenuOnFocus = document.getElementById("overlay");
  var mobileMenu = document.getElementById("top-menu");

  openMenu.onclick = OpenMenuFunction;
  closeNav.onclick = closeMenuFunction;
  offMenuOnFocus.onclick = closeMenuFunction;

  function OpenMenuFunction(event){
    mobileMenu.style.marginRight = "0%";
    mobileMenu.style.display = "flex";
    offMenuOnFocus.style.display = "block";
    document.body.classList.toggle("mystyle");
  };

  function  closeMenuFunction (event){
    mobileMenu.style.marginRight = "-100%";
    mobileMenu.style.display = "none";
    offMenuOnFocus.style.display = "none";
  };
});