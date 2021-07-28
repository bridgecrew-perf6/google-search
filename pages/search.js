import Head from "next/head"
import Header from "../Components/Header"
import {API_KEY, CONTEXT_KEY} from "../.env.local"
import Response from "../Response"
import {useRouter} from "next/router"
import SearchResults from "../Components/SearchResults"

function Search({results}) {
    console.log(results)
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="stylesheet" href="/favicon.ico"/>
            </Head>

            {/*    Header*/}
            <Header/>
            {/*    Search Results*/}
            <SearchResults results={results}/>

        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false
    const startIndex = context.query.start || '0'


    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json())

    //After The Server Side Has Render ... Pass The Results to the client
    return {
        props: {
            results: data,
        },
    }
}
