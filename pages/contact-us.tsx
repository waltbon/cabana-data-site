import { NextPage } from 'next'
import PageLayout from '../component/layout/PageLayout'
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface'
import ContactForm from '../component/contact/ContactForm'
import i18n from '../i18n';
import { WithTranslation } from 'next-i18next'
import { IContact } from '../lib/types/cms/models';
import { getContactPage } from '../lib/services/pages/contact-us-page.service'
import { getRequestLanguage } from '../lib/language'

interface Props extends ILayoutPageProps, WithTranslation { 
    page: IContact;
}

const ContactUsPage: NextPage<Props> = ({ lang, page, t }) => {
    return (
        <PageLayout url="/contact-us" seo={page.contact.seo} hideMainHeader={false} lang={lang}>

            <section className="vc_row py-5 fullheight d-flex flex-wrap align-items-center bg-cover bg-center" style={{ backgroundImage: `url(${page.contact.backgroundImage.url})` }}>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="lqd-column col-md-6 col-xs-12 mb-7 mb-md-0" data-custom-animations="true" data-ca-options="{ &quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1200&quot;, &quot;delay&quot;:&quot;150&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:60, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1} }">
                            <h1 className="text-white mt-0 mb-30" data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}" data-fittext="true" data-fittext-options="{&quot;compressor&quot;: 0.75, &quot;maxFontSize&quot;: 52}">
                              {page.contact.title}  
                            </h1>
                            <p className="font-size-20 lh-175 text-fade-white-07 pr-md-9 mr-md-9 mb-50">
                                {page.contact.subtitle}
                            </p>
                        </div>{/* /.col-md-7 */}
                        <div className="lqd-column col-md-5 col-xs-12 px-md-4 text-left pl-20 mt-180">
                            <div className="lqd-column-inner bg-white border-radius-6 px-4 px-md-5 pt-40 pb-40">
                                <header className="fancy-title">
                                    <h2 className="mb-2 font-size-30 font-weight-light">{t('footer_title')}</h2>
                                    <p className="mt-0">
                                    {t('footer_subtitle')}
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

ContactUsPage.getInitialProps = async ({req}): Promise<any> => {
    const lang = getRequestLanguage(req, i18n.i18n)
    const page = await getContactPage(lang);
    return {
        page,
        namespacesRequired: ['header', 'common']
    }
}

export default i18n.withTranslation('common')(ContactUsPage);