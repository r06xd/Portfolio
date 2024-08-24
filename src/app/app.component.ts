import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompMenuComponent } from './comp-menu/comp-menu.component';
import { CompInicioComponent } from './comp-inicio/comp-inicio.component';
import { CompWebComponent } from './comp-web/comp-web.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CompMenuComponent, CompInicioComponent, CompWebComponent]
})
export class AppComponent {
  title = 'portfolio';
}
