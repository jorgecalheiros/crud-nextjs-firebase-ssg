import Head from "next/head"
import Footer from "../components/footer"
import Header from "../components/header"

type Props = {
    children: any
    titlePage: string
}

export default function Default({ children, titlePage }: Props) {
    return (
        <div className={'bg-gray-200 h-screen'}>
            <Head>
                <title>{titlePage}</title>
                <meta name="description" content="Crud nextjs firestore" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}