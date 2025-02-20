import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-samantha',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './samantha.component.html',
  styleUrl: './samantha.component.css'
})
export class SamanthaComponent {



}
