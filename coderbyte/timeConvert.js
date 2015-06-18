function timeConvert(number){
	var minutes = number % 60;
	var hours = Math.floor(number / 60);
	var totalTime = hours + ':' + minutes;
	return totalTime;
}

var totalTime = timeConvert(59);

console.log('It took this long to clean the dishes',totalTime);