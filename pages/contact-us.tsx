import { NextPage } from 'next'
import PageLayout from '../component/layout/PageLayout'
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface'
import HeaderAlternative from '../component/layout/HeaderAlternative'
import ContactForm from '../component/contact/ContactForm'
import { ISEO } from '../lib/types/cms/models/common/seo.interface'
import i18n from './../i18n';
import { WithTranslation } from 'next-i18next'

interface Props extends ILayoutPageProps, WithTranslation { }

const ContactUsPage: NextPage<Props> = ({ seo }) => {
    return (
        <PageLayout url="/contact-us" seo={seo} hideMainHeader={true}>
        <HeaderAlternative title='Contáctenos' titlebarBackgroundImage='/assets/img/misc/shapes.jpg' />
            <main className="content bg-gray" id="content">
                <section className="vc_row">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-8 px-4 pt-45 pb-30 bg-white box-shadow-1 pull-up col-md-offset-2">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="lqd-column col-md-7 col-md-offset-1">
                                        <header className="fancy-title">
                                            <h2>Hablemos!</h2>
                                            <p>Es el momento de crear soluciones de software potenciadas por lo actual y efectivo</p>
                                        </header>{/* /.fancy-title*/}
                                    </div>
                                    <div className="lqd-column col-md-4 hidden-sm hidden-xs text-right">
                                        <div className="iconbox text-right iconbox-xl" data-animate-icon="true" data-plugin-options="{&quot;resetOnHover&quot;:true,&quot;color&quot;:&quot;rgb(216, 219, 226)&quot;,&quot;hoverColor&quot;:&quot;rgb(0, 0, 0)&quot;}">
                                            <div className="iconbox-icon-wrap">
                                                <span className="iconbox-icon-container">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                                                        <polygon strokeWidth={2} strokeLinejoin="bevel" strokeMiterlimit={10} points="1,30 63,1 23,41" />
                                                        <polygon strokeWidth={2} strokeLinejoin="bevel" strokeMiterlimit={10} points="34,63 63,1 23,41" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="lqd-column col-md-10 col-sm-12 col-md-offset-1">
                                        <div className="contact-form contact-form-inputs-underlined contact-form-button-circle">
                                            <ContactForm ></ContactForm>
                                        </div>{/* /.contact-form*/}
                        
                                    </div>{/* /.col-md-10 col-md-offset-1*/}
                                </div>{/* /.row*/}
                            </div>{/* /.lqd-column col-md-12*/}
                        </div>{/* /.row*/}
                    </div>{/* /.container*/}
                </section>
                <section className="vc_row pt-90 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="lqd-column col-md-10 col-md-offset-1">
                                <div className="row">
                                    <div className="lqd-column col-md-3 col-sm-8">
                                        <h2 className="font-size-24 font-weight-bold"><small><i className="icon-liquid_map_pin mr-2 fa-1x" /></small> Curridabat</h2>
                                        <p className="font-size-14">Detrás de Plaza Freses.</p>
                                        <hr className="w-30 ml-0 border-color-primary" />
                                        <p className="font-size-14">+506 8511-5245<br />info@cabanadata.com</p>
                                    </div>{/* /.lqd-column col-md-3 col-sm-8*/}
                                    <div className="lqd-column col-md-3 col-sm-8 col-md-offset-1">
                                        <h2 className="font-size-24 font-weight-bold"><small><i className="icon-liquid_map_pin mr-2 fa-1x" /></small> Santa Ana</h2>
                                        <p className="font-size-14">The Train Business Hub, Santa Ana</p>
                                        <hr className="w-30 ml-0 border-color-primary" />
                                        <p className="font-size-14">+506 8511-5245<br /> info@cabanadata.com</p>
                                    </div>{/* /.lqd-column col-md-3 col-sm-8*/}
                                    <div className="lqd-column col-md-3 col-sm-8 col-md-offset-1">
                                        <h2 className="font-size-24 font-weight-bold"><small><i className="icon-liquid_map_pin mr-2 fa-1x" /></small> San José</h2>
                                        <p className="font-size-14">San Francisco de 2 Ríos</p>
                                        <hr className="w-30 ml-0 border-color-primary" />
                                        <p className="font-size-14">+506 8511-5245<br /> info@cabanadata.com</p>
                                    </div>{/* /.lqd-column col-md-3 col-sm-8*/}
                                </div>{/* /.row*/}
                            </div>{/* /.lqd-column col-md-10 col-md-offset-1*/}
                        </div>{/* /.row*/}
                    </div>{/* /.container*/}
                </section>
            </main>{/* /#content.content*/}
        </PageLayout>
    )
}

ContactUsPage.getInitialProps = async (): Promise<any> => {
    return {
        seo: {
            title: 'Cabana Data Software | Contátenos',
            description: 'Queremos poner a su disposición nuestros servicios con lo mejor y acertado para su negocio en cuanto a software a la medida',
        } as ISEO
    }
}

export default i18n.withTranslation('common')(ContactUsPage);