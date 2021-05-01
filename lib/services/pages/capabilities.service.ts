import { ICapabilityModel } from '../../types/cms/models';
import { DatoCMSService } from '../cms/dato-cms.service'

const QUERY = (lang: string) => `query {
  allCapabilities(locale: ${lang}) {
    id,
    title,
    shortDescription,
    svgIcon,
    order
  }
}`;

export const getCapabilities = async (lang: string): Promise<ICapabilityModel[]> => {
  const cms = new DatoCMSService();
  const data = await cms.executeQuery<any>({ query: QUERY(lang) });
  return data ? data.allCapabilities : [];
}