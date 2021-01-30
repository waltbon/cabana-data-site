import { IImage, ISEO } from './common';

export interface IContact {
  contact: {
    seo: ISEO;
    title: string;
    subtitle: string;
    backgroundImage: IImage;
  }
}