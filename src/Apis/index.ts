import axios, { AxiosResponse } from 'axios'
import HttpStatusCode from '~/Utils/http'

interface IConfig {
  token?: string
}

class ApiClient {
  private host: string
  private prefix: string
  private headers: {
    Accept: string
    Authorization?: string
  }

  constructor(host: string, prefix: string) {
    this.host = host
    this.prefix = prefix
    this.headers = {
      Accept: 'application/json'
    }
  }

  private get basePath(): string {
    return this.host + '/' + this.prefix
  }

  public async get(path: string, config: IConfig = {}): Promise<any> {
    if (config.token) {
      this.headers.Authorization = 'Bearer ' + config.token
    }
    const res: AxiosResponse<any> = await axios.get(this.basePath + path, {
      headers: this.headers
    })
    if (res.status === HttpStatusCode.SUCCESS) {
      return res.data
    } else {
      throw new Error('Yêu cầu không thành công')
    }
  }

  public async post(path: string, body: any, config: IConfig = {}): Promise<any> {
    if (config.token) {
      this.headers.Authorization = 'Bearer ' + config.token
    }
    const res: AxiosResponse<any> = await axios.post(this.basePath + path, body, {
      headers: this.headers
    })
    if (res.status === HttpStatusCode.CREATED || res.status === HttpStatusCode.SUCCESS) {
      return res.data
    } else {
      throw new Error('Yêu cầu không thành công')
    }
  }

  public async put(path: string, body: any, config: IConfig = {}): Promise<any> {
    if (config.token) {
      this.headers.Authorization = 'Bearer ' + config.token
    }
    const res: AxiosResponse<any> = await axios.put(this.basePath + path, body, {
      headers: this.headers
    })
    if (res.status === HttpStatusCode.SUCCESS) {
      return res.data
    } else {
      throw new Error('Yêu cầu không thành công')
    }
  }

  public async delete(path: string, config: IConfig = {}): Promise<any> {
    if (config.token) {
      this.headers.Authorization = 'Bearer ' + config.token
    }
    const res: AxiosResponse<any> = await axios.delete(this.basePath + path, {
      headers: this.headers
    })
    if (res.status === HttpStatusCode.SUCCESS) {
      return res.data
    } else {
      throw new Error('Yêu cầu không thành công')
    }
  }
}

export default ApiClient
