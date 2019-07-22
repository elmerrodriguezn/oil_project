var getYear;
(getYear = function () {
    const date = new Date();
    document.querySelector('.year').innerHTML = date.getFullYear();
})();

var addSearchBar;
(addSearchBar = function () {
    if (window.location.pathname === '/' && window.pageXOffset < 700) {
        if (window.pageYOffset > 700) {
            document.getElementById("search-bar").style.display = "block";
        } else {
            document.getElementById("search-bar").style.display = "none";
        }
    } else {
        document.getElementById("search-bar").style.display = "block";
    }
})();