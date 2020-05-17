import axios, { AxiosInstance } from 'axios';
import { OkResult, APIResultBase, BadRequestResult } from './base/api-base';

export class HttpService {
    constructor(private readonly baseUrl: string) {}

    async executeGet<T>(url: string): Promise<T> {
        const instance = this.generateAxiosInstance();
        const result = await instance.get<T>(url);
        return result.data;
    }

    async executePost<TData, TResult>(url: string, data: TData): Promise<APIResultBase<TResult>> {
        const instance = this.generateAxiosInstance();

        try {
            const result = await instance.post<TResult>(url, data);
            return new OkResult(result.data);
        } catch (error) {
            console.log("HttpService -> constructor -> error", error)
            throw new BadRequestResult(error.response);
        }
    }

    private generateAxiosInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}