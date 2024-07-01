import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Stack
      width="full"
      bgColor="#F6F7F9"
      minHeight="85vh"
      paddingX={10}
      paddingY={5}
    >
      {children}
    </Stack>
  );
};

export default Container;
