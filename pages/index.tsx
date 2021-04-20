import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar>
        <Link href="/">
          <a className="text-xl">Hello World</a>
        </Link>
      </Navbar>

      <div className="container mx-auto">
        <main>
          <h1 className="text-9xl">Hello World</h1>

          <Button>Click me</Button>
        </main>
      </div>
    </div>
  );
}
