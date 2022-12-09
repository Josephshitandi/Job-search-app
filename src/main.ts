import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


import { AppModule } from './app/app.module';
// Import {NgbModule} from ‘@ng-bootstrap/ng-bootstrap’; 



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


