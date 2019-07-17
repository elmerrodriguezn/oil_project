var getYear;
(getYear = function () {
    const date = new Date();
    document.querySelector('.year').innerHTML = date.getFullYear();
})();

var addSearchBar;
(addSearchBar = function () {
    if (window.location.pathname === '/') {
        if (window.pageYOffset > 700) {
            document.getElementById("search-bar").style.display = "block";
        } else if (window.pageYOffset < 100) {
            document.getElementById("search-bar").style.display = "none";
        }
    } else {
        document.getElementById("search-bar").style.display = "block";
    }
})();