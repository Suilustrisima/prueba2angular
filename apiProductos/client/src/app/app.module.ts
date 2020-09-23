import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SomosComponent } from './components/somos/somos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListProductosComponent } from './components/admin/list-productos/list-productos.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
//Services
import { DataApiService } from 'src/app/services/data-api.service';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SomosComponent,
    DetalleProductoComponent,
    ListProductosComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
