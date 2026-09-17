document.addEventListener('DOMContentLoaded', function () {
  var gallery = document.querySelector('.detail-gallery');
  if (!gallery) return;

  var mainImg = gallery.querySelector('.main-img img');
  var thumbs = gallery.querySelectorAll('.thumbs img');

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      mainImg.src = thumb.src;
      mainImg.alt = thumb.alt;
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });
  if (thumbs.length) thumbs[0].classList.add('active');

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  var overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  mainImg.style.cursor = 'zoom-in';
  mainImg.addEventListener('click', function () {
    overlayImg.src = mainImg.src;
    overlayImg.alt = mainImg.alt;
    overlay.classList.add('open');
  });
  overlay.addEventListener('click', function () {
    overlay.classList.remove('open');
  });
});
