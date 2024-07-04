import Container from "@/components/container";
import { Divider, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import MapImg from "@/assets/image/Maps.png";
import CarImg from "@/assets/image/Look.png";
import SortContainer from "../home/components/sortContainer";
import PieChart from "@/components/pieChart";
import { FaCircle } from "react-icons/fa";
import { PiDotsThreeOutline } from "react-icons/pi";
import { Cars } from "@/data/car";
import { CarProps } from "@/types/home/car";

const Dashboard = () => {
  const chartData = [17439, 9478, 18197, 12510, 14406];
  const chartLabels = ["Sport Car", "SUV", "Coupe", "Hatchback", "MPV"];
  const chartColors = ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"];

  const formattedChartData = chartData.map((data, index) => ({
    value: data,
    label: chartLabels[index],
    color: chartColors[index],
  }));

  return (
    <Container isPaddingBottom={false}>
      <HStack flex={1} alignItems="stretch" gap={4}>
        <Stack
          width="full"
          gap={6}
          bgColor="white"
          padding={4}
          borderRadius={5}
          height="full"
        >
          <Text fontWeight="semibold">Detail Rental</Text>
          <Image src={MapImg} alt="map image" />
          <HStack>
            <Image src={CarImg} alt="car image" />
            <HStack
              justifyContent="space-between"
              alignItems="start"
              width="full"
            >
              <Stack gap={0}>
                <Text fontWeight="semibold" fontSize="18px">
                  Nissan GT - R
                </Text>
                <Text color="textSecondary" fontSize="12px">
                  Sport Car
                </Text>
              </Stack>
              <Text color="textSecondary" fontSize="12px">
                #9761
              </Text>
            </HStack>
          </HStack>
          <SortContainer title="Pick - Up" isCard />
          <SortContainer title="Drop - Off" isCard />
          <Divider />
          <HStack justifyContent="space-between">
            <Stack>
              <Text fontWeight="semibold" fontSize="18px">
                Total Rental Price
              </Text>
              <Text color="textSecondary" fontSize="12px">
                Oversall price and includes rental discount
              </Text>
            </Stack>
            <Text fontSize="32px" fontWeight="semibold">
              $80.00
            </Text>
          </HStack>
        </Stack>
        <Stack width="full" height="full" gap={4}>
          <Stack bgColor="white" gap={8} padding={4} borderRadius={5}>
            <HStack justifyContent="space-between">
              <Text fontWeight="semibold">Top 5 Car Rental</Text>
              <Icon as={PiDotsThreeOutline} />
            </HStack>
            <HStack gap={4}>
              <Stack minW="50%">
                <PieChart
                  data={chartData}
                  labels={chartLabels}
                  centerTitle="72,030"
                  centerSubtitle="Rental Car"
                />
              </Stack>
              <Stack
                paddingY={5}
                width="full"
                justifyContent="space-between"
                height="full"
              >
                {formattedChartData.map(
                  (data: { value: number; label: string; color: string }) => (
                    <HStack justifyContent="space-between">
                      <HStack>
                        <Icon as={FaCircle} color={data.color} />
                        <Text color="textSecondary">{data.label}</Text>
                      </HStack>
                      <Text>{data.value.toLocaleString("en-US")}</Text>
                    </HStack>
                  )
                )}
              </Stack>
            </HStack>
          </Stack>
          <Stack
            height="full"
            bgColor="white"
            gap={8}
            padding={4}
            borderRadius={5}
          >
            <HStack justifyContent="space-between">
              <Text fontWeight="semibold">Recent Transaction</Text>
              <Text cursor="pointer" color="#3563E9" fontSize="14px">
                View All
              </Text>
            </HStack>
            <Stack gap={6}>
              {Cars.popular.slice(0, 4).map((car: CarProps, index: number) => (
                <>
                  <HStack>
                    <HStack width="70%">
                      <Image
                        src={car.img}
                        alt="image car popular"
                        width="50%"
                      />
                      <Stack gap={0}>
                        <Text fontWeight="semibold">{car.name}</Text>
                        <Text fontSize="14px" color="textSecondary">
                          {car.type}
                        </Text>
                      </Stack>
                    </HStack>
                    <Stack gap={0} width="30%" alignItems="end">
                      <Text fontSize="14px" color="textSecondary">
                        {car.time}
                      </Text>
                      <Text fontWeight="semibold">{`$${car.price}.00`}</Text>
                    </Stack>
                  </HStack>
                  {index !== Cars.popular.length - 1 ? <Divider /> : null}
                </>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </HStack>
    </Container>
  );
};

export default Dashboard;
