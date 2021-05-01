import { withTranslation, WithTranslation } from 'next-i18next';
import React from 'react';

export class _Footer extends React.Component<WithTranslation> {
    render() {
        return (
            <footer className="main-footer pt-50 pb-50" data-sticky-footer="true" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
                <section>
                    <div className="container">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="lqd-column col-md-3 col-xs-12 text-center text-md-left mb-4 mb-md-0">
                                <a href="/"><img src="/assets/img/logo/cabanadata/cd-sq-w.png" width="120px" alt="Cabana Data Logo" /></a>
                            </div>
                            <div className="lqd-column col-md-4 col-xs-12 text-center mb-4 mb-md-0">
                                <ul className="lqd-custom-menu reset-ul inline-nav">
                                    <li><a href="/">{this.props.t('menu_home')}</a></li>
                                    <li><a href="/contact-us">{this.props.t('menu_contact')}</a></li>
                                </ul>
                            </div>{/* /.col-md-3 col-xs-12*/}
                            <div className="lqd-column col-md-3 col-xs-12 text-center text-md-right">
                                <ul className="social-icon social-icon-md">
                                    <li><a target="_blank" href="https://t.me/waltbon"><i className="fa fa-telegram" /></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/company/cabana-data"><i className="fa fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default withTranslation('header')(_Footer)