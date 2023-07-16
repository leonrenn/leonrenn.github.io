// Array to store section elements
var sections = Array.from(document.getElementsByClassName('section'));
var h2Headers = Array.from(document.getElementsByTagName('h2'));

// Function to handle scroll event
function handleScroll() {
    var windowHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    h2Headers.forEach(function (header, index) {
        var rect = header.getBoundingClientRect();
        var isVisible = rect.top >= 0 && rect.bottom <= windowHeight;
        var scrollThreshold = windowHeight * 0.3; // Adjust this value as needed

        if (isVisible || rect.top < scrollThreshold) {
            showSection(index + 1);
        }
    });
}

// Function to show the corresponding section
function showSection(index) {
    for (var i = 0; i < sections.length; i++) {
        if (i === index - 1) {
            sections[i].classList.add('visible');
        } else {
            sections[i].classList.remove('visible');
        }
    }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
