import { BcryptService } from "../../infrastructure/security/bcryptService";


describe("BcryptService", () => {
  let bcryptService: BcryptService;

  beforeAll(() => {
    bcryptService = new BcryptService();
  });

  it("should hash a password", async () => {
    const password = "mySecret123";
    const hashed = await bcryptService.hash(password);

    expect(typeof hashed).toBe("string");
    expect(hashed).not.toBe(password);
    expect(hashed.length).toBeGreaterThan(20);
  });

  it("should return true when comparing correct password", async () => {
    const password = "testPassword";
    const hashed = await bcryptService.hash(password);

    const result = await bcryptService.compare(password, hashed);
    expect(result).toBe(true);
  });

  it("should return false when comparing wrong password", async () => {
    const password = "testPassword";
    const wrongPassword = "wrongPassword";
    const hashed = await bcryptService.hash(password);

    const result = await bcryptService.compare(wrongPassword, hashed);
    expect(result).toBe(false);
  });
});
