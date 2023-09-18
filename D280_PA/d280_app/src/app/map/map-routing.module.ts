import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapMapComponent } from './map-map/map-map.component';

const routes: Routes = [
  { path: 'map', component: MapMapComponent },
  { path: '', redirectTo: 'map', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
