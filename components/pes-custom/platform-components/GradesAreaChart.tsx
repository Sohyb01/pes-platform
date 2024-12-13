"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
const chartData = [
  { month: "Jan", score: 30 },
  { month: "Feb", score: 70 },
  { month: "Mar", score: 50 },
  { month: "Apr", score: 98 },
  { month: "May", score: 100 },
];

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function GradesAreaChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("min-h-[100px]", className)}
    >
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={true}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Area
          dataKey="score"
          type="linear"
          fill="var(--color-score)"
          fillOpacity={0.4}
          stroke="var(--color-score)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
