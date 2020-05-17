import Axios, { AxiosError, AxiosResponse } from 'axios';

export const executePost = async <T, TResult>(url: string, data: T): Promise<APIResultBase<TResult>> => {
    try {
        const result = await Axios.post<TResult>(url, data);
        return new OkResult(result.data);
    } catch (error) {
        console.log("error", error)
        throw new BadRequestResult(error.data);
    }
}

export abstract class APIResultBase<T> {
    constructor(public readonly status: number) {
    }
    
    get success(): boolean {
        return this.status === 200;
    }

    data?: T;
}

export class OkResult<T> extends APIResultBase<T> {
    constructor(public readonly data: T) {
        super(200);
    }
    success: boolean;
}

export class BadRequestResult extends APIResultBase<any> {
    constructor(private readonly err: AxiosResponse) {
        super(400);
    }

    get message(): string {
        return this.err.data;
    }
}