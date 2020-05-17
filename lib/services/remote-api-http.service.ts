import { HttpService } from './http.service';
import { APIResultBase } from './base/api-base';
const API_BASE_URL = process.env.API_HTTP_BASE;
export class RemoteAPIHttpService {
    private readonly httpSvc: HttpService;
    constructor() {
        this.httpSvc = new HttpService(API_BASE_URL);
    }

    async executePost<TData, TResult>(uri: string, data: TData): Promise<APIResultBase<TResult>> {
        const url = `/v1/api/${uri}`;
        const result = await this.httpSvc.executePost<TData, TResult>(url, data);
        return result;
    }
}