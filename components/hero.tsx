import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import IconsMenu from './icons'

const Hero: FunctionComponent = () => {
  return (
    <main className="text-center">
      <h2 className="py-12 text-1xl text-sky-500 md:text-2xl">
        The author of{' '}
        <Link href="/manifesto">
          <a className="underline italic font-serif hover:text-orange-400">
            &quot;A Senior Software Engineer Manifesto&quot;
          </a>
        </Link>{' '}
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
        at IFRN - Federal Institute of Technology of Rio Grande do Norte since
        January of 2010.
      </p>
      <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
        I make accessible apps that everybody can use, especially with
        low-vision and blind people in mind.
      </p>
      <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
        Down you&#39;ll find some socials where you can find me.
      </p>
      <IconsMenu />
    </main>
  )
}

export default Hero
