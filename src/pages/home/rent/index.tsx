import { Grid, GridItem, Stack } from "@chakra-ui/react";
import BillingInfo from "./billingInfo";
import Container from "@/components/container";
import RentalInfo from "./rentalInfo";
import PaymentMethod from "./paymentMethod";
import Confirmation from "./Confirmation";
import RentalSummary from "./rentalSummary";

const Rent = () => {
  return (
    <Container>
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        <GridItem colSpan={2}>
          <Stack width="full" gap={5}>
            <BillingInfo />
            <RentalInfo />
            <PaymentMethod />
            <Confirmation />
          </Stack>
        </GridItem>
        <GridItem>
          <RentalSummary />
        </GridItem>
      </Grid>
    </Container>
  );
};

export { Rent };
export default Rent;
