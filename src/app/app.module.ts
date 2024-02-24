import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { CreateComponent } from './page/create/create.component';
import { MenuComponent } from './component/menu/menu.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { EditarComponent } from './component/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    MenuComponent,
    NotFoundComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
