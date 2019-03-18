import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalInfoPage } from './../modal-info/modal-info.page';
import { ModalInfoPageModule } from './../modal-info/modal-info.module';
import { ModalPage } from './modal.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  entryComponents: [
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ModalInfoPageModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
