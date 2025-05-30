$(function(){

       //========= site 슬라이드
   const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    // loop: 'true',

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  
//인트로//

$('.bar1').mouseover(function(){
  $('.bar_t1').hide()
  $('.bar_t1').show()
})

$('.bar1').mouseout(function(){
  $('.bar_t1').show()
  $('.bar_t1').hide()
})

$('.bar2').mouseover(function(){
  $('.bar_t2').hide()
  $('.bar_t2').show()
})
$('.bar2').mouseout(function(){
  $('.bar_t2').show()
  $('.bar_t2').hide()
})

$('.bar3').mouseover(function(){
  $('.bar_t3 li').hide()
  $('.bar_t3 li').show()
})
$('.bar3').mouseout(function(){
  $('.bar_t3 li').show()
  $('.bar_t3 li').hide()
})


//   ==================사이트 설명

  $('.box .more').click(function(){
    $('.box .content').fadeIn()
  })

  $('.box .x').click(function(){
    $('.box .content').fadeOut()
  })

  $('.box2 .more').click(function(){
    $('.box2 .content2').fadeIn()
  })

  $('.x').click(function(){
    $('.content2').fadeOut()
  })




// =======================소개

  $('.c1').mouseover(function(){
    $('.c1 h3').hide()
    $('.cardt1').show()
  })


  $('.c1').mouseout(function(){
    $('.cardt1').hide()
    $('.c1 h3').show()

  })

  $('.c2').mouseover(function(){
    $('.c2 h3').hide()
    $('.cardt2').show()
  })


  $('.c2').mouseout(function(){
    $('.cardt2').hide()
    $('.c2 h3').show()

  })

  $('.c3').mouseover(function(){
    $('.c3 h3').hide()
    $('.cardt3').show()
  })


  $('.c3').mouseout(function(){
    $('.cardt3').hide()
    $('.c3 h3').show()

  })
});
