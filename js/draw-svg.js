// Declare main objects in svg
var svg_brand, svg_logo, svg_slogan, svg_menu, svg_menu_1, svg_menu_2;

// Prepare SVG
var svg = 
	d3.select("body").select("svg")
		.append("g")
			.attr("transform", "translate(0,0)");

// Add g for branding
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

// Dynamic Text Branding
d3.json("json/test.json", function(json) {
	
	//Dynamic Text Logo
	svg_logo = 
		svg_brand.selectAll(".svg-logo")
				.data(json)
			.enter().append("text")
				.attr("class", "svg-logo")
				.attr("x", "0")
				.attr("font-size", "45px") 
				.attr("fill", "red")
				.attr("y", "50")
				.attr("text-anchor", "start")
				.text(function(d){ return d.title; })
			.transition()
				.duration(1000)
				.attr("font-size", "45px") 
				.attr("x", "10");

	
	//Dynamic Text Slogan
	svg_slogan = 
		svg_brand.selectAll(".svg-slogan")
				.data(json)
			.enter().append("text")
				.attr("class", "svg-slogan")
				.attr("fill", "black")
				.attr("x", "0")
				.attr("font-size", "14px") 
				.attr("y", "70")
				.attr("text-anchor", "start")
				.text(function(d){ return d.slogan; })
			.transition()
				.duration(1000)
				.attr("font-size", "14px") 
				.attr("x", "10");
});

//Add g for branding
svg_menu = 
	svg.append("g")
		.attr("transform", "translate(0,0)")
		.attr("class", "svg-menu");

//Static Menu Test - (Working)
svg_menu.append("rect")
	.attr("ry", "6")
	.attr("rx", "6")
	.attr("y", "94")
	.attr("x", "0")
	.attr("height", "40")
	.attr("width", "1")
	.attr("fill", "rgba(0,0,0,.05)")
	.attr("stroke", "rgba(99,99,99,1)")
	.attr("stroke-width", "2")
	.attr("class", "svg-menu-item")
	.transition()
		.delay(500)
		.duration(500)
		.attr("width", "200")
		.attr("x", "5");

svg_menu.append("text")
	.attr("class", "svg-logo")
	.attr("font-family", "sans-serif")
	.attr("font-size", "20px")
	.attr("fill", "red")
	.attr("x", "20")
	.attr("y", "120")
	.attr("text-anchor", "start")
	.text("Home");

svg_menu.append("rect")
	.attr("ry", "6")
	.attr("rx", "6")
	.attr("y", "144")
	.attr("x", "0")
	.attr("height", "40")
	.attr("width", "1")
	.attr("fill", "rgba(0,0,0,.05)")
	.attr("stroke", "rgba(99,99,99,1)")
	.attr("stroke-width", "2")
	.attr("class", "svg-menu-item")
	.transition()
		.delay(750)
		.duration(500)
		.attr("width", "200")
		.attr("x", "5");

svg_menu.append("text")
	.attr("class", "svg-logo")
	.attr("font-family", "sans-serif")
	.attr("font-size", "20px")
	.attr("fill", "red")
	.attr("x", "20")
	.attr("y", "170")
	.attr("text-anchor", "start")
	.text("Other Page");