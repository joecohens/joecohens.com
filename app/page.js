"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();

  if (theme === systemTheme) {
    setTheme("system");
  }

  return (
    <main className="md:py-10">
      <header className="my-10">
        <h1 className="text-2xl font-black">
          <a
            href="https://x.com/joecohens"
            title="View Joe's GitHub Profile Page"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
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
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @Draftea
          </a>
        </p>
      </header>
      <section className="my-4">
        <p>
          EX - Head of Engineering{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @Vercel
          </a>
        </p>
        <hr className="my-4" />
        <p>
          Board &amp; Co-Founder{" "}
          <a
            href="https://dinkbit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @dinkbit
          </a>
          <br />
          Board{" "}
          <a
            href="https://divya.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @divya
          </a>{" "}
          <a
            href="https://kodemia.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @kodemia
          </a>{" "}
          <a
            href="https://kometia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @kometia
          </a>{" "}
          <br />
          Contributor{" "}
          <a
            href="https://github.com/CachetHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @CachetHQ
          </a>{" "}
          and{" "}
          <a
            href="https://styleci.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            @StyleCI
          </a>
        </p>
      </section>
      <hr />
      <footer className="my-4">
        <div className="flex">
          <p className="flex-1 py-2">
            Ping me on{" "}
            <a
              className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              href="https://github.com/joecohens"
              title="Joe on GitHub"
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              href="https://twitter.com/joecohens"
              title="Joe on Twitter"
            >
              Twitter
            </a>
            .{" "}
            <a
              className="font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              href="https://github.com/joecohens/joecohens.com/blob/master/LICENSE"
              title="The license file on GitHub"
            >
              © MIT {new Date().getFullYear()}
            </a>
          </p>
          <button
            className="rounded-full px-4 py-2 text-3xl leading-none dark:text-white"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            ☼
          </button>
        </div>
      </footer>
    </main>
  );
}
