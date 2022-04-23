function fazGet(url){
	let request = new XMLHttpRequest()
	request.open("GET", url, false)
	request.send()
	return request.responseText
}


function main(){
	kanye = fazGet("https://api.kanye.rest")
	texto = JSON.parse(kanye);
	console.log(kanye)
	document.getElementById("fraseKanye").innerHTML=texto.quote
}

main()