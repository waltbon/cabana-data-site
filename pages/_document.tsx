import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CabanaDataDocument extends Document {
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
                            <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/23653432.js"></script>
                        </>
                    }
                    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' rel='stylesheet'></link>
                    {/* <link rel="stylesheet" href="/assets/vendors/liquid-icon/liquid-icon.min.css" /> */}
                    <link rel="stylesheet" href="/assets/vendors/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/theme-vendors.min.css" />
                    {/* <link rel='stylesheet' type='text/css' href='/assets/vendors/revolution/css/settings.css' /> */}

                    {/* Start of HubSpot Embed Code */}
                    {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/23653432.js"></script> */}
                    {/* End of HubSpot Embed Code */}
                </Head>
                <body>
                    <Main />
                    <script async src="/assets/vendors/modernizr.min.js"></script>
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
                    <script src="/assets/js/theme-vendors.js"></script>
                    <NextScript />
                    <script src="/assets/js/theme-vendors.js"></script>
                </body>
            </Html>
        );
    }
}