// Load style guide header
$(function () {
    $("#header").load("header.html");
});

// Dropdown filter
function filter() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('listFilter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("multiselectFilter");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("label")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}