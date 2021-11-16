import { Component, OnInit } from '@angular/core';
import { Staff } from "../staff";
import { InitialStaff } from "../mock-staff";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {

  InitialStaff = InitialStaff;

  staff: Staff = {
    id: 1,
    name: "Billy Joe Manhattan"
  };

  constructor() { }

  ngOnInit(): void {
  }

  selectedStaff?: Staff;
    onSelect(staff: Staff): void {
  this.selectedStaff = staff;
}

}
