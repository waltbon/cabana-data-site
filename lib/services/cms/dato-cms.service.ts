import { GraphQLClient } from 'graphql-request';
import { CmsService } from './cms-service.abstract';

const IS_PREVIEW = process.env.CMS_PREVIEW === '1';
const CMS_URL = process.env.CMS_API_BASE_URL;

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
 
    async executeQuery<T>(req: RequestProps): Promise<T> {
        const client = this.generateGraphqlClient();
        return client.request(req.query, req.variables);
    }

    executePost<TData, TResult>(uri: string, data: TData): Promise<TResult> {
        throw new Error('Method not implemented.');
    }


    private generateGraphqlClient() {
        const url = `${CMS_URL}${IS_PREVIEW ? '/preview':''}`;
        return new GraphQLClient(url, {
            headers: {
                authorization: this.generatePublicAuthorization
            }
        });
    }
    
}