import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataProductsService } from '../services/data-products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnDestroy {
  subscription: Subscription;
  productsList: Product[] | undefined;
  sortingObj = {
    sortedById: false,
    sortedByDescr: false,
    sortedByPrice: false,
    sortedByName: false,
  };

  constructor(private dataProdSrv: DataProductsService) {}
  ngOnInit() {
    this.subscription = this.dataProdSrv.$prodListFiltered.subscribe(
      (products: Product[]) => {
        this.productsList = products;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onEdit(product: Product) {
    this.dataProdSrv.$editProduct.next(product);
  }
  sortById() {
    this.sortingObj = {
      sortedById: !this.sortingObj.sortedById,
      sortedByDescr: false,
      sortedByPrice: false,
      sortedByName: false,
    };
    this.dataProdSrv.setSortFunction((o1: Product, o2: Product) => {
      if (this.sortingObj.sortedById) {
        return o2.id - o1.id;
      } else {
        return o1.id - o2.id;
      }
    });
  }
  sortByDescr() {
    this.sortingObj = {
      sortedById: false,
      sortedByDescr: !this.sortingObj.sortedByDescr,
      sortedByPrice: false,
      sortedByName: false,
    };
    this.dataProdSrv.setSortFunction((o1: Product, o2: Product) => {
      if (this.sortingObj.sortedByDescr) {
        return o2.description.localeCompare(o1.description);
      } else {
        return o1.description.localeCompare(o2.description);
      }
    });
  }
  sortByPrice() {
    this.sortingObj = {
      sortedById: false,
      sortedByPrice: !this.sortingObj.sortedByPrice,
      sortedByDescr: false,
      sortedByName: false,
    };
    this.dataProdSrv.setSortFunction((o1: Product, o2: Product) => {
      if (this.sortingObj.sortedByPrice) {
        return o2.price - o1.price;
      } else {
        return o1.price - o2.price;
      }
    });
  }
  sortByName() {
    this.sortingObj = {
      sortedById: false,
      sortedByName: !this.sortingObj.sortedByName,
      sortedByPrice: false,
      sortedByDescr: false,
    };
    this.dataProdSrv.setSortFunction((o1: Product, o2: Product) => {
      if (this.sortingObj.sortedByName) {
        return o2.title.localeCompare(o1.title);
      } else {
        return o1.title.localeCompare(o2.title);
      }
    });
  }
}
