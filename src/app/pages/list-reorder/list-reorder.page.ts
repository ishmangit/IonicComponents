import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Wolverine'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {

    // Debemos implementar manualmente el movimiento del item en el array
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }
}
