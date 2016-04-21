function checkName(){
	var nameArray = addArray();
	console.log(nameArray);
	var userName = prompt('Enter user name: ');
	var userCorrect = false;
	for(var i = 0; i < nameArray.length; i++){
		if(nameArray[i].indexOf(userName) == -1){
			userCorrect = false;
		}
		else{
			userCorrect = true;
			break;
		}
	}
	return printMessage(userCorrect, userName);

}
function addArray () {
	var nameArray = [];
	var name = '';
	for(var i = 0; i < 5; i++){
		name = prompt('Enter name');
		nameArray.push(name);
	}

	return nameArray;
}
function printMessage(userCorrect, userName){
	if(userCorrect){
		alert(userName + ', welcome!');
	}
	else{
		alert('You inputed wrong name(((');
	}
}

checkName();