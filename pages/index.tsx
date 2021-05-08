import Head from "next/head";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Dan V</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container>
          <Typography variant="h1">Hello World</Typography>

          <div>
            <p>
              I&apos;m Daniel. I build high-quality, accessible web applications
              using cutting-edge technology.
            </p>
          </div>

          <Button variant="contained">Click me</Button>
        </Container>
      </main>
    </>
  );
}
