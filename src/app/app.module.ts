import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './user/home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialTableComponent } from './user/material-table/material-table.component';
import { ConfirmBoxComponent } from './shared/confirm-box/confirm-box.component';
import { ToastrModule } from 'ngx-toastr';
import { ContactsComponent } from './user/contacts/contacts.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// import { trigger, state, style, transition, animate } from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PageNotFoundComponent,
    MaterialTableComponent,
    ConfirmBoxComponent,
    ContactsComponent,
    FlexLayoutModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ContactsComponent]
})
export class AppModule { }
