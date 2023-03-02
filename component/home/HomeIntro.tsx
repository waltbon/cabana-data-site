import React from 'react';
import HomeServiceItem from './HomeServiceItem';
import { ICapabilityModel } from '../../lib/types/cms/models';

export default class extends React.Component<{
    title: string;
    description1: string;
    description2: string;
    subtitle: string;
    // services: IHomeService[],
    capabilities: ICapabilityModel[],
    contactUsNowText: string
}> {
    render() {
        const columnOne = this.props.capabilities.filter(s => s.order === 1);
        const columnTwo = this.props.capabilities.filter(s => s.order === 2);
        return (
            <section className="vc_row pt-90 pb-90 bg-no-repeat" id="about-us" style={{ backgroundImage: 'url(/assets/img/misc/bg-77.svg)', backgroundPosition: '10% 20%' }}>
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="lqd-column col-md-5 mb-20 ca-initvalues-applied lqd-animations-done" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:30, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1}}">
                            <header className="fancy-title pr-md-4">
                                <img alt='Cabana Data' src="/assets/img/logo/cabanadata/cd-ho-b.png" width="170px" style={{ marginBottom: '20px', marginTop: '40px' }} />
                                <h6 className="text-uppercase text-secondary font-size-12 font-weight-bold ltr-sp-2 text-uppercase opacity-07 lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}>
                                    {this.props.subtitle}
                                </h6>
                                <h2 className="h1 my-0 py-0 lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}><strong>{this.props.title}</strong></h2>
                            </header>
                            <h1 className="font-size-18 lh-15 pt-0 mt-0 mb-4 lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}>{this.props.description1}</h1>
                            <p className="font-size-18 lh-15 mb-55 lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}>{this.props.description2}</p>

                            <a className="btn btn-solid btn-primary font-size-12 font-weight-bold ltr-sp-2 text-uppercase px-2 "
                                href="/contact-us"><span>
                                    <span className="btn-txt btn-small">
                                        {this.props.contactUsNowText}</span></span></a>
                            <br />
                        </div>

                        <div className="lqd-column col-md-3 col-md-offset-1">
                            <div className="ld-parallax-wrap parallax-applied">
                                <div className="lqd-column-inner will-change" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:-30}" data-parallax-to="{&quot;translateY&quot;:120}" data-parallax-options="{&quot;duration&quot;:&quot;2000&quot;, &quot;easing&quot;:&quot;linear&quot;, &quot;reverse&quot;:true, &quot;triggerHook&quot;:&quot;onEnter&quot;, &quot;overflowHidden&quot;: false}" style={{ transform: 'translateY(-1.2394592285156243px)' }}>
                                    {columnOne && columnOne.map(item => <HomeServiceItem
                                        key={item.id}
                                        title={item.title} slug={item.id}
                                        shortDescription={item.shortDescription} imageSvg={item.svgIcon} />)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="lqd-column col-md-3">
                            <div className="ld-parallax-wrap parallax-applied">
                                <div className="lqd-column-inner will-change" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:50}" data-parallax-to="{&quot;translateY&quot;:-130}" data-parallax-options="{&quot;duration&quot;:&quot;2000&quot;, &quot;easing&quot;:&quot;linear&quot;, &quot;reverse&quot;:true, &quot;triggerHook&quot;:&quot;onEnter&quot;, &quot;overflowHidden&quot;: false}" style={{ transform: 'translateY(17.2807373046875px)' }}>
                                    {columnTwo && columnTwo.map(item => <HomeServiceItem
                                        key={item.id}
                                        title={item.title} slug={item.id}
                                        shortDescription={item.shortDescription} imageSvg={item.svgIcon} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}