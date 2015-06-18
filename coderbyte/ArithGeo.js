var arithmeticPattern = [2, 5, 8, 11];

// var geometric = [2, 6, 18, 54];

function ArithGeo(array){
	var arithmetic = null;
	var geometric = null;

	arithmetic = array[1] - array[0];  // right now its three
	
	// geometric = array[1] / array[0];
	
	for(var i =0;i<array.length;i++){

		if(array[i] + arithmetic === array[i + 1] ){
			console.log('This is the i:',i);	

			if(array[i] === array[array.length-1]){  // This means were at the end
				alert('Im here');
				return 'arithmetic';
			} 				
		} 

	}
	



} //This closes the function

var result = ArithGeo(arithmeticPattern);

// console.log(result);