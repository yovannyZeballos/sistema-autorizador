import { Component, OnInit } from '@angular/core';
import { ApexChartData, ApexRandomData, BarData, DonutChartData, PieChartData, RadialBarCircleData, RadialBarCircleMultipleData, StackedBarData } from 'src/app/shared/data/chart/apex';

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss']
})
export class ApexChartsComponent implements OnInit {
  public RandomData = ApexRandomData;
  public apexData = ApexChartData;
  public barData = BarData;
  public stackedbarData = StackedBarData;
  public donutData = DonutChartData;
  public pieData = PieChartData;
  public radicalbarData = RadialBarCircleData;
  public radicalmultipleData = RadialBarCircleMultipleData;
  constructor() { }

  ngOnInit(): void {
  }

}
