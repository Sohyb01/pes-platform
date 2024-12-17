"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
const chartData = [
  { month: "January", performance: 186 },
  { month: "February", performance: 305 },
  { month: "March", performance: 237 },
  { month: "April", performance: 73 },
  { month: "May", performance: 209 },
  { month: "June", performance: 214 },
];

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AvgPerformanceLineChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn(className, "min-h-[250px]")}
    >
      <LineChart
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
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="performance"
          type="linear"
          stroke="var(--color-performance)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
