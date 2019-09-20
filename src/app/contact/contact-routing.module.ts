import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';


const routes: Routes = [
  { path: '', component: NewContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
