import { DatoCMSService } from '../cms/dato-cms.service'
import { IContact } from '../../types/cms/models/contact.model';

const query = (lang: string) => `query {
  contact(locale: ${lang}) {
    seo {
      title,
      description,
    },
    title,
    subtitle,
    backgroundImage {
      url(imgixParams: {fm: jpg, q: 50, fit: crop, w: 2160, h: 1200}),
      alt
    }
  }
}`;

export const getContactPage = async (lang: string): Promise<IContact> => {
  const cms = new DatoCMSService();
  return cms.executeQuery<IContact>({ query: query(lang) });
}