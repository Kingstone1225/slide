let rBut =   document.querySelector(".right");
let lBut = document.querySelector(".left");
let slides = document.querySelectorAll("img");
// Объявляем переменную i 
let i = 0;
    
// Объявляем событие нажатия на кнопку вперёд
rBut.addEventListener("click", function () {
    // Увеличиваем переменную i
    console.log(i);
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
    
})
lBut.addEventListener("click", function(){
    console.log(i);
    --i;
    if (i <= 0) {
        // Удаляем класс block предыдущему слайду
        slides[i+1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = slides.length;
        // Добавляем класс block следующему слайду
        slides[i-1].classList.add("block");
    } else {
        // Удаляем класс block предыдущему слайду
        slides[i+1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})