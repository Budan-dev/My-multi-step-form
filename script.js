const  firstSlide = document.querySelector(".slidepage-1");
const  secondSlide = document.querySelector(".slidepage-2");
const  thirdSlide = document.querySelector(".slidepage-3");
const  fourthSlide = document.querySelector(".slidepage-4");


const firstNextBtn = document.querySelector(".nextBit");

const secondNextBtn = document.querySelector("#next-1");
const firstPrevBtn = document.querySelector("#prev-1");

const secondPrevBtn = document.querySelector("#prev-2");
const thirdNextBtn = document.querySelector("#next-2");


const thirdPrevBtn = document.querySelector("#prev-3");
const submit = document.querySelector("#submit");




firstNextBtn.addEventListener("click", function(){
firstSlide.style.display = "none"
secondSlide.style.display = "block"
});


 
secondNextBtn.addEventListener("click", function(){
secondSlide.style.display = "none"
thirdSlide.style.display = "block"
})
firstPrevBtn.addEventListener("click", function(){
	secondSlide.style.display = "none"
	firstSlide.style.display = "block"
})

thirdNextBtn.addEventListener("click", function(){
	thirdSlide.style.display = "none"
	fourthSlide.style.display = "block"
})
secondPrevBtn.addEventListener("click", function(){
	secondSlide.style.display = "block"

})
thirdPrevBtn.addEventListener("click", function(){
	fourthSlide.style.display = "none"
	thirdSlide.style.display = "block"
})