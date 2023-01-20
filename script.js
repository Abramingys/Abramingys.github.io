'use strict';

let burgerBtn = document.querySelector(".page-content_burger");
let listContentMenu = document.querySelector(".page-content_menu-mobile");
let listContentMenuLi = document.querySelectorAll(".page-content_menu-mobile li");
let listContentMenuArr = Array.from(listContentMenuLi);

burgerBtn.addEventListener('click', () => {
    listContentMenu.classList.toggle('page-content_menu-mobile_open');
});

listContentMenuArr.map((item) => {
    item.addEventListener('click', () => {
        listContentMenu.classList.remove('page-content_menu-mobile_open');
    });
});

let slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let nextSlide = document.querySelector(".next");
let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {

    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

let prevSlide = document.querySelector(".prev");

prevSlide.addEventListener("click", function () {

    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    slides.forEach((slide, indx) => {
        console.log(slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`);
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

let btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});


