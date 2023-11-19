/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*================tab links=============*/
function opentab(tabLink) {
    // If the tab link is already active, hide its contents and return
    if (tabLink.classList.contains('active-link')) {
        tabLink.classList.remove('active-link');

        // Hide all tab contents
        var contents = document.querySelectorAll('.tab-contents');
        contents.forEach(function (content) {
            content.classList.remove('active-tab');
        });

        return;
    }

    // Remove 'active-link' class from all tab links
    var tabs = document.querySelectorAll('.tab-links');
    tabs.forEach(function (tab) {
        tab.classList.remove('active-link');
    });

    // Add 'active-link' class to the selected tab link
    tabLink.classList.add('active-link');

    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-contents');
    contents.forEach(function (content) {
        content.classList.remove('active-tab');
    });

    // Show the content of the selected tab
    var tabId = tabLink.textContent.trim(); // Simplified way to get tabId
    var selectedContent = document.getElementById(tabId);
    selectedContent.classList.add('active-tab');
}
/*==================== project tab links ====================*/
function openprojecttab(tabLink) {
    // If the tab link is already active, hide its contents and return
    if (tabLink.classList.contains('active-link')) {
        tabLink.classList.remove('active-link');

        // Hide all tab contents
        var contents = document.querySelectorAll('.projecttab-contents');
        contents.forEach(function (content) {
            content.classList.remove('active-tab');
        });

        return;
    }

    // Remove 'active-link' class from all tab links
    var tabs = document.querySelectorAll('.projecttab-links');
    tabs.forEach(function (tab) {
        tab.classList.remove('active-link');
    });

    // Add 'active-link' class to the selected tab link
    tabLink.classList.add('active-link');

    // Hide all tab contents
    var contents = document.querySelectorAll('.projecttab-contents');
    contents.forEach(function (content) {
        content.classList.remove('active-tab');
    });

    // Show the content of the selected tab
    var tabId = tabLink.textContent.trim(); // Simplified way to get tabId
    var selectedContent = document.getElementById(tabId);
    selectedContent.classList.add('active-tab');
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });






