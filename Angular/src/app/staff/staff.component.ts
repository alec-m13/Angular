import { Component, OnInit } from '@angular/core';
import { Staff } from "../staff";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.sass']
})
export class StaffComponent implements OnInit {

  staff: Staff = {
    id: 1,
    name: "Billy Joe Manhattan"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
