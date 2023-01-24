import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent implements OnInit {
  id: number | null;
  productForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(0),
  });
  @ViewChild('closeModalBtn') private closeBtn: ElementRef;
  constructor(private dataProdSrv: DataProductsService) {}
  ngOnInit() {
    const myModalEl = document.getElementById('exampleModal');
    myModalEl.addEventListener('hidden.bs.modal', () => {
      this.productForm.reset();
      this.dataProdSrv.$editProduct.next(null);
      this.id = null;
    });

    this.dataProdSrv.$editProduct.subscribe((prod) => {
      if (prod) {
        this.id = prod.id;
        this.productForm.controls['title'].setValue(prod.title);
        this.productForm.controls['description'].setValue(prod.description);
        this.productForm.controls['image'].setValue(prod.image);
        this.productForm.controls['price'].setValue(prod.price);
      }
    });
  }
  onSubmit() {
    if (this.id) {
      // let product: Product = new Product(this.id, ...this.productForm.value);
      this.dataProdSrv.updateProduct(this.id, this.productForm.value);
    } else {
      this.dataProdSrv.addProduct(this.productForm.value);
    }
    this.closeBtn.nativeElement.click();
  }
}
