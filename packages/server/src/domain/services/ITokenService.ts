export interface ITokenService {
  hash(data: any): Promise<string>
  verify(hash: string): any
}
