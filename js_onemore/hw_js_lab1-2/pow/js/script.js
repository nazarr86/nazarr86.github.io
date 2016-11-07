function pow() {
	var num = +prompt("Input number");
	var power = +prompt("Input power")

	if(num < 0) num = Math.abs(num);
	if(num == 0) return console.log("result power " + power + " for " + num + " is 0");
	if(power == 0) return console.log("result power " + power + " for " + num + " is 1");
	
	var result = 1; 
	for(var i = 1; i <= power; i++){
		result *= num;
	}
	console.log("result power " + power + " for " + num + " is " + result);
}



pow();