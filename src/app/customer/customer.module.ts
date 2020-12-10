import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {CustomerRoutingModule} from './customer-routing.module';


@NgModule({
  declarations: [ListComponent, DetailComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule {
}
