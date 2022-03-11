import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Typography,
  List,
  ListItem,
  Grid,
  Box,
  makeStyles,
} from "@material-ui/core";

export function HomeContent(): JSX.Element {
  const useStyles = makeStyles({
    circular: {
      borderRadius: "50%",
    },
    main: {
      padding: "20px 0",
    },
  });

  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Daniel Varcas</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main className={classes.main}>
        <Container maxWidth="md">
          <Grid container alignItems="center">
            <Grid item sm={8}>
              <Typography variant="h4" component="h1">
                <span role="img" aria-label="hand waving">
                  👋
                </span>{" "}
                Hi, I&apos;m Daniel. I build high-quality web applications using
                cutting-edge technology.
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Box display="flex" justifyContent="center">
                <Image
                  src="/me-20220311.jpeg"
                  alt="A picture of Daniel walking down the street"
                  width="200px"
                  height="200px"
                  className={classes.circular}
                />
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h2">About Me</Typography>

          <p>
            A software developer with over two years of commercial experience.
            I&apos;m particularly passionate about frontend development.
            Day-to-day you&apos;ll find me building apps with React and
            TypeScript; writing unit tests in Jest with react-testing-library;
            creating end-to-end tests using Cypress; and working with designers
            to build UIs that are user-friendly, beautiful, and accessible.
          </p>

          <p>
            I also regularly work full-stack, frequenting .NET Core projects,
            maintaining server infrastructure, and setting up build and release
            pipelines.
          </p>

          <Typography variant="h3">Key Skills</Typography>

          <Grid container>
            <Grid item sm={4}>
              <Typography variant="h4">
                <span role="img" aria-label="triangular ruler">
                  📐
                </span>{" "}
                Frontend
              </Typography>
              <List>
                <ListItem>React</ListItem>
                <ListItem>TypeScript &amp; JavaScript</ListItem>
                <ListItem>Jest, react-testing-library</ListItem>
                <ListItem>Accessibility</ListItem>
                <ListItem>CSS, SASS, CSS in JS</ListItem>
              </List>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h4">
                <span role="img" aria-label="technologist">
                  👨‍💻
                </span>{" "}
                Backend
              </Typography>
              <List>
                <ListItem>C#</ListItem>
                <ListItem>.NET Core</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>SQL</ListItem>
              </List>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h4">
                <span role="img" aria-label="gear">
                  ⚙️
                </span>{" "}
                Tools
              </Typography>
              <List>
                <ListItem>Build &amp; Release Pipelines</ListItem>
                <ListItem>AWS &amp; Azure</ListItem>
                <ListItem>Git</ListItem>
                <ListItem>Linux</ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
