
function init() {
    var filters = document.getElementsByClassName("filter");
    for ( i = 0; i < filters.length; i++) {
        filters[i].addEventListener('change', function() { hideShowThumbs() }, false);        
    }
}

function hideShowThumbs() {
    var filters = document.getElementsByClassName("filter");
    var allFilters = "";
    for (i = 0; i < filters.length; i++) {
        if (filters[i].options[filters[i].selectedIndex].value != "") {
            allFilters = allFilters + filters[i].options[filters[i].selectedIndex].value + " ";
        }
    }
    console.log(allFilters);
    if ( allFilters == "" ) {
        thumbsToShow = document.getElementsByClassName("thumb");
        for ( i = 0; i < thumbsToShow.length; i++) {
            thumbsToShow[i].style.display = "inline";
        }
    } else {
        var allThumbs = document.getElementsByClassName("thumb");
        var thumbsToShow = document.getElementsByClassName(allFilters);
        for ( i = 0; i < allThumbs.length; i++) {
            allThumbs[i].style.display = "none";
        }
        for ( i = 0; i < thumbsToShow.length; i++) {
            thumbsToShow[i].style.display = "inline";
        }
    }
}

init();