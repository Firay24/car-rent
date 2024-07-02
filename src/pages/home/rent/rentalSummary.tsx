import {
  Box,
  Divider,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import CarImg from "@/assets/image/Ads2.png";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const RentalSummary = () => {
  return (
    <Stack bgColor="white" padding={5} borderRadius="md">
      <Stack gap={1}>
        <Text fontWeight="semibold" fontSize="20px">
          Rental Summary
        </Text>
        <Text fontSize="14px" color="textSecondary">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </Text>
      </Stack>
      <HStack width="full" gap={3} marginTop={5}>
        <Box width="30%" height="80px" borderRadius="md" overflow="hidden">
          <Image
            src={CarImg}
            alt="image car"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
        <Stack width="70%" gap={0}>
          <Text fontSize="20px" fontWeight="semibold">
            Nissan GT - R
          </Text>
          <HStack>
            <Icon as={FaStar} color="#FBAD39" />
            <Icon as={FaStar} color="#FBAD39" />
            <Icon as={FaStar} color="#FBAD39" />
            <Icon as={FaStar} color="#FBAD39" />
            <Icon as={FaRegStar} color="#90A3BF" />
            <Text color="#596780">440+ Reviewer</Text>
          </HStack>
        </Stack>
      </HStack>
      <Divider marginY={2} />
      <Stack gap={5}>
        <Stack gap={2}>
          <HStack width="full" justifyContent="space-between">
            <Text color="textSecondary">Subtotal</Text>
            <Text fontWeight="semibold">$80.00</Text>
          </HStack>
          <HStack width="full" justifyContent="space-between">
            <Text color="textSecondary">Tax</Text>
            <Text fontWeight="semibold">$0</Text>
          </HStack>
        </Stack>
        <HStack padding={4} bgColor="#F6F7F9" justifyContent="space-between">
          <Text fontSize="14px" color="textSecondary">
            Apply promo code
          </Text>
          <Text fontWeight="semibold">Apply now</Text>
        </HStack>
        <HStack gap={4}>
          <Stack gap={0}>
            <Text fontWeight="semibold" fontSize="18px">
              Total Rental Price
            </Text>
            <Text fontSize="14px" color="textSecondary">
              Overall price and includes rental discount
            </Text>
          </Stack>
          <Text fontWeight="semibold" fontSize="36px">
            $80.00
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default RentalSummary;
