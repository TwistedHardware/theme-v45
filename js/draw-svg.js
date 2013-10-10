var svg = 
	d3.select("body").select("svg")
		.append("g")
			.attr("transform", "translate(0,0)");

var circle;

d3.json("json/test.json", function(json) {
	svg.selectAll("circle")
			.data(json)
		.enter().append("circle")
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; })
			.attr("r", function(d) { return d.r; })
		.transition()
		    .attr("r", 1)
		.transition()
			.attr("r", 10)
		.transition()
		    .attr("r", 1)
		.transition()
			.attr("r", 5)
		.transition()
			.attr("r", function(d) { return d.r; });
});