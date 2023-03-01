import { SitemapStream, streamToPromise } from 'sitemap';

const Sitemap = () => {
    return null;
}

export const getServerSideProps = async ({ res }) => {
    const smStream = new SitemapStream({
        hostname: `https://cabanadata.com`,
    });

    // Create each URL row
    smStream.write({ url: '/', changefreq: 'weekly', priority: 1.0 })
    smStream.write({ url: '/services/custom-software-development/', changefreq: 'weekly', priority: 0.9 })
    smStream.write({ url: '/careers', priority: 0.8 })
    smStream.write({ url: '/contact-us', priority: 0.8 })

    smStream.write({ url: '/es/', changefreq: 'weekly', priority: 1.0 })
    smStream.write({ url: '/es/services/custom-software-development/', changefreq: 'weekly', priority: 0.9 })
    smStream.write({ url: '/es/contact-us', priority: 0.8 })
    smStream.write({ url: '/es/careers', priority: 0.7 })
    
    smStream.write({ url: '/en/', changefreq: 'weekly', priority: 1.0 })
    smStream.write({ url: '/en/services/custom-software-development/', changefreq: 'weekly', priority: 0.9 })
    smStream.write({ url: '/en/contact-us', priority: 0.8 })
    smStream.write({ url: '/en/careers', priority: 0.7 })

    // End sitemap stream
    smStream.end();

    const result = await streamToPromise(smStream);
    const sitemapOutput = (result).toString();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapOutput);
    res.end();

    return {
        props: {},
    };
}

export default Sitemap;
