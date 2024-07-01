import Header from "@/components/header";
import { Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <Stack align="center">
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
      <Footer />
    </Stack>
  );
};

export { Home };
export default Home;
