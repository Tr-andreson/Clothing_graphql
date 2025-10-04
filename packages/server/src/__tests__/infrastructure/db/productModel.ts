import { ProductRepository } from "../../../infrastructure/db/mongodb/productModel"

describe("Product model", () => {
  let productRepository: ProductRepository;


  beforeAll(() => {
    productRepository = new ProductRepository()
  })

  it("Should return products", async () => {
    const product = await productRepository.findAll()
    expect(product).not.toBe(product)
  })

})
