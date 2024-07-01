import { Divider, HStack, Stack, Text } from "@chakra-ui/react";

export interface MenuProps {
  title: string;
  menu: string[];
}

const Footer = () => {
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
      <HStack justifyContent="space-between">
        <Stack width="50%">
          <Text fontSize="24px" fontWeight="semibold" color="primaryBlue">
            MORENT
          </Text>
          <Text color="rgba(19, 19, 19, 0.5)">
            Our vision is to provide convenience and help increase your sales
            business.
          </Text>
        </Stack>
        <HStack width="50%" gap={10} justifyContent="end" marginRight={10}>
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
        </HStack>
      </HStack>
      <Divider marginY={5} />
      <HStack
        justifyContent="space-between"
        fontSize="14px"
        fontWeight="semibold"
      >
        <Stack>
          <Text>©2022 MORENT. All rights reserved</Text>
        </Stack>
        <HStack gap={5}>
          <Text>Privacy & Policy</Text>
          <Text>Terms & Condition</Text>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Footer;
