import React, { FC, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import { ILayoutPageProps } from '../../lib/types/landing-page-props.interface';
import Script from 'next/script';

const PageLayout: FC<ILayoutPageProps> = (props: ILayoutPageProps, {}: any) => {
    const urlBase = process.env.API_BASE_URL;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (loaded) {
            return;
        }

        setLoaded(true);
        return () => {
        }
    }, [loaded]);
    
    
    return (
        <>
            <Meta
                title={props.seo.title}
                lang={props.lang}
                creator={props.author}
                url={urlBase}
                type={props.type}
                imageUrl={props.seo.image ? props.seo.image.url : '/assets/img/logo/cabanadata/logo-rounded.png'}
                description={props.seo.description} />
            <div id="wrap">
                <Header lang={props.lang} />
                <main className="content" id="content">
                    {props.children}
                </main>
                <Footer />
            </div>
            <Script src='/assets/js/theme.min.js' strategy="afterInteractive" />
        </>)
}


export default PageLayout;