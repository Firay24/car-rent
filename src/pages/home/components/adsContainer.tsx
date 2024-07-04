import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AdsProps } from "@/types/home/ads";

const AdsContainer = ({
  heading,
  text,
  img,
  bgColorButton,
  hoverBgColorButton,
}: AdsProps) => {
  return (
    <Box position="relative" width="100%" flex="1">
      <Image
        src={img}
        alt="ads"
        minWidth="500px"
        maxWidth="800px"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        position="absolute"
        top="5"
        left="5"
        display="flex"
        flexDirection="column"
        width="70%"
        color="white"
      >
        <Text as="h2" fontWeight="semibold" fontSize="32px">
          {heading}
        </Text>
        <Text mt={2} fontSize="16px">
          {text}
        </Text>
        <Button
          width="fit-content"
          fontWeight="normal"
          mt={4}
          bgColor={bgColorButton ? bgColorButton : "primaryBlue"}
          color="white"
          _hover={{
            bgColor: hoverBgColorButton ? hoverBgColorButton : "secondaryBlue",
          }}
        >
          Rental Car
        </Button>
      </Box>
    </Box>
  );
};

export default AdsContainer;
