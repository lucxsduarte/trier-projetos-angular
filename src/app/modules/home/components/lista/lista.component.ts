import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceListaService } from '../../services/service-lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{

  public pessoas: any = [];

  constructor(private service: ServiceListaService){}

  ngOnInit(): void {
    this.pessoas = this.service.getLista();
  }

  public deleteAll(){
    this.pessoas = this.service.deleteAll();
  }
  
}
