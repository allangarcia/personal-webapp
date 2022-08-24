import { NextPage } from "next"
import Link from "next/link"

const Footer: NextPage = () => {
  return (
    <div className="p-5 bg-sky-900 bg-opacity-20">
      <footer className="flex flex-row justify-between items-center md:container md:mx-auto">
        <h6 className="text-xs text-sky-500 text-opacity-80 font-semibold">
          <i className="far fa-copyright"></i> Copyright 2022
        </h6>
        <ul className="flex flex-col text-right md:flex-row gap-4 md:gap-12 text-xs text-sky-500 text-opacity-80 text-semibold font-mono">
          <li>
            <a
              className="hover:text-orange-400"
              href="https://www.linkedin.com/in/allangarcia/"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to LinkedIn."
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://github.com/allangarcia"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to Git-Hub."
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://www.twitter.com/AllanGarciaDev"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to Twitter."
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://apps.apple.com/br/developer/allan-garcia/id1005147963"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to App Store Deveoper Page."
            >
              AppStore
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://www.youtube.com/c/allangarcia"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to You-Tube."
            >
              YouTube
            </a>
          </li>
          <li>
            <Link href="/privacy">
              <a
                className="hover:text-orange-400"
                rel="privacy policy"
                aria-label="Jump to Privacy Policy"
              >
                Privacy Policy
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
