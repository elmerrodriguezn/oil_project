const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

function addSearchBar() {
    if (window.location.pathname === '/') {
        if (window.pageYOffset > 700) {
            document.getElementById("search-bar").style.display = "block";
        } else {
            document.getElementById("search-bar").style.display = "none";
        }
    } else {
        document.getElementById("search-bar").style.display = "block";
    }
}
addSearchBar();
