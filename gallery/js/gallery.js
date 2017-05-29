group();

function group() {
  var j;
  var y = document.getElementsByClassName("columns");
  for (j = 0; j < y.length; j++) {
    carousel(y[j], 0);
  }
}

function carousel(z, slideIndex) {
  var i;
  var x = z.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(function () {
    carousel(z, slideIndex)
  }, 1000); // Change image every 2 seconds
}