import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormGroup } from '@angular/forms';
import { BehaviourSubjectsService } from '../../services/behaviour-subjects.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: FormGroup;
  isSubmitted = false;
  createBtn: boolean;
  updateBtn: boolean;
  constructor(
    private formService: FormService,
    private bs: BehaviourSubjectsService
  ) { }

  ngOnInit() {
    this.contact = this.formService.form;
    this.bs.updateButton.subscribe(response => { this.updateBtn = response; });
    this.bs.createButton.subscribe(response => { this.createBtn = response; });
  }

  createContact() {
    console.log('create');
  }

  updateContact() {
    console.log('update');
  }

  onClose() {
  }
  keyPress($event) {

  }

  // Get the form instance
  get f() { return this.contact.controls; }


}
