function init() {
    $(window).on("load", function() {
        $('.mason').masonry({
            "percentPosition": true,
            "itemSelector": ".mason-item"        
        })
    })
}

function showAllThumbs() {
    $('.thumb').collapse("show");
    /*
    thumbsToShow = document.getElementsByClassName("thumb");
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].classList.add("show");
    }
    */
}

function hideAllThumbs() {
    $('.thumb').collapse("hide");
    /*
    var allThumbs = document.getElementsByClassName("thumb");
    for ( i = 0; i < allThumbs.length; i++) {
        allThumbs[i].classList.remove("show");
    }
    */
}

function showTheseThumbs(these) {
    $(these).collapse("show");
    /*
    var thumbsToShow = document.getElementsByClassName(classes);
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].classList.add("show");
    }
    */
}

function filterThumbs() {
    var filters = document.getElementsByClassName("filter");
    var allFilters = "";
    for (i = 0; i < filters.length; i++) {
        if (filters[i].options[filters[i].selectedIndex].value != "") {
            allFilters = allFilters + filters[i].options[filters[i].selectedIndex].value + ", ";
        }
    }
    if ( allFilters == "" ) {
        showAllThumbs();
    } else {
        hideAllThumbs();
        showTheseThumbs(allFilters);
    }
}

init();