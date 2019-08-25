$(function(){
    
// preloader
    
    $(window).on('load',function(){
        $(".preloader").delay(500).fadeOut(500);
    });
    
    
    
    
// back to top
    
    var btp = $("#btp");
    var ht_bd = $('html, body');
    
    btp.click(function(){
        ht_bd.animate({scrollTop: 0},700);
    });
    
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 200){
            btp.fadeIn();
        }else{
            btp.fadeOut();
        }
    });
    
    
    //banner text slide
    $('.banner-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 1000,
      dots: true,
      autoplaySpeed: 2000,
    });
    
    //feedback slide
    $('.feed-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 1500,
      dots: true,
      autoplaySpeed: 2200,
    });
    
    // veno box
     $('.venobox').venobox({
         spinner: 'cube-grid',
     });
    
    //  scroll spy
    $('html').smoothScroll(700);
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling>150){
            $(".navbar").addClass("bg");
        }
        else{
            $(".navbar").removeClass("bg");
        }
    })
    
// team slick slide    
$('.jj').slick({
  slidesToShow:4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  responsive: [
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
      }
    }, 
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    } 
      
  ]
      
});
   
    
   
// isotop filter
    
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

    
    
    
    
    
    
    

})