var string = 'hello world';
var greatestWord = null;	
var longestWordCount = 0;


string = string.toUpperCase().split(' ');  // UPPERCASE BECAUSE AN UPPER CASE IS THE SAME THING AS THE LOWER CASE


for(var i = 0;i<string.length;i++){
	var letters = string[i].split('').sort();
	var count = 0; // in each word count is something new

	for(var j = 0;j<letters.length;j++){
				if(letters[j] === letters[j + 1]){   // [e,h,l,l,o]  NOT A STRING SO WE CANNOT USE CHARAT
			 		count++;					
				}

		if(count > longestWordCount){
			longestWordCount = count;
			greatestWord = string[i];
			// console.log('This is the greatestWord',greatestWord);
		}

		// console.log('I am count', count);

	}

}


if(longestWordCount === 0){
	greatestWord = -1;
}

console.log('I am the greatestWord', greatestWord);






