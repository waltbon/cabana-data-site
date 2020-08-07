import App from 'next/app';
import React from 'react';
import i18nNext from './../i18n';
import 'react-phone-input-2/lib/bootstrap.css'

class CabanaDataSoftwareApp extends App {
    componentDidMount() {
        require('../public/assets/js/theme.min.js');
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        )
    }
}

// CabanaDataSoftwareApp.getInitialProps = async (appContext) => ({ 
//     ...await CabanaDataSoftwareApp.getInitialProps(appContext) 
// })

export default i18nNext.appWithTranslation(CabanaDataSoftwareApp)