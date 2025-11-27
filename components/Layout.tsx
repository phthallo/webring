import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Title from "../components/Title";

type LayoutProps = {
    children: React.ReactNode
    heading: String
    title: String

}

const Layout = ({children, heading, title}: LayoutProps) => {
    return (
        <div>
        <Head>
        <title>{`${title} - placeholder webring`}</title>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        </Head>
        <main className="min-h-screen h-full bg-background crt">
        <div className = "md:flex md:flex-row">
            {/* No clue what's happening here lol */}
            <div className = "md:float-left relative md:w-4/12 md:sticky h-full p-10 md:h-screen md:top-0 flex flex-col justify-center">
            <div className = "inset-0 absolute w-full bg-[url('../public/bg.jpg')] md:bg-cover"></div>
            <div className = "float-left w-full absolute bg-cover inset-0 bg-[#66650f]/40 z-20"></div>
            <div className = "z-30">
                <a className = "my-auto !no-underline text-primary" href = "/">
                    {/* font: spline sans mono */}
                <h1 className = "w-full h-auto text-4xl md:text-4xl lg:text-5xl break-words">placeholder</h1>
              <p className = "text-left text-white">a webring :)</p>
              </a>
              <div className = "absolute inset-x-3 bottom-3">
                <iframe className="w-full hidden md:visible md:inline h-16 " allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=minimal&style=text-align:center;font-family:monospace;padding:0.75rem;width:max-content;margin:auto;`}></iframe>
              </div>
              </div>
            </div>
            <div className = "bg-[url('../public/bg.svg')] bg-primary border-white w-full md:w-8/12 overflow-auto">
                <Header/>
                <Title title = {heading}/>
                <div className = "m-10">
                {children}
                </div>
            </div>
            </div>
        </main>
        </div>
    )
}
export default Layout