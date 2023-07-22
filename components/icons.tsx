import React, { FunctionComponent } from 'react'

const IconsMenu: FunctionComponent = () => {
  return (
    <ul className="py-6 inline-grid grid-cols-3 grid-flow-row gap-8 md:grid-cols-5 xl:grid-cols-9">
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://www.linkedin.com/in/allangarcia/"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to LinkedIn."
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://github.com/allangarcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to Git-Hub."
        >
          <i className="fa-brands fa-github-square" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://www.twitter.com/profallangarcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to Twitter."
        >
          <i className="fa-brands fa-twitter-square" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://www.instagram.com/prof.allangarcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to Instagram."
        >
          <i className="fa-brands fa-instagram-square" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://www.pinterest.com/profallangarcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to Pinterest."
        >
          <i className="fa-brands fa-pinterest-square" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://stackoverflow.com/users/1636456/allan-garcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to Stackoverflow."
        >
          <i className="fa-brands fa-stack-overflow" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://medium.com/@prof.allangarcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to Medium."
        >
          <i className="fa-brands fa-medium" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://apps.apple.com/br/developer/allan-garcia/id1005147963"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to App Store Deveoper Page."
        >
          <i className="fa-brands fa-app-store-ios" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="text-7xl text-sky-500 text-opacity-80 sm:text-6xl hover:text-orange-400"
          href="https://www.youtube.com/@allangarcia"
          target="_blank"
          rel="noreferrer"
          aria-label="External link to You-Tube."
        >
          <i className="fa-brands fa-youtube-square" aria-hidden="true" />
        </a>
      </li>
    </ul>
  )
}

export default IconsMenu
