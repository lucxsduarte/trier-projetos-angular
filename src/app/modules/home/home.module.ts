import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaComponent } from './components/lista/lista.component';
import { BotaoDeleteAllComponent } from './components/botao-delete-all/botao-delete-all.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
    MenuComponent,
    ListaComponent,
    BotaoDeleteAllComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    
  ]
})
export class HomeModule { }
