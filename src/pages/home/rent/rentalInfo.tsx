/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import { forwardRef, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { GoChevronDown } from "react-icons/go";

const RentalInfo = () => {
  const inputRef: any = useRef();
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const CustomInput = forwardRef(
    ({ value, onClick }: { value: any; onClick: any }, ref: any) => (
      <Button
        onClick={onClick}
        ref={ref}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        fontWeight="normal"
        _focus={{ backgroundColor: "transparent" }}
        fontSize="14px"
        color="gray"
        width="full"
        justifyContent="left"
        bgColor="#F6F7F9"
      >
        <HStack w="full" justifyContent="space-between">
          <Text>{value || "Select your date"}</Text>
          <GoChevronDown />
        </HStack>
      </Button>
    )
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  return (
    <Stack bgColor="white" padding={5} borderRadius="md">
      <Stack gap={1}>
        <Text fontWeight="semibold" fontSize="20px">
          Rental Info
        </Text>
        <HStack fontSize="14px" color="textSecondary">
          <Text>Please enter your billing into</Text>
          <Text>Step 2 of 4</Text>
        </HStack>
      </Stack>
      <Stack marginTop={3}>
        <Radio>
          <Text fontWeight="semibold">Pick - Up</Text>
        </Radio>
        <Grid templateColumns="repeat(2, 1fr)" gap={5} marginTop={1}>
          <GridItem>
            <Stack gap={5}>
              <Stack>
                <Stack>
                  <Text fontWeight="semibold">Locations</Text>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        _hover={{ backgroundColor: "transparent" }}
                        fontWeight="normal"
                        _focus={{ backgroundColor: "transparent" }}
                        fontSize="14px"
                        color="gray"
                        bgColor="#F6F7F9"
                      >
                        <HStack w="full" justifyContent="space-between">
                          <Text>Select your city</Text>
                          <GoChevronDown />
                        </HStack>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverBody>
                        <Stack>
                          <Text>Option 1</Text>
                          <Divider />
                          <Text>Option 2</Text>
                          <Divider />
                          <Text>Option 3</Text>
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Stack>
              </Stack>
              <Stack>
                <Text fontWeight="semibold">Time</Text>
                <Stack fontSize="14px">
                  <DatePicker
                    selected={selectedTime}
                    onChange={(time: any) => setSelectedTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    customInput={
                      <CustomInput value={undefined} onClick={undefined} />
                    }
                  />
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack gap={5}>
              <Stack>
                <Text fontWeight="semibold">Date</Text>
                <Stack fontSize="14px">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    customInput={
                      <CustomInput value={undefined} onClick={undefined} />
                    }
                  />
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default RentalInfo;
