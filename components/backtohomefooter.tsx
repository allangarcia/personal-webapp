import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const BackToHomeFooter: FunctionComponent = () => {
  return (
    <Link href="/">
      <a>
        <h6 className="py-6 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl hover:text-orange-400">
          <i className="fa fa-arrow-left" aria-label="Back to homepage"></i>{' '}
          Back to homepage
        </h6>
      </a>
    </Link>
  )
}

export default BackToHomeFooter
