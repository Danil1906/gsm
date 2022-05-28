$(function () {
    $('.welcome_slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="general-arrows slider-arrow-prev"></button>',
        nextArrow: '<button class="general-arrows slider-arrow-next"></button>',
    });

    // product cart animation
    $(window).on('scroll', function (e) {
        let scro = $(this).scrollTop() + $(window).innerHeight()
        let posProducts = $('.products__items-box').offset().top
        let elems = $('.products__item-wrapper');
        let elems2n = $('.products__item-wrapper:nth-child(2n)');

        if (scro >= posProducts) {
            $(elems).css('transform', 'translateX(' + 0 + ')')
        } else {
            $(elems).css('transform', 'translateX(' + -200 + '%)')
            $(elems2n).css('transform', 'translateX(' + 200 + '%)')
        }

        let posContacts = $('.contacts').offset().top

        if (scro >= posContacts) {
            $('.contacts').addClass('contacts--animate')
        } else {
            $('.contacts').removeClass('contacts--animate')
        }

    });

    $('.about__title-sert').on('click', function (e) {

        let sert_block = $('.about__images-serf')
        $(sert_block).slideToggle()

        if ($(sert_block).css('display') === 'block') {
            $(sert_block).css('display', 'flex')
            console.log('Увидел none')
        }

        $(this).toggleClass('about__title-sert--active')

    });

    $('.about__image-box-serf').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    
    let all_products_btn = document.querySelectorAll('.products__item-btn')
    all_products_btn.forEach(function(elems){
        // Тут нузно взять титле и поместить

        // text_for_form
        $(elems).on('click', function(){
            let name_prod = $(elems).closest('.products__item-btnbox').siblings('.products__item-textinfo').find('.products__item-name').text()
            let form_text = $('.text_for_form').text()
            let input_text = form_text.replace('$', name_prod)
            console.log(input_text)

            $(elems).magnificPopup({
                type:'inline',
                midClick: true
            });

            $('.popup-form__textarea').val(input_text)
        });


    })
})