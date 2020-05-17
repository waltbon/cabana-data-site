import { GraphQLClient } from 'graphql-request';
import { CmsService } from './cms-service.abstract';

interface RequestProps {
    query: string;
    variables?: { limit: number };
    preview?: boolean;
  }

export class DatoCMSService extends CmsService  {
    constructor() {
        super('datocms');
    }

    private get generatePublicAuthorization(): string {
        return process.env.CMS_API;
    }

    private get generateBaseUrl(): string {
        return process.env.CMS_API_BASE_URL;
    }
 
    async executeQuery<T>(req: RequestProps): Promise<T> {
        const client = this.generateGraphqlClient();
        return client.request(req.query, req.variables);
    }

    executePost<TData, TResult>(uri: string, data: TData): Promise<TResult> {
        throw new Error('Method not implemented.');
    }


    private generateGraphqlClient() {
        return new GraphQLClient(this.generateBaseUrl, {
            headers: {
                authorization: this.generatePublicAuthorization
            }
        });
    }
    
}