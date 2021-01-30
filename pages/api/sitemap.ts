import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // Create each URL row
    smStream.write({ url: '/',  changefreq: 'weekly', priority: 0.9 })
    smStream.write({ url: '/software-development/',  changefreq: 'weekly',  priority: 0.8 })
    smStream.write({ url: '/e-commerce/', changefreq: 'monthly',  priority: 0.7 })
    // smStream.write({ url: '/qa/', changefreq: 'monthly',  priority: 0.5 })
    // smStream.write({ url: '/use-cases/central-baterias-hc', changefreq: 'monthly',  priority: 0.4 })
    smStream.write({ url: '/contact-us', priority: 0.6 })

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
  } catch(e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}