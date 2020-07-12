import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsData } from '../model/app.constants';
import { Product } from '../model/app.product.model';
import { CommunicationService } from '../services/app.communication.service';


@Component({
  selector: 'app-productreceiver-component',
  template: `
  <h2>Receiver Component</h2>
       <table>
    <thead>
        <tr>
            <th>ProductRowId</th>
            <th>ProductId</th>
            <th>ProductName</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let prd of FilteredProducts">
            <td>{{prd.ProductRowId}}</td>
            <td>{{prd.ProductId}}</td>
            <td>{{prd.ProductName}}</td>
            <td>{{prd.CategoryName}}</td>
            <td>{{prd.BasePrice}}</td>
        </tr>
    </tbody>
</table>
  `
})

export class ProductReceiverComponent implements OnInit {
  products = ProductsData;
  prod: Product;
  CatName: string;
  private filterProducts: Array<Product>;
  // inject the service so that the event from the service can be subscribed
  constructor(private serve: CommunicationService) {
    this.prod = new Product(0, '', '', '', '', '', 0);
    this.CatName = '';
    this.filterProducts = new Array<Product>();
  }

  // subscribe to the service and update the public CatName member of the compnent
  ngOnInit() {
    this.serve.receiveData.subscribe((data) => {
      this.CatName = data;
    });
  }


  get FilteredProducts(): Array<Product> {
    this.filterProducts = new Array<Product>();
    if (this.CatName.length !== 0) {
      this.filterProducts = this.products.filter((p,i) => {
        return p.CategoryName === this.CatName;
      });
    } else {
      this.filterProducts = this.products;
    }
    return this.filterProducts;
  }


}
