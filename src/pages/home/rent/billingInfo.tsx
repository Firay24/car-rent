import { Grid, GridItem, HStack, Input, Stack, Text } from "@chakra-ui/react";

const BillingInfo = () => {
  return (
    <Stack bgColor="white" padding={5} borderRadius="md">
      <Stack gap={1}>
        <Text fontWeight="semibold" fontSize="20px">
          Billing Info
        </Text>
        <HStack fontSize="14px" color="textSecondary">
          <Text>Please enter your billing into</Text>
          <Text>Step 1 of 4</Text>
        </HStack>
      </Stack>
      <Grid templateColumns="repeat(2, 1fr)" gap={5} marginTop={3}>
        <GridItem>
          <Stack gap={5}>
            <Stack>
              <Text fontWeight="semibold">Name</Text>
              <Input
                variant="filled"
                placeholder="Your name"
                _placeholder={{ fontSize: "14px" }}
                backgroundColor="#F6F7F9"
                _focus={{ backgroundColor: "white" }}
              />
            </Stack>
            <Stack>
              <Text fontWeight="semibold">Address</Text>
              <Input
                variant="filled"
                placeholder="Address"
                _placeholder={{ fontSize: "14px" }}
                backgroundColor="#F6F7F9"
                _focus={{ backgroundColor: "white" }}
              />
            </Stack>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack gap={5}>
            <Stack>
              <Text fontWeight="semibold">Phone Number</Text>
              <Input
                variant="filled"
                placeholder="Phone number"
                _placeholder={{ fontSize: "14px" }}
                backgroundColor="#F6F7F9"
                _focus={{ backgroundColor: "white" }}
              />
            </Stack>
            <Stack>
              <Text fontWeight="semibold">Town/City</Text>
              <Input
                variant="filled"
                placeholder="Town/City"
                _placeholder={{ fontSize: "14px" }}
                backgroundColor="#F6F7F9"
                _focus={{ backgroundColor: "white" }}
              />
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default BillingInfo;
