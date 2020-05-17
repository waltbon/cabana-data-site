import { DatoCMSService } from '../cms/dato-cms.service'
import { IServicio } from '../../types/cms/servicio/servicio.interface';
import { IServicioPagina } from '../../types/cms/servicio/servicio-pagina.interface';

const SERVICES_QUERY = `query {
  allServicios {
    nombre
    id
    descripcion
    background {
      url
    }
  }
  servicioPagina {
    seo {
      description
      title
      image {
        url
      }
    }
    slug
    titulo
    id
    background {
      url
    }
  }
}`;

export interface IServicioPage {
  allServicios: IServicio[];
  servicioPagina: IServicioPagina;
}

export const getServicesPageData = async (): Promise<IServicioPage> => {
  const cms = new DatoCMSService();
  const result = await cms.executeQuery<IServicioPage>({ query: SERVICES_QUERY });
  console.log("result", result)
  return result;
}