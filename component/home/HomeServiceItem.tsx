import React from 'react';

export default class extends React.Component<{
    imageSvg: string;
    title: string;
    shortDescription: string;
    slug: string;
}> {
    render() {
        return (
            <div className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                {/* // href={`/${this.props.slug}`} */}
                <div className="iconbox-icon-wrap">
                    <i className={`fa ${this.props.imageSvg || 'fa-user'} fa-5x`} style={{
                        color: '#afafaf30',
                        right: '18px',
                        position:'absolute'}}></i>
                    <span className="iconbox-icon-container mb-25"></span>
                </div>{/* /.iconbox-icon-wrap*/}
                <div className="contents">
                    <h3>
                        {this.props.title}</h3>
                    <p className="font-size-16 lh-165 pb-2 text-dark">{this.props.shortDescription}</p>
                    {/* <a className=""> <i className="fa fa-hand-o-right"></i> Ver información...</a> */}
                </div>{/* /.contents*/}
            </div>
        )
    }
}