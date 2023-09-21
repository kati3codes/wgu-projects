import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapMapComponent } from './map-map/map-map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MapMapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule
  ]
})
export class MapModule { }
