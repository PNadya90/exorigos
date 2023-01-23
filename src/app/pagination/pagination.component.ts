import { Component } from '@angular/core';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  constructor(public dataProdSrv: DataProductsService) {}
  compare(el1, el2) {
    return el1 === el2;
  }
  changeNumItemsOnPage(event) {
    this.dataProdSrv.setItemsOnPage(event.target.value);
  }
}
