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
    $(".thumb:not(".concat(filters).concat(")")).collapse("hide");
    $(".thumb".concat(these)).collapse("show");
}

function filterThumbs() {
    var filters = new String();
    $(".filter").each( function() {
        if ( $(this).val() != "") filters = filters.concat( ".", $(this).val()) ;
    });
    console.log(".thumb".concat(filters));
    console.log(".thumb:not(".concat(filters).concat(")"));
    if ( filters.length  == 0 ) {
        showAllThumbs();
    } else {
        showTheseThumbs(filters);
    }
}

init();