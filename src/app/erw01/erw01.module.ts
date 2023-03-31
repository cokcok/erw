import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erw01PageRoutingModule } from './erw01-routing.module';

import { Erw01Page } from './erw01.page';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erw01PageRoutingModule,
    TabsModule.forRoot(),ReactiveFormsModule,
  ],
  declarations: [Erw01Page]
})
export class Erw01PageModule {}
