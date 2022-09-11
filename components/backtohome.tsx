import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const BackToHome: FunctionComponent = () => {
  return (
    <div className="p-5 bg-sky-900 bg-opacity-20">
      <Link href="/">
        <a>
          <h6 className="text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl hover:text-orange-400">
            <i className="fa fa-house" aria-label="Back to homepage"></i> Home
          </h6>
        </a>
      </Link>
    </div>
  )
}

export default BackToHome
