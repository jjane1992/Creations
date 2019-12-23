// Init and add the map
function initMap() {
  const loc = { lat: 50.389653, lng: -3.920748 };
  const map = new google.maps.Map(document.querySelector('.map-wrap'), {
    zoom: 17,
    center: loc
  });

  //  Center the Maerker on loc
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu Background
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn-light').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      600
    );
  }
});
