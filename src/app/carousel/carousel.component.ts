import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

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
      text: 'Cadastre e autorize a conta que será administradora da sua conta em poucas etapas. \n Atenção: neste primeiro momento você só poderá autorizar contas Pessoa Jurídica',
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
      text: 'Com o Acesso Compartilhado você não precisará mais dele. Afinal, a conta \n administradora utilizará sempre a mesma senha, sem necessidade de logoff para \n navegar e realizar transações entre contas.',
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
      text: 'Faça a gestão das contas que você administra e veja também quem são os administradores da \n sua conta. \n Ah, e o mais legal - você pode favoritar e apelidar as contas mais utilizadas. 😉',
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
      text: 'Se você quiser, a qualquer momento poderá encerrar o Acesso Compartilhado \n através da sua Conta Online, sem sair de casa, 100% digital!',
    },
  ]

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
