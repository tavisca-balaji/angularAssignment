import { Component, OnInit } from '@angular/core';
import { CategoriesData } from '../model/app.constants';
import { Category } from '../model/app.category.model';

@Component({
  selector: 'app-categorymaster-component',
  template: `
    <div>
      <strong>{{notificationMessage}}</strong>
    </div>
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
      <hr>
      <!--Property Binding for CatName-->
      <!--The parent subscribe to event emitted by chlid-->
    <app-productchild-component [CatName]="cat.CategoryName"
      (notify)="receiveNotification($event)"></app-productchild-component>
  `
})

export class CategoryMasterComponent implements OnInit {
  categories = CategoriesData;
  cat: Category;
  notificationMessage: string;
  constructor() {
    this.cat = new Category(0, '');

  }
  ngOnInit() { }

  getselectedcat(c: Category): void {
     this.cat = c;
  }
  receiveNotification(event): void {
    this.notificationMessage = event;
  }
}
