import { NextPage } from 'next'
import PageLayout from '../component/layout/PageLayout';
import { ILayoutPageProps } from '../lib/types/landing-page-props.interface';
import { getHomePageData } from '../lib/services/pages/home-page.service';
import { IHomePage } from '../lib/types/cms/models/home.model';
import HomeHeader from '../component/home/HomeHeader';
import HomeIntro from '../component/home/HomeIntro';
import HomeOurSkills from '../component/home/HomeOurSkills';
import HomeProcess from '../component/home/HomeProcess';
import SoftwareDevelopmentForm from '../component/forms/SoftwareDevelopmentForm';
import Meta from '../component/layout/Meta';

interface Props extends ILayoutPageProps, IHomePage { }
const IndexPage: NextPage<Props> = ({ homePage, allPartners, allTestimonials, softwareDevelopmentPage }) => {
  return (
    <PageLayout seo={homePage.seo}>
      <Meta title={homePage.seo.title} description={homePage.seo.description} ></Meta>
      <main className="content" id="content">
        <HomeHeader background={homePage.backgroundImage} title={homePage.title} subtitle={homePage.subtitle} />
        <HomeIntro services={homePage.services} title={homePage.introTitle} description1={homePage.introDescription} description2={homePage.introDescriptionSecond} />

        <section className="vc_row pt-160 pb-160 mt-20 bg-cover" id="contact" style={{ backgroundImage: 'url(/assets/img/home-slider/experience.jpg)' }} data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;: true}">
          <div className="container">
            <div className="titlebar-overlay ld-overlay" style={{ background: 'linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)' }} />
            <div className="row d-flex flex-wrap align-items-center">
              <div className="lqd-column col-md-8 pr-md-5">
                <div className="ld-fancy-heading">
                  <h2 className="text-white text-center text-md-left" data-fittext="true" data-fittext-options="{&quot;compressor&quot;:0.55,&quot;maxFontSize&quot;:&quot;44&quot;,&quot;minFontSize&quot;:&quot;35&quot;}" data-split-text="true" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.split-inner&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;40&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:30,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}" data-split-options="{&quot;type&quot;:&quot;words&quot;}">
                    <span className="ld-fh-txt">{homePage.quoteText}</span>
                    <small className="text-secondary"> {homePage.quoteBy}</small>
                  </h2>
                </div>
              </div>
              <div className="lqd-column col-md-4 text-center"><img src="/assets/img/logo/cabanadata/cd-ho-w.png" /></div>{/* /.col-md-4*/}
            </div>
          </div>
        </section>

        <HomeProcess process={homePage.process} title={homePage.processTitle} subtitle={homePage.processSubtitle} />

        <HomeOurSkills title={homePage.ourSkillsTitle} subtitle={homePage.ourSkillsSubtitle} skills={homePage.ourSkill} />

        <section className="vc_row pt-80 pb-80 bg-cover" data-parallax="true" data-parallax-options="{ parallaxBG: true }" style={{ backgroundImage: 'url(/assets/img/misc/shapes.jpg)' }}>
          <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-8 col-md-offset-2 text-center">
                <h2 className="text-uppercase text-white mt-0 pb-10">{softwareDevelopmentPage.formTitle}</h2>
                <p className="font-size-18 text-white px-md-7 mx-md-3 mb-50 pb-60">{softwareDevelopmentPage.formSubtitle}</p>
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

        <section className="vc_row pt-165 pb-80">
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-6 col-md-offset-3 mb-80">
                <header className="fancy-title mb-40 text-center">
                  <h2 className="mt-0">Nuestros Partners</h2>
                  <p className="font-size-18">Nos agrada trabjar de lado con compañías de tanto valor </p>
                </header>
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
                              <img crossOrigin='anonymous' className="mr-8 mt-10 w-60" src={partner.logo.url} alt={partner.logo.alt} />
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

        <section className="vc_row pt-190 pb-150 mt-60 bg-cover" style={{ backgroundImage: 'url(/assets/img/misc/partners.jpg)' }}>
          <div className="container">
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
                                      <img src={testimonial.picture.url} alt={testimonial.picture.alt} />
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
                                    <blockquote className="font-size-19 lh-2 text-fade-white-08">
                                      <p className="text-white">
                                        {testimonial.testimonial}
                                      </p>
                                    </blockquote>
                                    <h6 className="mt-30 font-size-16 text-white">
                                      {testimonial.name}
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
      </main>
    </PageLayout>)
}

IndexPage.getInitialProps = async (): Promise<any> => getHomePageData();
export default IndexPage;

