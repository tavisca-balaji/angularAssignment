import {Component, OnInit} from '@angular/core';
import {Product} from '../model/app.product.model';
import {Categories, Manufacturers} from '../model/app.constants';
import { HostListener } from '@angular/core';
import { HttpServiceService } from '../services/app.http.service';

@Component({
  selector: 'app-productformhttpservice-component',
  templateUrl: './app.productformhttpservice.view.html'
})
export class ProductFormHttpServiceComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  headers: Array<string>;
  status: string;
  SearchText:string;
  ProductButtonName:string="Save";

  // copy the constant arrays in local public arrays of the component
  categories = Categories;
  manufacturers = Manufacturers;

  constructor(private serve: HttpServiceService){
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.headers = new Array<string>();
    this.status = '';
  }

   ngOnInit(): void {
    for(let p in this.product) {
       this.headers.push(p);
    }
    this.loadData();
   }

   private loadData(): void {
   if(this.products.length>0)
   {
      
   }
   else
   {
      // call the method from the service and then subscribe to the Observable
     this.serve.getData().subscribe((response) => {
        this.products = response;
        this.status = 'Data received Succesfully';
     }, (error) => {
        this.status = `Error Occured ${error}`;
     });
   }
}

   Search():void{
            let result=new Array<Product>();
         for(let prd of this.products)
         {
            if(prd.ProductName.includes(this.SearchText)||prd.Manufacturer.includes(this.SearchText)||prd.Description.includes(this.SearchText)
            || prd.CategoryName.includes(this.SearchText))
            {
               result.push(prd);
            }
         }
         this.products=result;
   }

   clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
   }
   save(): void {
      if(this.ProductButtonName=="Save"){
     this.serve.postData(this.product).subscribe((response) => {
      this.product = response;
      this.status = 'Record Saved received Succesfully';
      this.products.push(this.product);
   }, (error) => {
      this.status = `Error Occured ${error}`;
   });
}
else
{
   for(let i=0;i<this.products.length;i++)
   {
      if(this.products[i].ProductRowId==this.product.ProductRowId)
      {
         this.products[i].BasePrice=this.product.BasePrice;
         this.products[i].CategoryName=this.product.CategoryName;
         this.products[i].Description=this.product.Description;
         this.products[i].Manufacturer=this.product.Manufacturer;
         this.products[i].ProductId=this.product.ProductId;
         this.products[i].ProductName=this.product.ProductName;
         
         this.product = new Product(0, '', '', '', '', '', 0);
         this.ProductButtonName="Save";
      } 
   }
}
   }

   getSelectedProduct(prd: Product): void {
      this.ProductButtonName="Update";
       this.product = Object.assign({}, prd);
   }
   Delete(prd: Product): void {
      let result=this.products.filter((p,i)=>p.ProductRowId!=prd.ProductRowId);
      this.products=result;
  }
}
