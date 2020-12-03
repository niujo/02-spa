
import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { ArbolesComponent } from './components/arboles/arboles.component';
import { ArbolComponent } from './components/arbol/arbol.component';
import {BuscadorComponent} from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'arboles', component: ArbolesComponent},
    {path: 'arbol/:id', component: ArbolComponent },
    {path: 'buscar/:termino', component : BuscadorComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
