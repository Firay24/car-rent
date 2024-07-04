import {
  Checkbox,
  CheckboxGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const FilterSection = () => {
  const minPrice = 70;
  const maxPrice = 100;
  const [price, setPrice] = useState(80);

  const typesCar = [
    { name: "Sport", count: 10 },
    { name: "SUV", count: 10 },
    { name: "MPV", count: 10 },
    { name: "Sedan", count: 10 },
    { name: "Coupe", count: 10 },
    { name: "Hatchback", count: 10 },
  ];

  const capacityCar = [
    { capacity: 2, count: 10 },
    { capacity: 4, count: 14 },
    { capacity: 6, count: 12 },
    { capacity: 8, count: 16 },
  ];

  return (
    <Stack padding={5} gap={6}>
      <Stack>
        <Text fontSize="12px" color="textSecondary" letterSpacing={2}>
          TYPE
        </Text>
        <CheckboxGroup>
          <Stack spacing={[1, 5]}>
            {typesCar.map((type: { name: string; count: number }) => (
              <Checkbox value={type.name.toLowerCase()}>
                {type.name}{" "}
                <span style={{ color: "gray" }}>{`(${type.count})`}</span>
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Stack>
      <Stack>
        <Text fontSize="12px" color="textSecondary" letterSpacing={2}>
          CAPACITY
        </Text>
        <CheckboxGroup>
          <Stack spacing={[1, 5]}>
            {capacityCar.map(
              (capacity: { capacity: number; count: number }) => (
                <Checkbox value={capacity.capacity}>
                  {`${capacity.capacity} Person`}{" "}
                  <span style={{ color: "gray" }}>{`(${capacity.count})`}</span>
                </Checkbox>
              )
            )}
          </Stack>
        </CheckboxGroup>
      </Stack>
      <Stack>
        <Text fontSize="12px" color="textSecondary" letterSpacing={2}>
          PRICE
        </Text>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={minPrice}
          min={minPrice}
          max={maxPrice}
          onChange={(value) => setPrice(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{`Max. $${price}.00`}</Text>
      </Stack>
    </Stack>
  );
};

export default FilterSection;
