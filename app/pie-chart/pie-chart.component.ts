import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from '../data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  single: any[];
  multi: any[];
  view: any[] = [700, 400];
  explodeSlices: boolean = false;
  showDoughnut: boolean = false;

  constructor() { 
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

}