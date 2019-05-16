import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { LineChartComponent} from './line-chart/line-chart.component';
import { BarChartComponent} from './bar-chart/bar-chart.component';

@NgModule({
  imports:      [ 
    CommonModule,
    BrowserModule, 
    FormsModule,
    MaterialModule,
    NgxChartsModule,
    BrowserAnimationsModule
],
  declarations: [ AppComponent, LineChartComponent, BarChartComponent ],
  exports: [FormsModule  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
