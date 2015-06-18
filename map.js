function each (list,callback){
	if(Array.isArray(list) === true){
		for(i=0;i<list.length;i++){
			callback(list[i],i,list);
		}
	} else {
		for(var key in list){
			callback(list[key],key,list);
		}
	}	
}

function map(iteratedItem,mapAction){
	var result = [];
	each(iteratedItem,function(item,itemIndex,list){
		result.push(mapAction(item,itemIndex,list));
	});
	return result; //We will store that into a variable
}


var object = {name:'Ahad',lastName:'Wasim'};
var array = [1,2,3,4,5];

var returnedFromMap = map(array,function(passedFromEachResult_Item,passedFromEachResult_Index,passedFromEachResult_List){
									return passedFromEachResult_Item * 2;
								}
					  ); //Closes MAP

// [2,4,6,8,10]
console.log('This is what returned from the map',returnedFromMap);



