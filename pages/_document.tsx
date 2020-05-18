import Document, { Html, Head, Main, NextScript } from 'next/document'
import PageLayout from '../component/layout/PageLayout';

export default class PersonalSupervisorDocument extends Document<PageLayout> {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' rel='stylesheet'></link>
                    <link rel="stylesheet" href="/assets/vendors/liquid-icon/liquid-icon.min.css" />
                    <link rel="stylesheet" href="/assets/vendors/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/theme-vendors.min.css" />
                    <link rel="stylesheet" type="text/css" href="/assets/css/main.css" />
                    <link rel='stylesheet' type='text/css' href='/assets/vendors/revolution/css/settings.css' />
                    <script async src="/assets/vendors/modernizr.min.js"></script>
                    
                    {/* <script id="mcjs" src="/assets/js/mlch.js"></script> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
                    <script src="/assets/js/theme-vendors.js"></script>
                </body>
            </Html>
        );
    }
}