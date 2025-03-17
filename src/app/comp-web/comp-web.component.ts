import { Component,HostListener,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {card} from '../comp-model/model-card';

@Component({
  selector: 'app-comp-web',
  standalone: true,
  imports: [],
  templateUrl: './comp-web.component.html',
  styleUrl: './comp-web.component.scss'
})
export class CompWebComponent {
  constructor(private router: Router) {
  }
  listaCards: card[] = [
    new card('assets/img/proyectos/yuhome-web.png', 'Pagina para una arquitecta',"",""),
    new card('assets/img/icon/angular.svg', 'programa en angular para escger un nombre',"",""),
    new card('assets/img/icon/angular.svg', 'Tarjeta de presentacion con google site',"",""),
  ]

  @ViewChild('card_back') card_back!: ElementRef;
  @ViewChild('card_actual') card_actual!: ElementRef;
  @ViewChild('card_front') card_front!: ElementRef;
  itemAnterior:number=-1;
  itemActual:number=0;
  itemSiguiente:number=1;

  derechaDisabled:boolean=true;
  izquierdaDisabled:boolean=false;

  valorAnterior:card=this.itemAnterior<0? new card("","","",""):this.listaCards[this.itemAnterior];
  valorActual:card=this.listaCards[this.itemActual];
  valorSiguiente:card=this.itemSiguiente<0?new card("","","",""): this.listaCards[this.itemSiguiente];

  onInit(){
    window.scrollBy({ top: 2, behavior: 'smooth' });

    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    // Navegar a otro componente cuando se desplaza más de 100px

    // Navegar a otro componente cuando se desplaza más de 100px
    if (scrollOffset >2) {
      this.router.navigate(['/comp-movil']);
    }
  }

  btnIzquierda(){
    this.animar();
    setTimeout(() => {
      this.ActualizarCardIzquierda();
    }, 510);

  }
  btnDerecha(){
    this.animarIz();

    setTimeout(() => {
      this.ActualizarCardDerecha();
    }, 510);
  }

  recarcargar(){
    this.valorAnterior = this.itemAnterior<0?new card("","","",""):this.listaCards[this.itemAnterior];
    this.valorActual=this.listaCards[this.itemActual];
    this.valorSiguiente=this.itemSiguiente<0?new card("","","",""): this.listaCards[this.itemSiguiente];
  }

  animar(){
    this.card_back.nativeElement.classList.add('animado_back');
    setTimeout(() => {
      this.card_back.nativeElement.classList.remove('animado_back');
    }, 500);

    this.card_actual.nativeElement.classList.add('animado_actual');
    setTimeout(() => {
      this.card_actual.nativeElement.classList.remove('animado_actual');
    }, 500);

    this.card_front.nativeElement.classList.add('animado_front');
    setTimeout(() => {
      this.card_front.nativeElement.classList.remove('animado_front');
    }, 500);

  }

  animarIz(){
    this.card_back.nativeElement.classList.add('animadoI_back');
    setTimeout(() => {
      this.card_back.nativeElement.classList.remove('animadoI_back');
    }, 500);

    this.card_actual.nativeElement.classList.add('animadoI_actual');
    setTimeout(() => {
      this.card_actual.nativeElement.classList.remove('animadoI_actual');
    }, 500);

    this.card_front.nativeElement.classList.add('animadoI_front');
    setTimeout(() => {
      this.card_front.nativeElement.classList.remove('animadoI_front');
    }, 500);

  }

  ActualizarCardIzquierda(){
    this.itemAnterior=this.itemActual;
    this.itemActual=this.itemSiguiente;

    if(this.itemSiguiente+1 < this.listaCards.length)
    {
      this.itemSiguiente=this.itemSiguiente+1;
      this.izquierdaDisabled=false;
    }
    else
    {
      this.itemSiguiente=-1;
      this.izquierdaDisabled=true;
    }
    if(this.itemAnterior!=-1)
      this.derechaDisabled=false;

    this.recarcargar();
  }
  ActualizarCardDerecha(){

    this.itemSiguiente=this.itemActual;
    this.itemActual=this.itemAnterior;


    if(this.itemAnterior-1<this.listaCards.length && this.itemAnterior-1>=0)
    {
      this.itemAnterior=this.itemAnterior-1;
      this.derechaDisabled=false;
    }
    else
    {
      this.itemAnterior=-1;
      this.derechaDisabled=true;
    }
    this.recarcargar();

    if(this.itemSiguiente!=-1)
      this.izquierdaDisabled=false;
  }
}
