import React, { FunctionComponent } from 'react'

const IconsMenu: FunctionComponent = () => {
  return (
    <ul className="py-6 inline-grid grid-cols-2 grid-flow-row gap-6 sm:grid-cols-4 md:grid-cols-7">
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
          href="https://www.twitter.com/AllanGarciaDev"
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
          href="https://www.instagram.com/allangarciadev"
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
          href="https://pin.it/6e1d9ZR"
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
          href="https://www.youtube.com/c/allangarcia"
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
