import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vaga } from './models/vaga.model';
import { Curriculo } from './models/curriculo.model';
import { HeaderComponent } from './template/header/header.component';
import { InicioComponent } from './views/inicio/inicio.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'curriculos', component:Curriculo},
  {path: 'vagas', component:Vaga}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
