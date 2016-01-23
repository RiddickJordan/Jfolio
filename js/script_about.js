(function() {
	var step = 0;
	function stepThrough(){
		if(step == 0){
			document.getElementById("about_text").className = "middle";
			step ++;
			window.setTimeout(stepThrough, 500)
		}
		else if(step == 1){
			document.getElementById("about_text").className = "";
			document.getElementById("img-outer").className = "rotate";
		}
	}
	window.setTimeout(stepThrough, 500)
})();