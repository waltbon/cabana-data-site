import React from 'react';
import HomeServiceItem from './HomeServiceItem';
import { IHomeService } from '../../lib/types/cms/models/home.model';

export default class extends React.Component<{
    title: string;
    description1: string;
    description2: string;
    services: IHomeService[]
}> {
    render() {
        const columnOne = this.props.services.filter(s => s.column === 1);
        const columnTwo = this.props.services.filter(s => s.column === 2);
        return (
            <section className="vc_row pt-90 pb-90 bg-no-repeat" id="about-us" style={{ backgroundImage: 'url(./assets/demo/bg/bg-77.svg)', backgroundPosition: '500% 0%' }}>
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="lqd-column col-md-5 mb-30 ca-initvalues-applied lqd-animations-done" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:30, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1}}">
                            <header className="fancy-title pr-md-4">
                                <h6 className="text-uppercase lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}> <img src="/assets/img/logo/cabanadata/cd-sq-b.png" width="160px" style={{ marginBottom: '20px' }} /></h6>
                                <h1 className="lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}><strong>{this.props.title}</strong></h1>
                            </header>
                            <p className="font-size-18 lh-15 mb-4 lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}>{this.props.description1}</p>
                            <p className="font-size-18 lh-15 mb-55 lqd-unit-animation-done" style={{ transform: 'translateY(0px)', opacity: 1 }}>{this.props.description2}</p>
                        </div>{/* /.lqd-column col-md-5*/}

                        <div className="lqd-column col-md-3 col-md-offset-1">
                            <div className="ld-parallax-wrap parallax-applied">
                                <div className="lqd-column-inner will-change" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:-30}" data-parallax-to="{&quot;translateY&quot;:120}" data-parallax-options="{&quot;duration&quot;:&quot;2000&quot;, &quot;easing&quot;:&quot;linear&quot;, &quot;reverse&quot;:true, &quot;triggerHook&quot;:&quot;onEnter&quot;, &quot;overflowHidden&quot;: false}" style={{ transform: 'translateY(-1.2394592285156243px)' }}>
                                    { columnOne && columnOne.map(item => <HomeServiceItem
                                        key={item.id}
                                        title={item.service.title} slug={item.service.slug}
                                        shortDescription={item.service.shortDescription} imageSvg={item.imageSvg} />)
                                    }
                                </div>
                            </div>{/* /.lqd-column-inner*/}
                        </div>{/* /.lqd-column col-md-3*/}
                        <div className="lqd-column col-md-3">
                            <div className="ld-parallax-wrap parallax-applied">
                                <div className="lqd-column-inner will-change" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:50}" data-parallax-to="{&quot;translateY&quot;:-130}" data-parallax-options="{&quot;duration&quot;:&quot;2000&quot;, &quot;easing&quot;:&quot;linear&quot;, &quot;reverse&quot;:true, &quot;triggerHook&quot;:&quot;onEnter&quot;, &quot;overflowHidden&quot;: false}" style={{ transform: 'translateY(17.2807373046875px)' }}>
                                { columnTwo && columnTwo.map(item => <HomeServiceItem
                                        key={item.id}
                                        title={item.service.title} slug={item.service.slug}
                                        shortDescription={item.service.shortDescription} imageSvg={item.imageSvg} />)
                                    }
                                </div>
                            </div>{/* /.lqd-column-inner*/}
                        </div>{/* /.lqd-column col-md-3*/}
                    </div>{/* /.row*/}
                </div>{/* /.container*/}
            </section>


        )
    }
}