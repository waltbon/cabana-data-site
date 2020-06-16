import React from 'react';

export default class extends React.Component<any> {
    render() {
        return (
            <header className="main-header main-header-overlay" style={{ backgroundColor: 'transparent !important' }} data-react-to-megamenu="true" data-sticky-header="true" data-sticky-options="{ &quot;stickyTrigger&quot;: &quot;first-section&quot; }">
                <div className="mainbar-wrap" >
                {/* style={{ backgroundColor: 'transparent !important' }} */}
                    <div className="megamenu-hover-bg" />
                    <div className="container mainbar-container">
                        <div className="mainbar">
                            <div className="row mainbar-row align-items-lg-stretch px-4">
                                <div className="col">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="/" rel="home">
                                            <span className="navbar-brand-inner">
                                                <img className="logo-dark" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Logo" width="190px" />
                                                <img className="logo-sticky" src="/assets/img/logo/cabanadata/cd-ho-b.png" alt="Logo" width="190px" />
                                                <img className="mobile-logo-default" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Logo" width="190px" />
                                                <img className="logo-default" src="/assets/img/logo/cabanadata/cd-ho-w.png" alt="Logo" width="190px" />
                                            </span>
                                        </a>
                                        <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile" data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false" data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="bars">
                                                <span className="bar" />
                                                <span className="bar" />
                                                <span className="bar" />
                                            </span>
                                        </button>
                                    </div>{/* /.navbar-header */}
                                </div>{/* /.col */}
                                <div className="col">
                                    <div className="collapse navbar-collapse" id="main-header-collapse">
                                        <ul id="primary-nav" className="main-nav nav align-items-lg-stretch justify-content-lg-center" data-submenu-options="{ &quot;toggleType&quot;:&quot;fade&quot;, &quot;handler&quot;:&quot;mouse-in-out&quot; }">
                                            <li>
                                                <a href="/">
                                                    <span className="link-icon" />
                                                    <span className="link-txt">
                                                        <span className="link-ext" />
                                                        <span className="txt">
                                                            Home
                                                            <span className="submenu-expander">
                                                                <i className="fa fa-angle-down" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="/blog">
                                                    <span className="link-icon" />
                                                    <span className="link-txt">
                                                        <span className="link-ext" />
                                                        <span className="txt">
                                                            Blog
                                                        </span>
                                                    </span>
                                                </a>
                                            </li> */}
                                        </ul>{/* /#primary-nav  */}
                                    </div>{/* /#main-header-collapse */}
                                </div>{/* /.col */}
                                <div className="col text-right"> 
                                {
                                    this.props.title &&
                                    <div className="header-module" >
                                        <span>{this.props.title}</span>
                                    </div>
                                }
                                    <div className="header-module">
                                        <ul className="social-icon social-icon-sm">
                                            <li>
                                                <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank"><i className="fa fa-telegram" /></a>
                                            </li>
                                        </ul>
                                    </div>{/* /.header-module */}
                                </div>{/* /.col */}
                            </div>{/* /.mainbar-row */}
                        </div>{/* /.mainbar */}
                    </div>{/* /.mainbar-container */}
                </div>{/* /.mainbar-wrap */}
            </header>
        )
    }
}