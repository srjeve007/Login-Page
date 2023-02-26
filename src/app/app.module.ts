import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule  } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    Component,
    FormBuilder,
    FormGroup,
    Validators

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
