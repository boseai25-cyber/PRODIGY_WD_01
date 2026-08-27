const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');


function handleScroll() {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

handleScroll();


hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
});

mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});


document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    var name = document.getElementById('name').value.trim();

    if (!name) {
        document.getElementById('form-msg').textContent = 'Please fill in your name.';
        return;
    }

    document.getElementById('form-msg').textContent =
        'Thanks, ' + name + '! We\'ll be in touch.';

    this.reset(); 
});
