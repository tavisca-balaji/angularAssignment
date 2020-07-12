import {Injectable} from '@angular/core';
// the UtilitService is an injectable type in NgModule providers
// root: The application-level injector for all Components/directives
// the referred components from other library module
// platform: Singleton for all applications loaded on the page
// thst is having the Angular Module at root or the
// Microfront-End App
// any: The service unique instance will be available for all
// lazy loaded modules
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
   changesCase(str: string, c: string): string {
      switch(c) {
        case 'U':
          str =  str.toUpperCase();
          break;
        case 'L':
          str =  str.toLowerCase();
          break;
      };
      return str;
   }
}
