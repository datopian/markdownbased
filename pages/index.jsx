export default function Home() {
  return (
    <>
      <div className="dark:bg-background rounded-xl">
        <div className="relative isolate px-6 py-14 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight dark:text-background-dark sm:text-6xl">
                Publish awesome websites and catalogs of stuff using markdown-based tools
              </h1>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="py-24 mt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {["Edit Lifeitself.org", "Create a catalog of stuff", "Publish a catalog"].map(guide => (
              <div key={guide} className={'ring-1 dark:ring-white/10 rounded p-8 xl:p-10'}>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-medium text-center leading-8 dark:text-white">
                    {guide}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 dark:text-gray-300"></p>
                <a
                  href="#"
                  className={'bg-background-dark/20 dark:bg-white/10 dark:text-white hover:bg-background-dark/30 dark:hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'}
                >
                  Read the guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
