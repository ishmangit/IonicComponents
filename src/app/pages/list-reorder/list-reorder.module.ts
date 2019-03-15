import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListReorderPage } from './list-reorder.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ListReorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListReorderPage]
})
export class ListReorderPageModule {}
