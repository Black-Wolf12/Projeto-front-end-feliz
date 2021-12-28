
function Open(){
        document.getElementById('nav-menu-mobile').style.height = '250px'; 
        document.getElementById('barOpen').style.opacity = '0'
        document.getElementById('nav-close').style.opacity = '1';
}

function Close(){
    document.getElementById('nav-menu-mobile').style.height = '0px';
    document.getElementById('barOpen').style.opacity = '1';
    document.getElementById('nav-close').style.opacity = '0';
}

$('.projetos-feitos-mobile').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
