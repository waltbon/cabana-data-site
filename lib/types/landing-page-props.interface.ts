import { ISEO } from './cms/models/common/seo.interface';

export interface ILayoutPageProps {
    seo: ISEO;
    author?: string; 
    url: string;
    type?: 'website'|'article';
    hideMainHeader?: boolean;
}