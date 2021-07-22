import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HawaiiPageRoutingModule } from './hawaii-routing.module';

import { HawaiiPage } from './hawaii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HawaiiPageRoutingModule
  ],
  declarations: [HawaiiPage]
})
export class HawaiiPageModule {}
