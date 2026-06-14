// ========== PREMIUM CURSOR ENGINE ==========
const cursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Add hover effects for interactive elements
const clickables = document.querySelectorAll('a, button, .contact-link, .resume-btn, .tab-btn');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
});

// ========== HAMBURGER MENU (MOBILE) ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu li a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(hamburger.classList.contains('active')){
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ========== SCROLL REVEAL ==========
const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
    reveals.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.classList.add('active');
            }, 50); // Fast reveal
        }
    });
}

window.addEventListener('scroll', checkReveal);
checkReveal(); // Trigger once on load

// ========== TAB SWITCHING ==========
function switchTab(button, contentId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    button.classList.add('active');
    document.getElementById(contentId).classList.add('active');
}

// ========== TYPEWRITER EFFECT ==========
const typewriterElement = document.getElementById('typewriter');
const words = ['Graphic Designer', 'Branding Expert', 'Ad Campaign Designer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewrite() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2500; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400; // Pause before next word
    }

    setTimeout(typewrite, speed);
}

typewrite();