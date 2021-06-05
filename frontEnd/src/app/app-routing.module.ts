import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { MostrarPuntajeComponent } from './componentes/mostrar-puntaje/mostrar-puntaje.component';


const routes: Routes = [
  {path: '', redirectTo:'/agregar', pathMatch: 'full'},
  {path: 'agregar', component:AgregarComponent},
  {path: 'puntajes', component: MostrarPuntajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
