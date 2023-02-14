import { ISEO } from './common/seo.interface';
import { IImage } from './common/image.interface';
import { IServiceModel } from './service.model';
import { ProjectType } from './service-development.model';
import { ICapabilityModel } from './capability.model';

export interface IHomePage {
  homePage: {
    whyUsImage: IImage;
    whyUsTitle: string;
    whyUsSubtitle: string;
    whyUsDescription: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonialsImage: IImage;
    partnersTitle: string;
    partnersSubtitle: string;
    seo: ISEO;
    title: string;
    subtitle: string;
    backgroundImage: IImage;
    introTitle: string;
    introDescription: string;
    introDescriptionSecond: string;
    introSubtitle: string;
    quoteText: string;
    quoteBy: string;
    processTitle: string;
    processSubtitle: string;
    services: IHomeService[],
    process: IHomeProcess[],
    ourSkillsTitle: string;
    ourSkillsSubtitle: string;
    ourSkill: ISkill[];
  },
  allServices: IServiceModel[],
  allPartners: [{
    logo: IImage,
    id: string;
  }],
  allTestimonials: [{
    id: string;
    name: string;
    testimonial: string;
    picture: IImage,
    organization: string
  }],
  softwareDevelopmentPage: {
    formTitle: string;
    formSubtitle: string;
    projectTypes: ProjectType[];
  },
  capabilities?: ICapabilityModel[];
}

export interface IHomeProcess {
  id: string;
  title: string;
  description: string;
  imageSvg: string;
  order: number;
  waveBgHexCode: string;
}

export interface IHomeService {
  id: string;
  imageSvg: string;
  column: number;
  service: IServiceModel
}

export interface ISkill {
  id: string;
  title: string;
  description: string;
  iconClass: string;
  columnOrder: 1 | 2;
}