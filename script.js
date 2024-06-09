/*
Author: Kelly Hubert Irakoze
Description: implements fullscreen for the photo and photo caption
*/
document.addEventListener("DOMContentLoaded", function() {
    var photos = document.querySelectorAll('.photo');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var closeModal = document.querySelector('.lightbox .close');      

   // For each photo, an event listener is added that triggers full screen when the photo is clicked.
    photos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            var img = this.querySelector('img');
            var photoDetails = photo.getAttribute('data-details')
            
            lightbox.style.display = "flex"; 
            lightboxImg.src = img.src;
            lightboxCaption.textContent = photoDetails;
            lightboxCaption.style.position = "absolute"; 
            lightboxCaption.style.bottom = "10%";
            lightboxCaption.style.left = "15%";
            lightboxCaption.style.right = "15%";
            lightboxCaption.style.fontSize = "20px";

        });
    });
    closeModal.addEventListener('click', function() {
        lightbox.style.display = "none"; 
    });

    // Also hide the lightbox when clicking outside of the lightbox content
    window.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
