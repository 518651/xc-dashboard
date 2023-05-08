import { useState } from "react";
import {
  AreaChart,
  Card,
  Flex,
  Icon,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";

export const performance = [
  {
    date: "2023-05-07",
    Sales: 48,
    Profit: 173,
    Customers: 73,
  },
  {
    date: "2023-05-03",
    Sales: 25,
    Profit: 174.6,
    Customers: 74,
  },
  // ...
  {
    date: "2023-05-04",
    Sales: 31,
    Profit: 682,
    Customers: 682,
  },
];

// Basic formatters for the chart values
const dollarFormatter = (value: number) =>
  `人次 ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartView() {
  const [selectedKpi, setSelectedKpi] = useState("Sales");

  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };

  return (
    <Card>
      <div className="md:flex justify-between">
        <div>
          <Flex
            justifyContent="start"
            className="space-x-0.5"
            alignItems="center"
          >
            <Title> 入馆人数 </Title>
          
          </Flex>
          <Text> 追踪最段时间内入馆学习人数 </Text>
        </div>
        <div className="mt-6 md:mt-0">
          <Toggle
            color="zinc"
            defaultValue={selectedKpi}
            onValueChange={(value) => setSelectedKpi(value)}
          >
            <ToggleItem value="Sales" text="日" />
            <ToggleItem value="Profit" text="月" />
            <ToggleItem value="Customers" text="期" />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={performance}
        index="date"
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className="h-96 mt-8"
      />
    </Card>
  );
}