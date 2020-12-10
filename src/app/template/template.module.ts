import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {TemplateRoutingModule} from './template-routing.module';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
  ]
})
export class TemplateModule { }
