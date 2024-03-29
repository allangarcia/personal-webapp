import type { NextPage } from 'next'
import Head from 'next/head'

import BackToHome from '../components/backtohome'
import BackToHomeFooter from '../components/backtohomefooter'

export const Privacy: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hi, this is Allan Garcia speaking! - Privacy Policy</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <BackToHome />

      <div className="p-5 flex flex-col flex-shrink md:min-h-screen">
        <article className="text-justify">
          <h2 className="py-6 text-3xl text-orange-400 font-semibold md:text-4xl">
            Privacy Policy
          </h2>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Your privacy is important to us. It is all our app&#39;s policy to
            respect your privacy regarding any information we may collect from
            you across our game and other apps we own and operate.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we&#39;re
            collecting it and how it will be used.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data do we store,
            we&#39;ll protect within commercially acceptable means to prevent
            loss and theft, as well as unauthorized access, disclosure, copying,
            use or modification.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            We don’t share any personally identifying information publicly or
            with third parties, except when required to by law.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Our app may link to &ldquo;noreferrer&rdquo; sites that are not
            operated by us. Please be aware that we have no control over the
            content and practices of these sites, and cannot accept
            responsibility or liability for their respective privacy policies.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Your continued use of our app will be regarded as acceptance of our
            practices around privacy and personal information. If you have any
            questions about how we handle user data and personal information,
            feel free to contact us.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            This policy is effective as of 15 July 2022.
          </p>

          <BackToHomeFooter />
        </article>
      </div>
    </div>
  )
}

export default Privacy
