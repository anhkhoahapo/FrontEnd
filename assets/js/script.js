window.onload = function() {
  var changeNav = function(e) {
    let scrollY = window.scrollY;
    let navbar = document.getElementById('main-nav');

    navbar.style.transition = "all 0.5s";

    if (scrollY > 100) {
      navbar.style.backgroundColor = 'white';
      navbar.style.boxShadow = '0 0 20px 0 grey';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      navbar.style.boxShadow = 'none';
    }
  }

  window.addEventListener('scroll', changeNav);
}