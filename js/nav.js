(() => {
    const button = document.querySelector(".js-nav__mobile-button");
    const menu = document.querySelector(".js-nav__menu-list");


    const toggleClass = () => {
        menu.classList.toggle("nav__menu-list--open");

    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();