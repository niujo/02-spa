import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArbolesService} from '../../servicios/arboles.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  arboles: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
              private _ARBOLSERVICIO: ArbolesService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      // console.log(params['termino']);
      this.termino = (params['termino']);
      this.arboles = this._ARBOLSERVICIO.buscarArboles(params['termino']);
      // console.log('estoy buscando', this.arboles);
    });
  }
}
