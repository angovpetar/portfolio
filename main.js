$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 20) {
      $(".sticky").addClass("scrolling");
  } else {
      $(".sticky").removeClass("scrolling");
  }
});


  // var image = $(".work-img");
  // var closeButton = $(".close-btn");

  // $(image).click(function(){
  //   $(this).toggleClass("active");
  //   $("body").toggleClass("preview");
  // });

$('.work-content-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1
});



// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('img');
var modalImg = document.getElementById("image");
var captionText = document.getElementById("caption");
var body = document.getElementById('body');

function showImage(image){
modal.classList.add("open");
body.classList.add("modal-opened");
modalImg.src = image;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove("open");
  body.classList.remove("modal-opened");
}