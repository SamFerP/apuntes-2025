import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  result: number = 0;
  num1: number | undefined;
  num2: number | undefined;

  calculadora(number1: number | undefined, number2: number | undefined, operation: string) {
    // Validación para evitar que los valores sean undefined
    if (number1 === undefined || number2 === undefined) return;

    if (operation === 'suma') {
      this.result = number1 + number2;
    } else if (operation === 'resta') {
      this.result = number1 - number2;
    } else if (operation === 'mult') {
      this.result = number1 * number2;
    } else if (operation === 'div') {
      if (number2 === 0) {
        alert('No se puede dividir entre 0');
        return;
      }
      this.result = number1 / number2;
    }
  }
}