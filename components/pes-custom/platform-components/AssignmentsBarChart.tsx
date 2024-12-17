"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
const chartData = [
  { status: "completed", occurrences: 12, fill: "var(--color-completed)" },
  { status: "pending", occurrences: 2, fill: "var(--color-pending)" },
  {
    status: "missed",
    occurrences: 3,
    fill: "var(--color-missed)",
  },
];

const chartConfig = {
  occurrences: {
    label: "Occurrences",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
  missed: {
    label: "Missed",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export const AssignmentsBarChart = ({ className }: { className?: string }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("min-h-[100px]", className)}
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 30,
        }}
      >
        <YAxis
          dataKey="status"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="occurrences" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="occurrences" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  );
};
