import { NextPage } from 'next'
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { IHomePage } from '../lib/types/cms/models/home.model';
import PageIntroBackground from '../component/home/PageIntroBackground';
import HomeIntro from '../component/home/HomeIntro';
import HomeOurSkills from '../component/home/HomeOurSkills';
import HomeProcess from '../component/home/HomeProcess';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CapabilitiesQueries } from '../lib/services/pages';
import { getHomePageData } from '../lib/services/pages/home-page.service';

type Props = ILayoutPageProps & IHomePage & WithTranslation

const IndexPage: NextPage<Props> = ({ t, homePage, lang, allPartners, allTestimonials, capabilities }) => {

  return (
    <PageLayout url="/" seo={homePage.seo} lang={lang}>
      <PageIntroBackground background={homePage.backgroundImage}
        title={homePage.title}
        subtitle={homePage.subtitle}
        c2a={{
          text: t('header_intro_c2a_text'),
          url: '#about-us',
          isScroll: true
        }} />

      <HomeIntro 
        contactUsNowText={t('contact_us_now')} 
        subtitle={homePage.introSubtitle}
        capabilities={capabilities} title={homePage.introTitle} description1={homePage.introDescription} description2={homePage.introDescriptionSecond} />

      <section className="vc_row pt-130 pb-130 mt-20 bg-cover" id="contact" style={{ backgroundImage: 'url(/assets/img/home-slider/experience.jpg)' }} data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;: true}">
        <div className="container">
          <div className="titlebar-overlay ld-overlay" style={{ background: 'linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)' }} />
          <div className="row d-flex flex-wrap align-items-center">
            <div className="lqd-column col-md-8">
              <div className="ld-fancy-heading">
                <h2 className="text-white text-center text-md-left" data-fittext="true" data-fittext-options="{&quot;compressor&quot;:0.55,&quot;maxFontSize&quot;:&quot;34&quot;,&quot;minFontSize&quot;:&quot;30&quot;}" data-split-text="true" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.split-inner&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;40&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:30,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}" data-split-options="{&quot;type&quot;:&quot;words&quot;}">
                  <span className="ld-fh-txt">{homePage.quoteText}</span>
                  <small className="text-secondary"> {homePage.quoteBy}</small>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeProcess process={homePage.process} title={homePage.processTitle} subtitle={homePage.processSubtitle} />

      <HomeOurSkills title={homePage.ourSkillsTitle} subtitle={homePage.ourSkillsSubtitle} skills={homePage.ourSkill} />

      {/* Team Motivation */}
      <section className="vc_row pt-80 pb-120 bg-cover" data-parallax="true" data-parallax-options="{ parallaxBG: true }"
        style={{ backgroundImage: `url('${homePage.whyUsImage.url}')` }}>
        <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 50%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-8 col-md-offset-2 text-center">
              <h6 className="mb-3 font-size-12 text-white ltr-sp-2 text-uppercase opacity-07">{homePage.whyUsSubtitle}</h6>
              <h2 className="h2 font-weight-bold text-white  mt-20 pb-10">{homePage.whyUsTitle}</h2>
              <p className="font-size-22 font-weight-light lh-15 text-white px-md-4 mx-md-3">
                {homePage.whyUsDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row pt-165 pb-80">
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-8 col-md-offset-2 text-center">
              <h6 className="mb-0 pb-0 font-size-12 font-weight-bold ltr-sp-2 text-uppercase opacity-07">{homePage.partnersSubtitle}</h6>
              <h2 className="h2 font-weight-bold mt-3 mb-6">{homePage.partnersTitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="lqd-column col-md-12">
              <div className="carousel-container carousel-nav-left carousel-nav-md carousel-dots-style1">
                <div className="carousel-items row" data-lqd-flickity="{&quot;cellAlign&quot;:&quot;left&quot;,&quot;prevNextButtons&quot;:false,&quot;buttonsAppendTo&quot;:&quot;self&quot;,&quot;pageDots&quot;:false,&quot;groupCells&quot;:false,&quot;wrapAround&quot;:true,&quot;autoPlay&quot;:3000,&quot;pauseAutoPlayOnHover&quot;:false}">
                  {
                    allPartners && allPartners.map(partner => {
                      return (
                        <div key={partner.id} className="lqd-column carousel-item col-md-2 col-sm-3 col-xs-4">
                          <figure className="text-center opacity-02 reset-opacity-onhover">
                            <img className="mr-8 mt-10 w-60" src={partner.logo.url} alt={partner.logo.alt} />
                          </figure>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc_row pt-100 pb-100 mt-60 bg-cover" style={{ backgroundImage: `url(${homePage.testimonialsImage.url})` }}>
        <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
        <div className="container">
          <div className="row">
            <div className="lqd-column col-md-8 col-md-offset-2 text-center text-white">
              <h6 className="mb-0 pb-0 font-size-12 font-weight-bold ltr-sp-2 text-uppercase text-white opacity-07">{homePage.testimonialsSubtitle}</h6>
              <h2 className="text-white h2 font-weight-bold mt-3 mb-6">{homePage.testimonialsTitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="lqd-column col-md-10">
              <div className="carousel-container carousel-nav-left px-md-5 mx-md-12">
                {
                  allTestimonials && allTestimonials.map(testimonial => {
                    return (
                      <div className="row" key={testimonial.id}>
                        <div className="col-md-3 col-xs-6 col-xs-offset-3 col-md-offset-0 mb-4 mb-md-0">
                          <div className="carousel-items row testimonials-details w-100 row" data-lqd-flickity="{ &quot;asNavFor&quot;: &quot;.carousel-quotes-1&quot;, &quot;rightToLeft&quot;: true }">
                            <div className="col-xs-12">
                              <div className="testimonial testimonial-lg testimonial-details-sm text-right testimonials-details-only">
                                <div className="testimonial-details">
                                  <figure className="avatar w-100">
                                    <img src={testimonial.picture.url} alt={testimonial.name} />
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-12 pl-md-4">
                          <div className="carousel-items row testimonials-quotes row carousel-quotes-1 carousel-nav-light carousel-nav-hover-light carousel-nav-border-none" data-lqd-flickity="{ &quot;prevNextButtons&quot;: true, &quot;navStyle&quot;: 1, &quot;navOffsets&quot;: { &quot;nav&quot;: { &quot;left&quot;: 15 } }, &quot;rightToLeft&quot;: true }">
                            <div className="col-xs-12">
                              <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                <div className="testimonial-quote">
                                  <blockquote className="font-size-19 lh-15 text-fade-white-08">
                                    <p className="text-white">
                                      {testimonial.testimonial}
                                    </p>
                                  </blockquote>
                                  <h6 className="mt-30 font-size-16 text-white font-weight-bold">
                                    <span className='font-size-26'>
                                      {testimonial.name}
                                    </span>
                                    <br />{testimonial.organization}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>)
}

export const getServerSideProps = async ({ locale: lang }) => {
  const proms = await Promise.all([
    getHomePageData(lang),
    CapabilitiesQueries.getCapabilities(lang)
  ]);
  const data = {
    ...proms[0],
    capabilities: proms[1],
    lang,
  };
  return {
    props: {
      ...data,
      ...await serverSideTranslations(lang, ['home', 'header', 'common']),
    }
  }
}

export default withTranslation('home')(IndexPage);