import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {

  @Input() public title: string = 'Sin titulo';

  @Input('labels') public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];

  @Input() public datasets: number[] = [];

 public doughnutChartData!: ChartData<'doughnut'>;

  ngOnInit() {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.datasets }],
    };
  }
}
