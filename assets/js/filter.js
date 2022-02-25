function init() {
    $(window).on("load", function() {
        $(".mason").masonry({
            "percentPosition": true,
            "itemSelector": ".mason-item"        
        })
    })
}

function showAllThumbs() {
    $(".thumb").collapse("show");
}

function hideAllThumbs() {
    $(".thumb").collapse("hide");
}

function showTheseThumbs(these) {
    $(these).collapse("show");
}

function filterThumbs() {
    var filters = new Array();
    $(".filter").each( function() {
        if ( $(this).val() != "") filters.push( $(this).val()) ;
    });
    if ( filters.length  == 0 ) {
        showAllThumbs();
    } else {
        allFilters = filters.join(", ");
        hideAllThumbs();
        showTheseThumbs(allFilters);
    }
}

init();