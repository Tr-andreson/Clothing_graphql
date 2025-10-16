export interface ICacheService {
  set({ key, value }: { key: string, value: any }): Promise<any>
  get(key: string): Promise<any>
  delete(key: string): Promise<any>
  deleteAll(): Promise<any>

}
