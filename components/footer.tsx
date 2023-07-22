import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <div className="p-5 bg-sky-900 bg-opacity-20">
      <footer className="flex flex-row justify-between items-center lg:container lg:mx-auto lg:px-0 2xl:px-28">
        <h6 className="gap-4 text-xs text-sky-500 text-opacity-80 text-semibold font-mono">
          <i className="far fa-copyright" /> Copyright 2022-2023
        </h6>
        <ul className="flex flex-col gap-4 text-right text-xs text-sky-500 text-opacity-80 text-semibold font-mono lg:flex-row">
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
              href="https://www.twitter.com/profallangarcia"
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
              href="https://www.instagram.com/prof.allangarcia"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to Instagram."
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://www.pinterest.com/profallangarcia"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to Pinterest."
            >
              Pinterest
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://stackoverflow.com/users/1636456/allan-garcia"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to Stack Overflow."
            >
              Stackoverflow
            </a>
          </li>
          <li>
            <a
              className="hover:text-orange-400"
              href="https://medium.com/@prof.allangarcia"
              target="_blank"
              rel="noreferrer"
              aria-label="External link to Medium."
            >
              Medium
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
              href="https://www.youtube.com/@allangarcia"
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
                Privacy&nbsp;Policy
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
