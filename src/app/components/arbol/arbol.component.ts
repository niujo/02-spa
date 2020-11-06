import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

import {ArbolesService} from '../../servicios/arboles.service';

@Component({
  selector: 'app-arbol',
  templateUrl: './arbol.component.html'
})
export class ArbolComponent implements OnInit {

  arbol: any = {

  };

  constructor(private activatedRouter: ActivatedRoute,
              private _ARBOLSERVICE: ArbolesService) {

    this.activatedRouter.params.subscribe( params => {
     // console.log(params['id']);
      this.arbol = this._ARBOLSERVICE.getArbol(params['id']);
      console.log(this.arbol);
    });

   }

  ngOnInit(): void {
  }

  

}
