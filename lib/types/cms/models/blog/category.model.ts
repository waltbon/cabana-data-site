import { IImage } from '../common/image.interface';

export interface IBlogCategory {
  slug: string;
  title: string;
  coverImage: IImage;
}