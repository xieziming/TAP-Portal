import {Component, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import {BaThemePreloader} from '../../../theme/services';

import 'tap-amcharts';
import 'tap-amcharts/amcharts/plugins/responsive/responsive.js';
import 'tap-amcharts/amcharts/serial.js';

import 'tap-ammap';
import 'tap-ammap/ammap/maps/js/worldLow';


import {BaAmChartThemeService} from './baAmChartTheme.service';

@Component({
  selector: 'ba-am-chart',
  templateUrl: './baAmChart.html',
  styleUrls: ['./baAmChart.scss'],
  providers: [BaAmChartThemeService],
})
export class BaAmChart {

  @Input() baAmChartConfiguration:Object;
  @Input() baAmChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baAmChart') public _selector:ElementRef;

  constructor (private _baAmChartThemeService:BaAmChartThemeService) {
    this._loadChartsLib();
  }

  ngOnInit() {
    AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
  }

  ngAfterViewInit() {
    let chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }

  private _loadChartsLib():void {
    BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
      let amChartsReadyMsg = 'AmCharts ready';

      if (AmCharts.isReady) {
        resolve(amChartsReadyMsg);
      } else {
        AmCharts.ready(function () {
          resolve(amChartsReadyMsg);
        });
      }
    }));
  }
}
