function pow(number, power){
	var powResult = 1;
	if(power == 0){
		return 1;
	}
	else if (power == 1){
		return number;
	}
	else{
		for(var i = 1; i <= power; i++){
			powResult *= number;
		}
		return powResult;
	}
}

var number = +prompt('Enter the number');
var power  = +prompt('Enter the power for number');

var result = pow(number, power);
console.log('Result for number ' + number + ' in power ' + power + ' is', result);

