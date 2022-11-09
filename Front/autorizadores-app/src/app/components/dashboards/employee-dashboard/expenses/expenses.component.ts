import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface PeriodicElement {
  id: number;
  Title: string;
  PurchaseFrom: string;
  date: string;
  Amount: string;
  paidBy: string;
  approvalStatus: string;
  approval: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, Title: 'Bike Services', PurchaseFrom:'ABC Service Center', date: '01-10-2021', Amount:'$678', paidBy:'Card', approval:'Approved', approvalStatus:'success'},
  {id: 2, Title: 'Bike Services', PurchaseFrom:'ABC Service Center', date: '01-10-2021', Amount:'$678', paidBy:'Card', approval:'Rejected', approvalStatus:'danger'},
  {id: 3, Title: 'Pens', PurchaseFrom:'Books stationery', date: '11-12-2020', Amount:'$12', paidBy:'Cash', approval:'Approved', approvalStatus:'success'},
  {id: 4, Title: 'Mouse Pad', PurchaseFrom:'Amazon', date: '21-11-2020', Amount:'$45', paidBy:'Online Payment', approval:'Pending', approvalStatus:'warning'},
  {id: 5, Title: 'Data Connection', PurchaseFrom:'PhonePe', date: '16-10-2020', Amount:'$599', paidBy:'Online Payment', approval:'Approved', approvalStatus:'success'},
  {id: 6, Title: 'Mobile Recharge', PurchaseFrom:'PhonePe', date: '15-10-2020', Amount:'$100', paidBy:'Online Payment', approval:'Approved', approvalStatus:'success'},
  {id: 7, Title: 'Bike Fuel', PurchaseFrom:'Petrol Bunk', date: '12-09-2020', Amount:'$220', paidBy:'Card', approval:'Pending', approvalStatus:'warning'},
  {id: 8, Title: 'Bike Fuel', PurchaseFrom:'Petrol Bunk', date: '12-09-2020', Amount:'$220', paidBy:'Card', approval:'Rejected', approvalStatus:'danger'},
];

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  model!: NgbDateStruct;
  model1!: NgbDateStruct;
  displayedColumns: string[] = ['id', 'Title', 'PurchaseFrom', 'date', 'Amount', 'paidBy', 'approval', 'Action'];
  dataSource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private modalService: NgbModal) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA); }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  removeData(item) {
    this.dataSource.data.map((el,ind) =>{
      if(el.id == item){
        this.dataSource.data.splice(ind, 1)
        this.dataSource._updateChangeSubscription();
      }
    })    
  }

  open(content:any) {
    this.modalService.open(content, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }
  edit(editContent:any) {
    this.modalService.open(editContent, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }
}
