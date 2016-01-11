(function() {

	var svgIDarray = ["circle", "octagon",/*"square",*/ "triangle"];
	var shapeSpec = {};

	shapeSpec.circle = {p0x: 805.016, p0x1: 970.5, p0x2: 907.26, p0y: 1171.271, p0y1: 928.021, p0y2: 1069.271, p1x: 405.5, p1x1: 702.771, p1x2: 561.521, p1y: 1337, p1y1: 1273.76, p1y2: 1337, p2x: 5.984, p2x1: 249.479, p2x2: 108.229, p2y: 1171.516, p2y1: 1337, p2y2: 1273.76, p3x: -159.5, p3x1: -96.26, p3x2: -159.5, p3y: 772, p3y1: 1069.271, p3y2: 928.021, p4x: 5.984, p4x1: -159.5, p4x2: -96.26, p4y: 372.484, p4y1: 615.979, p4y2: 474.729, p5x: 405.5, p5x1: 108.229, p5x2: 249.479, p5y: 207, p5y1: 270.24, p5y2: 207, p6x: 805.016, p6x1: 561.521, p6x2: 702.771, p6y: 372.484, p6y1: 207, p6y2: 270.24, p7x: 970.5, p7x1: 907.26, p7x2: 970.5, p7y: 772, p7y1: 474.729, p7y2: 615.979},
	shapeSpec.octagon = {p0x: 800.68, p0x1: 970.5, p0x2: 800.68, p0y: 1181.97, p0y1: 772, p0y2: 1181.97, p1x: 390.71, p1x1: 800.68, p1x2: 800.68, p1y: 1351.79, p1y1: 1181.97, p1y2: 1181.97, p2x: -19.26, p2x1: 390.71, p2x2: 390.71, p2y: 1181.97, p2y1: 1351.79, p2y2: 1351.79, p3x: -189.08, p3x1: -19.26, p3x2: -19.26, p3y: 772, p3y1: 1181.97, p3y2: 1181.97, p4x: -19.26, p4x1: -189.08, p4x2: -189.08, p4y: 362.03, p4y1: 772, p4y2: 772, p5x: 390.71, p5x1: -19.26, p5x2: -19.26, p5y: 192.21, p5y1: 362.03, p5y2: 362.03, p6x: 800.68, p6x1: 390.71, p6x2: 390.71, p6y: 362.03, p6y1: 192.21, p6y2: 192.21, p7x: 970.5, p7x1: 800.68, p7x2: 800.68, p7y: 772, p7y1: 362.03, p7y2: 362.03},
	//shapeSpec.square = {p0x: 655.88, p0x1: 970.5, p0x2: 655.88, p0y: 1086.62, p0y1: 772, p0y2: 1086.62, p1x: 341.26, p1x1: 655.88, p1x2: 341.26, p1y: 1399.55, p1y1: 1086.62, p1y2: 1399.55, p2x: 28.33, p2x1: 341.26, p2x2: 28.33, p2y: 1084.93, p2y1: 1399.55, p2y2: 1084.93, p3x: -284.6, p3x1: 28.33, p3x2: -284.6, p3y: 770.31, p3y1: 1084.93, p3y2: 770.31, p4x: 30.02, p4x1: -284.6, p4x2: 30.02, p4y: 457.38, p4y1: 770.31, p4y2: 457.38, p5x: 344.64, p5x1: 30.02, p5x2: 344.64, p5y: 144.45, p5y1: 457.38, p5y2: 144.45, p6x: 657.57, p6x1: 344.64, p6x2: 657.57, p6y: 459.07, p6y1: 144.45, p6y2: 459.07, p7x: 970.5, p7x1: 657.57, p7x2: 970.5, p7y: 772, p7y1: 459.07, p7y2: 772}
	shapeSpec.triangle = {p0x: 970.5, p0x1: 970.5, p0x2: 970.5, p0y: 1284.5, p0y1: 772, p0y2: 772, p1x: 666.624, p1x1: 970.5, p1x2: 970.5, p1y: 1132.562, p1y1: 1284.5, p1y2: 1284.5, p2x: 272.447, p2x1: 666.624, p2x2: 666.624, p2y: 935.474, p2y1: 1132.562, p2y2: 1132.562, p3x: -54.5, p3x1: 272.447, p3x2: 272.447, p3y: 772, p3y1: 935.474, p3y2: 935.474, p4x: 278.37, p4x1: -54.5, p4x2: -54.5, p4y: 605.56, p4y1: 772, p4y2: 772, p5x: 653.96, p5x1: 278.37, p5x2: 278.37, p5y: 417.77, p5y1: 605.56, p5y2: 605.56, p6x: 970.5, p6x1: 653.96, p6x2: 653.96, p6y: 259.5, p6y1: 417.77, p6y2: 417.77, p7x: 970.5, p7x1: 970.5, p7x2: 970.5, p7y: 772, p7y1: 259.5, p7y2: 259.5}
	
	
	var cmdRegEx = /[MLQTCSVAZ][^MLQTCSVAZ]*/gi;
	var i, iLen, j, jLen;

	delay = 2;
	function morphShape(_current, _next){
		var currentShape = JSON.parse(JSON.stringify(shapeSpec[_current]));
		var nextShape = JSON.parse(JSON.stringify(shapeSpec[_next]));
		dancerPath = [{x:0, y:0}];
		for (i = 0; i < 8; ++i){
			
			dancerPath.push({x:nextShape['p'+i+'x1'] - 970.5, y:nextShape['p'+i+'y1']- 772}, {x:nextShape['p'+i+'x2'] - 970.5, y:nextShape['p'+i+'y2'] - 772}, {x:nextShape['p'+i+'x']-970.5, y:nextShape['p'+i+'y']-772})
		}
		console.log
		nextShape["onUpdate"] = updatePath;
		nextShape["onUpdateParams"] = ["{self}"];
		nextShape["delay"] = delay;
		nextShape["onComplete"] = fireMorph;
		nextShape["ease"] = "Bounce.easeIn"
		
		TweenLite.to(currentShape, 1, nextShape);
		TweenMax.to("#dancer", 1, {bezier:dancerPath, ease:Power1.easeInOut});
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
		document.getElementById("circle").setAttribute("d", pathString);
	}

	function init(){
	
		fireMorph();
	}
	init();
})();