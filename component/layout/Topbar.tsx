import React from 'react';
import i18n from '../../i18n';
import Router from 'next/router';

export default class extends React.Component {
    render() {
        return (<div className="secondarybar-wrap bb-fade-black-005">
            <div className="container secondarybar-container">
                <div className="secondarybar">
                    <div className="row secondarybar-row align-items-center">
                        <div className="col">
                            <div className="header-module">
                                <p className="text-black">
                                    Construimos estrategias para su negocio. <a href="/contact-us" className="text-primary"> Cuéntenos de su proyecto</a></p>
                            </div>
                        </div>{/* /.col */}
                        <div className="col text-right">
                            <div className="header-module">
                                <a href="/crm" className="btn btn-naked font-size-14 text-black">
                                    <span>
                                        <span className="btn-txt">¿Porqué CRM es tan importante?</span>
                                    </span>
                                </a>
                            </div>

                            <div className="header-module">
                                <div className="ld-dropdown-menu">
                                    <span className="ld-module-trigger collapsed" 
                                        onClick={() => i18n.i18n.changeLanguage(i18n.i18n.language === 'es' ? 'en' : 'es', () => setTimeout(() =>  {location.href = Router.pathname}, 500))}
                                        role="button" data-ld-toggle="true" data-toggle="collapse" data-target="#header-dropdown-1" aria-controls="header-dropdown-1" aria-expanded="false">
                                        <span className="ld-module-trigger-txt">
                                            <img className="mr-2" width={20} src="http://opus.liquid-themes.com/wp-content/uploads/flags/united-states-of-america.svg" alt="en" title="English" />
                                            <span>US</span>
                                            <i className="fa fa-angle-down" />
                                        </span>
                                    </span>
                                    <div className="ld-module-dropdown left collapse" id="header-dropdown-1" aria-expanded="false" role="tablist">
                                        <div className="ld-dropdown-menu-content">
                                            <ul>
                                                <li><a href="/es" target="_blank">Español</a></li>
                                            </ul>
                                        </div>
                                    </div>{/* /.ld-module-dropdown */}
                                </div>{/* /.ld-dropdown-menu */}
                            </div>

                            {/* <div className="header-module">
                                <a href="/blog" className="btn btn-naked font-size-14 text-black">
                                    <span>
                                        <span className="btn-txt">Blog</span>
                                    </span>
                                </a>
                            </div> */}

                            <div className="header-module">
                                <ul className="social-icon scheme-gray">
                                    <li><a target="_blank" href="https://www.facebook.com/Cabana-Data-103290631106158"><i className="fa fa-facebook" /></a></li>
                                    <li><a target="_blank" href=" https://wa.me/50685115245"><i className="fa fa-whatsapp" /></a></li>
                                </ul>
                            </div>{/* /.header-module */}
                        </div>{/* /.col text-right */}
                    </div>{/* /.secondarybar-row */}
                </div>{/* /.secondarybar */}
            </div>{/* /.secondarybar-container */}
        </div>

        )
    }
}