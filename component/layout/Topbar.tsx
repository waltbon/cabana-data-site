import React from 'react';

export default class extends React.Component {
    render() {
        return (<div className="secondarybar-wrap bb-fade-black-005">
            <div className="container secondarybar-container">
                <div className="secondarybar">
                    <div className="row secondarybar-row align-items-center">
                        <div className="col">
                            <div className="header-module">
                                <p className="text-black">
                                Tenemos estrategias para sus necesidades. <a href="/contact-us" className="text-primary">¡Queremos escucharlas!</a></p>
                            </div>
                        </div>{/* /.col */}
                        <div className="col text-right">
                            <div className="header-module">
                                <a href="#" className="btn btn-naked font-size-14 text-black">
                                    <span>
                                        <span className="btn-txt">Servicios</span>
                                    </span>
                                </a>
                            </div>{/* /.header-module */}
                            <div className="header-module">
                                <a href="#" className="btn btn-naked font-size-14 text-black">
                                    <span>
                                        <span className="btn-txt">Blog</span>
                                    </span>
                                </a>
                            </div>{/* /.header-module */}
  
                            <div className="header-module">
                                <ul className="social-icon scheme-gray">
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
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