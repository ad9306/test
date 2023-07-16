import Head from 'next/head'
import Link from 'next/link';


export default function Ftest_post() {
    return (
        <>
        <Head>
            <title>
                test memo
            </title>
            <style> 			
                div { 			
   	             width: 100px; 			
	                height: 100px; 			
                	position: absolute; 		
                	} 		
	                div.x { 				
                background-color: #2196F3; 				
                top: 20px; 			
	                left: 200px; 			
                } 		
	                div.y { 			
	                background-color: #1976D2; 				
                top: 50px; 			
                	left: 260px; 			
                } 			
                div.z { 			
	                background-color: #0D47A1; 				
                top: 80px; 				
                left: 230px; 			
                } 	
            </style>
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
            <div class="x"></div> 		
            <div class="y"></div> 	
            	<div class="z"></div>
        </body>
        </>
    )
}