import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any): string {
    // Remover todos os caracteres não numéricos do valor
    const numericValue = value.toString().replace(/\D/g, '');

    // Verificar se o valor é válido
    if (numericValue.length !== 11) {
      return value; // Retorna o valor original se não for um CPF válido
    }

    // Formatar o CPF
    const part1 = numericValue.slice(0, 3);
    const part2 = numericValue.slice(3, 6);
    const part3 = numericValue.slice(6, 9);
    const part4 = numericValue.slice(9);

    return `${part1}.${part2}.${part3}-${part4}`;
  }

}
