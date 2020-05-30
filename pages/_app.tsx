import 'react-phone-input-2/lib/bootstrap.css'
import { ThemeProvider } from 'theme-ui';
import App from 'next/app';
import React from 'react';
import i18nNext from './../i18n';
import theme from '../ui/theme';

class CabanaDataSoftwareApp extends App {
    componentDidMount() {
        require('../public/assets/js/theme.min.js');
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

export default i18nNext.appWithTranslation(CabanaDataSoftwareApp)