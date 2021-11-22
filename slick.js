$(".slider").slick({
    centerMode:true,
    centerPadding:'10%',
    slidesToShow:3,
    // autoplay:true,
    responsive: [
        {
         breakpoint: 768, //767px以下のサイズに適用
         settings: {
         slidesToShow:1,
         }
        }
    ]
 });