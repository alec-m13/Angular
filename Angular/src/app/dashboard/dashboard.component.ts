import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  staff: Staff[] = [];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.getStaff();
  }

  getStaff(): void {
    this.staffService.getStaff()
      .subscribe(staff => this.staff = staff.slice(1, 5));
  }
}