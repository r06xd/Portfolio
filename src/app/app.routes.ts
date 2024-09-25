import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompInicioComponent } from './comp-inicio/comp-inicio.component';
import { CompWebComponent } from './comp-web/comp-web.component';
import { CompMovilComponent } from './comp-movil/comp-movil.component';

export const routes: Routes = [
    { path: 'comp-inicio', component:CompInicioComponent},
    { path: 'comp-web', component: CompWebComponent },
    { path: 'comp-movil', component: CompMovilComponent },
    { path: '', component:CompInicioComponent, pathMatch: 'full' }
];
