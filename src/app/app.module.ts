import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './Component/content/content.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AddFormComponent } from './Component/add-form/add-form.component';
import { EmployeesComponent } from './Component/employees/employees.component';
import { EmployeesDetalisComponent } from './Component/employees-detalis/employees-detalis.component';
import { LoginComponent } from './Component/login/login.component';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    AddFormComponent,
    EmployeesComponent,
    EmployeesDetalisComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
