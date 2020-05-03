// Filter Map, Reduce
{
	let data = [
		{
			country: 'China',
			pop: 1409517397,
		},
		{
			country: 'India',
			pop: 1339180127,
		},
		{
			country: 'USA',
			pop: 324459463,
		},
		{
			country: 'Indonesia',
			pop: 263991379,
		}
	]
	//console.log(data.filter((x)=>x.country!=='China').reduce((acc,x)=>acc+x.pop,0))
	//console.log(data.reduce((acc,x)=>{return x.country==='China'? acc:acc+x.pop},0))
}
{
	let data = [
		{
			name: 'Butters',
			age: 3,
			type: 'dog'
		},
		{
			name: 'Lizzy',
			age: 6,
			type: 'dog'
		},
		{
			name: 'Red',
			age: 1,
			type: 'cat'
		},
		{
			name: 'Joey',
			age: 3,
			type: 'dog'
		},
	]
	let isDog=animal=>animal.type==='dog'
	let dogYears=animal=>animal.age * 7
	let sum = (sum,age)=>sum+age
//	console.log(data.filter(isDog).map(dogYears).reduce(sum,0))
}
//
//
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
//console.log(rng.next()); // { value: <between 1 and 2>, done: false }
//console.log(rng.next(3)); // as above, but between 1 and 5
//console.log(rng.next()); // as above, but NaN since 5 + undefined results in NaN
//console.log(rng.next(20)); // Oops, looks like we broke it! NaN again.
//rng.throw(new Error('Unrecoverable generator state.')); // Will be thrown from yield
//
function* getRand(s,e,st){
	var i=0
	while(s<e){
		let res=yield i++
		s+=st
	}
}
//
var randInt=getRand(0,10,2)
val=randInt.next()
var i=0
while(!val.done){
	if(i==3){
		val=randInt.next(true)
		i++
	}
	else{
		val=randInt.next()
		i++
	}
}
//
//Class and Inheritence
//
class Car{
	constructor(brand){
		this.brand=brand
	}
	getBrand = () => { return this.brand }
}
ford=new Car("Ford")
//console.log(ford.getBrand());
class CarModel extends Car{
	constructor(brand,name){
		super(brand)
		this.name=name
	}
	getCar=()=>{ return "Car "+this.name+" is of brand "+this.brand }
}
icon=new CarModel("Ford","Icon")
//console.log(icon.getBrand())
//console.log(icon.getCar())
//
//Prototypal Inheritence
//
car = {
	brand : "Ford",
}
const getBrand=(car)=> {return car.brand}
const getCar= (icon)=>{return "Car ${icon.name} is of brand ${icon.brand}"}
//console.log(getBrand(car))
icon = Object.assign(Object.create(car),{name:"Icon"})
//console.log(icon.brand)
//console.log(icon.name)
car.startDate="21-02-1988"
//console.log(icon.startDate)
var isInt = (a) => { return Number(a)===Number.parseInt(a)}
//console.log(isInt(-0))

const allUsers = [
  {
    id: 49,
    name: 'William'
  },
  {
    id: 82,
    name: 'Michael'
  },
]

const usersWithActivity = [
  {
    id: 49,
    name: 'William',
    last_activity: "2019-06-20T12:09:55.000Z"
  },
  {
    id: 82,
    name: 'Michael',
    last_activity: "2020-02-20T11:08:50.000Z"
  }
]

activeInNMnths = (a,n) => {
	today = +new Date
	lld=+new Date(a.last_activity)
	diff=today-lld
	return new Date(diff).getMonth()<n
}
getID = user => user.id
activeUsers=usersWithActivity.filter(user=>activeInNMnths(user,3)).map(getID)
getActiveUsers = user => {if(activeUsers.includes(user.id)) return user}
//console.log(allUsers.filter(getActiveUsers))

a={
	i:5,
	j:10
}
b=Object.assign(Object.create(a),{
	j:11,
	k:12
})
//console.log(a)
//console.log(b)
//b.i=11
//console.log(a)
//console.log(b)
for(var i in b){
//	console.log(i)
//	if(b.hasOwnProperty(i))
//		console.log(`${i} is the own property of b with value ${b[i]}`)
}

//console.log(Object.getOwnPropertyNames(b))
//console.log(Object.keys(b))
//console.log(Object.values(b))
//console.log(Object.entries(b))
//console.log(Object.getPrototypeOf(b))
//console.log(`value from prototype (primitive value): ${b.__proto__.j}`)
//console.log(`value from own property: ${b.j}`)
//

myname='global'
;(function func(){
//	console.log(myname)
})()

var countClicks = (function(){
	let count=0
	return {
		incrCount:()=>{count++},
		getCount:()=>{return count}
	}
})()
countClicks.incrCount()
countClicks.incrCount()
countClicks.incrCount()
//console.log(countClicks.getCount())
//
{
//	let tick = Date.now()
//	let log=(v)=>console.log(`${v} Elapsed: ${Date.now()-tick}`)
//	let delay=(a)=>{
//		let i=0
//		while(i<1000000000*a){i++}
//		console.log(`${a} done`)
//		return a
//	}
//	log('Before promise')
//	let promise=()=>{
//	let p=new Promise((resolve,reject)=>{
//			resolve(()=>{
//				let i=0
//				while(i<1000000000){i++}
//				return 'Loop Done'
//			})
//		})
//		return p
//	}
//
//	promise().then(log)
//	let af = async(i)=>{
//		let arr=[]
//		for(let x=0;x<i;x++)
//			arr.push(await fetch(`https://jsonplaceholder.typicode.com/todos/${x}`))
//		return Promise.all(...arr).then(()=>{return `Done`})
//	}
//	af(3).then(log)
//	log('After promise')
}

//(f=(i,step,max)=>{
//	setTimeout(()=>{
//		console.log(i)
//		i+=step;
//		if(i<max) f(i,step,max)
//	},1000)
//})(0,1,10)
//
//const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms))
//wait(10*1000).then(()=>console.log("10 seconds")).catch((r)=>console.log(`Failure:${r}`))
//console.log('After wait')
//
{
	function Person(first,last,age,gender){
		this.name={
			first,
			last
		}
		this.age=age
		this.gender=gender
	};
	let pranav=new Person('Pranav','Gollakota',30,'M')
//	console.log(pranav.name.last)
	//console.log(pranav?.nam)    	// Optional chaining operator: '?.'  pranav.nam does not exist. This will return error. using the operator ?. returns undifined
	////console.log(pranav.nam?.last??'NULL')   // Nullish coalescing operator: '??'  pranav.nam?.last returns undefined. Using the operator ?? returns 'NULL' instead of undefined or null value
}
{
	class Person{
		constructor(first, last, age, gender){
			this.name={
				first,
				last
			}
			this.age=age
			this.gender=gender
		}
	}

	class Teacher extends Person{
		#mobile
		constructor(first, last, age, gender, subject, mobile){
			super(first, last, age, gender)
			this.subject=subject
			this.#mobile=mobile
		}
		get mobile(){
			return this.#mobile
		}
		set mobile(_mobile){
			this.#mobile=_mobile
		}
	}
	mathTeacher=new Teacher('Pranav','Gollakota',32,'M','Maths', '9247252291')
//	console.log(`Old Number: ${mathTeacher.mobile}`)
	mathTeacher.mobile='9573133555'
//	console.log(`New Number: ${mathTeacher.mobile}`)
}

{
	let print=(i)=>{console.log(i)}
	let delay = (i)=> {setTimeout(print,5000,i)}
	for(let i=0;i<10;i++){
		delay(i)
	}
}

