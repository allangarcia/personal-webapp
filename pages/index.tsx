import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export const Home: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hi, this is Allan Garcia speaking!</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* begin content */}
      <div className="p-5 flex flex-col flex-shrink md:min-h-screen justify-center">
        <main className="text-center">
          <h2 className="py-12 text-1xl text-sky-500 md:text-2xl">
            The author of{" "}
            <Link href="/manifesto">
              <a className="underline italic font-serif hover:text-orange-400">
                "A Senior Software Engineer Manifesto"
              </a>
            </Link>{" "}
            (2022)
          </h2>
          <div className="inline-block border-solid border-8 border-orange-400 rounded-full overflow-hidden h-52 w-52 sm:h-64 sm:w-64">
            <Image
              className="object-fill"
              src="/images/profile.jpeg"
              height={500}
              width={500}
              layout="responsive"
              alt="A handsome guy photo. LOL."
            />
          </div>
          <h1 className="py-6 text-5xl text-orange-400 font-semibold md:text-6xl">
            This is Allan Garcia speaking!
          </h1>

          <p className="py-3 text-2xl text-sky-500 text-opacity-80 font-mono sm:text-3xl">
            Senior iOS Software Engineer and Associate Professor
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            at IFRN - Federal Institute of Technology of Rio Grande do Norte
            since January of 2010.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            I make accessible apps that everybody can use, especially with
            low-vision and blind people in mind.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Down you&#39;ll find some socials where you can find me.
          </p>
          <ul className="py-6 inline-grid grid-cols-5 grid-flow-col gap-6">
            <li>
              <a
                className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
                href="https://www.linkedin.com/in/allangarcia/"
                target="_blank"
                rel="noreferrer"
                aria-label="noreferrer link to LinkedIn."
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
                href="https://github.com/allangarcia"
                target="_blank"
                rel="noreferrer"
                aria-label="noreferrer link to Git-Hub."
              >
                <i
                  className="fa-brands fa-github-square"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
                href="https://www.twitter.com/AllanGarciaDev"
                target="_blank"
                rel="noreferrer"
                aria-label="noreferrer link to Twitter."
              >
                <i
                  className="fa-brands fa-twitter-square"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
                href="https://apps.apple.com/br/developer/allan-garcia/id1005147963"
                target="_blank"
                rel="noreferrer"
                aria-label="noreferrer link to App Store Deveoper Page."
              >
                <i
                  className="fa-brands fa-app-store-ios"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a
                className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
                href="https://www.youtube.com/channel/UCcV6qHiwx_9clQzWMbqHLqA"
                target="_blank"
                rel="noreferrer"
                aria-label="noreferrer link to You-Tube."
              >
                <i
                  className="fa-brands fa-youtube-square"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>
        </main>
      </div>
      {/* end content */}
    </div>
  )
}

export default Home
