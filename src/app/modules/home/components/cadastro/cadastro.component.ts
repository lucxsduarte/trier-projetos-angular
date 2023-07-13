import { Component, OnInit } from '@angular/core';
import { ServiceListaService } from '../../services/service-lista.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  public nome: string = "";
  public email: string = "";
  public senha: string = "";
  public sexo: string = "";
 
  constructor(private service: ServiceListaService) {};

  public cadastraPessoa(nome: string, email: string, senha: string, idade: string, cpf: string, sexo: string){
    this.service.addPessoas(nome, email, senha, parseInt(idade), parseInt(cpf), sexo);
    this.nome = "";
    this.email = "";
    this.senha = "";
    this.sexo = "";
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
    });
  }

}
