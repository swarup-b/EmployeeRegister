import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ContactsComponent } from '../contacts/contacts.component';
import { BehaviourSubjectsService } from '../../services/behaviour-subjects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '35%';
  divProerty: boolean;
  message = '';
  constructor(
    private bs: BehaviourSubjectsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.bs.homeDivProperty.subscribe(result => {
      console.log(result);
      this.divProerty = result;
    });
  }
  // Create new Contact
  onCreate() {
    this.bs.createButton.next(true);
    this.bs.updateButton.next(false);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';
    this.dialog.open(ContactsComponent, dialogConfig);
  }


  deleteRecord(row) {
    // if (confirm('Are you sure to delete ')) {
    //   this.userService.deleteRecordById(row.recordId, this.url).subscribe(
    //     data => {
    //       this.message = data.message;
    //     }
    //   );
    // }
  }

  onClose() {
    this.divProerty = false;
  }

}

