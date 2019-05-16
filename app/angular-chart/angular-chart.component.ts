import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from '../data';

@Component({
  selector: 'app-angular-chart',
  templateUrl: './angular-chart.component.html',
  styleUrls: ['./angular-chart.component.css']
})
export class AngularChartComponent implements OnInit {
  single: any[];
  multi: any[];
  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
  constructor() { 
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

}