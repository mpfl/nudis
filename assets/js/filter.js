function init() {
    $(window).on("load", function() {
        $('.speciesGrid').packery({
            // options
            itemSelector: '.speciesGrid-item',
          });
    });
    $(".speciesGrid").on('shown.bs.collapse', function() {
        $(this).packery();;
    });
    $(".speciesGrid").on('hidden.bs.collapse', function() {
        $(this).packery();;
    });
    $(document).ready(function() {
        filterThumbs();
    });
}

function showAllThumbs() {
    $(".thumb").collapse("show");
}

function hideAllThumbs() {
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
    if ( filter.length  == 0 ) {
        showAllThumbs();
    } else {
        antiFilter = ":not(".concat(filter).concat(")");
        hideTheseThumbs(antiFilter);
        showTheseThumbs(filter);
    }
}

init();