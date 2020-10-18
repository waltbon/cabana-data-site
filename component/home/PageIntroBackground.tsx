import React from 'react';
import { IImage } from '../../lib/types/cms/models/common/image.interface';

interface Props {
  title: string;
  subtitle: string;
  background: IImage;
  c2a?: {
    text: string;
    url: string;
    isScroll?: boolean
  } 
}

export default class extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <section className="vc_row pt-285 pb-285 bg-cover bg-center-bottom" data-row-bg={`${this.props.background.url}`}><span className="row-bg-loader"></span>
          <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #2D3252 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-8" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;all-childs&quot;,&quot;duration&quot;:&quot;1500&quot;,&quot;delay&quot;:&quot;220&quot;, &quot;startDelay&quot;: 200,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:80,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                <h1 className="h1 pr-md-8 mb-20 pt-60 text-white" data-split-text="true" data-split-options="{type:lines}" data-fittext="true" data-fittext-options="{&quot;compressor&quot;: 0.5, &quot;maxFontSize&quot;: 60}">{this.props.title}</h1>
                <p className="mb-40 font-size-20 lh-175 text-white pr-md-5">{this.props.subtitle}</p>
                {
                  this.props.c2a && this.props.c2a.isScroll &&
                    <a className="btn btn-solid round font-size-12 font-weight-bold ltr-sp-2 text-uppercase px-2" 
                      href={this.props.c2a.url} 
                      data-localscroll={this.props.c2a.isScroll.toString()} 
                      data-localscroll-options={`{scrollTo:${this.props.c2a.url}}`}><span>
                      <span className="btn-txt btn-link">{this.props.c2a.text}</span></span></a>                }
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}