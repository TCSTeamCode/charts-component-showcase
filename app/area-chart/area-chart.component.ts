import { Component, OnInit } from '@angular/core';
import { single, multi } from '../data';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {
    single: any[];
    multi: any[];

    view: any[] = [900, 400];
    chartData: any = "";
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    // xAxisLabel = 'Year';
    showYAxisLabel = true;
    // yAxisLabel = 'Population';

    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

  constructor() { 
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

}