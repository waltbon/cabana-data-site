import React from 'react';

export default class extends React.Component<{
    imageSvg: string;
    title: string;
    shortDescription: string;
    slug: string;
}> {
    render() {
        return (
            <a className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating" href="/services/apps">
                <div className="iconbox-icon-wrap">
                    <span className="iconbox-icon-container mb-25">
                    <div dangerouslySetInnerHTML={{__html: this.props.imageSvg}}></div>
                    </span>
                </div>{/* /.iconbox-icon-wrap*/}
                <div className="contents">
                    <h3>{this.props.title}</h3>
                    <p className="font-size-16 lh-165">{this.props.shortDescription}</p>
                </div>{/* /.contents*/}
            </a>
        )
    }
}