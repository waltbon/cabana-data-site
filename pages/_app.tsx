import App from 'next/app';
import { appWithTranslation } from 'next-i18next';
import 'react-phone-input-2/lib/bootstrap.css'
import '../styles/scss/theme.scss';
import '../styles/scss/themes/cabanadata.scss';

class CabanaDataApp extends App {

    render() {
        const { Component, pageProps } = this.props;
        return (<>
            <Component {...pageProps} />
        </>)
    }
}

CabanaDataApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    if (!(appProps as any).namespacesRequired) {
        (appProps as any).namespacesRequired = []
    }
    return { ...appProps };
}

export default appWithTranslation(CabanaDataApp);