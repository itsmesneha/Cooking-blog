// Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const recipeCards = Array.from(carouselTrack.children);

    // Get the width of one recipe card
    const cardWidth = recipeCards[0].getBoundingClientRect().width;

    // Arrange cards side-by-side in the carousel
    recipeCards.forEach((card, index) => {
        card.style.left = `${index * cardWidth}px`;
    });

    let currentIndex = 0;

    // Move carousel to the desired position
    const moveToCard = (index) => {
        const amountToMove = index * -cardWidth;
        carouselTrack.style.transform = `translateX(${amountToMove}px)`;
    };

    // Click Event for the Next Button
    nextButton.addEventListener("click", () => {
        if (currentIndex < recipeCards.length - 1) {
            currentIndex++;
            moveToCard(currentIndex);
        }
    });

    // Click Event for the Previous Button
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveToCard(currentIndex);
        }
    });
});

