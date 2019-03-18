import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'Ismael 2',
      pais: 'España 2'
    });
  }

}
