import Head from 'next/head'
import Link from 'next/link';


export default function Ftest_post() {
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
                <ol type="1">
                    <li>can</li>
                    <li>glass</li>
                    <li>wood</li>
                </ol>
</body>
        </>
    )
}