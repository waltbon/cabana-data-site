import React from 'react';
import { NavigationLink } from '../common';

interface Props {
    headerInvitationTitle: string;
    headerInvitationC2aText: string;
    headerInvitationC2aUrl: string;
    rightInvitationText: string;
    rightInvitationC2AText: string;
    rightInvitationC2AUrl: string;
    locale: string;
}

export default class extends React.Component<Props> {
    render() {
        return (<div className="secondarybar-wrap bb-fade-black-005">
            <div className="container secondarybar-container">
                <div className="secondarybar">
                    <div className="row secondarybar-row align-items-center">
                        <div className="col">
                            <div className="header-module">
                                <p className="text-black">{this.props.headerInvitationTitle}
                                    <a href={this.props.headerInvitationC2aUrl} className="text-primary"> {this.props.headerInvitationC2aText}</a>
                                </p>
                            </div>
                        </div>{/* /.col */}
                        <div className="col text-right">
                            <div className="header-module">
                                <NavigationLink locale={this.props.locale} to="/contact-us">
                                    <span>
                                        <span className="btn-txt">
                                            {this.props.rightInvitationText}
                                            {/* {this.props.rightInvitationC2AText} */}
                                        </span>
                                    </span>
                                </NavigationLink>
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