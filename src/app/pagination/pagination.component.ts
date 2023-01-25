import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataProductsService } from '../services/data-products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  pages: number[];
  currentPage: number = 1;
  subscription: Subscription;
  constructor(public dataProdSrv: DataProductsService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription = this.dataProdSrv.$totalPages.subscribe((res) => {
      this.pages = Array(res)
        .fill(0)
        .map((el, index) => index + 1);
    });
  }
  compare(el1: number, el2: number) {
    return el1 === el2;
  }
  changeNumItemsOnPage(event: any) {
    this.goToPage(1);
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
