import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../../components/layout'
export default function ReadingSection() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>salam</title>
                </Head>
                <h1>test</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
                <p>
                    <Image
                        src="/images/profile.jpg"
                        alt="yousef"
                        height={100}
                        width={100}
                    />
                </p>
            </div>
        </Layout>
    )
}