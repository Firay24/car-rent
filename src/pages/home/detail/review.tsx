import {
  Button,
  Collapse,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ReviewComponents from "../components/reviewComponents";
import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const Review = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack bgColor="white" padding={6}>
      <HStack>
        <Text fontSize="20px" fontWeight="semibold">
          Reviews
        </Text>
        <Text padding={1} borderRadius={5} bgColor="primaryBlue" color="white">
          13
        </Text>
      </HStack>
      <Stack marginTop={5}>
        <Stack alignItems="center">
          <Stack gap={5}>
            <ReviewComponents />
            <ReviewComponents />
          </Stack>
          {!isExpanded ? (
            <Button
              onClick={() => {
                setIsExpanded(!isExpanded);
                onToggle();
              }}
              width="fit-content"
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
              rightIcon={<HiOutlineChevronDown />}
              fontWeight="medium"
              color="textSecondary"
            >
              Show more
            </Button>
          ) : null}
          <Collapse in={isOpen} animateOpacity>
            <Stack marginTop={5} gap={5} alignItems="center">
              <ReviewComponents />
              <ReviewComponents />
              <Button
                onClick={() => {
                  setIsExpanded(!isExpanded);
                  onToggle();
                }}
                width="fit-content"
                bgColor="transparent"
                _hover={{ bgColor: "transparent" }}
                rightIcon={<HiOutlineChevronUp />}
                fontWeight="medium"
                color="textSecondary"
              >
                Show Less
              </Button>
            </Stack>
          </Collapse>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Review;
