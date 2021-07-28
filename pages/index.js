import {MicrophoneIcon, SearchIcon, ViewGridIcon} from "@heroicons/react/solid"
import {useRef} from "react"
import {useRouter} from 'next/router'

import Image from 'next/image'

import Head from 'next/head'
import Footer from '../Components/Footer'
import Avatar from "../Components/Avatar"

export default function Home() {

    const searchInputRef = useRef(null)
    const router = useRouter()

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                {/*  Website Title Set Here*/}
                <title>G Search</title>
                <link rel="icon" href="../favicon.ico"/>

            </Head>
            {/*    Header */}
            <header className="flex w-full p-5 justify-between text-sm text-gray-700">
                {/* Left Side */}
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                {/* Right Side*/}

                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/*    Icon*/}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
                    {/*    Avatar*/}
                    <Avatar
                        url="https://coaching.papareact.com/ai9"/>

                </div>
            </header>

            {/*Body Search Box & Below*/}
            <form className="flex flex-col items-center mt-44 w-4/5 flex-grow ">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    height={100}
                    width={300}
                />
                <div
                    className="flex  w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200
                    px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">

                    <SearchIcon className="h-5 mr-3 text-gray-500"/>
                    <input
                        type="text" ref={searchInputRef} className=" flex-grow focus:outline-none"/>
                    <MicrophoneIcon className="h-5 "/>

                </div>
                <div
                    className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">

                    <button
                        className="btn"
                        onClick={search}>Google Search
                    </button>
                    <button
                        className="btn"
                        onClick={search}> I'm Feeling Lucky
                    </button>

                </div>
            </form>

            {/*  Footer Component Linked Here */}
            <Footer/>

        </div>
    )
}
