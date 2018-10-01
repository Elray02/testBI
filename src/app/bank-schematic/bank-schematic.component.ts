import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { BankServiceService } from '../service/bank-service.service';
import { BankDataModel } from '../model/BankData.model';

import { BaseChartDirective } from 'ng2-charts';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-bank-schematic',
  templateUrl: './bank-schematic.component.html',
  styleUrls: ['./bank-schematic.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]

})
export class BankSchematicComponent implements OnInit {


  cardData: Array<BankDataModel>;
  dataSource: MatTableDataSource<BankDataModel>;
  isLoadingResults = true;
  public barChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          steps: 1,
          stepValue: 1,
          max: 105,
        }
      }],
    }
  };

  barChartColor = [''];
  barChartType = 'line';
  barChartLegend = true;
  displayedColumns: string[] = ['name', 'total'];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  label = [];
  count = [];
  barChartLabels = this.label;
  barChartData: any[] = [
    { data: this.count, label: 'number of connection' },
  ];

  constructor(private bankApi: BankServiceService) {

  }

  ngOnInit() {
    this.callApi();
  }


  callApi() {
    this.bankApi.doGET().subscribe(data => {
      // take only the user connect
      this.cardData = data.filter(end => {
        return end.stats['total'] > 0;
      });
// put the data in the list
      this.dataSource = new MatTableDataSource(this.cardData);
      this.dataSource.paginator = this.paginator;
// put the data in the chart
      this.cardData.forEach(y => {
        this.label.push(y.name);
        this.count.push(y.stats['total']);
      });
      // refresh the chart with the new data
      this.reloadChart();
      this.isLoadingResults = false;
    }
    );
  }

  reloadChart() {
    if (this.chart !== undefined) {
      this.chart.chart.destroy();
      this.chart.chart = 0;

      this.chart.datasets = this.barChartData;
      this.chart.labels = this.barChartLabels;
      this.chart.ngOnInit();
    }
  }
}
