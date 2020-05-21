import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';
import Meta from './Meta';

export default class PageLayout extends React.Component<ILayoutPageProps> {
    render() {
        const urlBase = process.env.API_BASE_URL;
        return (
            <>
                {
                    this.props.seo &&
                    <Meta
                        title={this.props.seo.title}
                        creator={this.props.author}
                        url={urlBase}
                        type={this.props.type}
                        description={this.props.seo.description} />
                }
                <div id="wrap">
                    {
                        !this.props.hideMainHeader && <Header />
                    }
                    {this.props.children}
                    <Footer></Footer>
                </div>
            </>)
    }
}