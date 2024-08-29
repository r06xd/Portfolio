import { Component } from '@angular/core';
import {  RouterOutlet, withViewTransitions } from '@angular/router';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-comp-menu',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './comp-menu.component.html',
  styleUrl: './comp-menu.component.scss'
})

export class CompMenuComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('Scroll Offset:', scrollOffset);
    // Ejecuta la lógica deseada aquí
  }
  onElementScroll(event: Event): void {
    // Ejecuta la lógica deseada aquí
  }

  menuActive = false;

  toggleMenu() {
    console.log("entra a menu");
    this.menuActive = !this.menuActive;
  }
}
