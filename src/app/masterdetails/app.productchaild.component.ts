import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsData } from '../model/app.constants';
import { Product } from '../model/app.product.model';


@Component({
  selector: 'app-productchild-component',
  template: `
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
<hr/>
<input type="button" value="Notify Back to Parent" (click)="onNotifyClick()"/>
  `
})

export class ProductChildComponent implements OnInit {
  products = ProductsData;
  prod: Product;
  private catName: string;
  private filterProducts: Array<Product>;

  // the output decorated event will be used for event-binding in the
  // parent component.
  // EventEmitter<T> class will emit event from child to parent with T as payload
  // aka the data to be emitted. The parent component will have to subscribe to event
  // and receive data using $event service object
  @Output()
  notify: EventEmitter<string>;

  constructor() {
    this.prod = new Product(0, '', '', '', '', '', 0);
    this.catName = '';
    this.filterProducts = new Array<Product>();
    this.notify = new EventEmitter<string>();
  }

  ngOnInit() { }

  // the Input decorated property will be used for Property-Binding
  // in parent e.g. [CatName]
  @Input()
  set CatName(val: string) {
    this.catName = val;
    console.log(`Value received by Child ${this.catName}`);
  }
  get CatName(): string {
    return this.catName;
  }

  // the read-only property. This will be executed
  // when the component receive any changes for the public properties
  // from the container of this component
  get FilteredProducts(): Array<Product> {
    this.filterProducts = new Array<Product>();
    if (this.catName.length !== 0) {
      this.filterProducts = this.products.filter((p,i) => {
        return p.CategoryName === this.catName;
      });
    } else {
      this.filterProducts = this.products;
    }
    return this.filterProducts;
  }

  onNotifyClick(): void {
    this.notify.emit(`We found ${this.filterProducts.length} Products against
    the CategoryName ${this.catName}`);
  }
}
