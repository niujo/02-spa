import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import {APP_ROUTING} from './app.routes';
// servicios
import {ArbolesService} from './servicios/arboles.service';
// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArbolesComponent } from './components/arboles/arboles.component';
import { ArbolComponent } from './components/arbol/arbol.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ArbolesComponent,
    ArbolComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ArbolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
