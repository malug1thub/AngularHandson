

var slideIndex = 1;
showDivs(slideIndex);

// document.getElementById("btnPrev").addEventListener('click',plusDivs(slideIndex));
// document.getElementById("btnNext").addEventListener('click',plusDivs(slideIndex));

function plusDivs(n)
 {
  console.log("button clicked")
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imgGallery");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
