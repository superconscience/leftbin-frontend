import { MantineProvider } from "@mantine/core";
import { Pages } from "~/pages";

import "@mantine/core/styles.css";

export const App = () => {
  return (
    <MantineProvider>
      <Pages />
    </MantineProvider>
  );
};
