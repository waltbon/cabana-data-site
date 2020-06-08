import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import i18n from '../i18n';
import { IImage } from '../lib/types/cms/models/common/image.interface';
import { DatoCMSService } from '../lib/services/cms/dato-cms.service';
import { ISEO } from '../lib/types/cms/models/common/seo.interface';
import { WithTranslation } from 'next-i18next';
import { getRequestLanguage } from '../lib/language';
import { ISkill } from '../lib/types/cms/models/home.model';

interface Props extends ILayoutPageProps, WithTranslation {
    crmPage: {
        seo: ISEO;
        title: string;
        headerTitle: string;
        headerParagraph: string;
        mainBackground: IImage;
        featuresTitle: string;
        featuresSubtitle: string;
        features: ISkill[];
        pictureBlocks: [{
            id: string;
            image: IImage;
            title: string;
        }]
    }
}

const Page: NextPage<Props> = ({ t, crmPage }) => {
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
                                <h5 className="text-white text-uppercase mb-2 pb-2">CRM (Customer Relationship Management)</h5>
                                <h1 className="text-white  mb-4">{crmPage.headerTitle}</h1>
                                <p className="font-size-20 lh-16 text-white pr-md-9 mr-md-9 mb-40">{crmPage.headerParagraph}</p>
                                <a href="#" target="_blank" className="btn btn-solid round font-size-12 font-weight-bold ltr-sp-2 text-uppercase px-2">
                                    <span>
                                        <span className="btn-txt">{t('common_continue')}</span>
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

                <section id="about" className="vc_row pt-110 pb-65">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-8 col-md-offset-2">
                                <header className="fancy-title text-center mb-75">
                                    <span className="lb-cb-subtitle text-uppercase ltr-sp-2 pb-4">CRM</span>
                                    <h2 className="pb-4">{crmPage.featuresTitle}</h2>
                                    <div className="font-size-18 lh-16 px-6" dangerouslySetInnerHTML={{__html: crmPage.featuresSubtitle}}></div>
                                </header>{/* /.fancy-title */}
                            </div>{/* /.col-md-6 col-md-offset-3 */}
                        </div>{/* /.row */}


                        <div className="row" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-column&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;120&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateX&quot;:30,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateX&quot;:0,&quot;opacity&quot;:1}}">
                            {
                                Array.isArray(crmPage.features) && crmPage.features.map(feature =>
                                    <div key={feature.id} className="lqd-column col-md-3 col-sm-6">
                                        <div className="iconbox iconbox-heading-xs iconbox-xl">
                                            <div className="iconbox-icon-wrap">
                                                <span className="iconbox-icon-container mb-30">
                                                    <i className="icon-basic_webpage_multiple" />
                                                </span>
                                            </div>
                                            <div className="contents">
                                                <h3 className="mb-15">{feature.title}</h3>
                                                <p>{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                </section>

                <section className="vc_row bg-light">
                    <div className="container-fluid px-0">
                        {
                            Array.isArray(crmPage.pictureBlocks) && crmPage.pictureBlocks.map(picBlock => (
                                <div className="row mx-0 d-md-flex flex-wrap align-items-stretch">
                                    <div className="lqd-column col-lg-6 col-xs-12 visible-lg px-0 bg-cover" data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;: true}" style={{ backgroundImage: `url(${picBlock.image.url})` }}>
                                    </div>
                                    <div className="lqd-column col-lg-6 col-xs-12 pt-7 pb-4 pb-lg-7 d-md-flex flex-wrap align-content-center">
                                        <div className="row">
                                            <div className="col-md-10 col-md-offset-1 pt-lg-6 pb-lg-5" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;120&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:30,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                                <header className="fancy-title">
                                                    <h6 className="font-size-12 text-uppercase ltr-sp-1 text-primary">{picBlock.title}</h6>
                                                    <h2 className="font-weight-bold text-uppercase ltr-sp-1">{picBlock.title}</h2>
                                                    <i className="line w-5 circle border-color-primary" />
                                                </header>
                                                <p className="font-size-18 lh-185">A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>))
                        }
                    </div>
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
            url(imgixParams: {fm: jpg, q: 50, fit: crop, w: 1260, h: 600}),
            alt
        }
        featuresTitle
        featuresSubtitle
        features {
            id
            title
            description
            iconClass
            columnOrder
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