import { AppInitialProps } from 'next/app';
import { ILayoutPageProps } from './landing-page-props.interface';

export interface IPageGlobalProps {
    pageProps: IAppInitialGlobalProps;
}

export interface IAppInitialGlobalProps extends ILayoutPageProps {
}
