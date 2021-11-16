import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Staff } from "../staff";
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.sass']
})
export class StaffDetailComponent implements OnInit {

  @Input() staff?: Staff;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMember();
  }
  
  getMember(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.staffService.getMember(id)
      .subscribe(member => this.staff = member);
  }

  goBack(): void {
    this.location.back();
  }

}
