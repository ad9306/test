import Head from 'next/head'
import Link from 'next/link';


export default function test_post() {
    return (
        <>
        <Head>
            <title>
                test memo
            </title>

        </Head>
        <body>
            <h1>                 
                <Link href="/">
                    Home
                </Link> 

            </h1>
            <h2>

            </h2>
                <ol>
                    <li>can</li>
                    <li>glass</li>
                    <li>wood</li>
                </ol>
        </body>
        </>
    )
}