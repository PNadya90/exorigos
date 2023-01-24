import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/product.model';
import { Products } from '../models/products.model';
import { SortedObjModel } from '../models/sortedObj.model';

@Injectable({
  providedIn: 'root',
})
export class DataProductsService {
  url = '/assets/data.json';
  products: Product[];
  nameOrDescr: string;
  totalPages: number;
  currPage: number = 1;

  $prodListFiltered: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >(null);
  $pageSize: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  $editProduct: BehaviorSubject<Product> = new BehaviorSubject(null);
  // sortedObj: SortedObjModel = new SortedObjModel();
  sortFunction: any = null;

  constructor(private http: HttpClient) {
    this.fetchData().subscribe();
  }

  setItemsOnPage(num: number) {
    this.$pageSize.next(num);
  }

  setProducts(newProducts: Product[]) {
    this.products = newProducts;
    this.$prodListFiltered.next(newProducts);
  }

  fetchData() {
    return this.http.get<Products>(this.url).pipe(
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
    if (this.sortFunction) {
      currProd = currProd.sort(this.sortFunction);
    }
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
    this.$prodListFiltered.next(currProd);
  }

  addProduct(newProduct: any) {
    const newProductWithId = { ...newProduct, id: this.products.length + 1 };
    this.products.push(newProductWithId);
    // console.log(this.products);
  }

  updateProduct(id: number, editedProduct: any) {
    console.log(id, editedProduct);
    const selectedProduct = this.products.find((item) => item.id === id);
    selectedProduct.title = editedProduct.title;
    selectedProduct.image = editedProduct.image;
    selectedProduct.description = editedProduct.description;
    selectedProduct.price = editedProduct.price;
    this.applyFilters();
  }

  // setSortObject(sortedObj: SortedObjModel) {
  //   this.sortedObj = sortedObj;
  //   this.applyFilters();
  // }
  setSortFunction(sortFunc: any) {
    this.sortFunction = sortFunc;
    this.applyFilters();
  }
  findByNameOrDescr(searchWord: string) {
    this.nameOrDescr = searchWord;
    this.applyFilters();
  }
}
