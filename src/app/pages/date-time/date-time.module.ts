import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { DateTimePage } from './date-time.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DateTimePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [DateTimePage]
})
export class DateTimePageModule {}
