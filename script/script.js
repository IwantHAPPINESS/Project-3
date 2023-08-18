/*Активация бургер меня эфект для кнопки*/


let burgerMenu = document.querySelector('.burger__menu');

burgerMenu.addEventListener('click',burgerActive);

function burgerActive(argument) {
	burgerMenu.classList.toggle('burger__menu-active');
	burgerMenu.children[0].classList.toggle('burger__stick1-active');
	burgerMenu.children[1].classList.toggle('burger__stick2-active');
	burgerMenu.children[2].classList.toggle('burger__stick3-active');
}
