console.log("Hello World");

/*var images = document.getElementsByClassName("image-clickable");

function viewLargerImage(event) {
  var image = event.target;
  var largerImageURL = image.getAttribute("data-large-image");

  image.src = largerImageURL;
  image.alt = "Large Image";
  image.classList.add("larger-image");
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", viewLargerImage);
}*/


function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  