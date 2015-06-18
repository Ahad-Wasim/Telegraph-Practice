var testNumber = 16;
var fail = 6;

function PowersOfTwo(value){
	for(var i = 0; i < value; i++){
		if(Math.pow(2,i) === value){
			return true;
		}
	} 
	return false; // AFTER FINISHING THE LOOP if we didn't find anything we return false;
}

var result = PowersOfTwo(testNumber);

console.log(result);