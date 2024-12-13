"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
const chartData = [
  { skill: "Coding", proficiency: 50 },
  { skill: "Math", proficiency: 75 },
  { skill: "English", proficiency: 99 },
];

const chartConfig = {
  proficiency: {
    label: "Proficiency",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SkillsSpiderChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("mt-12 mx-auto aspect-square min-h-[200px]", className)}
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="skill" />
        <PolarGrid />
        <Radar
          dataKey="proficiency"
          fill="var(--color-proficiency)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
}
