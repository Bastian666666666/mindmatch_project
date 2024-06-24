import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../../services/apiclient.service';

@Component({
  selector: 'app-apiconsumo',
  templateUrl: './apiconsumo.component.html',
  styleUrls: ['./apiconsumo.component.scss'],
})
export class ApiconsumoComponent implements OnInit {
  lista: any[] = [];

  constructor(private apiClientService: ApiclientService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.apiClientService.getLista().subscribe((data: any) => {
      this.lista = data;
    });
  }
}

