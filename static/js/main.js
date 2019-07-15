const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

window.onscroll = function () { addSearchBar() };

function addSearchBar() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        //alert('this is an alert');
        document.getElementById("searchbar").style.display = "block";
    } else if (document.body.scrollTop < 300 || document.documentElement.scrollTop < 300) {
        document.getElementById("searchbar").style.display = "none";
    } else {

    }
}