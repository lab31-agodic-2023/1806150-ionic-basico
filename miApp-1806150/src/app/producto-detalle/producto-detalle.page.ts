import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {
  precio!: string;
  categoria!: string;
  producto: any;

  constructor(private route: ActivatedRoute, private consulta: ConsultaService ) { 
   }

  
  ngOnInit() {
  }

}
