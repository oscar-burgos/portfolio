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

  var modal = document.getElementById('myModal');


  var btn = document.getElementById('myBtn');


  var span = document.getElementsByClassName('close')[0];

  btn.onclick = function() {
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  };


  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});
