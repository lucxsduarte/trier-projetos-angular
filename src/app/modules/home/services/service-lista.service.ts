import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListaService {

  public emitEvent = new EventEmitter();

  private pessoas: any = [
    {nome: "Isa", email: "isa@gmail.com", senha: "123", idade: 18, cpf: 12312312323, sexo: "Fem" }
  ];

  public getLista() {
    return this.pessoas;
  }

  public addPessoas(nome: string, email: string, senha: string, idade: number, cpf: number, sexo: string) {
    this.pessoas.push({nome: nome, email: email, senha: senha, idade: idade, cpf: cpf, sexo: sexo});
    this.emitEvent.emit(this.pessoas.length);
    return this.pessoas;
  }

  public deleteAll(){
    const confirm = window.confirm('Você quer apagar todos os usuários cadastrados?');
    if (confirm) {
      this.pessoas = [];
    }
  }
  
  constructor() { }
}
