// Підключення базового функціоналу
import lightGallery from 'lightgallery';

// Плагіни 
// lgZoom, lgAutoplay, і тд...
//import lgThumbnail from 'lightgallery/plugins/thumbnail'
//import lgZoom from 'lightgallery/plugins/zoom's

const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
    let galleryItems = [];
    galleries.forEach(gallery => {
        galleryItems.push({
            gallery,
            galleryClass: lightGallery(gallery, {
                // plugins: [lgZoom, lgTumbnail],
                speed: 500,
                selector: '.gallery__image',
                getCaptionFromTitleOrAlt: false,
                download: false,
            })
        })
    });
}