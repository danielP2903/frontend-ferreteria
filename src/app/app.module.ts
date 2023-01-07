import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListboxModule} from 'primeng/listbox';
import { TestComponent } from './pages/test/test.component';
import { TestModule } from './pages/test/test.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListboxModule,
    TestModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
