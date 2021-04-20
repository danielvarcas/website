import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my website!</h1>
      </main>
    </div>
  );
}
