export class Product {
  constructor(
    public readonly sku: string,
    public readonly name: string,
    public readonly slug: string,
    public readonly imageUrl: string,
    public readonly imageKey: string,
    public readonly description: string,
    public readonly quantity: number,
    public readonly price: number,
    public readonly taxable: boolean,
    public readonly isActive: boolean,
  ) {

  }
}
