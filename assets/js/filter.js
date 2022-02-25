
function init() {
    var filters = document.getElementsByClassName("filter");
    for ( i = 0; i < filters.length; i++) {
        filters[i].addEventListener('change', function() {
            filterThumbs()
        }, false);        
    }
    var reset = document.getElementById("reset");
    reset.addEventListener('click', function() {
        showAllThumbs()
    }, false);
    /*
    var elem = document.querySelector(".mason");
    var msnry = new Masonry( elem, {
        "percentPosition": true,
        "itemSelector": ".mason-item"
    });
    elem.addEventListener('shown.bs.collapse', function() {
        msnry.layout();
    });
    elem.addEventListener('hidden.bs.collapse', function() {
        msnry.layout();
    });
    */
}

function showAllThumbs() {
    thumbsToShow = document.getElementsByClassName("thumb");
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].classList.add("show");
    }
}

function hideAllThumbs() {
    var allThumbs = document.getElementsByClassName("thumb");
    for ( i = 0; i < allThumbs.length; i++) {
        allThumbs[i].classList.remove("show");
    }
}

function showTheseThumbs(classes) {
    var thumbsToShow = document.getElementsByClassName(classes);
    for ( i = 0; i < thumbsToShow.length; i++) {
        thumbsToShow[i].classList.add("show");
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
}

init();