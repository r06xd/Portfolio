import { Component,HostListener,ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {card} from '../comp-model/model-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-inicio',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './comp-inicio.component.html',
  styleUrl: './comp-inicio.component.scss'
})
export class CompInicioComponent {
  constructor(private router: Router) {

  }


  listaCards: card[] = [
    new card('assets/img/proyectos/yuhome-web.png',
      'Creé una página web para un emprendimiento de arquitectura, fusionando un diseño moderno con una interfaz intuitiva. Apliqué mis conocimientos en HTML, CSS y JavaScript para lograr una experiencia de usuario fluida y visualmente atractiva, destacando los proyectos y servicios de la empresa de manera efectiva y profesional.'
      ,"WEB PARA EMPRENDIMIENTO","https://yuhome.netlify.app"),
    new card('assets/img/icon/angular.svg', 'Para un emprendimiento de camisetas cree un sistema que elige un nombre al azar tomado de un archivo excel',"JUEGO EN ANGULAR",""),
    new card('assets/img/icon/google-sites.png', 'Para el emprendimiento de una arquitecta cree una tarjeta de presentacion con google site',"TARJETA EN GOOGLE SITE","https://sites.google.com/view/yadirabautista/inicio"),
    new card('assets/img/icon/netcore.png', 'Colaboración en un sistema de exportacion para una empresa de logistica donde habia gran volumen de datos que manejar, aplicando conocimiento de html, css, boostrap, kendo UI, .net core, microservicios, SQL server, azure devops',"SISTEMA DE EXPORTACION",""),
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

  faces: string[] = [
    'assets/img/icon/angular.svg',
    'assets/img/icon/github.svg',
    'assets/img/icon/net.svg',
    'assets/img/icon/python.svg'
  ];

  currentFaceIndex: number = 0;
  rotating: boolean = false;
  contactForm: FormGroup = new FormGroup({});

  ngOnInit():void{
    this.startFaceRotation();

    this.contactForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', Validators.required)
    });
  }

  startFaceRotation(): void {
    setInterval(() => {
      this.rotating = true;
      setTimeout(() => {
        this.currentFaceIndex = (this.currentFaceIndex + 1) % this.faces.length;
        this.rotating = false;
      }, 400); // Duración de la rotación
    }, 3000); // Tiempo total por cara (incluye el tiempo de rotación)
  }

  get currentFace():string
  {
    return this.faces[this.currentFaceIndex];
  }

  ngAfterViewInit(): void {
    // Posiciona el scroll en 500px desde el top
    window.scrollTo({ top: 2, behavior: 'smooth' });
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('Scroll Offset:1 after', window.pageYOffset );
    console.log('Scroll Offset:2 after', document.documentElement.scrollTop);
    console.log('Scroll Offset:3 after', document.body.scrollTop);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('Scroll Offset:1', window.pageYOffset );
    console.log('Scroll Offset:2', document.documentElement.scrollTop);
    console.log('Scroll Offset:3', document.body.scrollTop);

    // Navegar a otro componente cuando se desplaza más de 100px

  }
  nextPage(){
    this.router.navigate(['/comp-web']);
  }

  /* PROYECTOS */

  btnIzquierda(deshabilitado:boolean){
    if(!deshabilitado)
    {
      this.animar();
      setTimeout(() => {
        this.ActualizarCardIzquierda();
      }, 510);
    }
  }
  btnDerecha(deshabilitado:boolean){
    if(!deshabilitado)
      {
        this.animarIz();
        setTimeout(() => {
          this.ActualizarCardDerecha();
        }, 510);
      }
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

    console.log(this.itemAnterior-1);
    console.log(this.listaCards.length);
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

  enviarEmail(){
    console.log("Enviar email");
  }

}
