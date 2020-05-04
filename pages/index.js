import Head from 'next/head'

const applicationJson = {"@type":"WebSite","headline":"Joe Cohen","publisher":{"@type":"Organization","logo":{"@type":"ImageObject","url":"https://github.com/joecohens.png"},"name":"Joe Cohen"},"url":"https://joecohens.com/","name":"Joe Cohen","author":{"@type":"Person","name":"Joe Cohen"},"image":"https://github.com/joecohens.png","description":"&lt;/&gt;","@context":"http://schema.org"};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joe Cohen</title>
        <meta property="og:title" content="Joe Cohen" />
        <meta name="author" content="Joe Cohen" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content="Entrepreneur & Full Stack Developer and Designer" />
        <meta property="og:description" content="Entrepreneur & Full Stack Developer and Designer" />
        <link rel="canonical" href="https://joecohens.com/" />
        <meta property="og:url" content="https://joecohens.com/" />
        <meta property="og:site_name" content="Joe Cohen" />
        <meta property="og:image" content="https://github.com/joecohens.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joecohens" />
        <meta name="twitter:creator" content="@joecohens" />
        <script type="application/ld+json" dangerouslySetInnerHTML= {{ __html: JSON.stringify(applicationJson) }} />
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

      <main>
        <header>
          <h1><a href="https://github.com/joecohens" title="View Joe's GitHub Profile Page">Joe Cohen</a></h1>
          <p>Entrepreneur &amp; Full Stack Developer and Designer</p>
        </header>
        <section>
          <p>
            Head of Infrastructure <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="user-mention">@Vercel</a>
          </p>
          <hr />
          <p>
            Co-Founder &amp; CTO <a href="https://dinkbit.com" target="_blank" rel="noopener noreferrer" className="user-mention">@dinkbit</a>
            <br />
            Co-Founder &amp; Board <a href="https://kodemia.dev" target="_blank" rel="noopener noreferrer" className="user-mention">@kodemia</a> <a href="https://refly.me" target="_blank" rel="noopener noreferrer" className="user-mention">@refly</a> <a href="https://kometia.com" target="_blank" rel="noopener noreferrer" className="user-mention">@kometia</a> <a href="https://divya.com.mx" className="user-mention">@divya</a>
            <br />
            Contributor <a href="https://github.com/CachetHQ" target="_blank" rel="noopener noreferrer" className="user-mention">@CachetHQ</a> and <a href="https://styleci.io" target="_blank" rel="noopener noreferrer" className="user-mention">@StyleCI</a>
          </p>
        </section>
        <footer>
          <hr />
          <p>
            Ping me on <a href="https://github.com/joecohens" title="Joe on GitHub">GitHub</a> or <a href="https://twitter.com/joecohens" title="Joe on Twitter">Twitter</a>. <a href="https://github.com/joecohens/joecohens/blob/master/LICENSE" title="The license file on GitHub">© MIT 2020</a>
          </p>
        </footer>
      </main>

      <style jsx>{`
        main {
          margin: 0 40px;
          max-width: 700px;
        }

        a {
          color: #000;
          font-weight: bold;
        }

        a:visited {
          color: #000;
          font-weight: bold;
        }

        a:hover {
          background: #000;
          color: #fff;
          text-decoration: none;
        }

        hr {
          background: #eee;
          border: 0;
          height: 1px;
        }

        time {
          color: #9b9b9b;
        }

        @media (min-width: 900px) {
          main {
            margin: 0 auto;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Menlo, Monaco, Lucida Console, monospace, serif;
          font-size: 0.9375rem;
          line-height: 1.625rem;
        }

        header,
        footer {
          margin: 40px 0;
        }

        footer a,
        header a {
          text-decoration: none;
        }

        footer h1,
        header h1 {
          font-size: 1.4rem;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
