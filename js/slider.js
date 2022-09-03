// alert("test ggg");
prev = document.querySelector("#b-prev");
next = document.querySelector("#b-next");

slide1 = document.querySelector("#li-small-img1");
slide2 = document.querySelector("#li-small-img2");
slide3 = document.querySelector("#li-small-img3");
slide4 = document.querySelector("#li-small-img4");
slide5 = document.querySelector("#li-small-img5");
slide6 = document.querySelector("#li-small-img6");
slide7 = document.querySelector("#li-small-img7");
slide8 = document.querySelector("#li-small-img8");
slide9 = document.querySelector("#li-small-img9");

slideImg = document.querySelector(".slider-img img");

next.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");

	// console.dir(currentSlide);
	currentSlide.classList.remove("active");
	let nextSlide =  currentSlide.nextElementSibling;
	if (nextSlide) { 
		nextSlide.classList.add("active");
	} else {
		nextSlide = document.querySelector(".slider .slider-small-img li");
		nextSlide.classList.add("active");
	}

	slideImg.src = nextSlide.querySelector("img").src;

}

prev.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");

	// console.dir(currentSlide);

	currentSlide.classList.remove("active");

	let prevSlide =  currentSlide.previousElementSibling;
	if (prevSlide) { 
		prevSlide.classList.add("active");
	} else {
		prevSlide = document.querySelector(".slider .slider-small-img li:last-child");
		prevSlide.classList.add("active");
	}

		slideImg.src = prevSlide.querySelector("img").src;

}

slide1.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide1.classList.add("active");
	slideImg.src = slide1.querySelector("img").src;
}

slide2.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide2.classList.add("active");
	slideImg.src = slide2.querySelector("img").src;
}

slide3.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide3.classList.add("active");
	slideImg.src = slide3.querySelector("img").src;
}

slide4.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide4.classList.add("active");
	slideImg.src = slide4.querySelector("img").src;
}

slide5.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide5.classList.add("active");
	slideImg.src = slide5.querySelector("img").src;
}

slide6.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide6.classList.add("active");
	slideImg.src = slide6.querySelector("img").src;
}

slide7.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide7.classList.add("active");
	slideImg.src = slide7.querySelector("img").src;
}

slide8.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide8.classList.add("active");
	slideImg.src = slide8.querySelector("img").src;
}

slide9.onclick = function() {
	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
	currentSlide.classList.remove("active");

	slide9.classList.add("active");
	slideImg.src = slide9.querySelector("img").src;
}