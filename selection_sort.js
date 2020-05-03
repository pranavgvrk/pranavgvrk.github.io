selectionSort=()=>{
	if(!document.getElementById('ip').validity.valid){
		alert('Please enter valid Input')
		return
	}
	let arr=document.getElementById('ip').value.split(' ')
	console.log(arr)
	let inputDiv=document.createElement('div')
	inputDiv.setAttribute('id','inputDiv')
	arr.forEach(i=>{
		let val=document.createElement('div')
		val.setAttribute('class','cell')
		val.innerHTML=i
		inputDiv.appendChild(val)
	})
	let input=document.getElementById('input')
	input.innerHTML=''
	let result=document.getElementById('result')
	result.innerHTML=''
	input.appendChild(inputDiv)
	let resultDiv=inputDiv.cloneNode(true)
	result.appendChild(resultDiv.cloneNode(true))
	arr=resultDiv.children
	arr.length=resultDiv.childElementCount
	for(let i=0;i<arr.length;i++){
		let min_index=i
		for(let j=i+1;j<arr.length;j++){
			min_index=(Number.parseInt(arr[j].innerText)<Number.parseInt(arr[min_index].innerText))?j:min_index
		}
		let t=arr[i].innerHTML
		arr[i].innerHTML=arr[min_index].innerHTML
		arr[min_index].innerHTML=t
		result.lastChild.children[i].classList.add('swap')
		result.lastChild.children[min_index].classList.add('swap')
		result.appendChild(resultDiv.cloneNode(true))
	}
	//for (let i=0;i<arr.length;i++){
	//	let min_index=i
	//	for (let j=i+1;j<arr.length;j++){
	//		if(arr[j]<arr[min_index])
	//			min_index=j
	//	}
	//	let t=arr[i]
	//	arr[i]=arr[min_index]
	//	arr[min_index]=t
	//}
	//document.body.appendChild(resultDiv)
}
