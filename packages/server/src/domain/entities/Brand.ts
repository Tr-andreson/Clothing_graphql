export class BrandEntity {
  constructor(
    public readonly name: string,
    public readonly slug: string,
    public readonly imageUrl: string,
    public readonly description: string,
    public readonly isActive: boolean,
  ) {

  }

}
