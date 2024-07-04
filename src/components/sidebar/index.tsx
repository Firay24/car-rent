import { Box, HStack, Icon, Stack, Switch, Text } from "@chakra-ui/react";
import { RiHome5Fill } from "react-icons/ri";
import { GrCar } from "react-icons/gr";
import { useState } from "react";
import { IconType } from "react-icons";
import { PiChartBar, PiWarningCircle } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsCalendar3Week } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { PiHandbag } from "react-icons/pi";
import { FaSun, FaMoon } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState("Dashboard");
  const [isChecked, setIsChecked] = useState(false);

  const menus = [
    { label: "Dashboard", icon: RiHome5Fill },
    { label: "Car Rent", icon: GrCar },
    { label: "Insight", icon: PiChartBar },
    { label: "Reimburse", icon: LuWallet },
    { label: "Inbox", icon: IoChatbubbleEllipsesOutline },
    { label: "Calender", icon: BsCalendar3Week },
  ];

  const menu2 = [
    { label: "Settings", icon: TbSettings2 },
    { label: "Help & Center", icon: PiWarningCircle },
    { label: "Help & Center", icon: PiWarningCircle },
    { label: "Help & Center", icon: PiWarningCircle },
  ];

  return (
    <Stack padding={3} gap={10} paddingBottom={6} bgColor="white">
      <Stack gap={7}>
        <Stack gap={3}>
          <Stack paddingX={3}>
            <Text fontSize="12px" color="textSecondary" letterSpacing={2}>
              MAIN MENU
            </Text>
          </Stack>
          {menus.map((menu: { label: string; icon: IconType }) => (
            <HStack
              paddingY={2}
              paddingX={3}
              bgColor={
                currentMenu === menu.label ? "primaryBlue" : "transparent"
              }
              color={currentMenu === menu.label ? "white" : "textSecondary"}
              borderRadius={6}
              onClick={() => setCurrentMenu(menu.label)}
              cursor="pointer"
            >
              <Icon as={menu.icon} />
              <Text>{menu.label}</Text>
            </HStack>
          ))}
        </Stack>
        <Stack gap={3}>
          <Stack paddingX={3}>
            <Text fontSize="12px" color="textSecondary" letterSpacing={2}>
              PREFERENCES
            </Text>
          </Stack>
          {menu2.map((menu: { label: string; icon: IconType }) => (
            <HStack
              paddingY={2}
              paddingX={3}
              bgColor={
                currentMenu === menu.label ? "primaryBlue" : "transparent"
              }
              color={currentMenu === menu.label ? "white" : "textSecondary"}
              borderRadius={6}
              onClick={() => setCurrentMenu(menu.label)}
              cursor="pointer"
            >
              <Icon as={menu.icon} />
              <Text>{menu.label}</Text>
            </HStack>
          ))}
          <HStack paddingY={2} paddingX={3} justifyContent="space-between">
            <HStack color="textSecondary">
              <Icon as={PiHandbag} />
              <Text>Dark Mode</Text>
            </HStack>
            <HStack>
              <Box position="relative">
                <Switch
                  size="lg"
                  isChecked={isChecked}
                  onChange={(event) => setIsChecked(event.target.checked)}
                />
                <Icon
                  width={3}
                  as={FaSun}
                  position="absolute"
                  top="50%"
                  left="8px"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                  color={isChecked ? "white" : "primaryBlue"}
                />
                <Icon
                  as={FaMoon}
                  position="absolute"
                  top="50%"
                  right="4px"
                  transform="translateY(-50%)"
                  pointerEvents="none"
                  color={isChecked ? "primaryBlue" : "secondaryDark"}
                />
              </Box>
            </HStack>
          </HStack>
        </Stack>
      </Stack>
      <HStack color="textSecondary" paddingX={3}>
        <Icon as={TbLogout2} />
        <Text>Log Out</Text>
      </HStack>
    </Stack>
  );
};

export default Sidebar;
