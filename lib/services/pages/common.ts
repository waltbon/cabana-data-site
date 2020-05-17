import { DatoCMSService } from '../cms/dato-cms.service';

export const getCMSPageData = async <T>(query: string) => {
    const cms = new DatoCMSService();
    return cms.executeQuery<T>({ query });
}