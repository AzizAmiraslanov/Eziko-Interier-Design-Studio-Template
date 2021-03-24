// Overlay part's Code Area Start In the Here
$(".num").counterUp({
  delay: 10,
  time: 1000
});
// Overlay part's Code Area Start In the Here

// Aos Animate on Scroll Library
AOS.init();

// Slider Code Area Start In the Here
$(document).ready(function () {
  $('.slider').slick({

    prevArrow: '<span class="prev-arrow"><i class="fas fa-forward"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-backward"></i></i> </span>',
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'

  });
});
// Slider Code Area End of the Here

// Bar Menu Code Area Start In the Here 
function myFunction() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.position = "relative";
    var user = document.getElementById("times");
    times.style.display = "block";
    times.style.position = "absolute";
    times.style.right = "2%";
    times.style.top = "44%"
    times.style.color = "white";
    times.style.fontSize = "50px";
    times.style.zIndex = "111111";
    times.style.cursor = "pointer";
    times.addEventListener("click", function () {
      x.style.display = "none";
      times.style.display = "none"
    })
  } else {
    x.style.display = "none"
  }
}

// Bar Menu Code Area End of the Here 