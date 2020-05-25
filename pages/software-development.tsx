import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { IImage } from '../lib/types/cms/models/common/image.interface';
import { DatoCMSService } from '../lib/services/cms/dato-cms.service';
import { ISEO } from '../lib/types/cms/models/common/seo.interface';
import SoftwareDevelopmentForm from '../component/forms/SoftwareDevelopmentForm';

interface Props extends ILayoutPageProps {
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

const Page: NextPage<Props> = ({ seo, softwareDevelopmentPage }) => {
    const page = softwareDevelopmentPage;
    return (
        <PageLayout url="/software-development" seo={softwareDevelopmentPage.seo}>
            <main className="content" id="content">
                <section className="vc_row fullheight d-flex flex-wrap align-items-center bg-cover bg-center py-6" data-parallax="true" data-parallax-options="{ parallaxBG: true }" data-row-bg={page.background.url} style={{ background: 'linear-gradient(65deg, #2D3252 20%, rgba(137, 135, 226, 0.084) 100%)' }}><span className="row-bg-loader" />
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-7" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:91, &quot;opacity&quot;: 0},&quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;: 1}}">
                                <h5 className="text-white text-uppercase mb-2 pb-2">{page.headerSubtitle}</h5>
                                <h2 className="text-white mask-text font-weight-bold mt-2 pr-md-7" data-fittext="true" data-fittext-options="{ &quot;compressor&quot;:0.5,&quot;maxFontSize&quot;: 55,&quot;minFontSize&quot;: 36 }" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}">{page.headerTitle}</h2>
                                <p className="text-white font-size-20">{page.headerDescription}</p>
                            </div>
                            {/* /.col-md-7*/}
                        </div>
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </section>

                <section className="vc_row bg-athens-gray pt-90 pb-80 mb-40">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-lg-6">
                                <h2 className="font-size-38 lh-13 mt-0 mb-30" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}" data-text-rotator="true">
                                    {page.tabsHeader} <span>{'['}</span>  
                                    <span className="txt-rotate-keywords">
                                        <span className="keyword active">oportunidades</span>
                                        <span className="keyword">profesionales</span>
                                        <span className="keyword">negocios</span>
                                        <span className="keyword">productividad</span>
                                    </span>{/* /.txt-rotate-keywords */}
                                    <span>{']'}</span>  
                                </h2>
                                <div className="accordion accordion-md accordion-title-underlined accordion-expander-left accordion-active-color-primary" id="vc_accordion_5c77a7f9d2896" role="tablist">
                                    {
                                        Array.isArray(page.tabsInfo) && page.tabsInfo.map(ti => {
                                            const isFirst = page.tabsInfo.indexOf(ti) === 0;
                                            return (<div className={`accordion-item panel ${isFirst ? 'active' : ''}` }>
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
                                        )})
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
                            </div>{/* /.lqd-column col-lg-5 col-lg-offset-1 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
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
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </section>

                <section className="vc_row pt-80 pb-80 bg-cover" data-parallax="true" data-parallax-options="{ parallaxBG: true }" style={{ backgroundImage: 'url(/assets/img/misc/shapes.jpg)' }}>
                    <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-8 col-md-offset-2 text-center">
                                <h2 className="text-uppercase text-white mt-0 pb-10">{softwareDevelopmentPage.formTitle}</h2>
                                <p className="font-size-18 text-white px-md-7 mx-md-3 mb-50 pb-60">{softwareDevelopmentPage.formTitlebarSubtitle}</p>
                            </div>{/* /.col-md-8 col-md-offset-2 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
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

                <section className="vc_row pt-10 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-6 col-md-offset-3 mb-15">
                                <header className="fancy-title text-center" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;180&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:47,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                    <h2 className="mb-4">{page.processTitle}</h2>
                                    <div className="font-size-18 lh-16 px-md-6" dangerouslySetInnerHTML={{ __html: page.processSubtitle }}>
                                    </div>
                                </header>
                                {/* /.fancy-title*/}
                            </div>
                            {/* /.col-md-6 col-md-offset-3*/}
                        </div>
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                    <div className="container-fluid px-0">
                        <div className="row mx-0">
                            <div className="lqd-column col-md-12">
                                <div className="liquid-portfolio-list">
                                    <div className="row liquid-portfolio-list-row" data-liquid-masonry="true" data-masonry-options="{ &quot;filtersID&quot;: &quot;#portfolio-1&quot; }" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.ld-pf-item&quot;,&quot;animateTargetsWhenVisible&quot;:&quot;true&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:37,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                        {
                                            Array.isArray(page.process) && page.process.map(process => {
                                                const imageUrl = `${process.image.url}?fit=crop&w=450&h=375`;
                                                return (
                                                    <div className="lqd-column col-lg-3 col-sm-6 masonry-item px-0 architecture" key={process.id}>
                                                        <div className="ld-pf-item ld-pf-light pf-details-inside pf-details-full pf-details-h-mid pf-details-v-end pf-hover-masktext mb-0">
                                                            <div className="ld-pf-inner">
                                                                <div className="ld-pf-image" data-blur="true" data-blur-options="{ &quot;hoverTarget&quot;: &quot;.ld-pf-item&quot;, &quot;hoverTargetRelation&quot;: &quot;closest&quot; }">
                                                                    <figure style={{ backgroundImage: `url("${imageUrl}")` }}>
                                                                        <img src='#' alt={process.image.alt} />
                                                                    </figure>
                                                                </div>
                                                                <div className="ld-pf-bg">
                                                                    <div className="ld-pf-details" data-custom-animations="true" data-ca-options="{ &quot;triggerHandler&quot;: &quot;mouseenter&quot;, &quot;triggerTarget&quot;: &quot;.ld-pf-item&quot;, &quot;triggerRelation&quot;: &quot;closest&quot;, &quot;offTriggerHandler&quot;: &quot;mouseleave&quot;, &quot;animationTarget&quot;: &quot;.split-inner&quot;, &quot;startDelay&quot;: 80, &quot;duration&quot;: 650, &quot;delay&quot;: 150, &quot;initValues&quot;: { &quot;translateY&quot;: &quot;150%&quot; }, &quot;animations&quot;: { &quot;translateY&quot;: &quot;0&quot;, &quot;rotateX&quot;: 0 } }">
                                                                        <div className="ld-pf-details-inner"></div>
                                                                        <h3 className="ld-pf-title h4 text-uppercase" data-split-text="true" data-split-options="{ &quot;type&quot;: &quot;lines&quot; }">{process.title}</h3>
                                                                        <div className="ld-pf-category size-sm">
                                                                            <a className="text-uppercase ltr-sp-1" href="#" data-split-text="true" data-split-options="{ &quot;type&quot;: &quot;lines&quot; }">
                                                                                {process.description}
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a className="liquid-overlay-link" href="#" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    {/* /.row liquid-portfolio-list-row*/}
                                </div>
                                {/* /.liquid-portfolio-list*/}
                            </div>
                            {/* /.col-md-12*/}
                        </div>
                        {/* /.row mx-0*/}
                    </div>
                    {/* /.container-fluid px-0*/}
                </section>
            </main>
        </PageLayout>
    )
}

const QUERY = `query {
    softwareDevelopmentPage {
        headerTitle,
        headerSubtitle,
        headerDescription,
        tabsHeader
        tabsImage {
            url,
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
                url
            }
        },
        background {
            url
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

Page.getInitialProps = async (): Promise<any> => {
    const cms = new DatoCMSService();
    const result = await cms.executeQuery({ query: QUERY });
    return result;
}

export default Page;