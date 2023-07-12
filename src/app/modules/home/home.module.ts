import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    HomeModule,
  ]
})
export class HomeModule { }
