import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectsService {
  homeDiv = false;
  button: boolean;
  constructor() { }
  homeDivProperty = new BehaviorSubject<boolean>(this.homeDiv);
  updateButton = new BehaviorSubject<boolean>(this.button);
  createButton = new BehaviorSubject<boolean>(this.button);

}
