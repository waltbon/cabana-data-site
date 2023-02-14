import React from 'react';
import { withTranslation, WithTranslation } from 'next-i18next';
// import Router from 'next/router';
import Topbar from './Topbar';
import { TranslateLink } from '../common/TranslateLink';
import { NavigationLink } from '../common';

interface IProps extends WithTranslation {
    lang?: string
}
class Header extends React.Component<IProps> {
    render() {
        return (
            <header className="main-header main-header-overlay" data-sticky-header="true">
                <Topbar
                    locale={this.props.lang||'es'}
                    rightInvitationText={this.props.t('topbar_right_invitation_title')}
                    rightInvitationC2AText={this.props.t('topbar_right_invitation_c2a_text')}
                    rightInvitationC2AUrl="tel:50685115245"
                    headerInvitationTitle={this.props.t('topbar_invitation_title')}
                    headerInvitationC2aText={this.props.t('topbar_invitation_c2a')}
                    headerInvitationC2aUrl="/contact-us" />
                <div className="secondarybar-wrap bb-fade-black-005">
                    <div className="container secondarybar-container" ></div>
                </div>
                <div className="secondarybar-wrap py-1">
                    <div className="container secondarybar-container">
                        <div className="secondarybar">
                            <div className="row secondarybar-row align-items-center">
                                <div className="col-auto">
                                    <div className="header-module">
                                        <NavigationLink locale={this.props.i18n.language} to="/">
                                            <img src="/assets/img/logo/cabanadata/cd-ho-b.png" width="190px" alt="Cabana Data" />
                                        </NavigationLink>
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
                                                <h3 className="mb-0 pb-0 font-weight-semibold font-size-13">{this.props.t('menu_lets_talk_title')}</h3>
                                                <p className="font-size-13 lh-185 py-0 my-0">
                                                    <NavigationLink className='py-0 my-0' locale={this.props.i18n.language} to="/contact-us">{this.props.t('menu_lets_talk_text')}</NavigationLink>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-module">
                                        <div className="ld-module-v-sep">
                                            <div className="ld-v-sep-inner"> </div>
                                        </div>
                                    </div>
                                    <div className="header-module">
                                        <div className="iconbox iconbox-side iconbox-md iconbox-heading-xs align-items-center">
                                            <div className="iconbox-icon-wrap">
                                                <span className="iconbox-icon-container text-secondary"><i className="icon-ion-ios-pin"></i></span>
                                            </div>
                                            <div className="contents">
                                                <h3 className="mb-0 font-size-13">{this.props.t('menu_our_location')}</h3>
                                                <p className="font-size-13 lh-185">San José, Costa Rica 🇨🇷</p>
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
                                        <NavigationLink className="navbar-brand pt-20 pb-20" to="/" locale={this.props.lang}>
                                            <span className="navbar-brand-inner">
                                                <img className="logo-sticky" width="140px" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Cabana Data Logo" />
                                                <img className="mobile-logo-default" width="140px" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Cabana Data Logo Mob" />
                                                <img className="logo-default" width="140px" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Cabana Data Logo Def" />
                                            </span>
                                        </NavigationLink>
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
                                            <li className="is-active"><NavigationLink locale={this.props.i18n.language} to="/"><span className="link-icon" /><span className="link-txt"><span className="link-ext" /><span className="txt">
                                                {this.props.t('menu_home')}
                                            </span></span></NavigationLink></li>


                                            <li className="menu-item-has-children"><a href=""><span className="link-icon" /><span className="link-txt"><span className="link-ext" /><span className="txt">{this.props.t('menu_services')}</span></span></a>
                                                <ul className="nav-item-children">
                                                    <li><NavigationLink locale={this.props.i18n.language} to="/services/custom-software-development"><span className="link-icon"></span><span className="link-txt"><span className="link-ext"></span><span className="txt">{this.props.t('menu_services_custom_web_development')}<span className="submenu-expander"><i className="fa fa-angle-down" /></span></span></span></NavigationLink></li>
                                                </ul>
                                            </li>

                                            <li><a href="/careers"><span className="link-icon"></span><span className="link-txt"><span className="link-ext"></span><span className="txt">
                                                {this.props.t('menu_work_with_us')}
                                            </span></span></a></li>

                                            <li><a href="/contact-us"><span className="link-icon"></span><span className="link-txt"><span className="link-ext"></span><span className="txt">
                                                {this.props.t('menu_contact')}
                                            </span></span></a></li>

                                            <li className='hidden-lg'>
                                                <TranslateLink hideFlag={false} text={this.props.t('change_language_to_text')} nextLocale={this.props.t('change_language_to')} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col text-right">
                                    <div className="header-module">
                                        <div className="ld-dropdown-menu">
                                            <span className="ld-module-trigger collapsed" role="button" data-ld-toggle="true" data-toggle="collapse" data-target="#header-dropdown-1" aria-controls="header-dropdown-1" aria-expanded="false">
                                                <span className="ld-module-trigger-txt text-white text-small">
                                                    <TranslateLink text={this.props.t('change_language_to_text')} nextLocale={this.props.t('change_language_to')} />
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >)
    }
}

export default withTranslation('header')(Header);