
function init() {
    var colour_select = document.getElementById("colour_select");
    colour_select.addEventListener('change', function() { hideShowThumbs() }, false);
}

function hideShowThumbs() {
    var colour_select = document.getElementById("colour_select");
    var colour = colour_select.options[colour_select.selectedIndex].value;
    console.log(value);
}

init();