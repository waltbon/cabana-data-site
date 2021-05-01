import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { DatoCMSService } from '../lib/services/cms/dato-cms.service';
import { ISEO } from '../lib/types/cms/models/common/seo.interface';
import { getRequestLanguage } from '../lib/language';
import i18n from '../i18n';
import HeaderAlternativeTransparent from '../component/layout/HeaderAlternativeTransparent';
import ServiceContactForm from '../component/services/ServiceContactForm';
import { WithTranslation } from 'next-i18next';

interface Props extends ILayoutPageProps, WithTranslation {
    ecommercePage: {
        title: string;
        sliderTitle: string;
        sliderSubtitle: string;
        sliderParagraph: string;
        introTitle: string;
        introSubtitle: string;
        introParagraph: string;
        processTitle: string;
        processSubtitle: string;
        seo: ISEO;
    }
}

const Page: NextPage<Props> = ({ ecommercePage, lang }) => {
    const data = ecommercePage;
    return (
        <PageLayout url="/e-commerce" seo={ecommercePage.seo} lang={lang} >
            <HeaderAlternativeTransparent />
                <section className="vc_row fullheight d-flex flex-wrap align-items-end mb-80" data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;:true}" data-slideshow-bg="true" data-slideshow-options="{&quot;delay&quot;:3000,&quot;effect&quot;:&quot;scale&quot;,&quot;imageArray&quot;:[&quot;/assets/img/services/e-commerce/ec1.jpg&quot;,&quot;/assets/img/services/e-commerce/ec2.jpg&quot;, &quot;/assets/img/services/e-commerce/uc4.jpg&quot;]}"><span className="row-bg-loader"><span className="row-bg-loader-inner" /></span>
                    <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-10 col-md-offset-1 text-center py-7" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:31,&quot;translateZ&quot;:-108,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;translateZ&quot;:0,&quot;opacity&quot;:1}}">
                                <header className="fancy-title">
                                    <h6 className="text-uppercase font-weight-normal ltr-sp-2 text-white mb-5">{data.sliderSubtitle}</h6>
                                    <h2 className="text-dark lh-15 mb-4"><span className="font-size-2x lh-1 text-white"> {data.sliderTitle}</span></h2>
                                    <div className="row">
                                        <div className="lqd-column col-md-8 col-md-offset-2">
                                            <p className="text-white font-size-24 mb-1">{data.sliderParagraph}</p>
                                        </div>
                                    </div>
                                </header>
                                <a className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-black mb-2" href="#how" data-localscroll="true" data-localscroll-options="{&quot;scrollBelowSection&quot;:true}"><span><span className="btn-txt">¿Cómo iniciar?</span></span></a>
                                <a className="btn btn-default text-uppercase circle btn-bordered border-thick btn-icon-left btn-icon-circle btn-icon-bordered font-size-16 font-weight-bold ltr-sp-05 px-2 color-secondary mb-2" href="#contact" data-localscroll="true" data-localscroll-options="{&quot;scrollTo&quot;:&quot;#contact&quot;}"><span><span className="btn-txt">Pasos para iniciar</span><span className="btn-icon"><i className="fa fa-check" /></span></span>
                                </a>
                            </div>
                            {/* /.col-md-10 col-md-offset-1 text-center*/}
                        </div>
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                    <div className="bg-gray col-xs-12 px-0 py-4">
                        <div className="container">
                            <div className="row">
                                <div className="lqd-column col-md-12">
                                    <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                                        {/* /.carousel-items row*/}
                                    </div>
                                    {/* /.carousel-container*/}
                                </div>
                                {/* /.col-md-12*/}
                            </div>
                            {/* /.row*/}
                        </div>
                        {/* /.container*/}
                    </div>
                </section>
                <section className="vc_row pt-70 pb-70" id="how">
                    <div className="container">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="lqd-column col-md-6" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:31,&quot;translateZ&quot;:-108,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;translateZ&quot;:0,&quot;opacity&quot;:1}}">
                                <figure className="mb-3"><img src="/assets/img/logo/cabanadata/cd-sq-b.png" alt="CabanaData" width="80px" /></figure>
                                <h2 className="mt-2 mb-3 font-weight-normal lh-1" data-fittext="true" data-fittext-options="{ &quot;compressor&quot;: 0.65, &quot;maxFontSize&quot;: 45, &quot;minFontSize&quot;: 46 }" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}"
                                    dangerouslySetInnerHTML={{__html: ecommercePage.introTitle}}>
                                </h2>
                                <p className="h3 font-weight-normal pr-md-7 mr-md-7 mb-40"><i><div dangerouslySetInnerHTML={{__html: ecommercePage.introSubtitle}}></div></i></p>
                                <p className="pr-md-7 mr-md-7 mb-60"><div dangerouslySetInnerHTML={{__html: ecommercePage.introParagraph}}></div></p>
                            <a className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-14 font-weight-bold ltr-sp-025 px-2" href="#process" data-localscroll="true" data-localscroll-options="{&quot;scrollTo&quot;:&quot;#process&quot;}"><span><span className="btn-txt">¿Cuáles son los pasos?</span></span></a></div>

                            <div className="lqd-column col-md-4 col-md-offset-2">
                                <div className="lqd-parallax-images">
                                    <div className="liquid-img-group-single" data-shadow-style={4} data-inview="true" data-animate-shadow="true">
                                        <div className="liquid-img-group-img-container">
                                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:78}" data-parallax-to="{&quot;translateY&quot;:-78}" data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;easing&quot;:&quot;linear&quot;}">
                                                <figure><img src="/assets/img/services/e-commerce/ec1.jpg" alt="Good Design" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="liquid-img-group-single w-75" data-shadow-style={4} data-inview="true" data-animate-shadow="true">
                                        <div className="liquid-img-group-img-container">
                                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:107}" data-parallax-to="{&quot;translateY&quot;:-134}" data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;easing&quot;:&quot;linear&quot;}">
                                                <figure><img src="/assets/img/services/e-commerce/ec2.jpg" alt="Good Design" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </section>
                <section className="vc_row pt-80 pb-80" id="process">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-12">
                                <header className="fancy-title text-center mb-90">
                                    <h6 className="text-uppercase">{ecommercePage.processTitle}</h6>
                                    <h2>{ecommercePage.processSubtitle}</h2>
                                </header>
                            </div>
                        </div>
                        <div className="row">
                            <div className="lqd-column col-md-3 col-sm-8">
                                <div className="lqd-parallax" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:100}" data-parallax-to="{&quot;translateY&quot;:-170}" data-parallax-options="{&quot;easing&quot;:&quot;linear&quot;, &quot;overflowHidden&quot;: false}" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:35,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                    <header className="fancy-title">
                                        <h6 className="font-size-12 text-secondary font-weight-bold ltr-sp-025">01</h6>
                                        <h2 className="mb-25">Entendemos</h2>
                                        <p className="mb-45">Entendemos y analizamos su dinámica de negocio para planificar y ajustar la plataforma e integraciones indicadas </p>
                                    </header>
                                    {/* /.fancy-title*/}
                                    <ul className="reset-ul font-size-11 lh-15 font-weight-bold ltr-sp-1 text-dark">
                                        <li className="mb-15">PLANIFICACION</li>
                                        <li className="mb-15">DINAMICA DE NEGOCIO</li>
                                        <li className="mb-15">INTEGRACIONES</li>
                                    </ul>
                                </div>
                                {/* /.lqd-parallax*/}
                            </div>
                            {/* /.col-md-3 col-sm-8*/}
                            <div className="lqd-column col-md-4 col-sm-8 col-md-offset-1">
                                <div className="row">
                                    <div className="lqd-column col-md-10 col-md-offset-1">
                                        <div className="lqd-parallax" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:100}" data-parallax-to="{&quot;translateY&quot;:-100}" data-parallax-options="{&quot;easing&quot;:&quot;linear&quot;, &quot;overflowHidden&quot;: false}" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:35,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                            <header className="fancy-title">
                                                <h6 className="font-size-12 text-secondary font-weight-bold ltr-sp-025">02</h6>
                                                <h2 className="mb-25">Implementamos Plataformas</h2>
                                                <p className="mb-45">Existen muchas opciones para comercio electrónico en el mercado.<br />Nosotros sugerimos y adaptamos la ideal a su <strong>a la naturaleza y estrategia </strong>de su negocio. </p>
                                            </header>
                                            {/* /.fancy-title*/}
                                            <ul className="reset-ul font-size-11 lh-15 font-weight-bold ltr-sp-1 text-dark">
                                                <li className="mb-15">WooCommerce</li>
                                                <li className="mb-15">Shopify</li>
                                                <li className="mb-15">Snipcart</li>
                                                <li className="mb-15">CommerceLayer</li>
                                                <li className="mb-15">Personalizado</li>
                                            </ul>
                                        </div>
                                        {/* /.lqd-parallax*/}
                                    </div>
                                    {/* /.col-md-10 col-md-offset-1*/}
                                </div>
                                {/* /.row*/}
                            </div>
                            {/* /.col-md-3 col-sm-8*/}
                            <div className="lqd-column col-md-3 col-sm-8 col-md-offset-1">
                                <div className="lqd-parallax" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:100}" data-parallax-to="{&quot;translateY&quot;:-29}" data-parallax-options="{&quot;easing&quot;:&quot;linear&quot;, &quot;overflowHidden&quot;: false}" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:35,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                                    <header className="fancy-title">
                                        <h6 className="font-size-12 text-secondary font-weight-bold ltr-sp-025">03</h6>
                                        <h2 className="mb-25">Salida 🚀</h2>
                                        <p className="mb-45">Guiamos en la salida en vivo brindando soporte y atención personalizada. Es importante tener en cuenta que nosotros ayudamos a que su negocio sea escalable digitalmente.</p>
                                    </header>
                                    {/* /.fancy-title*/}
                                    <ul className="reset-ul font-size-11 lh-15 font-weight-bold ltr-sp-1 text-dark">
                                        <li className="mb-15">VENTAS</li>
                                        <li className="mb-15">SALIDA EN VIVO</li>
                                        <li className="mb-15">CAPACITACION</li>
                                    </ul>
                                </div>
                                {/* /.lqd-parallax*/}
                            </div>
                            {/* /.col-md-3 col-sm-8*/}
                        </div>
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </section>
                <section className="vc_row pt-110 pb-120 mt-40" id="contact" style={{ backgroundImage: 'url(/assets/img/services/e-commerce/uc4.jpg)' }} data-parallax="true" data-parallax-options="{ &quot;parallaxBG&quot;: true }">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;160&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:52,&quot;translateZ&quot;:-142,&quot;rotateX&quot;:-64,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;translateZ&quot;:0,&quot;rotateX&quot;:0,&quot;opacity&quot;:1}}">
                                <header className="fancy-title">
                                    <h2 className="mt-0 mb-4 text-white" data-fittext="true" data-fittext-options="{ &quot;compressor&quot;: 0.65,&quot;maxFontSize&quot;: 72,&quot;minFontSize&quot;: 30 }" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}">Su negocio debe estar en línea</h2>
                                    <p className="mb-60 font-size-24 text-white px-4" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}">Si usted está empezando con comercio electrónico, debe ser asesorado por nuestros consultores.</p>
                                </header><a className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2" href="#contact"><span><span className="btn-txt">Consulta gratis</span></span></a></div>
                            {/* /.col-md-8*/}
                        </div>
                        {/* /.row*/}
                    </div>
                    {/* /.container*/}
                </section>
                <section className="vc_row pt-100 pb-100" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-12 px-4 pt-45 pb-30 bg-white box-shadow-1">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="lqd-column col-md-6 col-md-offset-1">
                                        <header className="fancy-title">
                                            <h2>Inicie su eCommerce</h2>
                                            <p>Queremos facilitarle un comercio electrónico estratégico y eficiente</p>
                                        </header>
                                    </div>
                                    <div className="lqd-column col-md-4 hidden-sm hidden-xs text-right">
                                        <div className="iconbox text-right iconbox-xl" data-animate-icon="true" data-plugin-options="{&quot;resetOnHover&quot;:true,&quot;color&quot;:&quot;rgb(216, 219, 226)&quot;,&quot;hoverColor&quot;:&quot;rgb(0, 0, 0)&quot;}">
                                            <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve"><polygon strokeWidth={2} strokeLinejoin="bevel" strokeMiterlimit={10} points="1,30 63,1 23,41" /><polygon strokeWidth={2} strokeLinejoin="bevel" strokeMiterlimit={10} points="34,63 63,1 23,41" /></svg></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="lqd-column col-md-8 col-md-offset-1">
                                        <div className="contact-form contact-form-inputs-underlined contact-form-button-circle">
                                            <ServiceContactForm service={{slug: 'e-commerce', title: "E-Commerce", id: "ecommerce", shortDescription: "ecomerce" }} />
                                        </div>
                                        <div className="col-md-offset-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </PageLayout>
    )
}

const QUERY = (lang: string) => `query {
    ecommercePage(locale: ${lang}) {
        title
        sliderTitle
        sliderSubtitle
        sliderParagraph
        introTitle
        introSubtitle
        introParagraph
        processTitle
        processSubtitle
        seo {
            title
            description
            image {
                url
            }
        }
    }
}`

Page.getInitialProps = async ({req}): Promise<any> => {
    const lang = getRequestLanguage(req, i18n.i18n)
    const cms = new DatoCMSService();
    const result = await cms.executeQuery<any>({ query: QUERY(lang) });
    return {
        ...result,
        lang,
        namespacesRequired: ['common', 'header', 'footer']
    };
}

export default i18n.withTranslation('common')(Page);