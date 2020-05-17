export abstract class CmsService {
    constructor(private readonly cms: 'datocms'|'sanity') {
    }

    abstract executeQuery<T>({}: any): Promise<T>;
    abstract executePost<TData, TResult>(uri: string, data: TData): Promise<TResult>;
}