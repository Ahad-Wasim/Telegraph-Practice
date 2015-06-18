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

function reject(list,callback){
	var result = [];

 	each(list,function(value){
 		if(!callback(value)){
 			result.push(value);
 		}
 	});
 	return result;
}

var returnReject = reject([1, 2, 3, 4, 5, 6],function(val){
	return val % 2 === 0;
});

console.log('this is the returnReject',returnReject);
