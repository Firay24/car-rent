/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
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
import "react-datepicker/dist/react-datepicker.css";

const SortContainer = ({ title }: { title: string }) => {
  const inputRef: any = useRef();
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const CustomInput = forwardRef(
    ({ value, onClick }: { value: any; onClick: any }, ref: any) => (
      <Button
        onClick={onClick}
        ref={ref}
        backgroundColor="transparent"
        rightIcon={<GoChevronDown color="black" />}
        _hover={{ backgroundColor: "transparent" }}
        fontWeight="normal"
        _focus={{ backgroundColor: "transparent" }}
        fontSize="14px"
        color="gray"
        padding={0}
        width="120px"
        justifyContent="left"
      >
        {value || "select your date"}
      </Button>
    )
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);
  return (
    <Stack
      boxShadow="sm"
      bgColor="white"
      paddingX={10}
      paddingY={4}
      borderRadius={15}
      width="full"
    >
      <Radio size="md" name="1">
        <Text fontWeight="semibold">{title}</Text>
      </Radio>
      <Grid templateColumns="repeat(3, 1fr)" gap={2} marginTop={2}>
        <GridItem display="flex" alignItems="center">
          <Stack gap={0}>
            <Text fontWeight="semibold">Locations</Text>
            <Popover>
              <PopoverTrigger>
                <Button
                  backgroundColor="transparent"
                  padding={0}
                  rightIcon={<GoChevronDown color="black" />}
                  _hover={{ backgroundColor: "transparent" }}
                  fontWeight="normal"
                  _focus={{ backgroundColor: "transparent" }}
                  fontSize="14px"
                  color="gray"
                >
                  select your city
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
          <Box
            borderRight="1px"
            borderColor="rgba(195, 212, 233, 0.5)"
            height="30px"
            mx={2}
            ml={"20%"}
          />
        </GridItem>
        <GridItem display="flex" alignItems="center">
          <Stack gap={0}>
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
          <Box
            borderRight="1px"
            borderColor="rgba(195, 212, 233, 0.5)"
            height="30px"
            mx={2}
            ml={"20%"}
          />
        </GridItem>
        <GridItem>
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
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default SortContainer;
