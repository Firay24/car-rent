import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  isPaddingBottom?: boolean;
}

const Container = ({ children, isPaddingBottom = true }: ContainerProps) => {
  return (
    <Stack
      width="full"
      bgColor="#F6F7F9"
      minHeight="87vh"
      paddingX={10}
      paddingTop={5}
      paddingBottom={isPaddingBottom ? 10 : 4}
    >
      {children}
    </Stack>
  );
};

export default Container;
