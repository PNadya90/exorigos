import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchedValue: string;
  searchInput = new FormControl();
  constructor(private dataProdSrv: DataProductsService) {}
  onSearchProduct() {
    this.dataProdSrv.goToPage(1);
    this.searchedValue = this.searchInput.value;
    this.dataProdSrv.findByNameOrDescr(this.searchedValue);
  }
}
