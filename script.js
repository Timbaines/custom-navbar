 // FUNCTION - TOGGLE MOBILE MENU
    const ToggleEl = () => {
        // REFERENCE ARRAY OF CLASS NAMES LISTED AS 'ACTIVE'
        ['tb-overlay', 'tb-mobile-menu-inner', 'tb-hamburger', 'tb-no-scroll'].forEach(className => {
            // SELECT ELEMENT WITH CLASS NAME
            const element = document.querySelector(`.${className}`);
            if (element) {
                // TOGGLE 'ACTIVE' CLASS TO ELEMENT
                element.classList.toggle('active');
            }
        });
    };

    // Select hamburger toggle button
    const tbMobileToggle = document.querySelector('.tb-hamburger');
    if (tbMobileToggle) {
        // If toggle button is found, add click event listener to toggle mobile menu
        tbMobileToggle.addEventListener('click', ToggleEl);
    }