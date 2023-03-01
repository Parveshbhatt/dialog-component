/*
  service to pass the show dialog box property to components 
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  showDialog = false;
  constructor() { }
}
