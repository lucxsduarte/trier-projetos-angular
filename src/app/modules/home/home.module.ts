import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { ModelsComponent } from './models/models.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ModelsComponent,
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ],
})
export class HomeModule { }
