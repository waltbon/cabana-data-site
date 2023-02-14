import React from 'react';
import { NextPage } from 'next';
import PageLayout from '../component/layout/PageLayout';
import { withTranslation, WithTranslation } from 'next-i18next';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import HeaderAlternativeTransparent from '../component/layout/HeaderAlternativeTransparent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


interface Props extends ILayoutPageProps, WithTranslation {

}

const Page: NextPage<Props> = ({ lang }) => {
    return (
        <PageLayout url="/careers" seo={{
            description: 'Trabaje con nosotros y desempeñe su carrera bajo un propósito.',
            title: 'Carreras',
            image: null,
        }} lang={lang} >
            <section className="vc_row fullheight d-flex flex-wrap align-items-end mb-20" data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;:true}" data-slideshow-bg="true" data-slideshow-options="{&quot;delay&quot;:3000,&quot;effect&quot;:&quot;scale&quot;,&quot;imageArray&quot;:[&quot;/assets/img/home-slider/hs5.jpg&quot;,&quot;/assets/img/home-slider/hs6.jpg&quot;, &quot;/assets/img/services/e-commerce/uc4.jpg&quot;]}"><span className="row-bg-loader"><span className="row-bg-loader-inner" /></span>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-10 col-md-offset-1 text-center" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:31,&quot;translateZ&quot;:-108,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;translateZ&quot;:0,&quot;opacity&quot;:1}}">
                            <header className="fancy-title">
                                <h6 className="text-uppercase font-weight-normal ltr-sp-2 text-white mb-0">{"Desarrolla tu carrera con nosotros"}</h6>
                                <h2 className="text-dark lh-15 mb-5 font-weight-bold"><span className="font-size-2x lh-1 text-white"> {"Carreras"}</span></h2>
                                <div className="row">
                                    <div className="lqd-column col-md-8 col-md-offset-2">
                                        <p className="text-white font-size-24 mb-1">{"¡No tenemos puestos abiertos en este momento!"}</p>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>

                <div className="bg-gray col-xs-12 px-0 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-12">
                                <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </PageLayout>
    )
}

export const getServerSideProps = async ({ locale: lang }): Promise<any> => {
    return {
        props: {
            lang,
            ...await serverSideTranslations(lang, ['header', 'common']),
        }
    };
}

export default withTranslation('common')(Page);