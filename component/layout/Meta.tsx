import Head from 'next/head'

interface Props {
    title: string;
    description: string;
    creator?: string;
    imageUrl?: string;
    lang: string;
    ogImageUrl?: string;
    url: string;
    type?: 'article'|'website'
}

const Meta = (props: Props) => (
    <Head>
        <title>{props.title}</title>
        <meta lang={props.lang||'en'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description} />
        <meta property="og:type" content={props.type ? props.type : 'website' } />
        <meta name="og:title" property="og:title" content={props.title} />
        <meta name="og:description" property="og:description" content={props.description} />
        <meta property="og:site_name" content="Cabana Data Software" />
        <meta property="og:url" content={props.url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta property="og:image" content={props.ogImageUrl} />
        <meta name="twitter:image" content={props.ogImageUrl} />
        <link rel="canonical" href="" />
    </Head>
)
export default Meta;