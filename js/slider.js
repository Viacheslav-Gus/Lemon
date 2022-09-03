// alert("test ggg");
prev = document.querySelector("#b-prev");
next = document.querySelector("#b-next");
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