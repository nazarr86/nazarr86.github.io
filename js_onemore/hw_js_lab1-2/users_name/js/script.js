function addUsers () {
	var arr = [];

	for(var i = 0; i < 5; i++){
		arr[i] = prompt("Введите любое имя");
	}
	return arr;
}

function chechUser () {
	var usersList = addUsers();
	var yourUser = prompt("Введите имя");

	for (var i = 0; i < usersList.length; i++){
		if(usersList[i] == yourUser) {
			return alert(yourUser + ", вы успешно вошли");
		} else continue;
	}

	return alert("вы ввели не верные данные");
}

chechUser();