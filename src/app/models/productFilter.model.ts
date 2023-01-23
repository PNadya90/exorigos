import { filter } from 'rxjs';

export class ProductFilterModel {
  public sortById: string;
  public sortByName: string;
  public sortByPrice: string;
  public filterDecripOrName: string;
  public itemsOnPage: number;
  constructor(
    sortById: string,
    sortByName: string,
    sortByPrice: string,
    filterDecripOrName: string,
    itemsOnPage: number
  ) {
    this.sortById = sortById;
    this.sortByName = sortByName;
    this.sortByPrice = sortByPrice;
    this.filterDecripOrName = filterDecripOrName;
    this.itemsOnPage = itemsOnPage;
  }
}
