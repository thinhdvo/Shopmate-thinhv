/** 
    * flatOwl
    * priceFilter
    * flexProduct
*/

;(function($) {
    "use strict";

    // Owl carousel
     var flatOwl = function() {
        $(window).on('load resize', function() {
            if ( $().owlCarousel ) {
                $('.flat-carousel-box').each(function(){
                    var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    item4 = $this.data("column4"),
                    loops = $this.data("loop"),
                    
                    gap = Number($this.data("gap")),
                   
                    dots = $this.data("dots"),
                    nav = $this.data("nav");

                    $this.find('.owl-carousel').owlCarousel({
                        margin: gap,
                        loop:loops,
                        dots:dots,
                        nav: nav,
                        navigation : true,
                        pagination: true,
                        autoplay: auto,
                        autoplayTimeout: 5000,
                        scrollbarType: "progress",
                        responsive: {
                            0:{
                                items:item4
                            },
                            600:{
                                items:item3
                            },
                            768:{
                                items:item2
                            },
                            1000:{
                                items:item
                            }
                        }
                    });
                    $('.owl-dot').each(function(){

                        $(this).children('span').html($(this).index()+1);

                        $(this).children('span').addClass(" btn-dots btn-defect");

                    });
                });
            }
        });
    };

    // Price filter
    var priceFilter =  function() {
        $("#price-slider").slider({
            range: true,
            min: 0,
            max: 40,
            values: [ 4, 28 ],
            slide: function( event, ui ) {
                $( "#min-price" ).val('£' + ui.values[ 0 ] );
                $( "#max-price" ).val('£' + ui.values[ 1 ] );
            }
        });
        $("#min-price").val('£' + $("#price-slider").slider("values", 0));   
        $("#max-price").val('£' + $("#price-slider").slider("values", 1)); 
    };  
    
    // Brands Slider
    var flexProduct = function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            prevText: "",
            nextText: ""
        });
    }; 

    // Quality adjust
    var quantity_adjust = function() {
        $( 'body' ).on( 'click', '.quantity .plus', function( e ) {
            var $input = $( this ).parent().parent().find( 'input' );
            $input.val( parseInt( $input.val() ) + 1 );

            $input.trigger( 'change' );
        });
        $( 'body' ).on( 'click', '.quantity .minus', function( e ) {
            var $input = $( this ).parent().parent().find( 'input' );
            var value = parseInt( $input.val() ) - 1;
            if ( value < 0 ) value = 0;
            $input.val( value );

            $input.trigger( 'change' );
        });
    };

    // Header menu responsive
    var responsiveMenu = function() {
        var menuType = 'desktop';
        $(window).on('load resize', function() { 
            var currMenuType = 'desktop';
            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }
            
            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile') {
                    var $mobileMenu = $('#main-nav').attr('id', 'main-mobi').hide();
                    $('.header:not(".header-st1") .container ').after($mobileMenu);
                }else {
                    var $desktopMenu = $('#main-mobi').attr('id', 'main-nav').removeAttr('style');
                    $('.header:not(".header-st1")').find('.nav-wrap').append($desktopMenu);
                }
            }
        });
        $('.mobile-button').on('click', function() {
            $('#main-mobi, .mainnav').slideToggle(300);
        });
    };

// Dom Ready
    $(function() {
      flatOwl();
      priceFilter();
      flexProduct();
      quantity_adjust();
      responsiveMenu();

    });
})(jQuery);
