import {
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const InformationSection = () => {
  return (
    <GridItem bgColor="white" padding={10} borderRadius="xl">
      <Stack justifyContent="space-between" height="full">
        <Stack>
          <Text fontSize="32px" fontWeight="semibold">
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
          <Stack>
            <Stack color="#596780" marginTop={5}>
              <Text fontSize="20px">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </Text>
              <Grid
                marginTop={5}
                templateColumns="repeat(2, 1fr)"
                fontSize="20px"
                gap={20}
              >
                <GridItem>
                  <HStack justifyContent="space-between">
                    <Text>Type Car</Text>
                    <Text fontWeight="semibold">Sport</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text>Stering</Text>
                    <Text fontWeight="semibold">Manual</Text>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack justifyContent="space-between">
                    <Text>Capacity</Text>
                    <Text fontWeight="semibold">2 Person</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text>Gasoline</Text>
                    <Text fontWeight="semibold">70 L</Text>
                  </HStack>
                </GridItem>
              </Grid>
            </Stack>
          </Stack>
        </Stack>
        <HStack justifyContent="space-between" width="full">
          <Stack gap={0}>
            <Text
              fontSize="32px"
              fontWeight="semibold"
              display="flex"
              alignItems="center"
            >
              $70.00/
              <span
                style={{
                  fontSize: "20px",
                  color: "#90A3BF",
                  marginLeft: "3px",
                }}
              >
                day
              </span>
            </Text>
            <Text as="del" fontSize="20px" color="textSecondary">
              $80.00
            </Text>
          </Stack>
          <Button
            fontWeight="medium"
            bgColor="primaryBlue"
            color="white"
            size="lg"
            _hover={{ bgColor: "secondaryBlue" }}
          >
            Rent Now
          </Button>
        </HStack>
      </Stack>
    </GridItem>
  );
};

export default InformationSection;
