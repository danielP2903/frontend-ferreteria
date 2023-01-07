import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListboxModule} from 'primeng/listbox';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { TestRoutingModule } from './test.routing.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    ListboxModule,
    FormsModule,
    TestRoutingModule
  ]
})
export class TestModule { }
