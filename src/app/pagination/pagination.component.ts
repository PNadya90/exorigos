import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  pages: number[];
  currentPage: number = 1;
  constructor(public dataProdSrv: DataProductsService) {}
  ngOnInit() {
    this.dataProdSrv.$totalPages.subscribe((res) => {
      this.pages = Array(res)
        .fill(0)
        .map((el, index) => index + 1);
    });
  }
  compare(el1, el2) {
    return el1 === el2;
  }
  changeNumItemsOnPage(event) {
    this.dataProdSrv.setItemsOnPage(event.target.value);
  }
  goToPage(page: number) {
    if (page > this.pages.length || page < 1) {
      return;
    }
    this.currentPage = page;
    this.dataProdSrv.goToPage(page);
  }
}
