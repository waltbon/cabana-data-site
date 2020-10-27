import { NextPage } from 'next'
import PageLayout from '../../component/layout/PageLayout'
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface'
import ContactForm from '../../component/contact/ContactForm'
import { ISEO } from '../../lib/types/cms/models/common/seo.interface'
import i18n from '../../i18n';
import { WithTranslation } from 'next-i18next'

interface Props extends ILayoutPageProps, WithTranslation { }

const ContactUsPage: NextPage<Props> = ({ seo }) => {
    return (
        <PageLayout url="/contact-us" seo={seo} hideMainHeader={false}>

            <section className="vc_row py-5 fullheight d-flex flex-wrap align-items-center bg-cover bg-center" style={{ backgroundImage: 'url(./assets/img/home-slider/hs5.jpg)' }}>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="lqd-column col-md-6 col-xs-12 mb-7 mb-md-0" data-custom-animations="true" data-ca-options="{ &quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1200&quot;, &quot;delay&quot;:&quot;150&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:60, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1} }">
                            <h1 className="text-white mt-0 mb-30" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}" data-fittext="true" data-fittext-options="{&quot;compressor&quot;: 0.75, &quot;maxFontSize&quot;: 52}">
                              Contáctenos  </h1>
                            <p className="font-size-20 lh-175 text-fade-white-07 pr-md-9 mr-md-9 mb-50">
                                Queremos escucharlo para diseñarle una propuesta justo a la medida de su negocio y necesidades actuales.
                            </p>
                        </div>{/* /.col-md-7 */}
                        <div className="lqd-column col-md-6 col-xs-12 px-md-4 text-left pl-20 mt-180">
                            <div className="lqd-column-inner bg-white border-radius-6 px-4 px-md-4 pt-40 pb-40">
                                <header className="fancy-title">
                                    <h2 className="mb-2 font-size-30 font-weight-light">Hablemos</h2>
                                    <p className="mt-0">
                                        Déjenos sus datos le contactaremos lo más pronto posible
                                    </p>
                                </header>{/* /.fancy-title */}
                                <div className="contact-form contact-form-inputs-filled contact-form-button-block font-size-14">
                                    <ContactForm />
                                    <div className="contact-form-result hidden" />{/* /.contact-form-result */}
                                </div>{/* /.contact-form */}
                            </div>{/* /.lqd-column-inner */}
                        </div>{/* /.lqd-column col-md-5 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
        </PageLayout>
    )
}

ContactUsPage.getInitialProps = async (): Promise<any> => {
    return {
        seo: {
            title: 'Cabana Data Software | Contátenos',
            description: 'Queremos poner a su disposición nuestros servicios con lo mejor y acertado para su negocio en cuanto a software a la medida',
        } as ISEO,
        namespacesRequired: ['header', 'common']
    }
}

export default i18n.withTranslation('common')(ContactUsPage);