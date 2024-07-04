import Header from "@/components/header";
import { Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import Sidebar from "@/components/sidebar";
import { generateScrollbarStyle } from "@/components/theme";

const Dashboard = () => {
  return (
    <Stack>
      <Header />
      <Stack direction="row" marginTop="72px">
        <Stack
          width="20%"
          position="fixed"
          height="88vh"
          overflowY="auto"
          sx={generateScrollbarStyle()}
        >
          <Sidebar />
        </Stack>
        <Stack marginLeft="19%" width="full">
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
      </Stack>
    </Stack>
  );
};

export { Dashboard };
export default Dashboard;
