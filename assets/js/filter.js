
function init() {
    var filters = document.getElementsByClassName("filter");
    for ( i = 0; i < filters.length; i++) {
        filters[i].addEventListener('change', function() { filterThumbs() }, false);        
    }
    var reset = document.getElementById("reset");
    reset.addEventListener('click', function() { showAllThumbs() }, false);
}

function showAllThumbs() {
    thumbsToShow = document.getElementsByClassName("thumb");
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].style.display = "inline";
    }
    var msnry = new Masonry('.row', {
        itemSelector: '.col',
        percentPosition: true
    });
}

function hideAllThumbs() {
    var allThumbs = document.getElementsByClassName("thumb");
    for ( i = 0; i < allThumbs.length; i++) {
        allThumbs[i].style.display = "none";
    }
}

function showTheseThumbs(classes) {
    var thumbsToShow = document.getElementsByClassName(classes);
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].style.display = "inline";
    }
}

function filterThumbs() {
    var filters = document.getElementsByClassName("filter");
    var allFilters = "";
    for (i = 0; i < filters.length; i++) {
        if (filters[i].options[filters[i].selectedIndex].value != "") {
            allFilters = allFilters + filters[i].options[filters[i].selectedIndex].value + " ";
        }
    }
    if ( allFilters == "" ) {
        showAllThumbs();
    } else {
        hideAllThumbs();
        showTheseThumbs(allFilters);
    }
    var msnry = new Masonry('.row', {
        itemSelector: '.col',
        percentPosition: true
    });
}

init();