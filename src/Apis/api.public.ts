import { ApiClientService } from './axios'

class ApiService {
  public getProducts(): Promise<any> {
    const url = 'Products.json'
    return ApiClientService.get(url)
  }
  public getBlogs(): Promise<any> {
    const url = 'Posts.json'
    return ApiClientService.get(url)
  }
  public getOneProduct(id: number): Promise<any> {
    const url = `Products/${id}.json`
    return ApiClientService.get(url)
  }
}

export default new ApiService()
