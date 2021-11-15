let navLinks = document.querySelectorAll('nav .navbar ul li a');

window.addEventListener('scroll', () => {
	let current = '';
	var secHome = document.querySelector('#home');
	var secAbout = document.querySelector('#about');
	var secService = document.querySelector('#service');
	var secContact = document.querySelector('#contact');
	if (pageYOffset >= secHome.offsetTop && pageYOffset < secAbout.offsetTop) {
		current = secHome.getAttribute('id');
	} else if (pageYOffset >= secAbout.offsetTop && pageYOffset < secService.offsetTop) {
		current = secAbout.getAttribute('id');
	} else if (pageYOffset >= secService.offsetTop && pageYOffset < secContact.offsetTop) {
		current = secService.getAttribute('id');
	} else if (pageYOffset >= secContact.offsetTop) {
		current = secContact.getAttribute('id');
	}
	navLinks.forEach(a => {
		a.classList.remove('active');
		if (a.getAttribute('href') == '#'+current) {
			a.classList.add('active');
		}
	})
})

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.location.href = window.location.origin + window.location.pathname;
}


function toggleMenu() {
	let navMenu = document.getElementsByClassName('menu')[0];
	if (navMenu.getAttribute('style') == 'display: block') {
		navMenu.setAttribute('style', 'display: none');
	} else {
		navMenu.setAttribute('style', 'display: block');
	}
}