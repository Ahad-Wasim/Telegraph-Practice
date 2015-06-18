function each(list,callback){
 if(Array.isArray(list) === true){
 	for(var i = list.length-1;i>=0;i--){
 		callback(list[i]);
 	}

 } else {
 	for(var key in list){
 		callback(list[key]);
 	}
 }
}


function reduceRight(list,callback,startingValue){
	var result = [];
	var current = startingValue;
	
	each(list,function(a){
		current = callback(current,a);
		console.log('This is the current',current);
	});

	result.push(current);
	return result;
}






var arrayList = [1,2,3,4];
var objectList = {name:18, age:19};

reduceRight(objectList,function(accumlated,current){
				return accumlated + current;
			},0);







