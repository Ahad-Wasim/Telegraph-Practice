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

function hello(data){
	console.log('Hello',data);
}

var objectList = {firstName:'Ahad',leaving:'Wasim'};
var arrayList = ['Adam','Boy','Charles','David','Edward'];



each(arrayList, function(iteratedItem,iteratedIndex,wholeIndex){
					console.log('The each iterated through this item',iteratedItem);
					console.log('This is the iterated index',iteratedIndex);
					console.log('This is the whole index',wholeIndex);
			    }
	);