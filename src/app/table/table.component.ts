import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataProductsService } from '../services/data-products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  subscription: Subscription;
  productsList: Product[] | undefined;
  constructor(private dataProdSrv: DataProductsService) {}
  ngOnInit() {
    this.subscription = this.dataProdSrv.$prodListFiltered.subscribe(
      (products: Product[]) => {
        this.productsList = products;
      }
    );
  }
  onEdit(product: Product) {
    this.dataProdSrv.$editProduct.next(product);
  }
}
