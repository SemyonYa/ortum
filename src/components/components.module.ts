import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { GridComponent } from './grid/grid.component';
import { GridRowComponent } from './grid/grid-row/grid-row.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ModalComponent } from './modal/modal.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormItemComponent } from './form-item/form-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GaleryComponent } from './galery/galery.component';
import { GaleryViewerComponent } from './galery-viewer/galery-viewer.component';
import { SelectRegionComponent } from './select-region/select-region.component';
import { CtorWidgetComponent } from './ctor-item-widget/ctor-item-widget.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    CarouselComponent,
    CollapsibleComponent,
    CtorWidgetComponent,
    DropDownComponent,
    FormItemComponent,
    GaleryComponent,
    GaleryViewerComponent,
    GridComponent,
    GridRowComponent,
    InProgressComponent,
    MenuItemComponent,
    ModalComponent,
    SearchInputComponent,
    SelectRegionComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,

    BreadcrumbsComponent,
    CarouselComponent,
    CollapsibleComponent,
    CtorWidgetComponent,
    DropDownComponent,
    FormItemComponent,
    GaleryComponent,
    GaleryViewerComponent,
    GridComponent,
    GridRowComponent,
    InProgressComponent,
    MenuItemComponent,
    ModalComponent,
    SearchInputComponent,
    SelectRegionComponent,
    ToggleComponent,
  ]
})
export class ComponentsModule { }
