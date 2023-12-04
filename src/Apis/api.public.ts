import { ApiClientService } from './axios'

class ApiService {
  public getProducts(): Promise<any> {
    const url = 'Products.json'
    return ApiClientService.get(url)
  }
}

export default new ApiService()
