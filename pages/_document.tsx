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
                    <script id="mcjs" src="/assets/js/mlch.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
                    <script src="/assets/js/theme-vendors.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/jquery.themepunch.tools.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/jquery.themepunch.revolution.min.js"></script>
                    {/* <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.actions.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.migration.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
                    <script type="text/javascript" src="/assets/vendors/revolution/js/extensions/revolution.extension.slideanims.min.js"></script> */}
                    {/* <script type="text/javascript" src="/assets/js/crm.js"></script> */}
                    <script type="text/javascript" src="/assets/js/theme.js"></script>
                    <script src="/assets/js/home.js" type="text/javascript"></script>
                </body>
            </Html>
        );
    }
}