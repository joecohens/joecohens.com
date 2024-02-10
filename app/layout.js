import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Joe Cohen",
  description: "Co-Founder & CTO at Draftea | Multipreneur | Investor",
  openGraph: {
    title: "Joe Cohen",
    description: "Co-Founder & CTO at Draftea | Multipreneur | Investor",
    title: "Next.js",
    url: "https://joecohens.com",
    siteName: "Joe Cohen",
    images: [
      {
        url: "https://github.com/joecohens.png", // Must be an absolute URL
        width: 460,
        height: 460,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@joecohens",
    creator: "@joecohens",
  },
  metadataBase: new URL("https://joecohens.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
