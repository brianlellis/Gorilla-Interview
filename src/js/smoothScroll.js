(function() {
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
        // Function to animate the scroll
        let smoothScroll = function (anchor, duration) {
            // Calculate how far and how fast to scroll
            let startLocation = window.pageYOffset,
                endLocation = anchor.offsetTop,
                distance = endLocation - startLocation,
                increments = distance/(duration/16),
                stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            let animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    let travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    let travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // Loop the animation function
            let runAnimation = setInterval(animateScroll, 16);
       
        };

        // Define smooth scroll links
        let scrollToggle = document.querySelectorAll('.scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {
            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                let dataID = toggle.getAttribute('href'),
                    dataTarget = document.querySelector(dataID),
                    dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) smoothScroll(dataTarget, dataSpeed || 500);
            }, false);
        });
    }
 })();