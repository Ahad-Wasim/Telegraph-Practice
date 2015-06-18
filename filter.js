function each(list,callback){
	if(Array.isArray(list)){
		for(var i =0;i<list.length;i++){
			callback(list[i],i,list);
		}
	} else {
		for(var key in list){
			callback(list[key],key,list);
		}
	}
}

function filter(list,filterCallback){
	var result = [];
	each(list,function(eachItem,eachIndex,eachList){
				if(filterCallback(eachItem)){
					result.push(eachItem);
				}
			  }
	);
	return result;
}




var candy = filter([1,2,3,4],function(item,index,list){
								return item % 2 === 0;
								//This results in a boolean value True or False;
							});

//should return [2,4];

console.log('This is the final result',candy);