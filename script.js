document.querySelector('.share-img').addEventListener('click', function(event) {
    var shareElement = document.querySelector(".share-active");
    if (shareElement.style.display === 'none') {
        shareElement.style.display = 'flex';
        document.querySelector(".share-img").classList.add('share-img-active');
        document.querySelector(".share-img").classList.add('share-img-active2');
    } else {
        shareElement.style.display = 'none';
        document.querySelector(".share-img").classList.remove('share-img-active');
        document.querySelector(".share-img").classList.remove('share-img-active2');
    }
});
