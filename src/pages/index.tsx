import Head from "next/head";
import Link from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
          <Box marginRight="auto">
            <Typography variant="h6">Daniel Varcas</Typography>
          </Box>

          <Link href="https://twitter.com/dan_j_v" passHref>
            <IconButton color="secondary" component="a" target="_blank">
              <TwitterIcon />
            </IconButton>
          </Link>

          <Link href="https://www.linkedin.com/in/daniel-varcas/" passHref>
            <IconButton color="secondary" component="a" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Link>

          <Link href="https://github.com/danielvarcas" passHref>
            <IconButton color="secondary" component="a" target="_blank">
              <GitHubIcon />
            </IconButton>
          </Link>
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

          <Button variant="contained" color="primary">
            Primary
          </Button>

          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Container>
      </main>
    </>
  );
}
