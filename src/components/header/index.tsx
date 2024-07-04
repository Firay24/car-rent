import {
  Avatar,
  Box,
  Collapse,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FilterContextProps } from "@/types/home/filter";
import { useContext } from "react";
import { FilterContext } from "@/layouts";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile =
    useBreakpointValue({ base: true, md: false, xl: false }) ?? false;

  const showFilter: FilterContextProps = useContext(FilterContext) ?? {
    showFilter: false,
    switchIsShowFilter: () => {},
  };

  return (
    <>
      <HStack width="full" position="fixed" bgColor="white" zIndex={100}>
        <HStack
          maxWidth="1800px"
          width="full"
          minWidth={!isMobile ? "800px" : undefined}
          paddingX={10}
          paddingY={3}
          justifyContent="space-between"
        >
          <HStack width="50%" justifyContent="space-between">
            <Text fontSize="24px" fontWeight="semibold" color="primaryBlue">
              MORENT
            </Text>
            {!isMobile ? (
              <InputGroup width="70%">
                <InputLeftElement pointerEvents="none">
                  <CiSearch />
                </InputLeftElement>
                <Input
                  borderRadius="full"
                  type="tel"
                  placeholder="Search something here"
                />
                <InputRightElement>
                  <IconButton
                    backgroundColor={"transparent"}
                    borderRadius="full"
                    aria-label="filter"
                    icon={<PiSlidersHorizontalThin />}
                    color="secondaryDark"
                    _hover={{ bgColor: "transparent", color: "black" }}
                    onClick={showFilter.switchIsShowFilter}
                  />
                </InputRightElement>
              </InputGroup>
            ) : null}
          </HStack>
          <HStack gap={5}>
            {!isMobile ? (
              <>
                <IconButton
                  backgroundColor={"transparent"}
                  borderRadius="full"
                  aria-label="Loved"
                  border="1px"
                  borderColor="rgba(195, 212, 233, 0.5)"
                  icon={<FaHeart />}
                  color="secondaryDark"
                />
                <Box position="relative" display="inline-block">
                  <IconButton
                    backgroundColor={"transparent"}
                    borderRadius="full"
                    aria-label="Loved"
                    border="1px"
                    borderColor="rgba(195, 212, 233, 0.5)"
                    icon={<IoNotifications />}
                    color="secondaryDark"
                  />
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    width="10px"
                    height="10px"
                    borderRadius="full"
                    backgroundColor="#FF4423"
                  />
                </Box>
                <IconButton
                  backgroundColor={"transparent"}
                  borderRadius="full"
                  aria-label="Loved"
                  border="1px"
                  borderColor="rgba(195, 212, 233, 0.5)"
                  icon={<IoMdSettings />}
                  color="secondaryDark"
                />
              </>
            ) : null}
            <Avatar
              onClick={onToggle}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </HStack>
      </HStack>
      <Collapse in={isOpen}>
        <Stack
          bg="white"
          minHeight="100vh"
          position="fixed"
          width="full"
          left={0}
          paddingTop={20}
        >
          <Stack fontSize="18px" alignItems="center">
            <Text>Favorit</Text>
            <Divider marginY={3} />
            <Text>Notifikasi</Text>
            <Divider marginY={3} />
            <Text>Pengaturan</Text>
            <Divider marginY={3} />
            <Text>Profile</Text>
          </Stack>
        </Stack>
      </Collapse>
    </>
  );
};

export default Header;
