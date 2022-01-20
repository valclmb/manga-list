import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MangaAddComponent} from "./components/compo-manga/manga-add/manga-add.component";
import {HomeComponent} from "./components/home/home.component";
import {ConnectionComponent} from "./components/connection/connection.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'connection', component: ConnectionComponent},
  {path:':id', component: MangaAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
