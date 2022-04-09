import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-agregar-product',
  templateUrl: './agregar-product.component.html',
  styleUrls: ['./agregar-product.component.css']
})
export class AgregarProductComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "refurbished"]
  productForm!: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
               private api:ApiService,
               private dialogRef:MatDialogRef<AgregarProductComponent>
               )
             {  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category:    ['', Validators.required],
      freshness:   ['', Validators.required],
      price:       ['', Validators.required],
      comment:     ['', Validators.required],
      date:        ['', Validators.required]
    })

  }

  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
        alert("Prdocuto addd exitosamente");
        this.productForm.reset();
        this.dialogRef.close('save');
      },
        error:()=>{
          alert("Error al Agregar el producto");
        }
      })
    }
  }

}
