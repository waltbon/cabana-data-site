import { DatoCMSService } from '../cms/dato-cms.service'
import { IHomePage } from '../../types/cms/models/home.model';

const HOMEPAGE_QUERY = (lang: string) => `query {
  homePage(locale: ${lang}) {
    seo {
      title,
      description,
      image {
        url
      }
    },
    title,
    subtitle,
    backgroundImage {
      url,
      alt
    },
    introTitle,
    introDescription,
    introDescriptionSecond,
    quoteText,
    quoteBy,
    processTitle,
    processSubtitle,
    services {
      id,
      column,
      imageSvg,
      service {
        title,
        shortDescription,
        slug
      }
    },
    process {
      id,
      title,
      description,
      imageSvg,
      order,
      waveBgHexCode
    },
    ourSkillsTitle,
    ourSkillsSubtitle,
    ourSkill {
      id,
      title,
      description,
      iconClass,
      columnOrder
    }
  }
  allServices {
    slug
    title
    shortDescription
  },
  allPartners {
    id,
    logo {
      url,
      alt
    }
  },
  allTestimonials {
    id,
    name,
    testimonial,
    organization,
    picture {
      url
    }
  },
  softwareDevelopmentPage {
    formTitle,
    formSubtitle,
    projectTypes {
      name,
      value,
      id,
      helpDescription,
      description,
      image {
          url,
          alt
      }
    }
  }
}`;

export const getHomePageData = async (lang: string): Promise<IHomePage> => {
  const cms = new DatoCMSService();
  const result = await cms.executeQuery<IHomePage>({ query: HOMEPAGE_QUERY(lang) });
  return result;
}