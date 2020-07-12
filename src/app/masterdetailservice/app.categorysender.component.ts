import { Component, OnInit } from '@angular/core';
import { CategoriesData } from '../model/app.constants';
import { Category } from '../model/app.category.model';
import { CommunicationService } from '../services/app.communication.service';

@Component({
  selector: 'app-categorysender-component',
  template: `
      <h2>Sender Component</h2>
      <table>
        <thead>
           <tr>
             <th>Category Id</th>
             <th>Category Name</th>
           </tr>
        </thead>
        <tbody>
          <tr *ngFor="let c of categories" (click)="getselectedcat(c)">
            <td>{{c.CatedotyId}}</td>
            <td>{{c.CategoryName}}</td>
          </tr>
        </tbody>
      </table>
  `
})

export class CategorySenderComponent implements OnInit {
  categories = CategoriesData;
  cat: Category;
  // inject the service
  constructor(private serv: CommunicationService) {
    this.cat = new Category(0, '');

  }
  ngOnInit() { }

  getselectedcat(c: Category): void {
     this.cat = c;
     // call the service from the method
     this.serv.SendData(this.cat.CategoryName);
  }

}
