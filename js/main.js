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

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function (){
	

var $target = $('.anime'),
	animationClass = 'anime-start',
	offset = $(window).height() * 0.85;

function animeScroll() {
	var documentTop = $(document).scrollTop();

	$target.each(function() {
		var itemTop = $(this).offset().top;
		if(documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	})
}

animeScroll();

$(document).scroll(debounce(function(){
	animeScroll();
	console.log('teste')
}, 100));

}());