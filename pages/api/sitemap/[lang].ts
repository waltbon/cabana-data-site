import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
    try {
        const lang = req.query.lang;
        console.log("🚀 ~ file: [lang].ts ~ line 6 ~ lang", lang)
        
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
        });

        // // List of posts
        const posts = [];

        // Create each URL row
        smStream.write({ url: `/${lang}/`, changefreq: 'weekly', priority: 0.9 })
        smStream.write({ url: `/${lang}/software-development/`, changefreq: 'weekly', priority: 0.7 })
        smStream.write({ url: `/${lang}/e-commerce/`, changefreq: 'weekly', priority: 0.5 })
        smStream.write({ url: `/${lang}/contact-us` })

        // End sitemap stream
        smStream.end();

        // XML sitemap string
        const sitemapOutput = (await streamToPromise(smStream)).toString();

        // Change headers
        res.writeHead(200, {
            'Content-Type': 'application/xml'
        });

        // Display output to user
        res.end(sitemapOutput);
    } catch (e) {
        console.log(e)
        res.send(JSON.stringify(e))
    }
}