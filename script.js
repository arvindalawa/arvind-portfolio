// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let heroRole = document.querySelector('#hero-role');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// hero role text rotation after each typing animation cycle
if (heroRole) {
    const roles = [
        'MERN Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'React Developer',
        'JavaScript Developer',
        'Shopify Developer'
    ];
    let roleIndex = 0;

    heroRole.textContent = roles[roleIndex];
    const updateRole = () => {
        roleIndex = (roleIndex + 1) % roles.length;
        heroRole.textContent = roles[roleIndex];
    };

    // Keep role changes aligned with CSS animation timing (2s delay + 6s loop).
    setTimeout(() => {
        updateRole();
        setInterval(updateRole, 6000);
    }, 8000);
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}