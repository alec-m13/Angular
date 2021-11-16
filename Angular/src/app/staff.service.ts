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

  getMember(id: number): Observable<Staff> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const member = InitialStaff.find(m => m.id === id)!;
    this.messageService.add(`StaffService: fetched member id=${id}`);
    return of(member);
  }
}
