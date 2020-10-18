import App from 'next/app';
import React from 'react';
import i18nNext from './../i18n';
import 'react-phone-input-2/lib/bootstrap.css'

class CDApp extends App {
    componentDidMount() {
        require('../public/assets/js/theme.min.js');
    }

    render() {
        const { Component, pageProps } = this.props;
        return (<Component {...pageProps} />)
    }
}

CDApp.getInitialProps = async (appContext) => { 
    const appProps = await App.getInitialProps(appContext);
    if (!(appProps as any).namespacesRequired) {
        (appProps as any).namespacesRequired = []
      }
    return {...appProps};
}

export default i18nNext.appWithTranslation(CDApp);