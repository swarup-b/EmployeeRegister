import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { BehaviourSubjectsService } from '../../services/behaviour-subjects.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})

export class MaterialTableComponent implements OnInit, AfterViewInit {
  listData: MatTableDataSource<any>;
  contacts: [];
  displayedColumns = ['id', 'title', 'fullname', 'email', 'phone', 'dob', 'Actions', 'ViewActivity'];
  totalRecord: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private bs: BehaviourSubjectsService
  ) { }

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.getAllContactDetails(0, 5);
  }

  // Lifecycle Method AfterViewInit
  ngAfterViewInit() {
    this.paginator.page.pipe(
      startWith(null),
      tap(() => this.getAllContactDetails(this.paginator.pageIndex, this.paginator.pageSize))
    ).subscribe();

  }

  async editRecord(row) {
    this.bs.homeDivProperty.next(false);
    // if (!this.editForm.pristine) {
    //   const res = confirm('Confirm', 'Are you sure to move without saving this ?');
    //   if (res) {
    //     this.divProerty = true;
    //     this.groupService.populateForm(row);
    //   }
    // } else {
    //   this.divProerty = true;
    //   this.groupService.populateForm(row);
    //   this.editForm.markAsUntouched();
    // }
  }


  getAllContactDetails(index, size) {
    const newIndex = index * size;
    const newUrl = 'http://localhost/EmployeeRegistration/public/user/v1/contacts/allRecords?start=' + newIndex + '&range=' + size;
    this.userService.getAllContacts(newUrl).subscribe(
      (response) => {
        this.totalRecord = response.headers.get('records');
        this.contacts = response.body;
        this.listData = new MatTableDataSource(this.contacts);
        this.listData.sort = this.sort;
        //  this.listData.paginator = this.paginator;
      },
      error => {
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        console.log(error);
      }
    );
  }
}
