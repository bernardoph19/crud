import { AgregarProductComponent } from './agregar-product/agregar-product.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private dialog: MatDialog) {
  }


  public addProduct() {
    this.dialog.open(AgregarProductComponent)
  }


}
