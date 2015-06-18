

// Before you get started, we're going to load this file into our index.html file so we can see our console.logs show up in the browser like we did yesterday! 

  // To do this, open up your index.html file in your favorite text editor. 
  // You'll notice that we're loading up several script files already, for the exercises we've done over the past two days. 
  //     <script type="text/javascript" src="day3Callbacks.js"></script>
  // What the browser is doing is going off and loading/executing them in the order we give these files. 
    // So first it's going to go through and load up the day3Callbacks.js file, and execute all the code we've written in there. 
    // Then, after we've already run all of day3Callbacks.js, it's going to go through and run day4Underscore.js, with all the results from day3Callbacks.js available to us since it's already been run!
    // You can roughly think of this as if we just copied and pasted the code from these two files into the same file, in the order that we gave the file names. 
  // Let's go throguh and duplicate one of these lines, changing the name of the file to day4Underscore.js.
  // Now just make sure that your day4Underscore.js file is saved in the same location as your other two .js files, and you should be good to go!

// Map:
// Map takes in an array or object, mutates it in some way, and returns the mutated array. 
  // It's really important to pay attention to that part where map returns the mutated array. It does this for you automatically, but some people will forget to store the results of what map returns into a variable, and thus, miss out on all the work that map just did for us. 

  // The callback function inside of map does three key things:
  // 1. It takes in an item (the current item we're iterating through in the array).
  // 2. It performs some logic on that item, most frequently mutating that item in some way.
  // 3. It returns an item that map will automatically add to our returnArray for us behind the scenes.

  // Since the callback is run once on every item in our original array, and the return value from our callback (even if it's undefined) are pushed into our resultsArray by map, our final resultsArray that map returns will always have the same number of items in it that our original array did. 
  // The key part is that the callback function inside of map has to do these three things every time. 
    // And then map returns an array with the returned value from every iteration of our callback function.

// So let's get in some practice with map!
var testArr = [100,200,300,400,500];
// 1. Add 5 to each item in testArr

var final = _.map(testArr,function(number){
                    return number+=5;
                  });

  // console.log the results of map. You should see an array of [105,205,305,405,505]
  console.log(final);
  // console.log testArr. This should not have changed at all. If it did change, that means you're using map like each to have side effects, and that's not what map is designed for.
  console.log(testArr); 

// 2. Let's do another transform. 
  var shortNameArr = ['SF','NYC','Chi','Oak','SJ'];
  var cityMapper = {
    SF: 'San Francisco',
    NYC: 'New York City',
    Chi: 'Chicago',
    Oak: 'Oakland',
    SJ: 'San Jose'
  };
  // Let's take our shortNameArr and return an array that has the longform names of each city. So we'd expect to see ['San Francisco','New York City','Chicago','Oakland','San Jose']; 


  // The callback function inside of map does three key things:
  // 1. It takes in an item (the current item we're iterating through in the array).
  // 2. It performs some logic on that item, most frequently mutating that item in some way.
  // 3. It returns an item that map will automatically add to our returnArray for us behind the scenes.

  var cityFinal = _.map(shortNameArr,function(val){
    console.log('val is:',val, 'cityMapper[val] is:',cityMapper[val]);
                       val = cityMapper[val];
                       return val;
                      });

  console.log('cityFinal:',cityFinal);

  // Again, console.log the results of map, and console.log shortNameArr to make sure it hasn't changed.
  console.log('this is the shortname array',shortNameArr); 
  // If you're not getting the results you expect, check back with the three rules of what our callback function must do. 

// 3. Now let's use map to take an array of strings, and return an array of objects. 
  var colorArray = ['red','purple','orange','yellow','green','purple'];
  // let's take in colorArray, and return an array of objects that have a color property set equal to each item in colorArray. 
  var colorFinal = _.map(colorArray,function(val){
      return {color:val};
  });

  console.log(colorFinal);

  // Expected Results: [{color: 'red'}, {color:'orange'}, {color:'purple]'}, {color:'yellow'}, {color:'green'}, {color:'purple'}]

// Each is just a more semantic way of doing a for loop. Much as a for loop just lets you define a block of code to be run the same number of times as we have items in our array, each defines a block of code (a function) that gets run once on each item. 

// The key difference is what's available for you on each iteration, or each time that block of code is run. 
// With a for loop for arrays, you're given a number i each time. You then use this number to request the value stored at the i position within your array, like so: arr[i]
// With each, you're given the value directly. While we are still given i if we want it, we don't need it, and using it to access the value stored at that position is an anti-pattern inside each, because the first parameter we take in is already the value. 

// We'll revisit this throughout these exercises, but let's just hammer this home one more time because it's a common point of confusion. With a for loop, you're given i each time, and i is just a number. With each, what we're given each time is the value directly. We don't need to use an index number to get to it. 

// Let's revisit our looping exercises from before, and refactor them to use each. 
// We've created an array and an object for you to practice with below. 
var arr = [100,200,300,400,500];
var obj = {
  city: 'Oakland',
  slingsCode: true,
  excitementLevel: 10
};

// 1. invoke _.each to iterate through our arr. 

  var loopArray = _.each(arr,function(index){
    console.log('this is the arr',index);
  });

  // Inside the callback function, console log the string 'hi, I'm inside the callback!'

    var loopedEach = _.each(arr,function(a){
                               console.log("hi, I'm inside the callback!");
                              });
  // You should see this pop up 5 times in your console. 
  // This should tell you that the function is being invoked 5 times. And all it's doing is running the body of the function once on every iteration. There's no magic there. 
  // The body of the callback function is just a block of code the same number of times are there are items in the array.
  // If we have 5 items in our array, we will run this block of code 5 times. 

// 2. Cool, now let's console.log what item, the first parameter our callback takes in, is for each iteration.
  // You should see 
  // 100
  // 200
  // 300
  // 400
  // 500
  // in your console.

  var loopedEach = _.each(arr,function(a){
                               console.log(a);
                              });
  // Whoa, this is really different from what we saw in our for loop! In our for loop, we just got i, which is a number from 0 - 4. But now, we're getting the values directly; we don't need i anymore!
  // Remember that a callback function is just a block of code that we execute the same number of times as we have items in the array. 
    // The key thing that changes each time is what the item is. 


// 3. Declare a variable called count that exists in the global scope, and set it equal to 0. Now that you're comfortable accessing each item in arr, let's console log both count (which will represent the index of that item) and the relevant value stored in arr. So with each iteration we'll want to increase count by 1. 

  var count = 0;

  var loopingCount = _.map(arr, function(val){ 
                          console.log('The value of count is:',count + " the value we're accessing in the array is",val);
                          count++;
                      });

  // So what we'd expect to see in our console is:
  // 'the value of count is: 0, the value we're accessing in the array is 100'
  // 'the value of count is: 1, the value we're accessing in the array is 200'
  // 'the value of count is: 2, the value we're accessing in the array is 300'
  // 'the value of count is: 3, the value we're accessing in the array is 400'
  // 'the value of count is: 4, the value we're accessing in the array is 500'

// 4. Great! Now you've figured out that our callback function is just a block of code that gets run once on each item in an array. 
  // Now let's use a new _.each invocation to play with items in the array. 

  // Let's add 1 to each item in arr, and then push it into a new array in the global scope.
  var globalScopeArray = [];
  var addOne = _.each(arr,function(val){
                            globalScopeArray.push(val+=1);
                          });
  console.log('this is the globalScoeArray:',globalScopeArray);
  // Now that you've added 1 to each item, console.log the new array that we've created in the global scope to see the results. 
    // We expect to see [101, 201, 301, 401, 501]
  // Have some fun doing this a few more times. Try multiplying each item in arr by some number. Then try dividing it by some number.

  var multiplyArray = [];
  var multiply10 = _.each(arr,function(val){
                          multiplyArray.push(val*=10);
  }); 

  console.log(multiplyArray);


    // Write entirely new _.each invocations every time, don't just change the '+' to a '/'. 

  var divideBy10Array = [];

  var divideBy10 = _.each(arr,function(val){
                            return divideBy10Array.push(val = val/10);
                        });

  console.log('this is the divide array',divideBy10Array);

    // We want to get practice typing out _.each invocations as many times as possible. 

// By this point you should be feeling pretty good on iterating through arrays using each! Now let's look into iterating through objects. 
// You could just change all the invocations we had for the exercises above to be invoked on obj, instead of arr. Nothing other than that has to change. 
// And while it's powerful to realize that _.each has some logic built into it that lets you use the same callback function for both arrays and objects, you'd be robbing yourself of a chance to gain a deeper understanding by typing these invocations again and building out that muscle memory. So let's write new _.each invocations for each exercise below, and get quicker and better at them each time!

// 5. Create an _.each invocation to iterate through our obj.

var candy = {
  candy1:'twix',
  candy2:'starburts',
  candy3: 'Tootsi Roll'
};

var eachPractice = _.each(candy,function(val){
    console.log('looping through the object :', val);
});

  // Inside the body of the callback function, console.log the string 'hi, i'm inside the callback!''

var hi = _.each(candy,function(val){console.log('hi I am inside the callback');});
  // You should see this pop up 3 times in your console.
  // This should tell you that the callback function in our _.each invocation is running 3 times. And, much like when we invoked this callback on our arr, all it's doing is running the body of the callback once on each iteration.


// 6. Now let's check out what key is on each iteration.
  // Remember that for objects, each passes in both the value and the key to each invocation of the callback
  // If you console.log the key in the for callback function body, you should see 
  // 'city'
  // 'slingsCode'
  // 'excitementLevel' 
  // in your console.
  // key is just a variable, that is set equal to each of the keys in our object one at a time. This part is identical to what we saw with our for loop for objects. But remember, we don't actually need to use this key to access the values! _.each gives that to us automatically as the first argument passed into our callback. 
  // Just for fun, let's create an empty array outside of our for loop called arrayOfKeys. 
  var arrayOfKeys =[];

  var objectTest = {
    city: 'San Francisco',
    slingsCode: 650,
    excitementLevel: 10
  };

    // On each iteration, let's push the key into this arrayOfKeys. After your for loop, console.log the arrayOfKeys.

  var loopingCurrentObject = _.each(objectTest,function(value,key){
      arrayOfKeys.push(key);
  });



    console.log('These are the keys',arrayOfKeys); 
    // You should see ['city', 'slingsCode', 'excitementLevel']. Note that they may not be in this order, 
    // since we can't guarantee the order that an object's keys are in. 


// 7. Ok, now that we've figured out that key is just a variable that will be set equal to the name of each property in obj, 
  // let's prove that we don't need to use it to access the values stored in obj. (and in fact, using key to access those values is an anti-pattern you should avoid).
  // Write a new _.each invocation to iterate through obj, console logging each value to the console. 
  // We'd expect to see
  // 'Oakland'
  // true
  // 10
  // Now that you're comfortable accessing each value in obj, let's console log both key and the relevant value stored in obj, again, without using key to access that value, since _.each gives it to us directly. 
  // So what we'd expect to see in our console is:
    // 'the value of key is: city, the value _.each is giving us from that object is Oakland'
    // 'the value of key is: slingsCode, the value _.each is giving us from that object is true'
    // 'the value of key is: excitementLevel, the value _.each is giving us from that object is 10'
// You should be feeling pretty great about iterating through objects using _.each now!

 

// Bonus Material: Plus Equals += 
    // Let's show you an example. 
    var plusEqualsVar = 5;
    plusEqualsVar += 10;
    //console.log('plusEqualsVar after += 10 is:',plusEqualsVar);
    // What += does is exacly the same as if you had typed 
    var assignedVar = 5;
    assignedVar = assignedVar = 10;
    // console.log('assignedVar after assignedVar = assignedVar + 10 is:',assignedVar);
    

// Extra credit: Filter time! Look up the docs on _.filter. Use filter to filter through the array of color objects map returned to us earlier and give us only the two objects that are purple. 

var colorObjects = {
  color:'red',
  color1:'purple',
  color2:'purple'
};


var filter =  _.filter(colorObjects,function(key){
      var answer = key === 'purple';
      return answer;  
});

console.log('this is the filter', filter);


