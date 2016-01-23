(function() {
	window.onresize = function(event) {
	    document.getElementById("introAnimation").setAttribute('preserveAspectRatio', 'none')
	};
	var aspectRatio = window.innerWidth / window.innerHeight
	var distortX = 1;
	var distortY = 1;

	if(aspectRatio >= 1){ 
	//LANDSCAPE
		if(aspectRatio >= 2.65){
			/*TOO WIDE*/
			distortY = .8;
		}
		else if(aspectRatio < 2.65 && aspectRatio >= 2){
			/*TOO WIDE*/
			distortY = .9;
		}
		else if(aspectRatio < 2 && aspectRatio >= 1.5){
			/*SWEET SPOT*/
		}
		else if(aspectRatio < 1.5 && aspectRatio >= 1.25){
			/*TOO SLIM*/
			distortX = .9;
		} 
		else if(aspectRatio < 1.25 && aspectRatio > 1){
			/*TOO SLIM*/
			distortX = .8;
		}
	}
	else{ 
	//PORTRAIT
		document.getElementById("introAnimation").setAttribute('preserveAspectRatio', 'xMidYMid meet')
		if(aspectRatio >= .796){
			/*TOO WIDE*/
			distortY=1.45;
		}
		else if(aspectRatio < .796 && aspectRatio >= .673){
			/*TOO WIDE*/
			distortY=1.6;
		}
		else if(aspectRatio < .673 ){//&& aspectRatio >= .478){
			/*SWEET SPOT*/
			distortY= 1.8;
		}
	}
	
	var bubGuide = {"bub1":{"dX":"675.67","dY":"-544.97","dS":"2.83"},"bub2":{"dX":"905.60","dY":"-285.10","dS":"4.07"},"bub3":{"dX":"881.20","dY":"-181.00","dS":"3.29"},"bub4":{"dX":"912.00","dY":"345.40","dS":"7.64"},"bub5":{"dX":"875.69","dY":"346.45","dS":"3.10"},"bub6":{"dX":"898.20","dY":"104.90","dS":"5.35"},"bub7":{"dX":"796.10","dY":"341.50","dS":"5.83"},"bub8":{"dX":"889.50","dY":"509.60","dS":"2.11"},"bub9":{"dX":"597.60","dY":"487.50","dS":"3.91"},"bub10":{"dX":"490.70","dY":"519.10","dS":"1.92"},"bub11":{"dX":"-562.60","dY":"427.50","dS":"1.31"},"bub12":{"dX":"-556.36","dY":"390.42","dS":"3.99"},"bub13":{"dX":"253.20","dY":"-546.40","dS":"5.01"},"bub14":{"dX":"435.90","dY":"-515.20","dS":"5.12"},"bub15":{"dX":"537.43","dY":"-482.80","dS":"3.80"},"bub16":{"dX":"533.70","dY":"-541.10","dS":"1.94"},"bub17":{"dX":"522.11","dY":"-489.35","dS":"6.69"},"bub18":{"dX":"613.87","dY":"-400.93","dS":"3.82"},"bub19":{"dX":"937.26","dY":"-223.20","dS":"4.26"},"bub20":{"dX":"861.50","dY":"-243.90","dS":"4.35"},"bub21":{"dX":"930.50","dY":"-73.30","dS":"7.74"},"bub22":{"dX":"856.55","dY":"175.57","dS":"5.14"},"bub23":{"dX":"815.20","dY":"295.00","dS":"7.02"},"bub24":{"dX":"567.30","dY":"410.50","dS":"7.47"},"bub25":{"dX":"654.70","dY":"346.20","dS":"2.83"},"bub26":{"dX":"591.50","dY":"456.60","dS":"4.32"},"bub27":{"dX":"475.50","dY":"527.00","dS":"5.32"},"bub28":{"dX":"-493.60","dY":"493.10","dS":"2.36"},"bub29":{"dX":"-502.70","dY":"527.50","dS":"2.10"},"bub30":{"dX":"-658.90","dY":"507.30","dS":"4.19"},"bub31":{"dX":"-578.20","dY":"508.80","dS":"2.69"},"bub32":{"dX":"-598.70","dY":"422.80","dS":"7.34"},"bub33":{"dX":"-944.30","dY":"333.90","dS":"4.75"},"bub34":{"dX":"-371.18","dY":"371.11","dS":"7.17"},"bub35":{"dX":"-778.60","dY":"-117.50","dS":"5.15"},"bub36":{"dX":"-882.10","dY":"168.90","dS":"3.96"},"bub37":{"dX":"-394.91","dY":"307.42","dS":"2.74"},"bub38":{"dX":"-912.70","dY":"-60.10","dS":"6.45"},"bub39":{"dX":"-917.80","dY":"-252.10","dS":"2.58"},"bub40":{"dX":"-993.70","dY":"-260.10","dS":"7.77"},"bub41":{"dX":"-868.04","dY":"-260.35","dS":"8.05"},"bub42":{"dX":"-784.00","dY":"-421.90","dS":"3.67"},"bub43":{"dX":"-897.90","dY":"-438.50","dS":"5.00"},"bub44":{"dX":"-505.39","dY":"-527.81","dS":"5.20"},"bub45":{"dX":"-519.50","dY":"-582.80","dS":"2.39"},"bub46":{"dX":"-1003.40","dY":"-453.60","dS":"5.34"},"bub47":{"dX":"-834.70","dY":"-534.20","dS":"2.09"},"bub48":{"dX":"-274.90","dY":"-223.30","dS":"1.00"},"bub49":{"dX":"-22.10","dY":"-225.90","dS":"1.00"},"bub50":{"dX":"-39.30","dY":"-200.90","dS":"1.00"},"bub51":{"dX":"7.20","dY":"-186.00","dS":"1.00"},"bub52":{"dX":"287.50","dY":"-93.30","dS":"1.00"},"bub53":{"dX":"320.00","dY":"-127.70","dS":"1.00"},"bub54":{"dX":"277.40","dY":"-106.40","dS":"1.00"},"bub55":{"dX":"311.40","dY":"-47.20","dS":"1.00"},"bub56":{"dX":"262.20","dY":"74.40","dS":"1.00"},"bub57":{"dX":"179.70","dY":"89.20","dS":"1.00"},"bub58":{"dX":"185.70","dY":"120.90","dS":"1.00"},"bub59":{"dX":"197.00","dY":"151.80","dS":"1.00"},"bub60":{"dX":"187.30","dY":"166.80","dS":"1.00"},"bub61":{"dX":"350.50","dY":"208.40","dS":"1.00"},"bub62":{"dX":"244.00","dY":"225.90","dS":"1.00"},"bub63":{"dX":"134.20","dY":"244.70","dS":"1.00"},"bub64":{"dX":"147.40","dY":"212.10","dS":"1.00"},"bub65":{"dX":"122.70","dY":"199.50","dS":"1.00"},"bub66":{"dX":"107.20","dY":"232.70","dS":"1.00"},"bub67":{"dX":"73.20","dY":"193.20","dS":"1.00"},"bub68":{"dX":"69.60","dY":"251.60","dS":"1.00"},"bub69":{"dX":"-316.80","dY":"213.00","dS":"1.00"},"bub70":{"dX":"-112.90","dY":"227.10","dS":"1.00"},"bub71":{"dX":"-110.90","dY":"225.90","dS":"1.00"},"bub72":{"dX":"-215.50","dY":"260.10","dS":"1.00"},"bub73":{"dX":"-257.20","dY":"259.40","dS":"1.00"},"bub74":{"dX":"-273.50","dY":"178.60","dS":"1.00"},"bub75":{"dX":"-319.60","dY":"125.30","dS":"1.00"},"bub76":{"dX":"-328.00","dY":"123.30","dS":"1.00"},"bub77":{"dX":"-257.40","dY":"-38.50","dS":"1.00"},"bub78":{"dX":"-314.60","dY":"-34.80","dS":"1.00"},"bub79":{"dX":"-342.50","dY":"-74.80","dS":"1.00"},"bub80":{"dX":"-339.80","dY":"-153.20","dS":"1.00"},"bub81":{"dX":"-362.50","dY":"-144.20","dS":"1.00"},"bub82":{"dX":"-352.50","dY":"-157.20","dS":"1.00"},"bub83":{"dX":"-381.90","dY":"-172.53","dS":"1.00"},"bub84":{"dX":"-423.30","dY":"-187.30","dS":"1.00"},"bub85":{"dX":"-220.70","dY":"-202.60","dS":"1.00"},"bub86":{"dX":"-57.70","dY":"-241.30","dS":"1.00"},"bub87":{"dX":"-102.78","dY":"-209.32","dS":"1.00"},"bub88":{"dX":"-220.60","dY":"-191.52","dS":"1.00"},"bub89":{"dX":"-319.70","dY":"-221.90","dS":"1.00"},"bub90":{"dX":"-20.33","dY":"-215.52","dS":"1.00"},"bub91":{"dX":"-207.04","dY":"-227.26","dS":"1.28"},"bub92":{"dX":"-445.45","dY":"-161.33","dS":"1.00"},"bub93":{"dX":"-395.60","dY":"250.44","dS":"1.37"},"bub94":{"dX":"-391.60","dY":"-168.45","dS":"0.97"},"bub95":{"dX":"-439.35","dY":"-102.82","dS":"1.00"},"bub96":{"dX":"442.80","dY":"5.64","dS":"1.00"},"bub97":{"dX":"-410.92","dY":"138.76","dS":"1.00"},"bub98":{"dX":"-367.44","dY":"143.86","dS":"1.00"},"bub99":{"dX":"354.85","dY":"206.84","dS":"1.00"},"bub100":{"dX":"410.03","dY":"-80.74","dS":"1.00"},"bub101":{"dX":"540.47","dY":"-50.60","dS":"1.00"},"bub102":{"dX":"-462.97","dY":"-47.10","dS":"1.29"},"bub103":{"dX":"-457.40","dY":"25.74","dS":"1.00"},"bub104":{"dX":"-339.39","dY":"253.28","dS":"1.57"},"bub105":{"dX":"-474.63","dY":"-49.53","dS":"1.00"},"bub106":{"dX":"-441.82","dY":"154.11","dS":"1.00"},"bub107":{"dX":"-435.83","dY":"44.43","dS":"1.06"},"bub108":{"dX":"83.98","dY":"213.61","dS":"1.00"},"bub109":{"dX":"106.76","dY":"-266.43","dS":"1.78"},"bub110":{"dX":"-501.17","dY":"-28.58","dS":"1.00"},"bub111":{"dX":"229.27","dY":"-263.37","dS":"1.00"},"bub112":{"dX":"-307.35","dY":"-177.90","dS":"1.00"},"bub113":{"dX":"397.83","dY":"115.88","dS":"1.38"},"bub114":{"dX":"-349.46","dY":"250.73","dS":"1.00"},"bub115":{"dX":"-340.87","dY":"251.23","dS":"1.68"},"bub116":{"dX":"-540.43","dY":"-146.29","dS":"1.00"},"bub117":{"dX":"334.35","dY":"173.64","dS":"1.00"},"bub118":{"dX":"308.05","dY":"173.36","dS":"1.45"},"bub119":{"dX":"-553.11","dY":"215.94","dS":"1.00"},"bub120":{"dX":"415.78","dY":"-84.98","dS":"2.64"},"bub121":{"dX":"353.83","dY":"174.42","dS":"1.00"},"bub122":{"dX":"-404.52","dY":"193.75","dS":"1.00"},"bub123":{"dX":"-301.85","dY":"-150.52","dS":"1.22"},"bub124":{"dX":"343.92","dY":"-71.58","dS":"1.04"},"bub125":{"dX":"-50.27","dY":"-247.46","dS":"1.00"},"bub126":{"dX":"-417.68","dY":"225.75","dS":"1.00"},"bub127":{"dX":"242.84","dY":"197.48","dS":"1.41"},"bub128":{"dX":"-244.29","dY":"-204.83","dS":"1.00"},"bub129":{"dX":"356.46","dY":"61.12","dS":"1.00"},"bub130":{"dX":"-350.98","dY":"53.40","dS":"1.20"},"bub131":{"dX":"105.14","dY":"-250.30","dS":"1.00"},"bub132":{"dX":"-245.24","dY":"-220.46","dS":"1.00"},"bub133":{"dX":"340.47","dY":"117.66","dS":"1.33"},"bub134":{"dX":"-328.12","dY":"-205.91","dS":"1.00"},"bub135":{"dX":"-443.24","dY":"185.53","dS":"2.22"},"bub136":{"dX":"-209.04","dY":"-225.68","dS":"2.44"},"bub137":{"dX":"-384.86","dY":"232.74","dS":"1.25"},"bub138":{"dX":"-420.59","dY":"-56.39","dS":"1.00"},"bub139":{"dX":"186.75","dY":"-237.00","dS":"1.00"},"bub140":{"dX":"-378.42","dY":"-93.37","dS":"1.00"},"bub141":{"dX":"-262.41","dY":"-235.38","dS":"1.35"},"bub142":{"dX":"453.77","dY":"-92.85","dS":"2.59"},"bub143":{"dX":"285.74","dY":"211.68","dS":"0.85"},"bub144":{"dX":"-411.80","dY":"190.98","dS":"1.15"},"bub145":{"dX":"-406.53","dY":"45.65","dS":"1.00"},"bub146":{"dX":"131.65","dY":"-262.59","dS":"1.00"},"bub147":{"dX":"-429.06","dY":"47.30","dS":"1.00"},"bub148":{"dX":"271.02","dY":"239.28","dS":"1.00"},"bub149":{"dX":"-346.73","dY":"-152.10","dS":"1.06"},"bub150":{"dX":"-92.35","dY":"-193.23","dS":"1.00"},"bub151":{"dX":"241.18","dY":"211.55","dS":"1.14"},"bub152":{"dX":"470.15","dY":"239.61","dS":"1.00"},"bub153":{"dX":"-238.51","dY":"-240.79","dS":"1.73"},"bub154":{"dX":"273.14","dY":"297.71","dS":"1.06"},"bub155":{"dX":"177.86","dY":"211.70","dS":"1.00"},"bub156":{"dX":"-396.15","dY":"227.19","dS":"1.00"},"bub157":{"dX":"293.20","dY":"242.21","dS":"1.00"},"bub158":{"dX":"-350.60","dY":"-183.76","dS":"1.00"},"bub159":{"dX":"303.82","dY":"197.88","dS":"1.19"}};
	
	var easingOptions = ['Back.easeOut', 'SlowMo.ease', 'Circ.easeInOut', 'Circ.easeOut', 'Expo.easeInOut'];

	//define degrees of bub rotating during animation.
	var rotationOptions = [0, 360, 720];

	function getRandomArbitrary(min, max) {
		//returns radnom number in range
	    return Math.random() * (max - min) + min;
	}
	function getRandomOption(_array){
		//returns a randomly selected 
		return _array[Math.floor(Math.random()*_array.length)]
	}
	
	var thisBub = {};
	var thisBubId = "";
	for (var i = 1; i < 160; i++){
		thisBub = bubGuide["bub" + i];
		thisBubId = "#bub" + i;
		if(i < 10){
			//TweenMax.to(thisBubID, [ANIMATION DURATION], {[PROPERTY]:[FINAL VALUE], ease:[EASING BEHAVIOR] }).delay([START TIME OFFSET]);
			//Each 'bub' has 5 properties to increment. (X, Y, OPACITY, ROTATION, SCALE)
			//	the 'x' and 'y' propertIES are handled in separate tweens to facilitate curved motion
			//  the rest of the preperites are distributed arbitrarily between the two tweens
			//
			//Examples of individual easing styles here: http://greensock.com/ease-visualizer

			TweenMax.to(thisBubId, getRandomArbitrary(3, 4), {x:(thisBub['dX']*distortX), rotation:getRandomOption(rotationOptions), scale:thisBub['dS'], ease:getRandomOption(easingOptions)}).delay(1);
			TweenMax.to(thisBubId, getRandomArbitrary(3, 4), {y:(thisBub['dY']*distortY), opacity:0.7, ease:getRandomOption(easingOptions)}).delay(1);
		}
		else if(i < 48){
			TweenMax.to(thisBubId, getRandomArbitrary(3, 4), {x:(thisBub['dX']*distortX), opacity:0.7, ease:getRandomOption(easingOptions)}).delay(getRandomArbitrary(2, 4));
			TweenMax.to(thisBubId, getRandomArbitrary(3, 4), {y:(thisBub['dY']*distortY), scale:thisBub['dS'], rotation:getRandomOption(rotationOptions), ease:getRandomOption(easingOptions)}).delay(getRandomArbitrary(2, 4));
		}
		else{
			TweenMax.to(thisBubId, 2, {x:(thisBub['dX']*(distortX*distortX)), y:(thisBub['dY']*(distortY*distortY)), rotation:getRandomOption(rotationOptions), ease:'Back.easeOut', opacity:0.7, }).delay(getRandomArbitrary(5, 7));
		}
	}
	TweenMax.to(".intro-title", 6, {opacity:0.7}).delay(2);
})();