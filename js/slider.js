/*
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

*/



/*JQUERY*/

slider = $(".slider");
console.dir(slider);

$('#b-prev').on('click', function() {
	let elem = $('.slider .slider-small-img li.active').prev();
	$('.slider .slider-small-img li.active').removeClass('active');

	if (!elem.length) {
		elem = $('.slider .slider-small-img li:last-child');
	}	
	elem.addClass('active');

	$('.slider .slider-small-img').attr( 'src', elem.find( 'img' ).attr( 'src' ) );
	
});


$('#b-next').on('click', function() {
	let elem = $('.slider .slider-small-img li.active').next();
	$('.slider .slider-small-img li.active').removeClass('active');

	if (!elem.length) {
		elem = $('.slider .slider-small-img li:last-child');
	}	
	elem.addClass('active');

	// $('.slider .slider-small-img').attr( 'src', elem.find( 'img' ).css({'border':'2px solid red'}).attr( 'src' ) );
	$('.slider .slider-small-img').attr( 'src', elem.find( 'img' ).attr( 'src' ) );
	
});

// next.onclick = function() {
// 	let currentSlide = document.querySelector(".slider .slider-small-img li.active");

// 	// console.dir(currentSlide);
// 	currentSlide.classList.remove("active");
// 	let nextSlide =  currentSlide.nextElementSibling;
// 	if (nextSlide) { 
// 		nextSlide.classList.add("active");
// 	} else {
// 		nextSlide = document.querySelector(".slider .slider-small-img li");
// 		nextSlide.classList.add("active");
// 	}

// 	slideImg.src = nextSlide.querySelector("img").src;

// }

/*вешаем обработчик события нажатия на элемент*/
$('.type_1 .headingElem').on('click', function (){
    /*записываем в переменную блок с контентом*/
    let thisContentBlock = $(this).parent().find('.descElem');
    /*проверяем есть ли у блока с контентом класс active
      если есть то удаляем, если нет то добавляем */
    if(thisContentBlock.hasClass('active')) {
        thisContentBlock.removeClass('active')
    }
    else {
        thisContentBlock.addClass('active')
    }
})

/* находим все нужные нам headingElem 
let allElems = document.querySelectorAll('.type_1 .headingElem');
// прогоняем из через цикл
allElems.forEach((elem)=>{
    // вещаем на каждый элемент обработчик на событие click
    elem.addEventListener('click', function(){
        // у нажатого элемента получаем родителя
        let parentElem = this.parentNode;
        // находим элемент с контентом
        let contentBlock = parentElem.querySelector('.descElem')
        // аналогичная проверка на наличие класса active
        if(contentBlock.classList.contains("active")) {
            contentBlock.classList.remove('active');
        }
        else {
            contentBlock.classList.add('active');
        }
    })
})
*/

/*всё тоже самое что и в первом варианте, кроме...*/
$('.type_2 .headingElem').on('click', function (){
    /*удаляем класса active у всех активных элементов*/
    $('.type_2 .descElem.active').removeClass('active')

    let thisContentBlock = $(this).parent().find('.descElem');

    if(thisContentBlock.hasClass('active')) {
        thisContentBlock.removeClass('active')
    }
    else {
        thisContentBlock.addClass('active')
    }
})

/*всё тоже самое, кроме... JS 
let allElems = document.querySelectorAll('.type_2 .headingElem');

allElems.forEach((elem)=>{
    elem.addEventListener('click', function(){
        //находим все активные элементы
        let descActive = document.querySelectorAll('.type_3 .descElem.active');
        //прогоняем через цикл и удаляем класс active
        descActive.forEach((elem)=>{
            elem.classList.remove('active');
        })

        let parentElem = this.parentNode;

        let contentBlock = parentElem.querySelector('.descElem')

        if(contentBlock.classList.contains("active")) {
            contentBlock.classList.remove('active');
        }
        else {
            contentBlock.classList.add('active');
        }
    })
})

*/