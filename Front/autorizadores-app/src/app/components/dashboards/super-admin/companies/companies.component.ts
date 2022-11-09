import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface PeriodicElement {
  id: number;
  img: string;
  name: string;
  email: string;
  package : string;
  registeredBy: string;
  statusText: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, img: './assets/images/files/company/img1.png', name:'Abcd Pvt Ltd', email: 'abcd@gmail.com', package:'Basic (Monthly)', registeredBy:'12-01-2021', statusText: 'Active', status: 'success'},
  {id: 2, img: './assets/images/files/company/img2.png', name:'Croport Pvt Ltd', email: 'corport@gmail.com', package:'Premium (Yearly)', registeredBy:'5-02-2021', statusText: 'Active', status: 'success'},
  {id: 3, img: './assets/images/files/company/img3.png', name:'Kolit Pvt Ltd', email: 'kolit@gmail.com', package:'Advanced (Monthly)', registeredBy:'21-12-2020', statusText: 'Active', status: 'success'},
  {id: 4, img: './assets/images/files/company/img4.png', name:'Movck Pvt Ltd', email: 'movck@gmail.com', package:'Enterprise (Yearly) ', registeredBy:'21-09-2020', statusText: 'Active', status: 'success'},
  {id: 5, img: './assets/images/files/company/img5.png', name:'Loki Pvt Ltd', email: 'loki@gmail.com', package:'Basic (Monthly)', registeredBy:'25-07-2020', statusText: 'Active', status: 'success'},
  {id: 6, img: './assets/images/files/company/img6.png',name:'Frecho Pvt Ltd', email: 'frecho@gmail.com', package:'Premium (Yearly)', registeredBy:'22-06-2020', statusText: 'Active', status: 'success' },
  {id: 7, img: './assets/images/files/company/img7.png', name:'Mooke Pvt Ltd', email: 'mooke@gmail.com', package:'Advanced (Monthly)', registeredBy:'22-06-2020', statusText: 'Active', status: 'success'},
  {id: 8, img: './assets/images/files/company/img8.png',name:'Gomalik Pvt Ltd', email: 'gomalik@gmail.com', package:'Enterprise (Yearly)', registeredBy:'15-04-2020', statusText: 'Active', status: 'success' },
];

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'CompanyName', 'Email', 'Package', 'RegisterDate', 'Status', 'Action'];
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
      if(el.No == item){
        this.dataSource.data.splice(ind, 1)
        this.dataSource._updateChangeSubscription();
      }
    })    
  }
  edit(editContent:any) {
    this.modalService.open(editContent, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }
  change(changeContent:any) {
    this.modalService.open(changeContent, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }

  open(content:any) {
    this.modalService.open(content, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }

}
