import Header from "@/components/header";
import { Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";

const Home = () => {
  return (
    <Stack>
      <Header />
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "home" &&
            pages.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))
        )}
      </Routes>
    </Stack>
  );
};

export { Home };
export default Home;
