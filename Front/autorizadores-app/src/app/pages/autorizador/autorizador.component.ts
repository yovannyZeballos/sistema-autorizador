import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-autorizador',
  templateUrl: './autorizador.component.html',
  styleUrls: ['./autorizador.component.scss'],
})
export class AutorizadorComponent implements OnInit {
  data1: any[] = [
    {
      codigo: 1,
      paterno: 'Bella',
      materno: 'Chloe',
      nombre: 'System Developer',
      ingreso: '2018/03/12',
      estado: 'A',
      documento: '56765675',
    },
    {
      codigo: 2,
      paterno: 'Donna',
      materno: 'Bond',
      nombre: 'Account Manager',
      ingreso: '2012/02/21',
      estado: 'A',
      documento: '565443455',
    },
    {
      codigo: 3,
      paterno: 'Harry',
      materno: 'Carr',
      nombre: 'Technical Manager',
      ingreso: '20011/02/87',
      estado: 'A',
      documento: '56786556',
    },
    {
      codigo: 4,
      paterno: 'Lucas',
      materno: 'Dyer',
      nombre: 'Javascript Developer',
      ingreso: '2014/08/23',
      estado: 'A',
      documento: '98554125',
    },
    {
      codigo: 5,
      paterno: 'Karen',
      materno: 'Hill',
      nombre: 'Sales Manager',
      ingreso: '2010/7/14',
      estado: 'A',
      documento: '88521456',
    },
    {
      codigo: 6,
      paterno: 'Dominic',
      materno: 'Hudson',
      nombre: 'Sales Assistant',
      ingreso: '2015/10/16',
      estado: 'A',
      documento: '54777411',
    },
    {
      codigo: 7,
      paterno: 'Herrod',
      materno: 'chanler',
      nombre: 'Integration Spciaist',
      ingreso: '2012/0/06',
      estado: 'A',
      documento: '54777411',
    },
    {
      codigo: 8,
      paterno: 'Jonathan',
      materno: 'Ince',
      nombre: 'junior Manager',
      ingreso: '2012/11/23',
      estado: 'A',
      documento: 'j54777411',
    },
    {
      codigo: 9,
      paterno: 'Leonard',
      materno: 'Ellison',
      nombre: 'Junior Javascript Developer',
      ingreso: '2010/03/19',
      estado: 'A',
      documento: '54777411',
    },
    {
      codigo: 10,
      paterno: 'Madeleine',
      materno: 'Lee',
      nombre: 'Software Developer',
      ingreso: '2015/8/23',
      estado: 'A',
      documento: '98554125',
    },
  ];

  data2: any[] = [
    {
      autorizador: '000001',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 1,
      paterno: 'Bella',
      materno: 'Chloe',
      nombre: 'System Developer',
      ingreso: '2018/03/12',
      estado: 'A',
      documento: '56765675',
    },
    {
      autorizador: '000002',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 2,
      paterno: 'Donna',
      materno: 'Bond',
      nombre: 'Account Manager',
      ingreso: '2012/02/21',
      estado: 'A',
      documento: '565443455',
    },
    {
      autorizador: '000003',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 3,
      paterno: 'Harry',
      materno: 'Carr',
      nombre: 'Technical Manager',
      ingreso: '20011/02/87',
      estado: 'A',
      documento: '56786556',
    },
    {
      autorizador: '000004',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 4,
      paterno: 'Lucas',
      materno: 'Dyer',
      nombre: 'Javascript Developer',
      ingreso: '2014/08/23',
      estado: 'A',
      documento: '98554125',
    },
    {
      autorizador: '000005',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 5,
      paterno: 'Karen',
      materno: 'Hill',
      nombre: 'Sales Manager',
      ingreso: '2010/7/14',
      estado: 'A',
      documento: '88521456',
    },
    {
      autorizador: '000006',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 6,
      paterno: 'Dominic',
      materno: 'Hudson',
      nombre: 'Sales Assistant',
      ingreso: '2015/10/16',
      estado: 'A',
      documento: '54777411',
    },
    {
      autorizador: '000007',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 7,
      paterno: 'Herrod',
      materno: 'chanler',
      nombre: 'Integration Spciaist',
      ingreso: '2012/0/06',
      estado: 'A',
      documento: '54777411',
    },
    {
      autorizador: '000008',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 8,
      paterno: 'Jonathan',
      materno: 'Ince',
      nombre: 'junior Manager',
      ingreso: '2012/11/23',
      estado: 'A',
      documento: 'j54777411',
    },
    {
      autorizador: '000009',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 9,
      paterno: 'Leonard',
      materno: 'Ellison',
      nombre: 'Junior Javascript Developer',
      ingreso: '2010/03/19',
      estado: 'A',
      documento: '54777411',
    },
    {
      autorizador: '000010',
      registro: '2022/01/01',
      tarjeta: '87421451',
      impresa: 'S',
      codigo: 10,
      paterno: 'Madeleine',
      materno: 'Lee',
      nombre: 'Software Developer',
      ingreso: '2015/8/23',
      estado: 'A',
      documento: '98554125',
    },
  ];

  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;

  displayedColumns1: string[] = [
    'select',
    'codigo',
    'paterno',
    'materno',
    'nombre',
    'ingreso',
    'estado',
    'documento',
  ];
  displayedColumns2: string[] = [
    'select',
    'autorizador',
    'registro',
    'tarjeta',
    'impresa',
    'codigo',
    'paterno',
    'materno',
    'nombre',
    'ingreso',
    'estado',
    'documento',
  ];
  dataSource1 = new MatTableDataSource<any>(this.data1);
  dataSource2 = new MatTableDataSource<any>(this.data2);
  selection1 = new SelectionModel<any>(true, []);
  selection2 = new SelectionModel<any>(true, []);
  public isClosed1 = false;
  public isCollapsed1 = false;
  public isClosed2 = false;
  public isCollapsed2 = false;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator1;
    this.dataSource2.paginator = this.paginator2;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected1() {
    const numSelected = this.selection1.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;
  }

  isAllSelected2() {
    const numSelected = this.selection2.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle1() {
    if (this.isAllSelected1()) {
      this.selection1.clear();
      return;
    }

    this.selection1.select(...this.dataSource1.data);
  }

  masterToggle2() {
    if (this.isAllSelected2()) {
      this.selection2.clear();
      return;
    }

    this.selection2.select(...this.dataSource2.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel1(row?: any): string {
    if (!row) {
      return `${this.isAllSelected1() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection1.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  checkboxLabel2(row?: any): string {
    if (!row) {
      return `${this.isAllSelected2() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  ngOnInit(): void {}

  Collapsetoggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  Closetoggle1() {
    this.isClosed1 = true;
  }

  Collapsetoggle2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  Closetoggle2() {
    this.isClosed2 = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
}
