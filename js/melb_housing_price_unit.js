var vg_1 = "js/melb_housing_price.vg.json";


vegaEmbed("#choropleth_map",vg_1).then(function(result) { 

    //Access the Vega view instance () as result.view
}).catch(console.error);

var vg_2 = "js/line.vg.json";


vegaEmbed("#line_chart",vg_2).then(function(result) { 

    //Access the Vega view instance () as result.view
}).catch(console.error);