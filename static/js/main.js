var getYear;
(getYear = function () {
    const date = new Date();
    document.querySelector('.year').innerHTML = date.getFullYear();
})();

var addSearchBar;
(addSearchBar = function () {
    var mobileWidth = 450;
    if (window.location.pathname === '/' && innerWidth > mobileWidth) {
        if (window.pageYOffset > 700) {
            document.getElementById("search-bar").style.display = "block";
        } else {
            document.getElementById("search-bar").style.display = "none";
        }
    } else if (innerWidth > mobileWidth) {
        document.getElementById("search-bar").style.display = "block";
    }
})();