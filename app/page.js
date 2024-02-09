export default function Home() {
  return (
    <main>
      <header>
        <h1>
          <a
            href="https://github.com/joecohens"
            title="View Joe's GitHub Profile Page"
          >
            Joe Cohen
          </a>
        </h1>
        <p>
          CTO &amp; Co-Founder{" "}
          <a
            href="https://www.draftea.com"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @Draftea
          </a>
        </p>
      </header>
      <section>
        <p>
          EX - Head of Engineering{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @Vercel
          </a>
        </p>
        <hr />
        <p>
          Board &amp; Co-Founder{" "}
          <a
            href="https://dinkbit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @dinkbit
          </a>
          <br />
          Board{" "}
          <a
            href="https://divya.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @divya
          </a>{" "}
          <a
            href="https://kodemia.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @kodemia
          </a>{" "}
          <a
            href="https://kometia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @kometia
          </a>{" "}
          <br />
          Contributor{" "}
          <a
            href="https://github.com/CachetHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @CachetHQ
          </a>{" "}
          and{" "}
          <a
            href="https://styleci.io"
            target="_blank"
            rel="noopener noreferrer"
            className="user-mention"
          >
            @StyleCI
          </a>
        </p>
      </section>
      <footer>
        <hr />
        <p>
          Ping me on{" "}
          <a href="https://github.com/joecohens" title="Joe on GitHub">
            GitHub
          </a>{" "}
          or{" "}
          <a href="https://twitter.com/joecohens" title="Joe on Twitter">
            Twitter
          </a>
          .{" "}
          <a
            href="https://github.com/joecohens/joecohens/blob/master/LICENSE"
            title="The license file on GitHub"
          >
            © MIT {new Date().getFullYear()}
          </a>
        </p>
      </footer>
    </main>
  );
}
