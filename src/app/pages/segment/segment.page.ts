import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  superHeroes: Observable<any>;
  segmentoFiltro = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;
    if (valorSegmento !== 'todos') {
      this.segmentoFiltro = valorSegmento;
    } else {
      this.segmentoFiltro = '';
    }
  }

}
