import Head from 'next/head'
import Link from 'next/link'


export default function test_post2() {
    return(
        <>
            <Head>
                <title>
                    test_post2
                </title>
            </Head>
            
            <body>
                <h1>
                <input id="tbtn" type="button" value="this is button"/>
                <button id="obtn">other button</button>
                <button disabled id="dbtn">disabled button</button>
                </h1>
                <h2>
                    <Link href='/'>
                        Home
                    </Link>
                </h2>
                <p>
                    <span>this is button : 0</span>
                    <span>other butoon : 0</span>
                    <span>disabled button : 0</span>
                </p>
            </body>
            <script>
                var cnt=0
                const tbutton = document.getElmentById("tbtn")
                const obutton = document.getElmentById("obtn")
                const dbutton = document.getElmentById("dbtn")
                const tspan = document.querySelector("span")

                function clickCounter(){
                }

            </script>
        </>

    )

}

