function each(list,callback){
	if(Array.isArray(list) === true){
		for(var i = 0;i<list.length;i++){
			callback(list[i],i,list);
		}

	} else{
		for(var key in list){
			callback(list[key],key,list);
		}
	}
}

var arrayList = [1,2,3,4];
var objectList = {name:'Ahad',last:'Wasim'};



function reduce(list,callback,currentValue){
	var result = [];
	var current = currentValue;

	each(list,function(a){
		current = callback(current,a);
		console.log('This is the current',current);
	});
	result.push(current);
	return result;
}


var reduceResult = reduce(arrayList,function(accumlated,current){
						return accumlated + current;
					},0);


console.log('This is the reduce result',reduceResult);
// should be [10]