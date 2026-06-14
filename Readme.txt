Priyadharshini S | Premium Graphic Design Portfolio

A sleek, high-performance, and fully responsive personal portfolio website built for a Graphic Designer. Designed with a premium dark theme, smooth scroll animations, and interactive UI elements to showcase creative projects, experience, and skills.

KEY FEATURES

Premium Dark Aesthetic: A modern, high-contrast dark theme with elegant accent colors to make graphic design work stand out.

Custom Interactive Cursor: A subtle, custom-coded mouse cursor that smoothly tracks movement and expands into a frosted glass circle when hovering over clickable elements.

Typewriter Effect: An automated, looping typewriter animation in the hero section displaying various professional titles.

Smooth Scroll Reveals: Elements gently fade and float upward into place as the user scrolls down the page.

Interactive Experience Tabs: A clean, click-to-switch tabbed interface for navigating work history without cluttering the screen.

Pure CSS Branching Arrows: A custom-engineered, responsive mind-map style contact section utilizing CSS for branching arrow connections.

Mobile-First Responsiveness: Flawless adaptation to tablets and mobile devices, including a custom animated Hamburger Menu that slides in from the right.

TECH STACK

HTML5: Semantic structuring and accessible layout.

CSS3: Custom properties (variables), Flexbox, CSS Grid, complex keyframe animations, and media queries. (No external frameworks like Bootstrap or Tailwind).

Vanilla JavaScript (ES6): Custom cursor tracking, scroll intersection observers, tab switching logic, and mobile menu toggling.

FOLDER STRUCTURE
To ensure all images, resumes, and links load correctly, your project folder should look exactly like this:

Portfolio-Website/
|-- index.html
|-- style.css
|-- script.js
|-- Files/
|-- Images/
|    |-- Favicon.svg
|    |-- Priyadharshini.png
|    |-- Strong Lifts Meat Delivery Promo.png
|    |-- Social Media Liver Advertisement.png
|    |-- Eid Mubarak Egg Graphic.png
|-- Resume/
|    |-- Priyadharshini S Resume.pdf
|-- Projects/
|-- Projects.zip

HOW TO RUN THE PROJECT

Download or clone this repository.

Ensure your folder structure matches the layout above.

Simply double-click the index.html file to open it in any modern web browser (Chrome, Firefox, Safari, Edge).

No local server or installation is required.

CUSTOMIZATION GUIDE

Changing the Color Theme:
The website uses CSS variables for easy theme switching. To change the overall color scheme, open style.css and locate the :root section at the top of the file:
--bg-primary: #121212; (Main background color)
--card-bg: #222222; (Box/Card background color)
--accent-main: #B76E79; (Change this to change your primary brand color!)

Changing the Typewriter Text:
To change the titles that type themselves out in the "About" section, open script.js and edit the 'words' array:
const words = ['Graphic Designer', 'Branding Expert', 'Ad Campaign Designer'];

BROWSER COMPATIBILITY
Tested and fully functional on:

Google Chrome (Desktop & Mobile)

Safari (Desktop & iOS)

Mozilla Firefox

Microsoft Edge

Designed & Developed for Priyadharshini S