import { Button, Checkbox, HStack, Image, Stack, Text } from "@chakra-ui/react";
import SecurityImg from "@/assets/image/ic-security-safety.png";

const Confirmation = () => {
  return (
    <Stack bgColor="white" padding={5} borderRadius="md">
      <Stack gap={1}>
        <Text fontWeight="semibold" fontSize="20px">
          Confirmation
        </Text>
        <HStack fontSize="14px" color="textSecondary">
          <Text>
            We are getting to the end. Just few clicks and your rental is ready!
          </Text>
          <Text>Step 4 of 4</Text>
        </HStack>
      </Stack>
      <Stack marginTop={7} gap={6}>
        <Checkbox
          fontWeight="semibold"
          padding={3}
          bgColor="#F6F7F9"
          borderRadius="md"
        >
          I agree with sending an Marketing and newsletter emails. No spam,
          promissed!
        </Checkbox>
        <Checkbox
          fontWeight="semibold"
          padding={3}
          bgColor="#F6F7F9"
          borderRadius="md"
        >
          I agree with our terms and conditions and privacy policy.
        </Checkbox>
      </Stack>
      <Button
        marginTop={5}
        bgColor="primaryBlue"
        _hover={{ backgroundColor: "secondaryBlue" }}
        color="white"
        width="fit-content"
        fontWeight="medium"
        size="lg"
      >
        Rent Now
      </Button>
      <Stack marginTop={5} gap={3}>
        <Stack width="fit-content">
          <Image src={SecurityImg} alt="security image" />
        </Stack>
        <Text fontWeight="semibold">All your data are safe</Text>
        <Text fontWeight={"medium"} color="textSecondary">
          We are using the most advanced security to provide you the best
          experience ever.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Confirmation;
