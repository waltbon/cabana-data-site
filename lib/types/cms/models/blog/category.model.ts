import { IImage } from '../common/image.interface';

export interface IBlogCategory {
  slug: string;
  id: string;
  title: string;
  coverImage: IImage;
}