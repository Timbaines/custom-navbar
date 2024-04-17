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

    // SELECT HAMBURGER TOGGLE 
    const tbMobileToggle = document.querySelector('.tb-hamburger');
    if (tbMobileToggle) {
        // EVENT LISTENER FOR MOBILE TOGGLE
        tbMobileToggle.addEventListener('click', ToggleEl);
    }