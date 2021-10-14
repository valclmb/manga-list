import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import {HttpClientModule} from "@angular/common/http";
import { MangaAddComponent } from './components/manga-add/manga-add.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MangaComponent } from './components/manga/manga.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaListComponent,
    MangaAddComponent,
    HomeComponent,
    SearchComponent,
    MangaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
