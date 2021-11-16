import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Staff } from './staff';
import { InitialStaff } from './mock-staff';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private messageService: MessageService) { }

  getStaff(): Observable<Staff[]> {
    const staff = of(InitialStaff);
    this.messageService.add('StaffService: fetched staff');
    return staff;
  }
}
