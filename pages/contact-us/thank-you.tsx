import { NextPage } from 'next';
import PageLayout from '../../component/layout/PageLayout';
import i18n from './../../i18n';
import { WithTranslation } from 'next-i18next';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';

interface Props extends ILayoutPageProps, WithTranslation { }

const thankYouPage: NextPage<Props> = ({t}) => {
    return (
        <PageLayout url="/crm" seo={{
            description: 'Gracias por enviarnos tu mensaje, lo hemos recibido',
            title: 'Cabana Data | Mensaje recibido',
            image: null
        }}>
            <main className="content" id="content">
                <section className="vc_row pt-280 pb-110 bg-cover" data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;: true}" data-row-bg="/assets/img/misc/start-project.jpg">
                    <span className="row-bg-loader" />
                    <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-8">
                                <h5 className="text-white text-uppercase mb-2 pb-2">Hemos recibido tu mensaje</h5>
                                <h1 className="text-white  mb-4">Hemos recibido tu mensaje</h1>
                                <p className="font-size-20 lh-16 text-white pr-md-9 mr-md-9 mb-40">Nos pondremos en contacto lo más pronto posible</p>
                                <a href="#" className="btn btn-solid round font-size-12 font-weight-bold ltr-sp-2 text-uppercase px-2">
                                    <span>
                                        <span className="btn-txt">{t('common_continue')}</span>
                                        <span className="btn-icon">
                                            <i className="fa fa-angle-right" />
                                        </span>
                                    </span>
                                </a>
                                <a href="/crm/from-scratch" className="btn btn-naked text-uppercase font-size-12 font-weight-bold ltr-sp-2 text-white ml-md-4">
                                    <span>
                                        <span className="btn-txt">{t('from_scratch_btn')}</span>
                                    </span>
                                </a>
                            </div>{/* /.lqd-column col-md-8 */}
                        </div>{/* /.row */}
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}

thankYouPage.getInitialProps = (): any => {
    return {
        namespacesRequired: ['home', 'header', 'common'],
    }
}

export default i18n.withTranslation('common')(thankYouPage);