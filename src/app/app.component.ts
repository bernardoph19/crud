import { AgregarProductComponent } from './agregar-product/agregar-product.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular';
  displayedColumns: string[] = ['productName', 'category', 'freshness', 'price', 'date','comment','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog: MatDialog,
              private api:ApiService) 
              { }

  ngOnInit(): void {
    this.getAllProduct();
  }


  public addProduct() {
    this.dialog.open(AgregarProductComponent,{
      width: '30%'
    });
  }


  getAllProduct(){
    this.api.getPrdouct().subscribe({
      next:(res)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator,
       this.dataSource.sort  = this.sort;
      },
      error:(error)=>{
        alert("Error while Fectchiks this Records !!")
      }
    })
  }






}
