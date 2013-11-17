// Declare main objects in svg
var svg_brand, svg_logo, svg_slogan, svg_menu, svg_menu_1, svg_menu_2, svg_page;
var viewportwidth;
var viewportheight;

//Get window size
getSize();

// Prepare SVG
var svg_container =
	d3.select("body").select("svg")
		.attr("width", viewportwidth-10)
		.attr("height", viewportheight-10);

var svg = 
	svg_container
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
d3.json("json/conf.json", function(json) {
	
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


/**
 
 
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
	.attr("class", "svg-menu-text")
	.attr("font-family", "sans-serif")
	.attr("font-size", "20px")
	.attr("fill", "rgba(255,0,0,0")
	.attr("x", "20")
	.attr("y", "120")
	.attr("text-anchor", "start")
	.text("Home")
	.transition()
		.delay(750)
		.duration(500)
		.attr("fill", "rgba(255,0,0,1");

svg_menu.append("rect")
	.attr("ry", "6")
	.attr("rx", "6")
	.attr("y", "94")
	.attr("x", "0")
	.attr("height", "40")
	.attr("width", "1")
	.attr("fill", "rgba(0,0,0,.0)")
	.attr("stroke", "rgba(99,99,99,1)")
	.attr("stroke-width", "2")
	.attr("class", "svg-menu-mask")
	.transition()
		.delay(500)
		.duration(500)
		.attr("width", "200")
		.attr("x", "5");

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
	.attr("class", "svg-menu-text")
	.attr("font-family", "sans-serif")
	.attr("font-size", "20px")
	.attr("fill", "rgba(255,0,0,0")
	.attr("x", "20")
	.attr("y", "170")
	.attr("text-anchor", "start")
	.text("Other Page")
		.transition()
		.delay(1000)
		.duration(500)
		.attr("fill", "rgba(255,0,0,1");

svg_menu.append("rect")
	.attr("ry", "6")
	.attr("rx", "6")
	.attr("y", "144")
	.attr("x", "0")
	.attr("height", "40")
	.attr("width", "1")
	.attr("fill", "rgba(0,0,0,.0)")
	.attr("stroke", "rgba(99,99,99,1)")
	.attr("stroke-width", "2")
	.attr("class", "svg-menu-mask")
	.transition()
		.delay(750)
		.duration(500)
		.attr("width", "200")
		.attr("x", "5");

*/

//Dynamic Menu
d3.json("json/menu.json", function(json) {
	
	//Dynamic Text Logo 
	svg_menu.selectAll(".svg-menu-item")
			.data(json)
		.enter().append("rect")
			.attr("class", "svg-menu-item")
			.attr("rx", "6")
			.attr("ry", "6")
			.attr("x", "0")
			.attr("y", function(d,i) { return (94 + (i * 50));  })
			.attr("height", "40")
			.attr("width", "1")
			.attr("fill", "rgba(0,0,0,.05)")
			.attr("stroke", "rgba(99,99,99,1)")
			.attr("stroke-width", "2")
			.attr("class", "svg-menu-item")
			.transition()
				.delay(function(d,i) { return 500 + i * 250 })
				.duration(500)
				.attr("width", "200")
				.attr("x", "5");

	svg_menu.selectAll(".svg-menu-text")
			.data(json)
		.enter().append("text")
			.attr("class", "svg-menu-text")
			.attr("font-size", "20px")
			.attr("fill", "rgba(255,0,0,0")
			.attr("x", "20")
			.attr("y", function(d,i) { return (120 + (i * 50));  })
			.attr("text-anchor", "start")
			.text(function(d) { return d.title })
				.transition()
				.delay(function(d,i) { return 500 + i * 250 })
				.duration(500)
				.attr("fill", "rgba(255,0,0,1");
	
	svg_menu.selectAll(".svg-menu-mask")
			.data(json)
		.enter().append("rect")
			.attr("class", "svg-menu-mask")
			.attr("ry", "6")
			.attr("rx", "6")
			.attr("y", function(d,i) { return (94 + (i * 50));  })
			.attr("x", "0")
			.attr("height", "40")
			.attr("width", "1")
			.attr("fill", "rgba(0,0,0,.0)")
			.attr("stroke", "rgba(99,99,99,1)")
			.attr("stroke-width", "2")
			.attr("class", "svg-menu-mask")
			.on("click", openPage)
			.transition()
				.delay(function(d,i) { return 500 + i * 250 })
				.duration(500)
				.attr("width", "200")
				.attr("x", "5");
});

//Add g for Page Contents
svg_page = 
	svg.append("g")
		.attr("transform", "translate(0,0)")
		.attr("class", "svg-chart");

//Adding sattic page contets
svg_page.append("rect")
	.attr("ry", "6")
	.attr("rx", "6")
	.attr("y", "25")
	.attr("x", "150")
	.attr("height", viewportheight - 40)
	.attr("width", "1")
	.attr("fill", "rgba(0,0,0,0)")
	.attr("stroke", "rgba(99,99,99,0)")
	.attr("stroke-width", "2")
	.attr("class", "svg-menu-item")
	.transition()
		.delay(500)
		.duration(500)
		.attr("stroke", "rgba(99,99,99,1)")
		.attr("width", viewportwidth - 240)
		.attr("x", "220");

svg_page.append("text")
	.attr("class", "svg-menu-text")
	.attr("font-family", "sans-serif")
	.attr("font-size", "32px")
	.attr("fill", "rgba(255,0,0,0)")
	.attr("x", "240")
	.attr("y", "70")
	.attr("text-anchor", "start")
	.text("Home")
		.transition()
		.delay(750)
		.duration(500)
		.attr("fill", "rgba(255,0,0,1)");

svg_page.append("foreignObject")
	.attr("class", "svg-p-text")
	.attr("font-family", "sans-serif")
	.attr("font-size", "18px")
	.attr("fill", "rgba(255,0,0,0)")
	.attr("x", "240")
	.attr("y", "110")
	.attr("width", viewportwidth - 270)
	.attr("height", "1")
	.style("color", "rgba(0,0,0,0)")
	.html("Loading...")
		.transition()
		.delay(1000)
		.duration(500)
		.attr("fill", "rgba(0,0,0,1)")
		.attr("height", viewportheight - 140)
		.style("color", "rgba(0,0,0,1)");

d3.text("pages/page1.html", function(data){
	svg_page.select(".svg-p-text")
		.html("<div class='svg-contents'>" + data + "</div>");
});

//Responsive


window.onresize = responsiveSVG;

//getSize();

function getSize()
{
	// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
	 
	if (typeof window.innerWidth != 'undefined')
	{
	     viewportwidth = window.innerWidth,
	     viewportheight = window.innerHeight
	}
	 
	//IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

	else if (typeof document.documentElement != 'undefined'
	    && typeof document.documentElement.clientWidth !=
	    'undefined' && document.documentElement.clientWidth != 0)
	{
	      viewportwidth = document.documentElement.clientWidth,
	      viewportheight = document.documentElement.clientHeight
	}
	 
	// older versions of IE
	 
	else
	{
	      viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
	      viewportheight = document.getElementsByTagName('body')[0].clientHeight
	}

}

function responsiveSVG()
{
	getSize();
	// Adjust SVG container
	svg_container
		.attr("width", viewportwidth-10)
		.attr("height", viewportheight-10);
	
	svg_page.select("rect")
		.transition()
			.attr("width", viewportwidth - 240)
			.attr("height", viewportheight - 40);

	svg_page.select(".svg-p-text")
		.transition()
			.attr("width", viewportwidth - 270)
			.attr("height", viewportheight - 140);
}

function openPage(d)
{
	//Update page title
	svg_page.select("text")
		.transition()
			.attr("fill", "rgba(255,0,0,0)")
		.transition()
			.text(d.title)
			.attr("fill", "rgba(255,0,0,1)");
	
	//update page contents
	//choose chart type
	if (d.cType == "force")
	{
		drawForceChart(d.source);
	}
	else
	{
		d3.text("pages/" + d.source, function(data){
			svg_page.select(".svg-p-text")
				.attr("height", "1")
				.html("<div class='svg-contents'>" + data + "</div>")
				.transition()
					.delay(650)
					.duration(1000)
					.attr("height", viewportheight - 140);
		});
	}
		svg_page.select("rect")
			.transition()
				.duration(400)
				.attr("height", "65")
			.transition()
				.duration(1000)
				.attr("height", viewportheight - 40);

	

	//alert(d.source);
}

//These functions are to draw charts
// *** Force Chart ***


var w,
h,
v,
node,
link,
root,
force,
vis,
tip;

function drawForceChart(dataSource)
{
	// Hide Text
	svg_page.select(".svg-p-text")
		.attr("height", "1");
	
	w=viewportwidth - 270;
	h=viewportheight - 140;
	
	v = d3.scale.linear()
    	.domain([100000000,10000000000])
    	.range([3, 4]);
	
	force = d3.layout.force()
		.on("tick", tick)
	    .linkDistance(60)
	    .charge(-50)     // -20
	    .gravity(.1)//0.1
		.charge(function(d) { return d._children ? -d.cap / 10000000 : -30; })
		.linkDistance(function(d) { return d.target._children ? 80 : 30; })
		.size([w, h + 160]);

	vis = d3.select(".svg-chart")
    	.attr("width", w)
    	.attr("height", h-160);
	
	tip = d3.tip()
	    .attr('class', 'd3-tip')
	    .offset([-10, 0])
	    .html(function(d) { return "<div style='background-color: rgba(200,200,200,0.5);'><strong>" + d.name + "</strong><br /><span style='color:black'>" + d.sector + "</span><br /><span style='color:red'>" + d.fdate + "</span><br /><span style='color:blue'>" + d.cap + "</span></div>"; })
    svg.call(tip);
	
	d3.json("pages/" + dataSource, function(json) {
		root = json;
		root.fixed = false;
		root.x = w / 2;
		root.y = h / 2 + 80;
		update();
	});
}

function update() {
	  var nodes = flatten(root),
	      links = d3.layout.tree().links(nodes);

	  // Restart the force layout.
	  force
	      .nodes(nodes)
	      .links(links)
	      .start();

	  // Update the links…
	  link = vis.selectAll("line.link")
	      .data(links, function(d) { return d.target.id; });

	  // Enter any new links.
	  link.enter().insert("svg:line", ".node")
	      .attr("class", "link")
	      .attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });

	  // Exit any old links.
	  link.exit().remove();

	  // Update the nodes…
	  node = vis.selectAll("circle.node")
	      .data(nodes, function(d) { return d.id; })
	      .style("fill", color);

	  node.transition()
	      .attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.cap) / 20000; });

	  // Enter any new nodes.
	  var nodeEnter = node.enter().append("svg:circle")
	      .attr("class", "node")
	      .attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; })
	      .attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.cap) / 20000; })
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide)
	      .style("fill", color)
	      .on("click", click)
	      .call(force.drag);

	nodeEnter.append("circle")
		.attr("r", function(d) { return v(d.cap) || 4.5; });
	  
	nodeEnter.append("text")
      	.attr("x", 17)
      	.attr("dy", ".35em")
      	.style("font", "7px sans-serif")
      	.text(function(d) { return d.name; });
	
	node.select("circle")
    	.style("fill", color);
      
	  // Exit any old nodes.
	  node.exit().remove();
	}

function tick() {
	link
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	node.attr("cx", function(d) {
		return d.x;
	}).attr("cy", function(d) {
		return d.y;
	});
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
	return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
}

// Toggle children on click.
function click(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
	update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
	var nodes = [], i = 0;

	function recurse(node) {
		if (node.children)
			node.size = node.children.reduce(function(p, v) {
				return p + recurse(v);
			}, 0);
		if (!node.id)
			node.id = ++i;
		nodes.push(node);
		return node.size;
	}

	root.size = recurse(root);
	return nodes;
}