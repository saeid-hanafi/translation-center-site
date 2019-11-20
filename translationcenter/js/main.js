

jQuery("document").ready(function(){
  jQuery(".btn").click(function(){
      jQuery(".dropdown").slideToggle();
  });
  jQuery("a.myservices").click(function(){
      jQuery("div.dropdown1").slideToggle();
  });
 

  jQuery(function() {
      jQuery('.gallery-slideshow').slideshow({
        // default: 2000
        interval: 8000,
        // default: 500
        width: 600,
        // default: 350
        height: 400
      });
    });
                                  
      
});