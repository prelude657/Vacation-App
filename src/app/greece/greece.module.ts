import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreecePageRoutingModule } from './greece-routing.module';

import { GreecePage } from './greece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreecePageRoutingModule
  ],
  declarations: [GreecePage]
})
export class GreecePageModule {}
