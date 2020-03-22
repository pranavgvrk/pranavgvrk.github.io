// Generator Function
// A generator function will return an object that implements the iteration
// protocol, i.e., it has a next() method that returns
// { value: < some value>, done: <true or false> }
//
function* incRand(max) { // Asterisk defines this as a generator function
  while (true) {
    // Pause execution after the yield, resume when next(<something>) is called
    // and assign <something> to x
    let x = yield Math.floor(Math.random() * max + 1);
    max += x;
  }
}
var rng = incRand(2); // Now we have a generator object to work with
console.log(rng.next()); // { value: <between 1 and 2>, done: false }
console.log(rng.next(3)); // as above, but between 1 and 5
console.log(rng.next()); // as above, but NaN since 5 + undefined results in NaN
console.log(rng.next(20)); // Oops, looks like we broke it! NaN again.
//rng.throw(new Error('Unrecoverable generator state.')); // Will be thrown from yield
//
function* getRand(s,e,st){
	var i=0
	while(s<e){
		let res=yield i++ // value passed to the next() is returned to res
		s+=st
	}
}
//
var randInt=getRand(0,10,1)
for(i of randInt)
	console.log(i)
//val=randInt.next()
//var i=0
//while(!val.done){
//	if(i==3){
//		val=randInt.next(false)
//		console.log(val.value)
//		i++
//	}
//	else{
//		val=randInt.next()
//		console.log(val.value)
//		i++
//	}
//}
