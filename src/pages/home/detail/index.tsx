import { Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import Container from "@/components/container";
import PhotoSection from "./photoSection";
import InformationSection from "./informationSection";
import Review from "./review";
import CarCards from "@/components/carCard";
import { Cars } from "@/data/car";
import { CarProps } from "@/types/home/car";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <PhotoSection />
        <InformationSection />
      </Grid>
      <Stack marginTop={5}>
        <Review />
      </Stack>
      <Stack marginTop={5}>
        <HStack fontSize="14px" justifyContent="space-between">
          <Text color="textSecondary" fontSize="14px" fontWeight="mediumn">
            Current Car
          </Text>
          <Text
            onClick={() => navigate("/home")}
            cursor="pointer"
            color="#3563E9"
          >
            View All
          </Text>
        </HStack>

        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {Cars.popular.map((car: CarProps) => (
            <GridItem key={car.id}>
              <CarCards {...car} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
      <Stack marginTop={5}>
        <HStack fontSize="14px" justifyContent="space-between">
          <Text color="textSecondary" fontWeight="mediumn">
            Recommendation Car
          </Text>
          <Text
            onClick={() => navigate("/home")}
            cursor="pointer"
            color="#3563E9"
          >
            View All
          </Text>
        </HStack>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {Cars.cars.slice(0, 4).map((car: CarProps) => (
            <GridItem key={car.id}>
              <CarCards {...car} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export { Detail };
export default Detail;
