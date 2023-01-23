import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchedValue: string;
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });
  constructor(private dataProdSrv: DataProductsService) {}
  onSearchProduct(e: Event) {
    e.preventDefault();
    this.searchedValue = this.searchForm.value.searchInput;
    // console.log(this.searchedValue);
    this.dataProdSrv.filterProducts(this.searchedValue);
    this.searchForm.reset();
  }
}
