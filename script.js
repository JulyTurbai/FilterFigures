'use strict'


const filters = $('.filters');
const elements = $('.elements');



$.ajax(
    {
        url: 'pictures.json',
        dataType: 'json',
        method: "GET",
    }
    ).done(function(data) {
        $.each(data, function (index, element) {
            let str = ` <li class="elements__item" data-color="${element.color}" data-shape="${element.shape}">
                                <img src="${element.url}" alt="">
                            </li>`;
                    elements.append(str);
                })
                
        }).fail(function() {
            console.error('Дані не отримані');
    })



const startFilter = $('.add');
const endFilter = $('.clear')
filterColors() 
filterForms()
clearFilter();

function filterColors() {
    $('.filters__color').delegate('li','click', function() {
        $(this).toggleClass('active');
            let attr = $(this).attr('data-color');
            startFilter.on('click', function() { 
                $('.elements__item').each(function(index, elem) {
                    if ($(this).attr('data-color') == attr) {
                        $(this).addClass('active');
                    }
                })   
            });
        })
    }


function filterForms() {
    $('.filters__shape').delegate('li','click', function() {
        $(this).toggleClass('active');
            let attr = $(this).attr('data-shape');
            startFilter.on('click', function() { 
                $('.elements__item').each(function(index, elem) {
                    if ($(this).attr('data-shape') == attr) {
                        $(this).addClass('active');
                    }
                })   
            });
        })
    }


function clearFilter() {
    endFilter.on('click', function() {
        $('.elements__item').each(function(index, elem) {
            $(this).removeClass('active');

        })    
        $('.filters__color, li').each(function(index, elem) {
            $(this).removeClass('active');
        })   
            location.reload()
    })
}














































