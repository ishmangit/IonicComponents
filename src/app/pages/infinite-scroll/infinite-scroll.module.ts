import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollPage } from './infinite-scroll.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollPage
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
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
