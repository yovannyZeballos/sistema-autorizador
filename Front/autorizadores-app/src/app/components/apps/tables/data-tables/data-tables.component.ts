import { Component, OnInit } from '@angular/core';
import { DataTable } from 'src/app/shared/data/tables_data/data_table';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

  data1 : any[] = [
    { codigo: 1 },
  ]

  dataTable = this.data1;
  constructor() { }

  ngOnInit(): void {
  }

}
