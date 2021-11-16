import { Component, OnInit, Input } from '@angular/core';

import { Staff } from "../staff";

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.sass']
})
export class StaffDetailComponent implements OnInit {

  @Input() staff?: Staff;

  constructor() { }

  ngOnInit(): void {
  }

}
