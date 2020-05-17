import React from 'react';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';

interface Props extends ILayoutPageProps {
    titlebarBackgroundImage: string;
    title: string;
    gradientColor?: string;
}
export default class extends React.Component<Props> {
    render() {
        const gradColor = this.props.gradientColor || '2D3252';
        return (
            <div className="titlebar titlebar-sm scheme-light text-center" data-parallax="true" data-parallax-options='{ "parallaxBG": true }' style={{ backgroundImage: `url(${this.props.titlebarBackgroundImage})` }}>
                <div className="titlebar-overlay ld-overlay" style={{ background: `linear-gradient(65deg, #${gradColor} 0%, rgba(137, 135, 226, 0.084) 100%)` }}></div>
                <header className="main-header main-header-overlay bb-fade-black-005" data-sticky-header="true" style={{backgroundColor: 'transparent'}}>
                    <div className="mainbar-wrap px-4" style={{backgroundColor: 'transparent !important'}}>
                        <span className="megamenu-hover-bg"></span>
                        <div className="container mainbar-container">
                            <div className="mainbar">
                                <div className="row mainbar-row">
                                    <div className="col-auto">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile mobile-nav-trigger-cloned" data-toggle="collapse" data-target="#main-header-collapse-clone" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="bars">
                                                    <span className="bar" />
                                                    <span className="bar" />
                                                    <span className="bar" />
                                                </span>
                                            </button>
                                            <a className="navbar-brand" href="/">
                                                <span className="navbar-brand-inner">
                                                    <img className="mobile-logo-default" src="/assets/img/logo/cabanadata/cd-ho-w.png" width="230px" />
                                                    <img className="logo-default" src="/assets/img/logo/cabanadata/cd-ho-w.png" width="230px" />
                                                </span>{/* /.navbar-brand-inner */}
                                            </a>
                                        </div>{/* /.navbar-header */}
                                    </div>{/* /.col */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="titlebar-inner pt-50 pb-210">
                    <div className="container titlebar-container">
                        <div className="row titlebar-container">
                            <div className="titlebar-col col-md-12">
        <h1 data-fittext="true" data-fittext-options="{ &quot;maxFontSize&quot;: 80, &quot;minFontSize&quot;: 32 }">{this.props.title}</h1>
                                <ol className="breadcrumb reset-ul inline-nav comma-sep-li">
                                    <li className="breadcrumb-item"><a href="/"><span>Home</span></a></li>
                                </ol>
                            </div>{/* /.titlebar-col */}
                        </div>{/* /.titlebar-row */}
                    </div>{/* /.titlebar-container */}
                </div>{/* /.titlebar-inner */}


            </div>
        )
    }
}