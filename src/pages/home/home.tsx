import {
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Container from "@/components/container";
import AdsContainer from "./components/adsContainer";
import SortContainer from "./components/sortContainer";
import ImgAds1 from "@/assets/image/Ads1.png";
import ImgAds2 from "@/assets/image/Ads2.png";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import CarCards from "@/components/carCard";
import { Cars } from "@/data/car";
import { CarProps } from "@/types/home/car";

const Home = () => {
  return (
    <Container>
      <Wrap justify="center">
        <WrapItem minWidth="600px" maxWidth="800px" flex="1">
          <AdsContainer
            img={ImgAds1}
            heading="The Best Platform for Car Rental"
            text="Ease of doing a car rental safely and reliably. Of course at a low price."
          />
        </WrapItem>
        <WrapItem minWidth="600px" maxWidth="800px" flex="1">
          <AdsContainer
            img={ImgAds2}
            heading="Easy way to rent a car at a low price"
            text="Providing cheap car rental services and safe and comfortable facilities."
            bgColorButton="#54A6FF"
            hoverBgColorButton="#4991E0"
          />
        </WrapItem>
      </Wrap>
      <HStack marginTop={5} justifyContent="space-between" gap={10}>
        <SortContainer title="Pick - Up" />
        <IconButton
          aria-label="arrow up down"
          icon={<HiOutlineArrowsUpDown />}
          backgroundColor="primaryBlue"
          color="white"
          _hover={{ backgroundColor: "secondaryBlue" }}
          boxShadow="xl"
        />
        <SortContainer title="Drop - Off" />
      </HStack>
      <Stack marginTop={5}>
        <Text color="textSecondary" fontSize="14px" fontWeight="mediumn">
          Popular Car
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {Cars.popular.map((car: CarProps) => (
            <GridItem key={car.id}>
              <CarCards {...car} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
      <Stack marginTop={5}>
        <Text color="textSecondary" fontSize="14px" fontWeight="mediumn">
          Recomendation Car
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {Cars.cars.map((car: CarProps) => (
            <GridItem key={car.id}>
              <CarCards {...car} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
      <HStack justifyContent="center" marginTop={5}>
        <Button
          width="fit-content"
          bgColor="primaryBlue"
          _hover={{ backgroundColor: "secondaryBlue" }}
          color="white"
        >
          Show more car
        </Button>
        <Stack position="absolute" right={10} color="textSecondary">
          <Text>{`${Cars.cars.length} cars`}</Text>
        </Stack>
      </HStack>
    </Container>
  );
};

export { Home };
export default Home;
