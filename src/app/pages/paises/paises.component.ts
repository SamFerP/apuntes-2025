import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  paisBuscar: string = "";
  paisRecibido: any = null;
  iddRoot: string = "";
  errorBusqueda: boolean = false;

  getPaisesWithFetch(pais: string) {
    if (!pais.trim()) return;

    fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=false`)
      .then(response => {
        if (!response.ok) throw new Error('País no encontrado');
        return response.json();
      })
      .then(data => {
        this.paisRecibido = data[0];
        this.iddRoot = data[0].idd.root + (data[0].idd.suffixes?.[0] || '');
        this.errorBusqueda = false;
        console.log('País encontrado:', data);
      })
      .catch(error => {
        console.error('Error con Fetch:', error);
        this.paisRecibido = null;
        this.errorBusqueda = true;
      });
  }
}
