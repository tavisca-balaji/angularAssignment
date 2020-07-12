// BrowserModule is used to load and render Angular Components and
// it dependencies in Browser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// HttpClientModule, manages the Http Platform for Http Communicaiton
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductFormComponent} from './productformcomponent/app.productform.component';
import { ProductReactiveFormComponent } from './productreactiveformcomponent/app.productreactiveform.component';
import { CategoryMasterComponent } from './masterdetails/app.categorymaster.component';
import { ProductChildComponent } from './masterdetails/app.productchaild.component';
import { UtilityService } from './services/app.utility.service';
import { UtilityServiceComponent } from './serviceComponents/app.utilityservice.component';
import { CategorySenderComponent } from './masterdetailservice/app.categorysender.component';
import { ProductReceiverComponent } from './masterdetailservice/app.productreceiver.component';
import { ProductFormHttpServiceComponent } from './httpservicecomponent/app.productformhttpservice.component';

@NgModule({
  declarations: [
    AppComponent, ProductFormComponent,
    ProductReactiveFormComponent,
    CategoryMasterComponent, ProductChildComponent,
    UtilityServiceComponent,
    CategorySenderComponent, ProductReceiverComponent,
    ProductFormHttpServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [/*UtilityService*/], // singleton instance
  bootstrap: [ProductFormHttpServiceComponent]
})
export class AppModule { }
