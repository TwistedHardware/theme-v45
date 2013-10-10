var svg = 
	d3.select("body").select("svg")
		.append("g")
			.attr("transform", "translate(0,0)");

var svg_brand, svg_logo, svg_slogan;

svg_brand = 
	svg.append("g")
		.attr("transform", "translate(0,0)")
		.attr("class", "svg-brand");

/**

// Static Text Logo Test - (Working)
svg_logo = 
	svg_brand.append("text")
		.attr("class", "svg-logo")
        .attr("font-family", "sans-serif")
        .attr("font-size", "20px")
        .attr("fill", "red")
        .attr("x", "20")
        .attr("y", "50")
        .attr("text-anchor", "start")
		.text("v45");
 */


// Dynamic Text Title
d3.json("json/test.json", function(json) {
	svg_logo = 
		svg_brand.selectAll(".svg-logo")
				.data(json)
			.enter().append("text")
				.attr("class", "svg-logo")
		        .attr("font-family", "sans-serif")
		        .attr("fill", "red")
		        .attr("x", "10")
		        .attr("y", "50")
		        .attr("text-anchor", "start")
				.text(function(d){ return d.title; });
	
	//Dynamic Text Slogan
	svg_slogan = 
		svg_brand.selectAll(".svg-slogan")
				.data(json)
			.enter().append("text")
				.attr("class", "svg-slogan")
		        .attr("font-family", "sans-serif")
		        .attr("fill", "black")
		        .attr("x", "10")
		        .attr("y", "80")
		        .attr("text-anchor", "start")
				.text(function(d){ return d.slogan; });
});