import Link from "next/link"
export default function Home(){
    return (
        <>
        <h1>
            Welcome to Next js 12! 
        </h1>

        <p>
        build an app with nextJs   
        </p>

        <Link href="/about">
            clique to go to about
        </Link>


        </>
    )
}