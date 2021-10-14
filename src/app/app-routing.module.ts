import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MangaAddComponent} from "./components/manga-add/manga-add.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'manga/add', component: MangaAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
