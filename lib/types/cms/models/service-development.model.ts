import { IImage } from './common/image.interface';

export interface ProjectType {
    name: string;
    value: string;
    description: string;
    helpDescription: string;
    image: IImage;
}