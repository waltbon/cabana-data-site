import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { IImage } from '../lib/types/cms/models/common/image.interface';
import { DatoCMSService } from '../lib/services/cms/dato-cms.service';
import { ISEO } from '../lib/types/cms/models/common/seo.interface';
import i18n from '../i18n';
import { WithTranslation } from 'next-i18next';
import { getRequestLanguage } from '../lib/language';

interface Props extends ILayoutPageProps, WithTranslation {
    crmPage: {
        seo: ISEO;
        title: string;
        headerTitle: string;
        headerParagraph: string;
        mainBackground: IImage;
    }
}

const Page: NextPage<Props> = ({ seo, crmPage }) => {
    const page = crmPage;
    return (
        <PageLayout url="/crm" seo={crmPage.seo}>
            <main className="content" id="content">
                <section className="vc_row pt-280 pb-110 bg-cover" data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;: true}" data-row-bg={crmPage.mainBackground.url}>
                    <span className="row-bg-loader" />
                    <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-8">
                                <h1 className="text-white font-size-30 text-uppercase mb-4">{crmPage.headerTitle}</h1>
                                <p className="font-size-20 lh-16 text-white pr-md-9 mr-md-9 mb-40">{crmPage.headerParagraph}</p>
                                <a href="#" target="_blank" className="btn btn-solid round font-size-12 font-weight-bold ltr-sp-2 text-uppercase px-2">
                                    <span>
                                        <span className="btn-txt">Discover Ave</span>
                                        <span className="btn-icon">
                                            <i className="fa fa-angle-right" />
                                        </span>
                                    </span>
                                </a>
                                <a href="#" target="_blank" className="btn btn-naked text-uppercase font-size-12 font-weight-bold ltr-sp-2 text-white ml-md-4">
                                    <span>
                                        <span className="btn-txt">Purchase Ave</span>
                                    </span>
                                </a>
                            </div>{/* /.lqd-column col-md-8 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </section>

            </main>
        </PageLayout>
    )
}

const QUERY = (lang: string) => `query {
    crmPage(locale: ${lang}) {
        title
        seo {
            title
            description
            image {
                url
            }
        }
        headerTitle
        headerParagraph
        mainBackground {
            url
            alt
        }
    }
}`

Page.getInitialProps = async ({ req }): Promise<any> => {
    const lang = getRequestLanguage(req, i18n.i18n);
    const cms = new DatoCMSService();
    const result = await cms.executeQuery<any>({ query: QUERY(lang) });
    return {
        ...result,
        namespacesRequired: ['common', 'header', 'footer']
    };
}

export default i18n.withTranslation('common')(Page);