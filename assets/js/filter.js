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
    $(".thumbs:not(".concat(filters).concat(")")).collapse("hide");
    $(".thumbs".concat(these)).collapse("show");
}

function filterThumbs() {
    var filters = new String();
    $(".filter").each( function() {
        if ( $(this).val() != "") filters = filters.concat( ".", $(this).val()) ;
    });
    console.log(".thumbs".concat(filters));
    console.log(".thumbs:not(".concat(filters).concat(")"));
    if ( filters.length  == 0 ) {
        showAllThumbs();
    } else {
        showTheseThumbs(filters);
    }
}

init();