
import { Component, OnInit } from '@angular/core';
import {ArbolesService, Arbol} from '../../servicios/arboles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arboles',
  templateUrl: './arboles.component.html'
})
export class ArbolesComponent implements OnInit {

  arboles: Arbol[] = [];

  constructor(private _ARBOLES: ArbolesService, private router: Router) {
    console.log('c');
  }

  ngOnInit(): void {
    this.arboles = this._ARBOLES.getArboles();
    console.log(this.arboles);
  }

  
  verArbol(idx: number){
    console.log(idx);
    this.router.navigate(['/arbol', idx]);
  }

}
