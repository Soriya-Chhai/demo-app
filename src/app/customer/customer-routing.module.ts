import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {AddEditComponent} from './add-edit/add-edit.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', redirectTo: 'list'
            },
            {
                path: 'list',
                component: ListComponent,
                data: {
                    breadcrumb: 'List'
                },
            },
            {
                path: 'detail',
                component: DetailComponent,
                data: {
                    breadcrumb: 'Detail'
                },
            },
            {
                path: 'add',
                component: AddEditComponent,
                data: {
                    breadcrumb: 'Add'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {
}
