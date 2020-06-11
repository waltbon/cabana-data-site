import React from 'react';

export default class extends React.Component<{
    imageSvg: string;
    title: string;
    shortDescription: string;
    slug: string;
}> {
    render() {
        return (
            <a className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating"
             href={`/${this.props.slug}`}>
                <div className="iconbox-icon-wrap">
                    {/* <i className={`fa ${this.props.imageSvg} fa-3x`}></i> */}
                    {/* <span className="iconbox-icon-container mb-25"></span> */}
                    {/* <div dangerouslySetInnerHTML={{__html: this.props.imageSvg}}></div>
                    </span> */}
                </div>{/* /.iconbox-icon-wrap*/}
                <div className="contents">
                    <h3><i className={`fa ${this.props.imageSvg} fa-1x`}></i> {this.props.title}</h3>
                    <p className="font-size-16 lh-165 pb-2">{this.props.shortDescription}</p>
                    <small className=""> <i className="fa fa-hand-o-right"></i> Entre para conocer más</small>
                </div>{/* /.contents*/}
            </a>
        )
    }
}