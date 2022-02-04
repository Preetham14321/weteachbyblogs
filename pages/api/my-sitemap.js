const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/items/scholarships", changefreq: "daily", priority: 0.3 },
    { url: "/items/jobs", changefreq: "daily", priority: 0.3 },
    { url: "/items/internships", changefreq: "daily", priority: 0.3 },
    { url: "/category/technology", changefreq: "daily", priority: 0.3 },
    { url: "/category/ethical-hacking", changefreq: "daily", priority: 0.3 },
    { url: "/about/", changefreq: "daily", priority: 0.3 },
    { url: "/items/contact-us", changefreq: "daily", priority: 0.3 },
    { url: "/privacy", changefreq: "daily", priority: 0.3 },
    { url: "/terms&conditions", changefreq: "daily", priority: 0.3 },
    { url: "/items/programs", changefreq: "daily", priority: 0.3 },
    { url: "/items/donate", changefreq: "daily", priority: 0.3 }
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml"
  });

  // Return a promise that resolves with your XML string

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());
  res.end(xmlString);
};
