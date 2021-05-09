import Link from "next/link";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";

export function Navbar(): JSX.Element {
  return (
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
  );
}
