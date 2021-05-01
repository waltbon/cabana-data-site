import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { IImage } from '../lib/types/cms/models/common/image.interface';
import { DatoCMSService } from '../lib/services/cms/dato-cms.service';
import { ISEO } from '../lib/types/cms/models/common/seo.interface';
import SoftwareDevelopmentForm from '../component/forms/SoftwareDevelopmentForm';
import { withTranslation, WithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props extends ILayoutPageProps, WithTranslation {
    softwareDevelopmentPage: {
        headerTitle: string;
        headerSubtitle: string;
        headerDescription: string;
        background: IImage;
        seo: ISEO;
        tabsHeader: string;
        tabsImage: IImage;
        tabsInfo: [{
            id: string;
            title: string;
            content: string;
        }];
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
        formTitle: string;
        formSubtitle: string;
        formTitlebarTitle: string;
        formTitlebarSubtitle: string;
        projectTypes: [{
            name: string;
            value: string;
            helpDescription: string;
            description: string;
            image: IImage;
        }]
    }
}

const Page: NextPage<Props> = ({ seo, softwareDevelopmentPage, lang }) => {
    const page = softwareDevelopmentPage;
    return (
        <PageLayout lang={lang} url="/software-development" seo={softwareDevelopmentPage.seo}>
            <section className="vc_row pt-280 d-flex flex-wrap align-items-center bg-cover bg-center pb-200" data-parallax="true" data-parallax-options="{ parallaxBG: true }" data-row-bg={page.background.url} style={{ background: 'linear-gradient(65deg, #2D3252 20%, rgba(137, 135, 226, 0.084) 100%)' }}><span className="row-bg-loader" />
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-7" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:91, &quot;opacity&quot;: 0},&quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;: 1}}">
                            <h5 className="text-white text-uppercase mb-2 pb-2">{page.headerSubtitle}</h5>
                            <h2 className="text-white mask-text font-weight-bold mt-2 pr-md-7" data-fittext="true" data-fittext-options="{ &quot;compressor&quot;:0.5,&quot;maxFontSize&quot;: 55,&quot;minFontSize&quot;: 36 }" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}">{page.headerTitle}</h2>
                            <p className="text-white font-size-20">{page.headerDescription}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vc_row bg-athens-gray pt-90 pb-80 mb-40">
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-lg-6">
                            <h2 className="font-size-38 lh-13 mt-0 mb-30" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}" data-text-rotator="true">
                                {page.tabsHeader} <span>{'['}</span>
                                <span className="txt-rotate-keywords">
                                    <span className="keyword active">ReactJS</span>
                                    <span className="keyword">AWS</span>
                                    <span className="keyword">Docker</span>
                                    <span className="keyword">GitHub</span>
                                </span>{/* /.txt-rotate-keywords */}
                                <span>{']'}</span>
                            </h2>
                            <div className="accordion accordion-md accordion-title-underlined accordion-expander-left accordion-active-color-primary" id="vc_accordion_5c77a7f9d2896" role="tablist">
                                {
                                    Array.isArray(page.tabsInfo) && page.tabsInfo.map(ti => {
                                        const isFirst = page.tabsInfo.indexOf(ti) === 0;
                                        return (<div key={ti.id} className={`accordion-item panel ${isFirst ? 'active' : ''}`}>
                                            <div key={ti.id} className="accordion-heading" role="tab" id={`heading_${ti.id}`}>
                                                <h4 className="accordion-title font-size-17 lh-15">
                                                    <a data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href={`#${ti.id}`} aria-expanded="true" aria-controls={ti.id}>
                                                        {ti.title}
                                                        <span className="accordion-expander">
                                                            <i className="fa fa-angle-down" />
                                                            <i className="fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h4>
                                            </div>{/* /.accordion-heading */}
                                            <div id={ti.id} className={`accordion-collapse collapse ${isFirst ? 'in' : ''}`} role="tabpanel" aria-labelledby={`heading_${ti.id}`}>
                                                <div className="accordion-content">
                                                    <div dangerouslySetInnerHTML={{ __html: ti.content }}></div>{/* /.accordion-content */}
                                                </div>{/* /.accordion-collapse */}
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="lqd-column col-lg-5 col-lg-offset-1">
                            <div className="liquid-img-group-container">
                                <div className="liquid-img-group-inner">
                                    <div className="liquid-img-group-single" data-shadow-style={3} data-roundness={6} data-inview="true" data-animate-shadow="true">
                                        <div className="liquid-img-group-img-container">
                                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from="{&quot;translateX&quot;:60}" data-parallax-to="{&quot;translateX&quot;:0}" data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;easing&quot;:&quot;linear&quot;}">
                                                <figure>
                                                    <img src={page.tabsImage.url} alt={page.tabsImage.alt} />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="vc_row pt-100 pb-60">
                <div className="container">
                    <div className="row" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-column&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;200&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;backward&quot;,&quot;initValues&quot;:{&quot;translateX&quot;:35,&quot;translateY&quot;:35,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateX&quot;:0,&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                        {
                            Array.isArray(page.intro) && page.intro.map(key => {
                                return (
                                    <div className="lqd-column col-md-4" key={key.id}>
                                        <div className="iconbox iconbox-side iconbox-sm iconbox-heading-sm" data-plugin-options="{&quot;color&quot;: &quot;#dd6a9d&quot;}">
                                            <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><i className={key.iconClass} /></span></div>
                                            <div className="contents">
                                                <h3>{key.title}</h3>
                                                <p>{key.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="vc_row pt-80 pb-80 bg-cover" data-parallax="true" data-parallax-options="{ parallaxBG: true }" style={{ backgroundImage: 'url(/assets/img/misc/shapes.jpg)' }}>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-8 col-md-offset-2 text-center">
                            <h2 className="text-uppercase text-white mt-0 pb-10">{softwareDevelopmentPage.formTitle}</h2>
                            <p className="font-size-18 text-white px-md-7 mx-md-3 mb-50 pb-60">{softwareDevelopmentPage.formTitlebarSubtitle}</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="vc_row">
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-12 px-4 pt-45 pb-60 bg-white mb-65 box-shadow-1 pull-up">
                            <div className="row pt-20">
                                <div className="lqd-column col-md-10 col-md-offset-1">
                                    <div className="contact-form contact-form-inputs-underlined contact-form-button-circle">
                                        <SoftwareDevelopmentForm projectTypes={softwareDevelopmentPage.projectTypes} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="vc_row pt-10 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-6 col-md-offset-3 mb-15">
                            <header className="fancy-title text-center" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:47,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                <h2 className="mb-4">{page.processTitle}</h2>
                                <div className="font-size-18 lh-16 px-md-6" dangerouslySetInnerHTML={{ __html: page.processSubtitle }}>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </section> */}
        </PageLayout>
    )
}

const QUERY = (lang: string) => `query {
    softwareDevelopmentPage(locale: ${lang}) {
        headerTitle,
        headerSubtitle,
        headerDescription,
        tabsHeader
        tabsImage {
            url(imgixParams: {fm: jpg, q: 30}),
            alt
        }
        tabsInfo {
            id
            title
            content
        }
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
                url(imgixParams: {fm: jpg, q: 80})
            }
        },
        background {
            url(imgixParams: {fm: jpg, q: 80, fit: crop, w: 2000, h: 800})
        },
        seo {
            title
            description
            image {
                url
            }
        }
        formTitle,
        formSubtitle,
        formTitlebarTitle,
        formTitlebarSubtitle,
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
}`

export const getServerSideProps = async ({ locale: lang }) => {
    const cms = new DatoCMSService();
    const result = await cms.executeQuery<any>({ query: QUERY(lang) });
    return {
        props: {
            ...result,
            lang,
            ...await serverSideTranslations(lang, ['common', 'header', 'footer'])
        }
    };
}

export default withTranslation('common')(Page);