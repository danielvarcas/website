import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home(): JSX.Element {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ipsum neque. Vivamus ultrices sapien et velit facilisis iaculis. Integer venenatis, nulla lobortis rhoncus elementum, nisi mauris pulvinar purus, in cursus turpis dolor a arcu.";
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
            <Card title="I am a title">
              <p>{lorem}</p>
            </Card>
            <Card title="I am a title">
              <p>{lorem}</p>
            </Card>
            <Card title="I am a title">
              <p>{lorem}</p>
            </Card>
            <Card title="I am a title">
              <p>{lorem}</p>
            </Card>
            <Card title="I am a title">
              <p>{lorem}</p>
            </Card>
          </div>

          <Button>Click me</Button>
        </main>
      </div>
    </div>
  );
}
