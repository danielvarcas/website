import { Box } from "@material-ui/core";
import { HomeContent } from "../components/HomeContent";

export default function Home(): JSX.Element {
  const websiteUp = false;

  if (!websiteUp) {
    return (
      <Box padding="50px" textAlign="center">
        I have temporarily taken down the content of my website until I get
        around to updating it, but the above links still work.
      </Box>
    );
  }

  return <HomeContent />;
}
