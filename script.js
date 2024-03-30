class Container {
    constructor() {

        this.carouselContainer = document.querySelector(".carousel-container");



        this.highlighted_card_index = 0;

        this.cards = document.querySelectorAll(".card");


        this.buttonNext = document.querySelector(".buttonNext");
        this.buttonPrev = document.querySelector(".buttonPrev");




        this.addEventListener();
        this.render();

    }

    render() {
        this.cards.forEach((card, index) => {
            if (index === this.highlighted_card_index) {
                // write code for card with is 80% of width of carousel-container
                card.style.minWidth = this.carouselContainer.offsetWidth * 0.8 + 'px';
                console.log(card)
            } if(index === this.highlighted_card_index + 1 || index === this.highlighted_card_index - 1){
                card.style.minWidth = this.carouselContainer.offsetWidth * 0.15 + 'px';
            }
             else {
                card.classList.remove("highlighted");
            }
        });
    }




    addEventListener() {

        this.buttonNext.addEventListener("click", () => {
            this.carouselContainer.scrollLeft += 300;
        });

        this.buttonPrev.addEventListener("click", () => {
            this.carouselContainer.scrollLeft -= 300;
        }
        );

    }



}


window.onload = () => {
    window.app = new Container();
}