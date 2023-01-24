import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataProductsService {
  url = '/assets/data.json';
  products: Product[];
  nameOrDescr: string;
  $totalPages: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  currPage: number = 1;

  $prodListFiltered: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >(null);
  $pageSize: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  $editProduct: BehaviorSubject<Product> = new BehaviorSubject(null);
  // sortedObj: SortedObjModel = new SortedObjModel();
  sortFunction: any = null;

  constructor(private http: HttpClient) {
    this.fetchData().subscribe(() => {
      this.applyFilters();
    });
  }

  setItemsOnPage(num: number) {
    this.$pageSize.next(num);
    this.applyFilters();
  }

  setProducts(newProducts: Product[]) {
    this.products = newProducts;
    this.$prodListFiltered.next(newProducts);
  }

  fetchData() {
    return this.http.get<{ products: Product[] }>(this.url).pipe(
      tap((data) => {
        this.setProducts(data.products);
      })
    );
  }

  getProducts() {
    return this.products.slice();
  }

  applyFilters() {
    let currProd = this.products.slice();
    //filter by description or name
    if (this.nameOrDescr && this.nameOrDescr !== '') {
      currProd = currProd.filter(
        (item) =>
          item.description
            .toLocaleLowerCase()
            .includes(this.nameOrDescr.toLocaleLowerCase()) ||
          item.title
            .toLowerCase()
            .includes(this.nameOrDescr.toLocaleLowerCase())
      );
    }
    const totalEl = currProd.length;
    if (this.sortFunction) {
      currProd = currProd.sort(this.sortFunction);
    }
    const pageSize = this.$pageSize.getValue();
    const offset = this.currPage * pageSize - pageSize;
    currProd = currProd.slice(offset, offset + pageSize);
    this.$totalPages.next(Math.ceil(totalEl / pageSize));
    this.$prodListFiltered.next(currProd);
  }

  addProduct(newProduct: any) {
    const newProductWithId = { ...newProduct, id: this.products.length + 1 };
    this.products.push(newProductWithId);
    this.applyFilters();
  }

  updateProduct(id: number, editedProduct: any) {
    const selectedProduct = this.products.find((item) => item.id === id);
    selectedProduct.title = editedProduct.title;
    selectedProduct.image = editedProduct.image;
    selectedProduct.description = editedProduct.description;
    selectedProduct.price = editedProduct.price;
    this.applyFilters();
  }

  setSortFunction(sortFunc: any) {
    this.sortFunction = sortFunc;
    this.applyFilters();
  }
  findByNameOrDescr(searchWord: string) {
    this.nameOrDescr = searchWord;
    this.applyFilters();
  }

  goToPage(num: number) {
    this.currPage = num;
    this.applyFilters();
  }
}
