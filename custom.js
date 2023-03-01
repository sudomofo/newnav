window.addEventListener('DOMContentLoaded', (event) => {

    const menuBtn = document.querySelector(".navigation-bar__item--menu");

    const menuBurger = document.querySelector(".navigation-bar__item--menu__icon");

    const menuMobile = document.querySelector(".navigation-bar__fly-out--mobile");

    const menu = document.querySelector(".navigation-bar__fly-out");
    let showMenu = false;

    menuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        if (!showMenu) {
        menuBtn.classList.add("open");
        menuBurger.classList.add("nonActive");
        menuBurger.classList.remove("active");
        menuMobile.classList.add("open");
        menu.classList.add("open");
        showMenu = true;
        /* remove lang menu */
        langNav.classList.remove("showLanguageMenu");
        langNavWrapper.classList.add("hide");
        langNavWrapper.classList.remove("hide");
        showLangMenu = false;
        } else {
        menuBtn.classList.remove("open");
        menuBurger.classList.add("Active");
        menuBurger.classList.remove("nonactive");
        menuMobile.classList.remove("open");
        menu.classList.remove("open");
        subnav.classList.remove("show");
        showMenu = false;
        /* remove lang menu */
        langNav.classList.remove("showLanguageMenu");
        langNavWrapper.classList.add("hide");
        langNavWrapper.classList.remove("hide");
        showLangMenu = false;
        }
    }
    const subnav = document.querySelector(".navigation-bar__sub-nav");
    const subnavis = document.querySelectorAll("[id^='navi-sub-']")
    let elements = document.querySelectorAll("[id^='navi-main-']");
    let showSubMenu = false;
    for (let element of elements) {
        element.addEventListener("mouseover", function() {
        let id = this.id;
        let lastChar = id[id.length - 1];
        const submenu = document.querySelector("#navi-main-" + lastChar);
        const submenunav = document.querySelector("#navi-sub-" + lastChar);
        elements.forEach((item) =>
            item.classList.remove("active"));
        subnavis.forEach((item) =>
            item.classList.remove("active"));
        submenu.classList.add("active");
        subnav.classList.add("show");
        submenunav.classList.add("active"); 
    });
    } 
    function prepareSubmenu(Id) {
    const submenu = document.querySelector("#navi-main-" + Id);
    const submenunav = document.querySelector("#navi-sub-" + Id);
    submenu.onmouseover = function() {
    submenu.classList.add("active");
    subnav.classList.add("show");
    submenunav.classList.add("active");     
    }
    submenu.onmouseout = function() {
    submenu.classList.remove("active");
    submenunav.classList.remove("active");   
    }
    }
    const langNav = document.querySelector(".navbar_languageMenu");
    const langNavBtn = document.querySelector(".navigation-bar__item--markets");

    const langNavWrapper = document.querySelector(".navigation-bar__wrapper");
    const langNavBtnClose = document.querySelector(".navbar_languageMenu-closeButton");
    langNavBtnClose.addEventListener("click", toggleLangMenu);
    langNavBtn.addEventListener("click", toggleLangMenu);
    let showLangMenu = false;
    function toggleLangMenu() {
        if (!showLangMenu) {
            langNav.classList.add("showLanguageMenu");
            showLangMenu = true;
            menuBtn.classList.remove("open");
            menuBurger.classList.add("Active");
            menuBurger.classList.remove("nonactive");
            menuMobile.classList.remove("open");
            menu.classList.remove("open");
            subnav.classList.remove("show");
            showMenu = false;
        } else {
            langNav.classList.remove("showLanguageMenu");
            langNavWrapper.classList.add("hide");
            langNavWrapper.classList.remove("hide");
            showLangMenu = false;
            /* remove main menu */
            menuBtn.classList.remove("open");
            menuBurger.classList.add("Active");
            menuBurger.classList.remove("nonactive");
            menuMobile.classList.remove("open");
            menu.classList.remove("open");
            subnav.classList.remove("show");
            showMenu = false;
        }
    }
    const langNavBtnMobile = document.querySelector(".navigation-bar__fly-out--mobile__markets")
    const langNavBtnEarth = document.querySelector(".icon.icon-earth.black.sm")
    langNavBtnMobile.addEventListener("click", toggleLangMenuMobile);
    let showLangMenuMobile = false;
    function toggleLangMenuMobile() {
        if (!showLangMenuMobile) {
            menuMobile.classList.add("open");
            langNav.classList.add("showLanguageMenu");
            langNavBtnEarth.classList.remove("black");
            langNavBtnEarth.classList.add("red");
            showLangMenuMobile = true;
        } else {
            langNav.classList.remove("showLanguageMenu");
            langNavBtnEarth.classList.remove("red");
            langNavBtnEarth.classList.add("black");
            showLangMenuMobile = false;
        }
    }
    const bottomnavs = document.querySelectorAll(".navigation-bar__bottom-nav__item");
    for (let bottomnav of bottomnavs) {
        bottomnav.addEventListener("mouseover", function() {
        let ulElement = bottomnav.querySelector(".navigation-bar__bottom-nav__sub-nav");
            if (ulElement) {
                ulElement.classList.add("active");
            }
        });
    }
    const bottomnavDivs = document.querySelectorAll(".navigation-bar__bottom-nav__sub-nav");
    for (let bottomnavDiv of bottomnavDivs) {
    bottomnavDiv.addEventListener("mouseout", function() {
    bottomnavDiv.classList.remove("active");
    });
    }

    let mobileelements = document.querySelectorAll("[id^='navi-mobile-']");
    for (let mobileelement of mobileelements) {
        element.addEventListener("mouseover", function() {
        let id = this.id;
        let lastChar = id[id.length - 1];
        const submenu = document.querySelector("#navi-main-" + lastChar);
        const submenunav = document.querySelector("#navi-sub-" + lastChar);
        elements.forEach((item) =>
            item.classList.remove("active"));
        subnavis.forEach((item) =>
            item.classList.remove("active"));
        submenu.classList.add("active");
        subnav.classList.add("show");
        submenunav.classList.add("active"); 
    });
    } 

    // Top search bar
    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".navigation-bar__item--search");
    let showSearch = false;

    searchBtn.addEventListener("click", toggleSearchMenu);

    function toggleSearchMenu() {
    if (!showSearch) {
        searchBox.classList.add("active");
        showSearch = true;
    } else {
        searchBox.classList.remove("active");
        showSearch = false;
    }
    }
});