import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {CustomerRoutingModule} from './customer-routing.module';
import {AddEditComponent} from './add-edit/add-edit.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';


@NgModule({
    declarations: [ListComponent, DetailComponent, LayoutComponent, AddEditComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        CustomerRoutingModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule
    ]
})
export class CustomerModule {
}
