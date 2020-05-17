import 'react-phone-input-2/lib/bootstrap.css'
import { ThemeProvider } from 'theme-ui';
import App from 'next/app';
import React from 'react';
import theme from '../ui/theme';
import { IPageGlobalProps, IAppInitialGlobalProps } from '../lib/types/app.global';
declare var jQuery: any;

class CabanaDataSoftwareApp extends App {
    componentDidMount() {
        jQuery.fn.__jqthings();
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}

CabanaDataSoftwareApp.getInitialProps = async ({ Component, ctx }): Promise<IPageGlobalProps> => {
    let pageProps: IAppInitialGlobalProps = {
        seo: {} as any
    };

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx) as IAppInitialGlobalProps;
    }

    return { pageProps };
}

export default CabanaDataSoftwareApp