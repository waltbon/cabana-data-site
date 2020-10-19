import Document, { Html, Head, Main, NextScript } from 'next/document'
import PageLayout from '../component/layout/PageLayout';

export default class CabanaDataDocument extends Document<PageLayout> {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const isProduction = process && process.env.NODE_ENV === 'production';
        return (
            <Html>
                <Head>
                    { 
                        isProduction &&
                        <>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156293150-1"></script>
                        <script id="mcjs" src="/assets/js/mlch.js"></script>
                        </>
                    }
                    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' rel='stylesheet'></link>
                    <link rel="stylesheet" href="/assets/vendors/liquid-icon/liquid-icon.min.css" />
                    <link rel="stylesheet" href="/assets/vendors/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/theme-vendors.min.css" />
                    <link rel="stylesheet" type="text/css" href="/assets/css/theme.css" />
                    <link rel="stylesheet" type="text/css" href="/assets/css/themes/cabanadata.css" />
                    <link rel='stylesheet' type='text/css' href='/assets/vendors/revolution/css/settings.css' />
                    <script async src="/assets/vendors/modernizr.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
                    <script src="/assets/js/theme-vendors.js"></script>
                    <NextScript />
                    {
                        isProduction &&
                        <script src="/static/js/zh.js"></script>
                    }
                </body>
            </Html>
        );
    }
}