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


function clearFilter(data) {
    
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

function remove() {
    $('.elements__item').each(function(index, elem) {
        $(this).removeClass('active');
    })  
    $('.filters__color, li').each(function(index, elem) {
        $(this).removeClass('active');
    })  
}













































// filterColors();


// const startFilter = $('.add');
// const endFilter = $('.clear')
// clearFilter();

// function filterColors() {
//     $('.filters__shape').delegate('li','click', function() {
//         $(this).toggleClass('active');
//     })
    
//     $('.filters__color').delegate('li:first-child', 'click', function() {
//         $(this).toggleClass('active');
//         if ("li:first-child:contains('active')") {
//             startFilter.on('click', function() {
//                 $('.elements__item').filter('[data-color="red"]').addClass('active');
//             });
//         }
//     });

//     $('.filters__color').delegate('li:nth-child(2)', 'click', function() {
//         $(this).toggleClass('active');
//         startFilter.on('click', function() {
//             $('.elements__item').filter('[data-color="yellow"]').addClass('active');
//         });
//     });

//     $('.filters__color').delegate('li:last-child', 'click', function() {
//         $(this).toggleClass('active');
//         startFilter.on('click', function() {
//             $('.elements__item').filter('[data-color="green"]').addClass('active');
//         });
//     });
// }

// function clearFilter() {
//     endFilter.on('click', function() {
//         $('.elements__item').removeClass('active');
//         $('.filters__color, li').removeClass('active');
//     })
// }










































 // let arrColor = [];
        // $('.active').each(function() {
        //     arrColor.push($(this).data('color'));
        // });
        // colors = [...arrColor];
        // console.log(colors, arrColor);



// function filterForms() {
//     $('.filters__shape').delegate('li','click', function() {
//         $(this).toggleClass('active');
//         let arrFigures = [];
//         let newArr = [];
//         $('.active').each(function() {
//             arrFigures.push($(this).data('shape'));
//         });
//         figures = [...arrFigures];
//         // console.log(figures, arrFigures);
//         figures.forEach(elem => {
//             if (arrFigures['square'] === figures['square']) {
//                 newArr = [...arrFigures, figures[elem]]
//             }
//             console.log(newArr);
//         })
//     })
// }



// filterColors();
// filterBut();
// filterForms();

// function filterBut() {
//     $('.add').on('click', function() {
//         console.log('but');
//     })
// }


// t = [];
// figures.forEach(elem => {
//     if (arrFigures['square'] ===b['square']) {
//         t = [...t, b[i]]
//     }
// })

