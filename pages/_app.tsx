import 'react-phone-input-2/lib/bootstrap.css'
import { ThemeProvider } from 'theme-ui';
import App from 'next/app';
import React from 'react';
import theme from '../ui/theme';
import Head from 'next/head';

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

export default CabanaDataSoftwareApp