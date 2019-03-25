import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';

import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(usuario: any) {
    // console.log('favorite: ', usuario);
    this.presentToast('Se ha guardado en favoritos');
    this.lista.closeSlidingItems();
  }
  share(usuario: any) {
    // console.log('share: ', usuario);
    this.presentToast('Elemento compartido');
    this.lista.closeSlidingItems();
  }
  borrar(usuario: any) {
    // console.log('borrar: ', usuario);
    this.presentToast('Elemento borrado');
    this.lista.closeSlidingItems();
  }

}
