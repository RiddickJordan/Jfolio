(function() {
	
	var svgIDarray = ["circle", "octagon","square", "triangle"];
	var shapeSpec = {};
	var cmdRegEx = /[MLQTCSVAZ][^MLQTCSVAZ]*/gi;
	var i, iLen, j, jLen;

	var tl = new TimelineLite();
	tl.to("#dancer", .5, {x:-565, ease:Sine.easeIn});
	tl.to("#dancer", .5, {y:565, ease:Sine.easeOut}, "-=.5");

	tl.to("#dancer", .5, {x:-1131, ease:Sine.easeOut});
	tl.to("#dancer", .5, {y:0, ease:Sine.easeIn}, "-=.5");

	tl.to("#dancer", .5, {x:-565, ease:Sine.easeIn});
	tl.to("#dancer", .5, {y:-565, ease:Sine.easeOut}, "-=.5");

	tl.to("#dancer", .5, {x:0, ease:Sine.easeOut});
	tl.to("#dancer", .5, {y:0, ease:Sine.easeIn}, "-=.5");

	delay = 2;
	function morphShape(_current, _next){
		var currentShape = JSON.parse(JSON.stringify(shapeSpec[_current]));
		var nextShape = shapeSpec[_next];
		var tweenValues = {};
		for (i = 0; i < 8; ++i){
			tweenValues['p'+i+'x1'] = nextShape['p'+i+'x1'];
			tweenValues['p'+i+'y1'] = nextShape['p'+i+'y1'];
			tweenValues['p'+i+'x2'] = nextShape['p'+i+'x2'];
			tweenValues['p'+i+'y2'] = nextShape['p'+i+'y2'];
			tweenValues['p'+i+'x'] = nextShape['p'+i+'x'];
			tweenValues['p'+i+'y'] = nextShape['p'+i+'y'];
		}
		//console.log(_current + " to " + _next + '...')
		//console.log(tweenValues);
		tweenValues["onUpdate"] = updatePath;
		tweenValues["onUpdateParams"] = ["{self}"];
		tweenValues["delay"] = delay;
		tweenValues["onComplete"] = fireMorph;
		tweenValues["ease"] = "Bounce.easeIn"
		
		TweenLite.to(currentShape, 1, tweenValues);
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
		for (i = 0, iLen=svgIDarray.length; i < iLen; ++i){
			pathData = document.getElementById(svgIDarray[i]).getAttribute('d');
			var commands = pathData.match(cmdRegEx);
			shapeSpec[svgIDarray[i]]= {};
			commands.shift();
			for (j = 0, jLen=commands.length; j < jLen; ++j){
				commandString = ((commands[j].replace(/-/g, ',-')).replace(/,,/, ',')).replace(/C,/, "C");
				thisCommand = commandString.split(",");
				shapeSpec[svgIDarray[i]]["p"+j+"x1"] = Number(thisCommand[0].split("C")[1]);
				shapeSpec[svgIDarray[i]]["p"+j+"y1"] = Number(thisCommand[1]);
				shapeSpec[svgIDarray[i]]["p"+j+"x2"] = Number(thisCommand[2]);
				shapeSpec[svgIDarray[i]]["p"+j+"y2"] = Number(thisCommand[3]);
				shapeSpec[svgIDarray[i]]["p"+j+"x"] = Number(thisCommand[4]);
				shapeSpec[svgIDarray[i]]["p"+j+"y"] = Number(thisCommand[5]);
			}
		}
		console.log(shapeSpec['triangle'])
		fireMorph();
	}
	init();
})();