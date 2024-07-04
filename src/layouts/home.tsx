import Header from "@/components/header";
import { Collapse, Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import Footer from "@/components/footer";
import { createContext, useEffect, useState } from "react";
import { FilterContextProps } from "@/types/home/filter";
import FilterSection from "@/components/filter";

export const FilterContext = createContext<FilterContextProps | null>(null);

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);

  const switchIsShowFilter = () => {
    setShowFilter(!showFilter);
    localStorage.showFilter = !showFilter;
  };

  useEffect(() => {
    try {
      setShowFilter(JSON.parse(localStorage.showFilter));
    } catch (error) {
      localStorage.showFilter = showFilter;
    }
  }, [showFilter]);

  return (
    <FilterContext.Provider value={{ showFilter, switchIsShowFilter }}>
      <Stack align="center">
        <Header />
        <Stack direction="row" marginTop="72px">
          <Collapse style={{ width: "20%" }} in={showFilter} animateOpacity>
            <FilterSection />
          </Collapse>
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
        <Footer />
      </Stack>
    </FilterContext.Provider>
  );
};

export { Home };
export default Home;
