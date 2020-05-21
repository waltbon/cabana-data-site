import Head from 'next/head'

interface Props {
    title: string;
    description: string;
    creator?: string;
    imageUrl?: string;
    url: string;
    type?: 'article'|'website'
}

export default (props: Props) => (
    <Head>
        <title>{props.title}</title>
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
        <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
        <link rel="stylesheet" href="" />
        <meta property="og:image" content={props.imageUrl} />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="" />
    </Head>
)