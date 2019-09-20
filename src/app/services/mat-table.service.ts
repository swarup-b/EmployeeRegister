import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MatTableService {
  value: [];
  contactList = new BehaviorSubject<any>(this.value);
  // private url = 'http://localhost/EmployeeRegistration/public/user/v1/contacts';
  // constructor(private service: UserService, private router: Router) {
  //   this.service.getAllContacts(this.url).subscribe(
  //     data => {
  //       this.contactList = data as [];
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.router.navigate(['login']);
  //       }
  //       console.log(error);
  //     }
  //   );
  // }

  // getAllContactDetails() {
  //   this.service.getAllContacts(this.url).subscribe(
  //     data => {
  //       this.contactList = data as [];
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.router.navigate(['login']);
  //       }
  //       console.log(error);
  //     }
  //   );
  // }

}
