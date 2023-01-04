import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

    showCarousel = true;

    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    cars = [
        {
            name: 'name',
            price: 1,
            inventoryStatus: 's',
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3,
            img: '../assets/images/carousel/carousel_1.png',
            title: 'A DOIS PASSOS DO ACESSO COMPARTILHADO',
            text: 'Cadastre e autorize...',
        },
        {
            name: 'name',
            price: 1,
            inventoryStatus: 's',
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
            img: '../assets/images/carousel/carousel_2.png',
            title: 'JOGUE O CADERNINHO DE SENHAS FORA!',
            text: 'Cadastre e autorize...',
        },
        {
            name: 'name',
            price: 1,
            inventoryStatus: 's',
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
            img: '../assets/images/carousel/carousel_3.png',
            title: 'GESTÃO DESCOMPLICADA',
            text: 'Cadastre e autorize... 😉',
        },
        {
            name: 'name',
            price: 1,
            inventoryStatus: 's',
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2,
            img: '../assets/images/carousel/carousel_4.png',
            title: 'SEJA LIVRE PARA IR E VIR',
            text: 'Cadastre e autorize...',
        },
    ]

    constructor() { }

    ngOnInit() { }

    changeShowCarousel() {
        this.showCarousel = !this.showCarousel;
    }

    lastCarousel: number = 0;
    lastItemCarousel = false;
    stepCarousel(event: any) {

        console.log("STEP CAROUSEL", event)

        console.log("LAST CAROUSEL", this.lastCarousel)

        if (this.lastCarousel === this.cars.length - 1 && event.page === 0) {
            console.log('fecha o carousel')
        }

        this.lastCarousel = event.page;

    }

}
