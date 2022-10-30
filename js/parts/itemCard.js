function itemCard() {
    const cards = document.querySelectorAll('.itemCard');

    cards.forEach((card) => card.addEventListener('click', function() {
        let content = card.parentElement.querySelector('.item__content');
        content.classList.add('active');
        let closeButton = content.querySelector('.cardCloseButton');
        closeButton.addEventListener('click', function() {
            content.classList.remove('active');
        });
    }));
}

export { itemCard };