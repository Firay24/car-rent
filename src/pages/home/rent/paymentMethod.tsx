import {
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import VisaImg from "@/assets/image/Visa.png";
import PaypalImg from "@/assets/image/PayPal.png";
import BitcoinImg from "@/assets/image/Bitcoin.png";
import { useState } from "react";

const PaymentMethod = () => {
  const [value, setValue] = useState("");
  return (
    <Stack bgColor="white" padding={5} borderRadius="md">
      <Stack gap={1}>
        <Text fontWeight="semibold" fontSize="20px">
          Payment Method
        </Text>
        <HStack fontSize="14px" color="textSecondary">
          <Text>Please enter your payment method</Text>
          <Text>Step 3 of 4</Text>
        </HStack>
      </Stack>
      <Stack marginTop={3} bgColor="#F6F7F9" padding={4} borderRadius="md">
        <HStack width="full" justifyContent="space-between">
          <Radio>
            <Text fontWeight="semibold">Credit Card</Text>
          </Radio>
          <Stack>
            <Image src={VisaImg} alt="visa image" />
          </Stack>
        </HStack>
        <Grid templateColumns="repeat(2, 1fr)" gap={5} marginTop={3}>
          <GridItem>
            <Stack gap={5}>
              <Stack>
                <Text fontWeight="semibold">Card Number</Text>
                <Input
                  variant="filled"
                  type="number"
                  placeholder="Card number"
                  _placeholder={{ fontSize: "14px" }}
                  backgroundColor="white"
                  _focus={{ backgroundColor: "white" }}
                />
              </Stack>
              <Stack>
                <Text fontWeight="semibold">Card Holder</Text>
                <Input
                  variant="filled"
                  placeholder="Card holder"
                  type="number"
                  _placeholder={{ fontSize: "14px" }}
                  backgroundColor="white"
                  _focus={{ backgroundColor: "white" }}
                />
              </Stack>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack gap={5}>
              <Stack>
                <Text fontWeight="semibold">Expration Date</Text>
                <Input
                  type="date"
                  variant="filled"
                  placeholder="DD/MM/YY"
                  _placeholder={{ fontSize: "14px", color: "yellow" }}
                  backgroundColor="white"
                  _focus={{ backgroundColor: "white" }}
                />
              </Stack>
              <Stack>
                <Text fontWeight="semibold">CVC</Text>
                <Input
                  variant="filled"
                  placeholder="CVC"
                  _placeholder={{ fontSize: "14px" }}
                  backgroundColor="white"
                  _focus={{ backgroundColor: "white" }}
                />
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
      <Stack marginTop={3}>
        <RadioGroup onChange={setValue} value={value}>
          <Stack gap={4}>
            <HStack
              width="full"
              justifyContent="space-between"
              padding={3}
              bgColor="#F6F7F9"
              borderRadius="md"
            >
              <Radio value="paypal">PayPal</Radio>
              <Stack>
                <Image src={PaypalImg} alt="paypal image" />
              </Stack>
            </HStack>
            <HStack
              width="full"
              justifyContent="space-between"
              padding={3}
              bgColor="#F6F7F9"
              borderRadius="md"
            >
              <Radio value="bitcoint">Bitcoint</Radio>
              <Stack>
                <Image src={BitcoinImg} alt="paypal image" />
              </Stack>
            </HStack>
          </Stack>
        </RadioGroup>
      </Stack>
    </Stack>
  );
};

export default PaymentMethod;
