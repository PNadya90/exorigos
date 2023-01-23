export class Product {
  public id?: number;
  public title: string;
  public description: string;
  public price: number;
  public image: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
