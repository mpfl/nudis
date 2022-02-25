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

function hideThumbs() {
    $(".thumb").collapse("hide");
}

function hideTheseThumbs(these) {
    $(".thumb".concat(these)).collapse("hide");
}

function showTheseThumbs(these) {
    $(".thumb".concat(these)).collapse("show");
}

function filterThumbs() {
    var filter = new String();
    $(".filter").each( function() {
        if ( $(this).val() != "") filter = filter.concat( ".", $(this).val()) ;
    });
    antiFilter = ":not(".concat(filter).concat(")");
    console.log(".thumb".concat(filter));
    console.log(".thumb:not(".concat(filter).concat(")"));
    if ( filter.length  == 0 ) {
        showAllThumbs();
    } else {
        antiFilter = ":not(".concat(filter).concat(")");
        hideTheseThumbs(antiFilter);
        showTheseThumbs(filter);
    }
}

init();