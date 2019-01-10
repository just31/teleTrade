$(function() {
    'use strict';

    // Тестируем, что js-скрипты попали в сборку
    const logger = (word = 'Hi,') => {
        console.log(word, '🤨!!!', "\nThank you for using this template!😎");
    }
    logger();

    // Добавляем 'list-style-image', перед элементами списка, в первом экране
    $(".teletrade-header__item").before("<img src='assets/images/svg/list-style-head.svg' class='teletrade-header__item-img'>");
    // Добавляем изображение желтого треугольника, перед текстом, в пятом экране
    $(".teletrade-social__text p").before("<img src='assets/images/warning-pict.png' class='teletrade-social__item-img'>");

    // Очищаем текст в 'placeholder', по клику в текстовом поле
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
});