import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { NewContactComponent } from './new-contact/new-contact.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [NewContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
