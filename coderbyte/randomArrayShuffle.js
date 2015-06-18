// var arr = ['A','B','C','D','E','F','G','H'];

// var i = arr.length;
// var j; //random number
// var temp;

// while(--i > 0){
// 	j = Math.floor(Math.random()*(i+1));
// 	temp = arr[j];
// 	arr[j] = arr[i];
// 	arr[i] = temp;
// }

// console.log(arr);



// var numbers = [1,2,3,4];

// var i = numbers.length;

// var temp;
// var randomIndex;

// while(i-- > 0){
// 	randomIndex = Math.floor(Math.random() * (i+1));
// 	temp = numbers[randomIndex];
// 	numbers[randomIndex] = numbers[i];
// 	numbers[i] = temp;
// }

// console.log(numbers);


// var numbers = [1,2,3,4];

// var temp;
// var i = numbers.length;
// var randomIndex;


// while(i-- > 0){
// 	randomIndex = Math.floor(Math.random() * (i+1));

// 	temp = numbers[randomIndex];  // example 2

// 	numbers[randomIndex] = numbers[i];  // 2 equals whats in current numbers[i]
// 	numbers[i] = temp;  // now that numbers[randomIndex] is overwrited we then swap it with temp
// } 

// console.log(numbers);




// var numbers = [1,2,3,4];

// var temp;
// var i = numbers.length;


// while(i-- > 0){
// 	var randomIndex = Math.floor(Math.random() * (i + 1));

// 	temp = numbers[randomIndex]; // this would be the value stored into the temp  ex: 3 index 2
// 	numbers[randomIndex] = numbers[i];  
// 	numbers[i] = temp;
// }


// console.log(numbers);


var numbers = [1,2,3,4];

var temp;
var i = numbers.length;

while(i-- >0){
	var randomIndex = Math.floor(Math.random() * (i + 1));
	var temp = numbers[randomIndex];
	numbers[randomIndex] = numbers[i];
	numbers[i] = temp;
}

console.log(numbers);

































