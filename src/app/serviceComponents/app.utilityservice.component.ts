import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/app.utility.service';

@Component({
  selector: 'app-utilityservice-component',
  template: `
    <h2>Using Utility Service</h2>
    <div>
      {{str1}}
    </div>
    <br/>
    <div>
      {{str2}}
    </div>
  `,
  providers: [/*UtilityService*/] // the scoped instance
})

export class UtilityServiceComponent implements OnInit {
  str1: string;
  str2: string;
  // inject the UtilityService
  constructor(private serv: UtilityService) {
    this.str1 = 'Mahesh Sabnis';
    this.str2 = 'Tejas Sabnis';
  }

  ngOnInit() {
    this.str1 = this.serv.changesCase(this.str1, 'U');
    this.str2 = this.serv.changesCase(this.str2, 'L');
  }
}
