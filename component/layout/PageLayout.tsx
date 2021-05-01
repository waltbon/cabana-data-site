import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';

class PageLayout extends React.Component<ILayoutPageProps> {
    render() {
        const urlBase = process.env.API_BASE_URL;
        return (
            <>
                <Meta
                    title={this.props.seo.title}
                    lang={this.props.lang}
                    creator={this.props.author}
                    url={urlBase}
                    type={this.props.type}
                    imageUrl={this.props.seo.image ? this.props.seo.image.url : ''}
                    description={this.props.seo.description} />
                <div id="wrap">
                    <Header lang={this.props.lang} />
                    <main className="content" id="content">
                        {this.props.children}
                    </main>
                    <Footer/>
                </div>
            </>)
    }
}

export default PageLayout;