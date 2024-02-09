import "./globals.css";
import Head from "next/head";

const metadata = {
  "@type": "WebSite",
  headline: "Joe Cohen",
  publisher: {
    "@type": "Organization",
    logo: { "@type": "ImageObject", url: "https://github.com/joecohens.png" },
    name: "Joe Cohen",
  },
  url: "https://joecohens.com/",
  name: "Joe Cohen",
  author: { "@type": "Person", name: "Joe Cohen" },
  image: "https://github.com/joecohens.png",
  description: "&lt;/&gt;",
  "@context": "http://schema.org",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Joe Cohen</title>
        <meta property="og:title" content="Joe Cohen" />
        <meta name="author" content="Joe Cohen" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="description"
          content="Co-Founder & CTO at Draftea | Multipreneur"
        />
        <meta
          property="og:description"
          content="Co-Founder & CTO at Draftea | Multipreneur"
        />
        <link rel="canonical" href="https://joecohens.com/" />
        <meta property="og:url" content="https://joecohens.com/" />
        <meta property="og:site_name" content="Joe Cohen" />
        <meta property="og:image" content="https://github.com/joecohens.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joecohens" />
        <meta name="twitter:creator" content="@joecohens" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(v,i,n,k,l,a){v.GoogleAnalyticsObject=n;v[n]||(v[n]=function(){
            (v[n].q=v[n].q||[]).push(arguments)});v[n].l=+new Date;l=i.createElement(k);
            a=i.getElementsByTagName(k)[0];l.src='https://google-analytics.com/analytics.js';
            a.parentNode.insertBefore(l,a)}(window,document,'ga','script');
            ga('create', 'UA-85213054-1', 'joecohens.com');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');
          `,
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
