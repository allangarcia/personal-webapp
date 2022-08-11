import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

export const Privacy: NextPage = () => {
  return (
    <div className="bg-zinc-800">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Hi, this is Allan Garcia speaking! - Privacy Policy</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* begin header */}
      <div className="p-5 bg-sky-900 bg-opacity-20">
        <Link href="/">
          <a>
            <h6 className="text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl hover:text-orange-400">
              <i className="fa fa-house" aria-label="Back to homepage"></i> Home
            </h6>
          </a>
        </Link>
      </div>
      {/* end header */}

      {/* begin content */}
      <div className="p-5 flex flex-col flex-shrink md:min-h-screen">
        <article className="text-justify">
          <h2 className="py-6 text-3xl text-orange-400 font-semibold md:text-4xl">
            A Senior Software Engineer Manifesto
          </h2>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            We live in a strange time, where tech companies change the names of
            open source technologies (and other technologies in general) and
            resell their services under a brand or a product. Sometimes both.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The HR recruiter, that doesn’t have any fault in this, takes this
            wave and started to treat experiments or experiences as knowledge.
            An analogous history could exist, imagine a Food Engineer that works
            for Pepsi. Then he/she decides to interview for Coke and the
            question being asked is: "Had you any experience in making Coke?".
            Of course not. The Engineer is experienced in making the beverage,
            any beverage. No matter the flavor!
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Now about the Tech Industry, we have a list of languages, a list of
            frameworks, a list of cloud providers, and a list of tools.
            Generally speaking, you will use the language, for the framework,
            through a tool, and deploy it into a cloud provider.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer didn't already work with all languages
            that exist, with all frameworks, using all the tools, and knowing
            all the product names that cloud providers invented. AWS RDS it's
            just a database, GCP Compute it's just a Virtual Machine, and so on.
            But the job descriptions from today asked about: do you know AWS? Do
            you already program in Rust before? How many years are you
            experienced in the Go language? Are you experienced in Flutter?
            Those are tools!
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer does know algorithms, data structures,
            and system designs. He/she does know how to optimize a monolithic
            app to offload long-running tasks using queues into serverless
            functions, which is nothing more than a container with the right
            runtimes programs to run that piece of code. Doesn't matter the
            cloud provider, doesn't matter the language, or even the framework.
            Doesn't matter the product name. Maybe, just maybe, could be AWS
            Lambda, but is not required.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Because of that reality, and my disagreement about what becomes the
            job descriptions and requirements, also an HR person that didn't
            understand that requirements. I compile the knowledge needed to be a
            good Senior Software Engineer, into 7 (seven) categories, without
            brands or products. In my opinion, that’s what should be into job
            descriptions. Not languages, frameworks, product names, or specific
            brand tools.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            1st - Linux (no matter the distro).
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The internet is run by Linux. We have Linux on appliances, on
            servers, on routers, on switches, on sensors, embedded into
            connected cars, in summary, into everything.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer should know about how the kernel works,
            how it handles processes, how processes communicate, how
            virtualization works, what makes a container isolated from each
            other, how filesystems work, what makes a system boot, and what ran
            before the kernel takes over. How to monitor the processes in a
            Linux system, how to manage it, and how the security model embedded
            into Linux works. That's the base minimum.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            2nd - How things do communicate?
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Things communicate! Your phone talks to your friend's phone via a
            messages app. Your browser access the Google Search. Your tablet
            access a spreadsheet that is saved into a drive stored in a cloud
            provider using a service to sync the changes and update in real-time
            both you and your colleague changes at the same time.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Underlining all of this you have applications, servers, protocols,
            physical links, and some whole machinery that we just call the
            Internet ;-).
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Developer should know what are the machines that
            send the signal from one point in the globe to another. How this
            communication occurs on a link-by-link basis, and how the machines
            do relays the package from one to another until reaches the
            destination. Also should know what is the payload inside the
            package, and what protocol it’s carrying. How this protocol carries
            information from applications. And how different applications ran
            into the same machine without information from one application leak
            to another application. He/she should know about IP addresses and
            carrier protocols like TCP and UDP, and how the routing it’s done
            using those protocols.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The heavy lifting that we all rely upon it’s that: carrier protocol,
            like TCP, and routing protocol like IP, work! And the payload from
            an application protocol like HTTP gets from one point to another.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer should also know how HTTP carries the
            data, finds the information using URI, and send the correct
            information to the right client, under a predetermined connection,
            called a socket, that connects the client and the server, using,
            several times, different physics paths to deliver different
            packages.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            3rd - How applications ran on top of these processes
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Computers are general purpose, today we can program a computer to do
            virtually anything, but they run a very hard-to-read language that
            is designed by the manufacturer of the processor, an assembly code
            for that processor model. That's the reason we have compilers (and
            interpreters) to translate better readable code, like Python, to
            machine code. In reality, is not that simple, we can have a whole
            variety of language implementations. Some are good for some things,
            others are good for other things. Sometimes you need performance,
            sometimes you need to finish your project fast, for instance. Also,
            in the same argument, some programs run into some operational
            systems, and others run into another operational system.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Let's look for instance the recent case of Apple's using a different
            architecture for their machines, but you can run Python on Windows
            with a CISC processor and also the same Python code on an ARM
            architecture into a macOS machine. This "magic" is because some
            languages are compiled, and some languages are runtime interpreted.
            And doesn't stop there. Some languages are designed to treat data as
            a dynamic thing, the same variable could be a number and later in
            the program change to a word. Other languages have a strong type
            paradigm and a variable that is first declared as a number will be
            always a number in the program. All of these to say that A Senior
            Software Developer understands all those differences and
            implications from all different languages, even when he/she
            himself/herself did never coded into that language.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The important thing to know is that your program will run into a
            process and will be managed by the current operational system, it's
            not a rogue program doing whatever they want. The operational system
            imposes restrictions like protected memory and limited access to
            other processes and, in some cases, also to the filesystem,
            input-output files, etc., you must know the environment that you are
            in, what comes back to the 1st knowledge that a Senior Software
            Developer must have.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            4th - How application protocols exist
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Some CEOs, or even Engineers, tend to evangelize a tech. Being a
            cloud provider, or a framework, or a language, or even a tool. But
            in reality, has been a couple of decades since we standardize the
            application protocols that run on the Internet. We have HTTP, HTTPS,
            FTP, UDP, RTSP, and others. Maybe Protocol Buffers (protobuf) that
            use gRPC are new but, is very rare that you are doing your
            application without using some of the ones cited before, or even
            just using HTTP(S Maybe).
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Developer knows that and knows that no matter the
            tech stack they are limited by the limitations of HTTP, you just
            have some VERBs, and for a long time just GET and POST are used. No
            matter if you are doing "App First", "Mobile First", "Web First", or
            "Desktop First", doesn't matter. You are communicating with HTTP.
            Your underlying web server just handles a limited number of
            simultaneously connected clients. Your monolithic Full-Stack app
            will not scale. If this is an MVP, it's ok. But you will have to
            change. And change a lot. The more bad decisions are made, the more
            time you will lose trying to create something unfeasible. And A
            Senior Software Developer knows from the beginning that is
            unfeasible, listen to your Senior Software Developer. If he/she was
            one.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Don't embrace the corporate culture that CTO is always right for the
            Director, the Director is always right for the Manager, the Manager
            is always right for the Tech Lead, the Tech Lead is always right for
            the Engineer, and the Engineer doesn't have any voice. He/she will
            leave.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A good Senior Software Engineer knows the underlying tech that is
            behind the tech stack, he/she is not about the hype, or what
            everybody is using. He/she doesn't convince themself with a video
            presentation, or a showcase on the tech stack promoting page. He/she
            knows what he/she is doing. What the technology provides and what is
            not. Again, listen to your Senior Software Developer, if you had
            one.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            5th - Algorithms and Data Structures
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Believe it or not, there are a limited number of ways that data
            could be handled. Data could be stored, searched, sorted, updated,
            and destroyed. And there is only one way to represent this data.
            With 0s and 1s.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The ways you could store, find, organize, change, or delete data are
            already defined. For instance, to organize you have binary trees,
            linked lists, double linked lists, hash tables, and a couple more.
            The same for storing, finding, changing, and deleting.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer knows those algorithms, the more complex
            ones, the more efficient ones, the ones that use more memory, the
            ones that use less memory, and so on. He/she doesn't need to know
            already a programming language, those concepts are taught before you
            even code. Coding is a manifestation of that knowledge. If a Senior
            Software Developer knows Swift and Python but doesn't know Rust,
            this means NOTHING. It only means that he/she will learn it in a
            couple of weeks. Because coding is a manifestation of the more
            profound knowledge, that is computational thinking and a
            problem-solving mindset. And if he/she is a Senior Software
            Developer he/she already used several languages. Any language you
            need he/she is more than capable of learning and using, no matter
            how strange it is, or, apparently difficult.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            If a Senior Software Developer already knows some languages (yes, in
            plural) he is a Senior, and a new language will not be a problem for
            him/her.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            6th - How data is persisted
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            In the same way as algorithms, there is only a couple of solutions
            that data could be stored. Each of one for a particular thing. There
            are decades of study into how to store data that is transactional.
            In other words, you can guarantee that if the return from the INSERT
            command returned true, you can assure that that data is there no
            matter how milliseconds after I asked for that data, or if the whole
            data center was shut down after that. We call this ATOMIC. Those are
            Relational Databases. By far the most efficient way to store data
            and persist that exists today.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Also, there are alternatives, and I'll talk about two more, block
            storage and document storage. There is a hype about document storage
            nowadays, everybody seems to want to use a NoSQL database, but a
            NoSQL database is just what the name states, a database that is not
            based on transactions "see-quel" when you INSERT things in it, there
            is no guarantee that the data was stored. Eventually, the data will
            persist, but you don't know how much time after that. It could
            happen that if you need a piece of data just after inserting or
            updating that data, you will get the old response.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Developer knows that and takes advantage of that
            for scenarios when you don't need the immediate read ATOMIC
            transactions, and documents could be stored and only shown when is
            ready, like a social network feed. But not in a scenario where you
            are doing a financial transaction for electronic payment and need to
            make sure that the payment was done in that time. Then you have to
            do it in a relational database. Again, no matter the product name
            for this in Google's Cloud, AWS, or Azure. He/she knows the
            technology, no matter the product name.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Now I little about block storage, A Senior Software Engineer
            understands the nature of storage, he/she knows that behind the
            scenes we don't store bit-a-bit, we store in blocks, files,
            databases (that are just files), persistency, or even a "memory" of
            you favorite language, is ultimately stored into blocks. It's easier
            to store data into blocks and access them later using a map. Imagine
            having to read the whole disk every time we need a file? Of reading
            through a whole database to find the payment data? We make maps and
            index things. We look into those indexes like a reader looking into
            a summary page from his/her favorite book to remember which page has
            his/her favorite quote. This summary has the important blocks where
            data are stored, then we jump there.
          </p>
          <h3 className="py-6 text-2xl text-orange-400 font-semibold md:text-3xl">
            7th - How software is engineered
          </h3>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Last but not least, A Senior Software Engineer knows how software is
            constructed, piece by piece, he/she knows what is the priority and
            what is not. He/she understands what are the fundamentals of what is
            being built and will help the team to understand that some parts of
            the software could be done after. He/she only needs a couple of
            minutes with the product owner to understand what are the software,
            and how it could be evolved. Sure, evolving means changing, but
            that's completely ok. What is not ok is, in the middle of the
            project, some CEO scrape all the code and want to start over. This
            is just the case of a huge pivoting into the company itself. But to
            build the same product, but with a different tech stack, just
            because, it's inadmissible.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            RUP is garbage, nobody uses it anymore, it's just like you say that
            you are starting your engine with a crank. Never worked and never
            will. Companies use it because if you say that you are using it you
            look cool.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Use cases, requirements, artifacts, class diagrams, and sequence
            diagrams are still taught in universities but are all for nothing.
            That you will never use for anything. You could argue that use cases
            are good for understanding the behavior of the client, or the actor
            inside the program, but is easier to bring the client in and just
            ask him/her. Make a list. You don't need sticky person drawings for
            your project.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The same for ITIL, throw it away.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            The same for Capability Models, throw them away.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer knows the principles of the Extreme
            Programming manifesto and uses it.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A Senior Software Engineer knows the principles of Scrum and uses
            it.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            Not Jira, Not Kanban, Not a tool... the principles. A good Senior
            Software Engineer knows when a Scrum Ceremony isn't needed. And when
            it does.
          </p>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            A good Senior Software Engineer learns all those concepts and when
            they are mixed in a way that even himself/herself didn't know from
            or when he/she learn that concept. Then you can consider he/she a
            Senior Software Developer. And possible, a Manager.
          </p>
          <h6 className="py-6 text-lg text-orange-400 text-opacity-80 font-mono sm:text-xl">
            Before finishing...
          </h6>
          <p className="py-2 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl">
            I'm not the owner of the truth, if you have any comments,
            suggestions, or corrections about this text please share them at my
            Twitter account{" "}
            <a
              className="y-6 text-lg text-orange-400 text-opacity-80 font-mono sm:text-xl hover:underline"
              href="https://twitter.com/AllanGarciaDev"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <Link href="/" targ>
            <a>
              <h6 className="py-6 text-lg text-sky-500 text-opacity-80 font-mono sm:text-xl hover:text-orange-400">
                <i
                  className="fa fa-arrow-left"
                  aria-label="Back to homepage"
                ></i>{" "}
                Back to homepage
              </h6>
            </a>
          </Link>
        </article>
      </div>
      {/* end content */}
    </div>
  )
}

export default Privacy
