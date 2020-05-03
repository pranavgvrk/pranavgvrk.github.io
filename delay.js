let delay=(()=>{
	let tick=0
	let setTick=()=>{tick=Date.now()}
	let getTick=()=>{return tick}
	let getDelay=(v)=>{
		console.log(`${v}`)
		return v-tick
	}
	return {
		setTick,getTick,getDelay
	}
}
)()
delay.setTick()
setTimeout(()=>{console.log(delay.getTick())},1000)
setTimeout(()=>{console.log(delay.getDelay(Date.now()))},1000)
