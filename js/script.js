var expandCollapse = function(){
      if ( $(window).width() < 768 ) {
          $(function(){
              // add a class .collapse to a div .showHide
              $('.showHide').addClass('collapse');
          });
      }
      else {
          $(function(){
              // remove a class .collapse from a div .showHide
              $('.showHide').removeClass('collapse');
          });
      }
  };
  $(window).resize(expandCollapse); 
  $(window).load(expandCollapse);
