import React from 'react';
import { ISkill } from '../../lib/types/cms/models/home.model';

export default class extends React.Component<{
    title: string,
    subtitle: string,
    skills: ISkill[]
}> {
    render() {
        return (
            <section className="vc_row pt-70 pb-70">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="lqd-column col-xs-12 mb-40">
                            <header className="fancy-title text-center mb-6">
                                <h6 className="mb-3 font-size-12 font-weight-bold ltr-sp-2 text-uppercase opacity-04">{this.props.subtitle}</h6>
                                <h2 className="font-size-40 font-weight-bold">{this.props.title}</h2>
                            </header>
                        </div>

                        <div className="lqd-column col-md-4 col-xs-12">
                            {
                                this.props.skills.filter(sk => sk.columnOrder === 1).map(sk => {
                                    return <div key={sk.id} className="iconbox iconbox-side iconbox-circle iconbox-sm text-right mb-70">
                                        <div className="iconbox-icon-wrap">
                                            <span className="iconbox-icon-container">
                                                <span className="iconbox-icon-hover-bg bg-dark" />
                                                <i className={sk.iconClass} />
                                            </span>
                                        </div>{/* /.iconbox-icon-wrap */}
                                        <div className="contents">
                                            <h3 className="font-size-16 font-weight-semibold">{sk.title}</h3>
                                            <p className="font-size-14">{sk.description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="lqd-column col-md-4 col-xs-12 visible-lg visible-md px-md-6">
                            <figure className="mb-70">
                                <img className="img-responsive img-circle" src="/assets/img/misc/mobile.jpg" alt="Mobile" />
                            </figure>
                        </div>{/* /.lqd-column col-md-4 col-xs-12 */}
                        <div className="lqd-column col-md-4 col-xs-12">
                            {
                                this.props.skills.filter(sk => sk.columnOrder === 2).map(sk => {
                                    return <div key={sk.id} className="iconbox iconbox-side iconbox-circle iconbox-sm text-left mb-70">
                                        <div className="iconbox-icon-wrap">
                                            <span className="iconbox-icon-container">
                                                <span className="iconbox-icon-hover-bg bg-dark" />
                                                <i className={sk.iconClass} />
                                            </span>
                                        </div>{/* /.iconbox-icon-wrap */}
                                        <div className="contents">
                                            <h3 className="font-size-16 font-weight-semibold">{sk.title}</h3>
                                            <p className="font-size-14">{sk.description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>


        )
    }
}