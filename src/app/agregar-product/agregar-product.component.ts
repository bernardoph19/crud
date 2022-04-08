import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-product',
  templateUrl: './agregar-product.component.html',
  styleUrls: ['./agregar-product.component.css']
})
export class AgregarProductComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "refurbished"]
  productForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {  }

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
    console.log(this.productForm.value);
  }

}
