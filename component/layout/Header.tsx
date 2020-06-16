import React from 'react';
import i18n from '../../i18n';
import { WithTranslation } from 'next-i18next';
import Router from 'next/router';

class Header extends React.Component<WithTranslation> {
    render() {
        return (
            <header className="main-header main-header-overlay bb-fade-black-005" data-sticky-header="true">
                <div className="secondarybar-wrap bb-fade-black-005">
                    <div className="container secondarybar-container" ></div>
                </div>
                <div className="secondarybar-wrap py-3">
                    <div className="container secondarybar-container">
                        <div className="secondarybar">
                            <div className="row secondarybar-row align-items-center">
                                <div className="col-auto">
                                    <div className="header-module">
                                        <a href="/">
                                            <img src="/assets/img/logo/cabanadata/cd-ho-b.png" width="190px" alt="Cabana Data Software" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col text-right">
                                    <div className="header-module">
                                        <div className="iconbox iconbox-side iconbox-md iconbox-heading-xs align-items-center">
                                            <div className="iconbox-icon-wrap">
                                                <span className="iconbox-icon-container text-secondary">
                                                    <i className="icon-ion-ios-mail"></i>
                                                </span>
                                            </div>
                                            <div className="contents">
                                                <h3 className="mb-1 font-size-13">{this.props.t('menu_lets_talk_title')}</h3>
                                                <p className="font-size-13 lh-185">
                                                    <a href="/contact-us">{this.props.t('menu_lets_talk_text')}</a>
                                                </p>
                                            </div>{/* /.contents*/}
                                        </div>{/* /.iconbox*/}
                                    </div>{/* /.header-module*/}
                                    <div className="header-module">
                                        <div className="ld-module-v-sep">
                                            <div className="ld-v-sep-inner"> </div>
                                        </div>{/* /.ld-module-v-sep*/}
                                    </div>{/* /.header-module*/}
                                    <div className="header-module">
                                        <div className="iconbox iconbox-side iconbox-md iconbox-heading-xs align-items-center">
                                            <div className="iconbox-icon-wrap">
                                                <span className="iconbox-icon-container text-secondary"><i className="icon-ion-ios-pin"></i></span>
                                            </div>{/* /.iconbox-icon-wrap*/}
                                            <div className="contents">
                                                <h3 className="mb-1 font-size-13">{this.props.t('menu_our_location')}</h3>
                                                <p className="font-size-13 lh-185">Curridabat, Santa Ana. Costa Rica</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* /.col text-right*/}
                            </div>{/* /.secondarybar-row*/}
                        </div>{/* /.secondarybar*/}
                    </div>{/* /.secondarybar-container*/}
                </div>{/* /.secondarybar-wrap*/}
                <div className="mainbar-wrap">
                    <div className="megamenu-hover-bg"></div>
                    <div className="container mainbar-container">
                        <div className="mainbar">
                            <div className="row mainbar-row align-items-lg-stretch">
                                <div className="col-auto visible-when-stuck">
                                    <div className="navbar-header">
                                        <a className="navbar-brand pt-20 pb-20" href="/" rel="home">
                                            <span className="navbar-brand-inner">
                                                <img className="logo-sticky" width="140px" src="/assets/img/logo/cabanadata/cd-ho-b.png" alt="Cabana Data Logo" />
                                                <img className="mobile-logo-default" width="140px" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Cabana Data Logo Mob" />
                                                <img className="logo-default" width="140px" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Cabana Data Logo Def" />
                                            </span>
                                        </a>
                                        <button className="navbar-toggle collapsed nav-trigger style-mobile" type="button" data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false" data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="bars">
                                                <span className="bar"></span>
                                                <span className="bar"></span>
                                                <span className="bar" ></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="collapse navbar-collapse" id="main-header-collapse">
                                        <ul className="main-nav nav align-items-lg-stretch justify-content-lg-left" id="primary-nav" data-submenu-options="{ &quot;toggleType&quot;:&quot;fade&quot;, &quot;handler&quot;:&quot;mouse-in-out&quot; }" data-localscroll="true">
                                            <li className="is-active"><a href="/"><span className="link-icon" /><span className="link-txt"><span className="link-ext" /><span className="txt">
                                                {this.props.t('menu_home')}
                                            </span></span></a></li>
                                            <li className="menu-item-has-children"><a href="/#services"><span className="link-icon" /><span className="link-txt"><span className="link-ext" /><span className="txt">
                                                {this.props.t('menu_services')}
                                            </span></span></a>
                                                <ul className="nav-item-children">
                                                    <li><a href="/software-development"><span className="link-icon"></span><span className="link-txt"><span className="link-ext"></span><span className="txt">Desarrollo de Software<span className="submenu-expander"><i className="fa fa-angle-down" /></span></span></span></a></li>
                                                    <li><a href="/e-commerce"><span className="link-icon" /><span className="link-txt"><span className="link-ext"></span><span className="txt">E-Commerce<span className="submenu-expander"><i className="fa fa-angle-down" /></span></span></span></a></li>
                                                    <li><a href="/crm"><span className="link-icon" /><span className="link-txt"><span className="link-ext"></span><span className="txt">CRM<span className="submenu-expander"><i className="fa fa-angle-down" /></span></span></span></a></li>
                                                </ul>
                                            </li>
                                            {/* <li className="is-active"><a href="/blog"><span className="link-icon" /><span className="link-txt"><span className="link-ext" /><span className="txt">
                                                {this.props.t('menu_blog')}
                                            </span></span></a></li> */}
                                            <li><a href="/contact-us"><span className="link-icon"></span><span className="link-txt"><span className="link-ext"></span><span className="txt">
                                                {this.props.t('menu_contact')}
                                            </span></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col text-right">
                                    <div className="header-module">
                                        <div className="ld-dropdown-menu">
                                            <span className="ld-module-trigger collapsed" role="button" data-ld-toggle="true" data-toggle="collapse" data-target="#header-dropdown-1" aria-controls="header-dropdown-1" aria-expanded="false">
                                                <span className="ld-module-trigger-txt text-white text-small">
                                                    <button className="btn btn-icon" style={{backgroundColor: "#2D3252"}} type='button' onClick={() => i18n.i18n.changeLanguage(i18n.i18n.language === 'es' ? 'en' : 'es', () => setTimeout(() =>  {location.href = Router.pathname}, 500))}>
                                                        <img src={`/assets/img/locales/${this.props.t('change_language_to')}.svg`} style={{marginRight: '10px'}} width="14px" />
                                                    <small className="text-white">
                                                        {this.props.t('change_language_to_text')}
                                                    </small>
                                                    </button>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>{/* /.col*/}
                            </div>{/* /.mainbar-row*/}
                        </div>{/* /.mainbar*/}
                    </div>{/* /.mainbar-container*/}
                </div>{/* /.mainbar-wrap*/}
            </header>)
    }
}

export default i18n.withTranslation('header')(Header)