"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", revenue: 186, expenses: 80 },
  { month: "February", revenue: 305, expenses: 200 },
  { month: "March", revenue: 237, expenses: 120 },
  { month: "April", revenue: 73, expenses: 190 },
  { month: "May", revenue: 209, expenses: 130 },
  { month: "June", revenue: 214, expenses: 140 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function RevenueVsProfitChart() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-revenue)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-revenue)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-expenses)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-expenses)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="expenses"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="var(--color-expenses)"
          stackId="a"
        />
        <Area
          dataKey="revenue"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="var(--color-revenue)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
