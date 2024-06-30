import {
  Avatar,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <HStack paddingX={10} paddingY={5} justifyContent="space-between">
      <Text fontSize="24px" fontWeight="semibold" color="primaryBlue">
        Morent
      </Text>
      <InputGroup width="30%">
        <InputLeftElement pointerEvents="none">
          <CiSearch />
        </InputLeftElement>
        <Input
          borderRadius="full"
          type="tel"
          placeholder="Search something here"
        />
        <InputRightElement>
          <PiSlidersHorizontalThin />
        </InputRightElement>
      </InputGroup>
      <HStack>
        <IconButton borderRadius="full" aria-label="Loved" icon={<FaHeart />} />
        <IconButton
          borderRadius="full"
          aria-label="Loved"
          icon={<IoNotifications />}
        />
        <IconButton
          borderRadius="full"
          aria-label="Loved"
          icon={<IoMdSettings />}
        />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </HStack>
    </HStack>
  );
};

export default Header;
