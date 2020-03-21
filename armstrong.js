// While loop
{
	let isAmstrong=(n)=>{
		let temp=n
		let sum=0
		let pow=String(n).length
		while(temp > 0){
			digit = temp % 10
			sum += digit ** pow
			temp = Number.parseInt(temp/10)
		}
		if ( sum === n )
			console.log(`${n} is an AMSTRONG number`)
		else
			console.log(`${n} is not an AMSTRONG number`)
	}
	
	isAmstrong(371)
}
// for-in loop
{
	let isAmstrong=(n)=>{
		let temp=String(n)
		let sum=0
		let pow=temp.length
		for(i in temp){
			sum+=temp[i]**pow
		}
		if ( sum === n )
			console.log(`${n} is an AMSTRONG number`)
		else
			console.log(`${n} is not an AMSTRONG number`)
	}
	
	isAmstrong(371)
}
// list reduce method
{
	let isAmstrong=(n)=>{
		let temp=String(n).split()
		let pow=temp.length
		let sum=temp.reduce((acc,x)=>acc+x**pow,0)
		if ( sum === n )
			console.log(`${n} is an AMSTRONG number`)
		else
			console.log(`${n} is not an AMSTRONG number`)
	}	
	isAmstrong(371)
}
