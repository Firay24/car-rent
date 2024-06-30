import Header from "@/components/header";
import { Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";

const Dashboard = () => {
  return (
    <Stack>
      <Header />
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "dashboard" &&
            pages.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))
        )}
      </Routes>
    </Stack>
  );
};

export { Dashboard };
export default Dashboard;
