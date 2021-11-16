import { Component, OnInit } from '@angular/core';

import { Staff } from "../staff";
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {

  staff: Staff[] = [];
  zeroString: string = "";

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): void {
    this.staffService.getStaff()
        .subscribe(staff => this.setStaff(staff));
  }

  setStaff(staff: Staff[]): void {
    this.staff = staff;
    let max = 0;
    staff.map(member => max = Math.max(max, member.id));
    this.setZeroString(max.toString().length);
  }

  setZeroString(len: number): void {
    if (len === this.zeroString.length) return;
    this.zeroString = "0".repeat(len);
    let overPadded;
    for (let member of this.staff) {
      overPadded = this.zeroString + member.id.toString();
      member.idString = overPadded.substring(overPadded.length - len);
    }
  }
}
