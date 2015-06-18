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

function find(list,callback){
	var final = [];


	for(var i = 0;i<list.length;i++){

		if(final.length !== 0){
			return;
		} else if(callback(list[i])){
				final.push(list[i]);
			}
		}
		return final;	
	}

var findResult = find([1,2,3,4],function(findValue){
	return findValue % 2 === 0;
});

console.log('This is the findResult:',findResult);




