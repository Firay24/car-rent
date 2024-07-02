import {
  Avatar,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ReviewComponents = () => {
  return (
    <Grid templateColumns="repeat(18, 1fr)">
      <GridItem>
        <HStack>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </HStack>
      </GridItem>
      <GridItem colSpan={17}>
        <Stack width="full">
          <HStack justifyContent="space-between">
            <Stack gap={0}>
              <Text fontSize="20px" fontWeight="semibold">
                Alex Stanton
              </Text>
              <Text color="textSecondary">CEO at Bukalapak</Text>
            </Stack>
            <Stack alignItems="end" gap={0}>
              <Text color="textSecondary">21 July 2022</Text>
              <HStack>
                <Icon as={FaStar} color="#FBAD39" />
                <Icon as={FaStar} color="#FBAD39" />
                <Icon as={FaStar} color="#FBAD39" />
                <Icon as={FaStar} color="#FBAD39" />
                <Icon as={FaRegStar} color="#90A3BF" />
              </HStack>
            </Stack>
          </HStack>
          <Stack>
            <Text color="#596780">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </Text>
          </Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ReviewComponents;
