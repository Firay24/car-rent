import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import { RiSteering2Fill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { CarProps } from "@/types/home/car";
import { GoHeart } from "react-icons/go";

const CarCards = ({
  name,
  type,
  tankSize,
  capacity,
  transmissionType,
  price,
  previousPrice,
  isLike,
  img,
}: CarProps) => {
  return (
    <Card>
      <CardHeader>
        <HStack justifyContent="space-between" alignItems="start">
          <Stack gap={0}>
            <Text fontWeight="semibold">{name}</Text>
            <Text color="textSecondary" fontSize="14px">
              {type}
            </Text>
          </Stack>
          <Button
            bgColor="transparent"
            aria-label="favorite"
            padding={0}
            minWidth="unset"
            height="auto"
            width="auto"
            borderRadius="none"
            _hover={{ backgroundColor: "transparent" }}
          >
            <Icon as={isLike ? AiFillHeart : GoHeart} color="#ED3F3F" />
          </Button>
        </HStack>
      </CardHeader>
      <CardBody>
        <Image src={img} alt="image car" />
        <HStack justifyContent="space-between">
          <HStack color="secondaryDark" fontSize="14px">
            <Icon as={FaGasPump} />
            <Text>{`${tankSize} L`}</Text>
          </HStack>
          <HStack color="secondaryDark">
            <Icon as={RiSteering2Fill} fontSize="19px" />
            <Text fontSize="14px">{transmissionType}</Text>
          </HStack>
          <HStack color="secondaryDark" fontSize="14px">
            <Icon as={FaUserGroup} />
            <Text>{`${capacity} people`}</Text>
          </HStack>
        </HStack>
      </CardBody>
      <CardFooter paddingTop={0}>
        <HStack justifyContent="space-between" width="full">
          <Stack gap={0}>
            <Text fontWeight="semibold" display="flex" alignItems="center">
              {`$${price}.00/`}
              <span
                style={{
                  fontSize: "12px",
                  color: "#90A3BF",
                  marginLeft: "3px",
                }}
              >
                day
              </span>
            </Text>
            <Text as="del" fontSize="14px" color="textSecondary">
              {`$${previousPrice}.00`}
            </Text>
          </Stack>
          <Button
            fontWeight="medium"
            bgColor="primaryBlue"
            color="white"
            size="sm"
            _hover={{ bgColor: "secondaryBlue" }}
          >
            Rent Now
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CarCards;
