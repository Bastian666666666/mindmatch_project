import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../../services/apiclient.service';

@Component({
  selector: 'app-apiconsumo',
  templateUrl: './apiconsumo.component.html',
  styleUrls: ['./apiconsumo.component.scss'],
})
export class ApiconsumoComponent implements OnInit {

  //Lista que se va a mostrar en la vista con los elementos de mi api
  lista: any[] = [];

  constructor(private apiClientService: ApiclientService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

// Esta función consume la data de mi nueva api
  cargarLista(): void {
    this.apiClientService.getLista().subscribe((data: any) => {
      // Consume la data de mi nueva api
      this.lista = data;
    });
  }
}

