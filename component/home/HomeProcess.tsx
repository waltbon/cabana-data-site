import React from 'react';
import { IHomeProcess } from '../../lib/types/cms/models/home.model';

export default class extends React.Component<{
    title: string,
    subtitle: string,
    process: IHomeProcess[]
}> {
    render() {
        return (
            <section className="vc_row pt-100 pb-40" id="process" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.lqd-column&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:43,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-6 col-md-offset-3 mb-80">
                            <header className="fancy-title mb-40 text-center">
                                <h2 className="mt-0">
                                    <span className="text-secondary">
                                        {this.props.title}
                                    </span>
                                </h2>
                                <p className="font-size-18">{this.props.subtitle}</p>
                            </header>
                        </div>{/* /.lqd-column col-md-6 col-md-offset-6*/}
                    </div>{/* /.row*/}
                    <div className="row">
                        {Array.isArray(this.props.process) && this.props.process.map(p => {
                            return (<div key={p.id} className="lqd-column col-md-4 col-sm-6">
                                <div className="iconbox iconbox-wavebg px-3" data-animate-icon="true" data-plugin-options="{color:#3E6170}">
                                    <div className="iconbox-icon-wrap"><span className="iconbox-icon-container"><span className="icon-wave-bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="125.062" height="88.62" viewBox="0 0 125.062 88.62">
                                            <path style={{ fill: `${p.waveBgHexCode} !important` }} d="M488.806,2544.02s35.988-16.17,53.518-7.45S565,2541.44,574,2549s18.09,19.21,14.009,41.12c-3.62,19.44-25.466,15.87-37.2,27.79-10.557,10.72-68.616,1.88-74.4-12.88-6.841-17.45-13.114-17.84-12.406-34.03C464.452,2560.66,475.315,2554.71,488.806,2544.02Z" transform="translate(-463.938 -2534)" />
                                        </svg>
                                    </span>
                                    <svg height="70" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m360 8h-208a32.042 32.042 0 0 0 -32 32v432a32.042 32.042 0 0 0 32 32h208a32.042 32.042 0 0 0 32-32v-432a32.042 32.042 0 0 0 -32-32zm-66.56 16-4.5 16h-66.69l-4-16zm82.56 448a16.021 16.021 0 0 1 -16 16h-208a16.021 16.021 0 0 1 -16-16v-432a16.021 16.021 0 0 1 16-16h49.75l6.49 25.94a8 8 0 0 0 7.76 6.06h79a8 8 0 0 0 7.7-5.83l7.36-26.17h49.94a16.021 16.021 0 0 1 16 16z"/><path d="m216 456h-56a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16z"/><path d="m248 456h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z"/><path d="m284.116 209.14a8 8 0 0 0 -10.976 2.744l-48 80a8 8 0 1 0 13.72 8.232l48-80a8 8 0 0 0 -2.744-10.976z"/><path d="m310.247 211a8 8 0 0 0 -12.494 10l28 35-28 35a8 8 0 0 0 12.494 10l32-40a8 8 0 0 0 0-10z"/><path d="m201.753 301a8 8 0 1 0 12.494-10l-28-35 28-35a8 8 0 1 0 -12.494-10l-32 40a8 8 0 0 0 0 10z"/></g></svg>
                                    </span>
                                    </div>
                                    <div className="contents">
                                        <h3>{p.title}</h3>
                                        <p>{p.description}</p>
                                    </div>
                                </div>
                            </div>)
                        })
                        }
                    </div>{/* /.row*/}
                </div>{/* /.container*/}
            </section>
        )
    }
}