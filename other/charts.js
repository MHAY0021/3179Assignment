var vg_2 = "jsonFiles/tet_vax_map.json";
// Used
vegaEmbed("#map_tetVax", vg_2).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "jsonFiles/vaxCoverageNow.json";
// Not used
vegaEmbed("#map_2023Cov", vg_3).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "jsonFiles/fluAvailabilityMap.json";
// Used
vegaEmbed("#mapFlu", vg_4).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "jsonFiles/intScat.json";
// Used
vegaEmbed("#intScat", vg_5).then(function(result) {

// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "jsonFiles/livesSaved.json";
// Used
vegaEmbed("#livesSaved", vg_6).then(function(result) {

    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_7 = "jsonFiles/cover.json";
// Used
vegaEmbed("#cover", vg_7).then(function(result) {

    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


// Function to toggle the two divs
function toggleMaps() {
    const mapTetVax = document.getElementById('tog1');
    const map2023Cov = document.getElementById('tog2');
    
    if (mapTetVax.style.display === 'none') {
        map2023Cov.style.display = 'none';
        mapTetVax.style.display = 'block';
        
    } else {
        mapTetVax.style.display = 'none';
        map2023Cov.style.display = 'block';
    }
}

// Ensure one of the maps is hidden on load
window.onload = function() {
    document.getElementById('tog1').style.display = 'none'; // Hide second map initially
}

