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
    var filters = new String();
    $(".filter").each( function() {
        if ( $(this).val() != "") filters.concat( ".", $(this).val()) ;
    });
    if ( filters.length  == 0 ) {
        showAllThumbs();
    } else {
        hideAllThumbs();
        showTheseThumbs(filters);
    }
}

init();