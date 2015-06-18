function each(list,callback){
	if(Array.isArray(list) === true){
		for(var i = 0;i<list.length;i++){
			callback(list[i],i,list);
		}
	} else {
		for(var key in list){
			callback(list[key],key,list);
		}
	}
}


function map(list,callback){
	var result = [];

	each(list,function(eachValue){
		result.push(callback(eachValue));
	});

	return result;
}


var mapResult = map([1,2,3,4],function(mapValue){
	return mapValue * 2;
});
console.log(mapResult);


function filter(list,callback){
	var result = [];
	each(list,function(eachValue){
		if(callback(eachValue)){
			result.push(eachValue);
		}
	});
	return result;
}


var filterResult = filter([1,2,3,4],function(filterValue){
	return filterValue % 2 === 0;
});

console.log(filterResult);



function reduce(list,callback,current){
	var finalResult = [];
	var start = current;

	each(list,function(eachValue){
		start = callback(start,current);
	});
	finalResult.push(start);
	return finalResult;
}



var reduceResult = reduce([1,2,3,4],function(accumlated,current){
	return accumlated + current;
},0);

console.log(reduceResult);













