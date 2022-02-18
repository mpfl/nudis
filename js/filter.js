
function init() {
    var colour_select = document.getElementById("colour_select");
    colour_select.addEventListener('change', function() { hideShowThumbs() }, false);
}

function hideShowThumbs() {
    var colour_select = document.getElementById("colour_select");
    var colour = colour_select.options[colour_select.selectedIndex].value;
    var allThumbs = document.getElementsByClassName("thumb");
    var thumbsToShow = document.getElementsByClassName(colour);
    console.log(allThumbs.length);
    for ( i = 0; i < allThumbs.length; i++) {
        allThumbs[i].style.display = "none";
    }
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].style.display = "inline";
    }
}

init();