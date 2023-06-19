import { GetStaticProps, GetStaticPropsResult } from "next";
import { getMdFiles } from "@/lib/getfiles";

export default function Home({ howtos, tutorials }) {
    return (
        <>
            {/** Hero */}
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
            {/** Howtos */}
            <div className="py-24 mt-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" xmlSpace="preserve" className="w-14 h-14">
                            <g fill="#2AA9E1">
                                <path d="m314.761 107.641-18.857-10.289V53.596a5.821 5.821 0 0 0-5.044-5.769l-115.078-15.58c-.034-.007-.068 0-.106-.005-.182-.021-.369-.02-.557-.026-.113-.001-.225-.01-.336-.008-.095.004-.186.004-.278.008-.165.016-.33.059-.494.087-.216.038-.437.067-.645.128-.122.036-.237.093-.358.138-.243.087-.488.18-.716.301-.025.013-.058.02-.083.034L35.234 107.641a5.831 5.831 0 0 0-3.034 5.113v199.215a5.83 5.83 0 0 0 2.848 5.008 5.832 5.832 0 0 0 2.975.814 5.82 5.82 0 0 0 2.791-.71L175 243.866l134.184 73.215a5.842 5.842 0 0 0 5.767-.104 5.834 5.834 0 0 0 2.851-5.008V112.755a5.834 5.834 0 0 0-3.041-5.114zM169.176 233.776 43.847 302.158V116.212L169.176 47.83v185.946zM284.255 58.683v32.314L205.494 48.02l78.761 10.663zm21.896 243.475-125.327-68.382V47.828l125.327 68.384v185.946z" /><path d="m129.69 210.013-59.153 32.275a5.825 5.825 0 0 0 2.8 10.936c.938 0 1.896-.228 2.779-.711l59.153-32.274a5.826 5.826 0 0 0 2.319-7.903 5.827 5.827 0 0 0-7.898-2.323zM83.117 191.613c.941 0 1.896-.227 2.782-.71l39.589-21.6a5.83 5.83 0 0 0 2.322-7.903 5.83 5.83 0 0 0-7.903-2.323l-39.589 21.6a5.825 5.825 0 0 0 2.799 10.936zM65.671 144.862c.941 0 1.897-.227 2.783-.711l74.475-40.635a5.828 5.828 0 0 0 2.323-7.902 5.827 5.827 0 0 0-7.901-2.324l-74.475 40.636a5.825 5.825 0 0 0-2.324 7.902 5.831 5.831 0 0 0 5.119 3.034zM279.457 242.289l-59.146-32.275a5.833 5.833 0 0 0-7.903 2.323 5.827 5.827 0 0 0 2.324 7.903l59.144 32.274a5.824 5.824 0 1 0 5.581-10.225zM264.097 190.903a5.82 5.82 0 0 0 7.901-2.325c1.544-2.821.501-6.358-2.325-7.901l-39.583-21.6a5.83 5.83 0 0 0-7.901 2.323 5.827 5.827 0 0 0 2.323 7.903l39.585 21.6zM207.068 103.516l74.476 40.635a5.827 5.827 0 0 0 7.9-2.323 5.826 5.826 0 0 0-2.322-7.902L212.649 93.29c-2.822-1.54-6.359-.494-7.902 2.324a5.827 5.827 0 0 0 2.321 7.902z" />
                            </g>
                        </svg>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Howtos</h2>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {howtos?.map(howto => (
                            <article
                                key={howto.slug}
                                className="group isolate relative flex flex-col items-start justify-center overflow-hidden rounded-2xl bg-background-dark ring-1 ring-white/20 hover:ring-white/30 p-8"
                            >
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                <h3 className="mt-3 text-lg font-normal leading-6 text-white">
                                    <a href={howto.urlPath}>
                                        <span className="absolute inset-0" />
                                        {howto.title}
                                    </a>
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-7 stroke-background -ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            {/** Tutorials */}
            <div className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#2AA9E1" className="w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tutorials</h2>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {tutorials?.map(tutorial => (
                            <article
                                key={tutorial.slug}
                                className="group isolate relative flex flex-col items-start justify-center overflow-hidden rounded-2xl bg-background-dark ring-1 ring-white/20 hover:ring-white/30 p-8"
                            >
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                <h3 className="mt-3 text-lg font-normal leading-6 text-white">
                                    <a href={tutorial.urlPath}>
                                        <span className="absolute inset-0" />
                                        {tutorial.title}
                                    </a>
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-7 stroke-background -ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<any> // TODO add types
> => {
    const howtos = await getMdFiles("howtos")
    const tutorials = await getMdFiles("tutorials")

    return {
        props: { howtos, tutorials },
    };
};
