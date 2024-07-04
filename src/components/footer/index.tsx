import {
  Divider,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export interface MenuProps {
  title: string;
  menu: string[];
}

const Footer = () => {
  const isMobile =
    useBreakpointValue({ base: true, md: false, xl: false }) ?? false;

  const menus = [
    {
      title: "About",
      menu: ["How it works", "Featured", "Partnership", "Bussiness Relation"],
    },
    {
      title: "Community",
      menu: ["Events", "Blog", "Podcast", "Invite a friend"],
    },
    {
      title: "Sociel",
      menu: ["Discord", "Instagram", "Twitter", "Facebook"],
    },
  ];
  return (
    <Stack bgColor="white" padding={6} width="100%">
      <Stack
        justifyContent="space-between"
        direction={!isMobile ? "row" : "column"}
      >
        <Stack
          width={isMobile ? "100%" : "25%"}
          textAlign={isMobile ? "center" : "left"}
        >
          <Text fontSize="24px" fontWeight="semibold" color="primaryBlue">
            MORENT
          </Text>
          <Text color="rgba(19, 19, 19, 0.5)">
            Our vision is to provide convenience and help increase your sales
            business.
          </Text>
        </Stack>
        <Stack
          width={isMobile ? "100%" : "50%"}
          gap={isMobile ? 4 : 10}
          justifyContent="end"
          marginRight={10}
          direction={isMobile ? "column" : "row"}
          textAlign={isMobile ? "center" : "left"}
          marginTop={isMobile ? 6 : undefined}
        >
          {menus.map((menu: MenuProps) => (
            <Stack>
              <Text fontWeight="semibold">{menu.title}</Text>
              <Stack color="rgba(19, 19, 19, 0.5)">
                {menu.menu.map((item: string) => (
                  <Text>{item}</Text>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Divider marginY={5} />
      <Stack
        justifyContent="space-between"
        fontSize="14px"
        fontWeight="semibold"
        direction={isMobile ? "column" : "row"}
        textAlign={isMobile ? "center" : "left"}
      >
        <Stack>
          <Text>©2022 MORENT. All rights reserved</Text>
        </Stack>
        <HStack gap={5} justifyContent={isMobile ? "center" : "left"}>
          <Text>Privacy & Policy</Text>
          <Text>Terms & Condition</Text>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Footer;
