let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 10000);

let flash = document.querySelector(".container div");


btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);

  setTimeout(function(){
	Swal.fire({
		title: 'Você achou um site!',
		html: 'Gostaria de ir para esse site?.'+ `<a href="brasil.html"> Ir para o site </a>`,
			
		imageUrl: 'isaac.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image',
	  })
}, 3300)

}

  
