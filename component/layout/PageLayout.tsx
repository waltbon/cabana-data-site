import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';
import Meta from './Meta';

export default class PageLayout extends React.Component<ILayoutPageProps> {
    render() {
        return (
            <div id="wrap">
                {
                    !this.props.hideMainHeader &&
                        <Header seo={this.props.seo} ></Header>
                }
                {this.props.children}
                <Footer></Footer>
            </div>)
    }
}