import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(usuario: any) {
    console.log('favorite: ', usuario);
    this.lista.closeSlidingItems();
  }
  share(usuario: any) {
    console.log('share: ', usuario);
    this.lista.closeSlidingItems();
  }
  borrar(usuario: any) {
    console.log('borrar: ', usuario);
    this.lista.closeSlidingItems();
  }

}
