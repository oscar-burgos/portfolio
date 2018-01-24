// Expand Categories on desktop version and collapse them on mobile version

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

// Modal for GD thumbnails
  var modal1 = document.getElementById('myModal1');
      modal2 = document.getElementById('myModal2');
      modal3 = document.getElementById('myModal3');
      modal4 = document.getElementById('myModal4');
      modal5 = document.getElementById('myModal5');
      modal6 = document.getElementById('myModal6');
      modal7 = document.getElementById('myModal7');
      modal8 = document.getElementById('myModal8');
      modal9 = document.getElementById('myModal9');
      modal10 = document.getElementById('myModal10');
      modal11 = document.getElementById('myModal11');
      modal12 = document.getElementById('myModal12');

  var btn1 = document.getElementById('myBtn1');
      btn2 = document.getElementById('myBtn2');
      btn3 = document.getElementById('myBtn3');
      btn4 = document.getElementById('myBtn4');
      btn5 = document.getElementById('myBtn5');
      btn6 = document.getElementById('myBtn6');
      btn7 = document.getElementById('myBtn7');
      btn8 = document.getElementById('myBtn8');
      btn9 = document.getElementById('myBtn9');
      btn10 = document.getElementById('myBtn10');
      btn11 = document.getElementById('myBtn11');
      btn12 = document.getElementById('myBtn12');


  var span1 = document.getElementById('close1');
      span2 = document.getElementById('close2');
      span3 = document.getElementById('close3');
      span4 = document.getElementById('close4');
      span5 = document.getElementById('close5');
      span6 = document.getElementById('close6');
      span7 = document.getElementById('close7');
      span8 = document.getElementById('close8');
      span9 = document.getElementById('close9');
      span10 = document.getElementById('close10');
      span11 = document.getElementById('close11');
      span12 = document.getElementById('close12');

// Modal 1
  btn1.onclick = function() {
    modal1.style.display = "block";
  };

  span1.onclick = function() {
    modal1.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
  };

  $('#myModal1').on('shown.bs.modal', function () {
  $('#myInput').focus();
});

// Modal 2
btn2.onclick = function() {
  modal2.style.display = "block";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal2.style.display = "none";
  }
};

$('#myModal2').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 3
btn3.onclick = function() {
  modal3.style.display = "block";
};

span3.onclick = function() {
  modal3.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal3.style.display = "none";
  }
};

$('#myModal3').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 4
btn4.onclick = function() {
  modal4.style.display = "block";
};

span4.onclick = function() {
  modal4.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal4.style.display = "none";
  }
};

$('#myModal4').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 5
btn5.onclick = function() {
  modal5.style.display = "block";
};

span5.onclick = function() {
  modal5.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal5.style.display = "none";
  }
};

$('#myModal5').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 6
btn6.onclick = function() {
  modal6.style.display = "block";
};

span6.onclick = function() {
  modal6.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal6.style.display = "none";
  }
};

$('#myModal6').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 7
btn7.onclick = function() {
  modal7.style.display = "block";
};

span7.onclick = function() {
  modal7.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal7.style.display = "none";
  }
};

$('#myModal7').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 8
btn8.onclick = function() {
  modal8.style.display = "block";
};

span8.onclick = function() {
  modal8.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal8.style.display = "none";
  }
};

$('#myModal8').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 9
btn9.onclick = function() {
  modal9.style.display = "block";
};

span9.onclick = function() {
  modal9.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal9.style.display = "none";
  }
};

$('#myModal9').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 10
btn10.onclick = function() {
  modal10.style.display = "block";
};

span10.onclick = function() {
  modal10.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal10.style.display = "none";
  }
};

$('#myModal10').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 11
btn11.onclick = function() {
  modal11.style.display = "block";
};

span11.onclick = function() {
  modal11.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal11.style.display = "none";
  }
};

$('#myModal11').on('shown.bs.modal', function () {
$('#myInput').focus();
});

// Modal 12
btn12.onclick = function() {
  modal12.style.display = "block";
};

span12.onclick = function() {
  modal12.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
      modal12.style.display = "none";
  }
};

$('#myModal12').on('shown.bs.modal', function () {
$('#myInput').focus();
});
