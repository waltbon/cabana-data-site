import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { IImage } from '../lib/types/cms/models/common/image.interface';
import { DatoCMSService } from '../lib/services/cms/dato-cms.service';
import { ISEO } from '../lib/types/cms/models/common/seo.interface';

interface Props extends ILayoutPageProps {
    softwareDevelopmentPage: {
        headerTitle: string;
        headerSubtitle: string;
        headerDescription: string;
        background: IImage;
        seo: ISEO;
        intro: [{
            id: string;
            title: string;
            description: string;
            iconClass: string;
        }],
        processTitle: string;
        processSubtitle: string;
        process: [{
            id: string;
            title: string;
            description: string;
            image: IImage;
        }],
    }
}

const Page: NextPage<Props> = ({ seo, softwareDevelopmentPage }) => {
    const data = softwareDevelopmentPage;
    return (
        <PageLayout seo={softwareDevelopmentPage.seo}>
            
        </PageLayout>
    )
}

const QUERY = `query {
    softwareDevelopmentPage {
        headerTitle,
        headerSubtitle,
        headerDescription,
        intro {
            id,
            title,
            description,
            iconClass
        },
        processTitle,
        processSubtitle,
        process {
            id,
            title,
            description,
            image {
                url
            }
        },
        background {
            url
        }
    }
}`

Page.getInitialProps = async (): Promise<any> => {
    const cms = new DatoCMSService();
    const result = await cms.executeQuery({ query: QUERY });
    return result;
}

export default Page;