const menuBtn = document.querySelector('.main-principal__btn');
const mainMenu = document.querySelector('.main-menu');

function toggleMenu() {
    mainMenu.classList.toggle('main-menu--close');
    menuBtn.classList.toggle('main-principal__btn-close');
}

menuBtn.addEventListener('click', toggleMenu);

    // ano footer
ano.textContent = new Date().getFullYear()



    // jquery - Depoimentos - botão
    $('.testimonials__box').slick({
        autoplay:true,
        arrows:false,
        dots:true
    });
