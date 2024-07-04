import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ImgCar from "@/assets/image/Ads2.png";
import ImgView1 from "@/assets/image/view2.png";
import ImgView2 from "@/assets/image/view3.png";
import { useState } from "react";

const PhotoSection = () => {
  const [currentImg, setCurrentImg] = useState<string>(ImgCar);

  return (
    <GridItem>
      <Stack gap={4}>
        <Box position="relative" width="100%" flex="1">
          <Stack height="350px" overflow="hidden" borderRadius="md">
            <Image
              src={currentImg ? currentImg : ImgCar}
              alt="ads"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Stack>
          {currentImg === ImgCar || currentImg === "" ? (
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
                Sports car with the best design and acceleration
              </Text>
              <Text mt={2} fontSize="16px">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </Text>
              <Button
                width="fit-content"
                fontWeight="normal"
                mt={4}
                bgColor="#54A6FF"
                color="white"
                _hover={{
                  bgColor: "#4991E0",
                }}
              >
                Rental Car
              </Button>
            </Box>
          ) : null}
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem>
            <Stack
              height={150}
              cursor="pointer"
              overflow="hidden"
              borderRadius={currentImg === ImgCar ? "lg" : "md"}
              border={currentImg === ImgCar ? "3px solid" : undefined}
              padding={currentImg === ImgCar ? 2 : undefined}
              borderColor={currentImg === ImgCar ? "primaryBlue" : undefined}
              onClick={() => setCurrentImg(ImgCar)}
            >
              <Image
                src={ImgCar}
                alt="image car"
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="md"
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack
              cursor="pointer"
              height={150}
              overflow="hidden"
              borderRadius={currentImg === ImgView1 ? "lg" : "md"}
              border={currentImg === ImgView1 ? "3px solid" : undefined}
              padding={currentImg === ImgView1 ? 2 : undefined}
              borderColor={currentImg === ImgView1 ? "primaryBlue" : undefined}
              onClick={() => setCurrentImg(ImgView1)}
            >
              <Image
                src={ImgView1}
                alt="image car"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Stack
              cursor="pointer"
              height={150}
              overflow="hidden"
              borderRadius={currentImg === ImgView2 ? "lg" : "md"}
              border={currentImg === ImgView2 ? "3px solid" : undefined}
              padding={currentImg === ImgView2 ? 2 : undefined}
              borderColor={currentImg === ImgView2 ? "primaryBlue" : undefined}
              onClick={() => setCurrentImg(ImgView2)}
            >
              <Image
                src={ImgView2}
                alt="image car"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </GridItem>
  );
};

export default PhotoSection;
