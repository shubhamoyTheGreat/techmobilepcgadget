import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import router, { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const downloadTheApp = (e) => {
    e.preventDefault()

    router.push(
      'https://play.google.com/store/apps/details?id=com.shubhamoymajumder.dream_team_11_prediction'
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>Tech: Mobile PC Gadget Review</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center space-y-3 px-20 text-center">
        <h1 className="mb-5 text-6xl font-bold ">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Tech: Mobile PC Gadget Review
          </a>
        </h1>
        <Image src={'/tech.png'} width={640} height={320} />

        <button
          onClick={downloadTheApp}
          className="rounded-md bg-blue-600 p-2 text-white"
        >
          DownLoad App
        </button>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Basic &rarr;</h3>
            <p className="mt-4 text-xl">
              Best Review and Analysis App for Smartphone , Pc, Laptop, Gadget
              Analysis, Expert Preview, and Investment Guidelines.
            </p>
          </div>

          <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about Smartphone Pc Laptop we will provide you end to
              end analysis. we will make your purchase decision easier
            </p>
          </div>

          <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Mi Mobiles, Samsung Mobiles, Real Me Mobiles, One Plus Mobiles
            </p>
          </div>

          <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Key Feature &rarr;</h3>
            <p className="mt-4 text-xl">
              - Preview/Product Details with Features reports, Gadget analysis,
              and Pros and Cons , Image Gallery and Much More :-)
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-4 flex h-24 w-full items-center justify-center space-x-8 border-t">
        <Link
          className="flex items-center justify-center hover:text-blue-600"
          href="/privacy-policy"
        >
          <a target="_blank" rel="noopener noreferrer">
            Privacy Policy{' '}
          </a>
        </Link>

        <Link
          className="flex items-center justify-center hover:text-blue-600"
          href="/termsandcondition"
        >
          <a target="_blank" rel="noopener noreferrer">
            Terms and Condition{' '}
          </a>
        </Link>
      </footer>
    </div>
  )
}
