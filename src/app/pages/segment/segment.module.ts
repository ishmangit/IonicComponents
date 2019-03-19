import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SegmentPage } from './segment.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
