$(document).ready(function () {
   



    $('.owl-carousel').owlCarousel({
        loop: true,
  
    
        margin: 0,
        nav: false, 
        center: true,
    
        responsive: {
            0: {
                items: 1
            }
        }
    });

/* arrov bar block Intro */
    $('.custom-prev').click(function () {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });

    $('.custom-next').click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });

   /* dots bar block Intro */
  
$('.dot-1').click(function () {
    $('.owl-carousel').trigger('prev.owl.carousel');
    setActiveDot(this);
  });
  
  $('.dot-2').click(function () {
    $('.owl-carousel').trigger('next.owl.carousel');
    setActiveDot(this);
  });
  
  $('.dot-3').click(function () {
    $('.owl-carousel').trigger('next.owl.carousel');
    setActiveDot(this);
  });
  
 
  function setActiveDot(dot) {
    $('.dot-1, .dot-2, .dot-3').removeClass('active');
    $(dot).addClass('active');
  }
  /* block 4 Services */
  const scrollToSection = (buttonId, sectionId) => {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
  
    if (button && section) {
      button.addEventListener('click', (event) => {
        if (button.tagName === 'A') {
          event.preventDefault();
        }
        section.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };
  
  scrollToSection('detailsLink', 'services'); 
  scrollToSection('learnMoreBtn', 'services'); 
  

  
  
/* block video block */
const watchVideoBtn = document.getElementById('watchVideoBtn');
const headerSection = document.getElementById('header');

watchVideoBtn.addEventListener('click', () => {
  headerSection.scrollIntoView({ behavior: 'smooth' });
});

    /* block 8 */

    
     
    $('.dot-1t').click(function () {
      $('.owl-carousel').trigger('prev.owl.carousel');
      setActiveDot(this);
      changeCanvasColor('#FFFFF0'); 
    });
    
    $('.dot-2t').click(function () {
      $('.owl-carousel').trigger('next.owl.carousel');
      setActiveDot(this);
      changeCanvasColor('#F1EFF2'); 
    });
    
    $('.dot-3t').click(function () {
      $('.owl-carousel').trigger('next.owl.carousel');
      setActiveDot(this);
      changeCanvasColor('#F0F8FF');
    });
    
    function setActiveDot(dot) {
      $('.dot-1t, .dot-2t, .dot-3t').removeClass('active');
      $(dot).addClass('active');
    }
    
    function changeCanvasColor(color) {
      $('.testimonial-block ').css('background-color', color); 
    }
    

    /* bkock 9 */
  
  const backToTopBtn = document.getElementById('backToTopBtn');

backToTopBtn.addEventListener('click', () => {
  alert('Back to the top?');
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
 
  });
});

      
       
      });

