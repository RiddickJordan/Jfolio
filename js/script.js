(function() {

	var svgIDarray = ["circle", "octagon", "triangle"];
	var dancerPathSpec = {};

	dancerPathSpec.circle   = {p0x: 805.016, p0x1: 970.5, p0x2: 907.26, p0y: 1171.271, p0y1: 928.021, p0y2: 1069.271, p1x: 405.5, p1x1: 702.771, p1x2: 561.521, p1y: 1337, p1y1: 1273.76, p1y2: 1337, p2x: 5.984, p2x1: 249.479, p2x2: 108.229, p2y: 1171.516, p2y1: 1337, p2y2: 1273.76, p3x: -159.5, p3x1: -96.26, p3x2: -159.5, p3y: 772, p3y1: 1069.271, p3y2: 928.021, p4x: 5.984, p4x1: -159.5, p4x2: -96.26, p4y: 372.484, p4y1: 615.979, p4y2: 474.729, p5x: 405.5, p5x1: 108.229, p5x2: 249.479, p5y: 207, p5y1: 270.24, p5y2: 207, p6x: 805.016, p6x1: 561.521, p6x2: 702.771, p6y: 372.484, p6y1: 207, p6y2: 270.24, p7x: 970.5, p7x1: 907.26, p7x2: 970.5, p7y: 772, p7y1: 474.729, p7y2: 615.979},
	dancerPathSpec.octagon  = {p0x: 800.68, p0x1: 970.5, p0x2: 800.68, p0y: 1181.97, p0y1: 772, p0y2: 1181.97, p1x: 390.71, p1x1: 800.68, p1x2: 800.68, p1y: 1351.79, p1y1: 1181.97, p1y2: 1181.97, p2x: -19.26, p2x1: 390.71, p2x2: 390.71, p2y: 1181.97, p2y1: 1351.79, p2y2: 1351.79, p3x: -189.08, p3x1: -19.26, p3x2: -19.26, p3y: 772, p3y1: 1181.97, p3y2: 1181.97, p4x: -19.26, p4x1: -189.08, p4x2: -189.08, p4y: 362.03, p4y1: 772, p4y2: 772, p5x: 390.71, p5x1: -19.26, p5x2: -19.26, p5y: 192.21, p5y1: 362.03, p5y2: 362.03, p6x: 800.68, p6x1: 390.71, p6x2: 390.71, p6y: 362.03, p6y1: 192.21, p6y2: 192.21, p7x: 970.5, p7x1: 800.68, p7x2: 800.68, p7y: 772, p7y1: 362.03, p7y2: 362.03},
	dancerPathSpec.triangle = {p0x: 970.5, p0x1: 970.5, p0x2: 970.5, p0y: 1284.5, p0y1: 772, p0y2: 772, p1x: 666.624, p1x1: 970.5, p1x2: 970.5, p1y: 1132.562, p1y1: 1284.5, p1y2: 1284.5, p2x: 272.447, p2x1: 666.624, p2x2: 666.624, p2y: 935.474, p2y1: 1132.562, p2y2: 1132.562, p3x: -54.5, p3x1: 272.447, p3x2: 272.447, p3y: 772, p3y1: 935.474, p3y2: 935.474, p4x: 278.37, p4x1: -54.5, p4x2: -54.5, p4y: 605.56, p4y1: 772, p4y2: 772, p5x: 653.96, p5x1: 278.37, p5x2: 278.37, p5y: 417.77, p5y1: 605.56, p5y2: 605.56, p6x: 970.5, p6x1: 653.96, p6x2: 653.96, p6y: 259.5, p6y1: 417.77, p6y2: 417.77, p7x: 970.5, p7x1: 970.5, p7x2: 970.5, p7y: 772, p7y1: 259.5, p7y2: 259.5}
	
	
	var cmdRegEx = /[MLQTCSVAZ][^MLQTCSVAZ]*/gi;
	var i, iLen, j, jLen;

	function morphShape(_current, _next){
		var currentPath = JSON.parse(JSON.stringify(dancerPathSpec[_current]));
		var nextPath = JSON.parse(JSON.stringify(dancerPathSpec[_next]));
		nextPath["onUpdate"] = updatePath;
		nextPath["onUpdateParams"] = ["{self}"];
		//nextShape["ease"] = "Bounce.easeIn";
		TweenLite.to(currentPath, .15, nextPath);

		dancerPath = [{x:0, y:0}];
		for (i = 0; i < 8; ++i){
			dancerPath.push({x:(nextPath['p'+i+'x1']-970.5), y:(nextPath['p'+i+'y1']- 772)}, {x:(nextPath['p'+i+'x2']-970.5), y:(nextPath['p'+i+'y2']-772)}, {x:(nextPath['p'+i+'x']-970.5), y:(nextPath['p'+i+'y']-772)})
		}
		//console.log(_next)
		//console.log(JSON.stringify(dancerPath));
		TweenMax.to("#dancer", 4, {onComplete:fireMorph, bezier:{type:"cubic", values:dancerPath}, ease:Power0.easeNone});

	}

	var currentShapeIndex = 0;
	function fireMorph(){
		if (currentShapeIndex == (svgIDarray.length - 1)){
			morphShape(svgIDarray[currentShapeIndex], svgIDarray[0]);
			currentShapeIndex = 0;
		}
		else{
			morphShape(svgIDarray[currentShapeIndex], svgIDarray[currentShapeIndex + 1]);
			++currentShapeIndex
		}
	}
	
	function updatePath(tween){
		pathString = "M970.5,772";
		for( i = 0; i < 8; ++i){
			thisPoint = tween.target
			pathString += "C"+thisPoint['p'+i+'x1']+","+thisPoint['p'+i+'y1']+","+thisPoint['p'+i+'x2']+","+thisPoint['p'+i+'y2']+","+thisPoint['p'+i+'x']+","+thisPoint['p'+i+'y']+"";
		}
		pathString += 'z';
		document.getElementById("dancePath").setAttribute("d", pathString);
	}

	function init(){
		var dP = [{"x":0,"y":0},{"x":0,"y":156.02099999999996},{"x":-63.24000000000001,"y":297.27099999999996},{"x":-165.48400000000004,"y":399.27099999999996},{"x":-267.72900000000004,"y":501.76},{"x":-408.97900000000004,"y":565},{"x":-565,"y":565},{"x":-721.021,"y":565},{"x":-862.271,"y":501.76},{"x":-964.516,"y":399.5160000000001},{"x":-1066.76,"y":297.27099999999996},{"x":-1130,"y":156.02099999999996},{"x":-1130,"y":0},{"x":-1130,"y":-156.02099999999996},{"x":-1066.76,"y":-297.271},{"x":-964.516,"y":-399.516},{"x":-862.271,"y":-501.76},{"x":-721.021,"y":-565},{"x":-565,"y":-565},{"x":-408.97900000000004,"y":-565},{"x":-267.72900000000004,"y":-501.76},{"x":-165.48400000000004,"y":-399.516},{"x":-63.24000000000001,"y":-297.271},{"x":0,"y":-156.02099999999996},{"x":0,"y":0}];
		TweenMax.to("#dancer", 4, {onComplete:fireMorph, bezier:{type:"cubic", values:dP}, ease:Power0.easeNone});		
	}
	init();

	function doWork(){
		TweenMax.to("#name", .1, {opacity:0})
		alert('yoyo')
	}

	document.getElementById('work').onclick=doWork;
})();