import { ISEO } from '../common/seo.interface';
import { IImage } from '../common/image.interface';

export interface IBlogPost {
  seo: ISEO;
  slug: string;
  title: string;
  content: string;
  author: IAuthor;
  coverImage: IImage;
  publicationDate: Date;
  tags: IPostTag[];
}

export interface IAuthor {
  name: string;
  picture: IImage;
  bio: string;
}

export interface IPostTag {
  tag: string;
  slug: string;
}