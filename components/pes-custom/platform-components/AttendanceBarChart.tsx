"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { subject: "Math", attended: 12, absent: 5 },
  { subject: "Intro to Computers", attended: 16, absent: 3 },
];

const chartConfig = {
  attended: {
    // label: "Attended",
    color: "hsl(var(--primary))",
  },
  absent: {
    // label: "Absent",
    color: "hsl(var(--destructive))",
  },
} satisfies ChartConfig;

const AttendanceBarChart = ({ className }: { className?: string }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("min-h-[200px]", className)}
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="subject" tickLine={false} tickMargin={10} />
        <ChartLegend content={<ChartLegendContent />} />
        <ChartTooltip
          content={
            <ChartTooltipContent
              hideLabel
              className="w-[120px]"
              formatter={(value, name, item, index) => (
                <>
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />
                  {/* {chartConfig[name as keyof typeof chartConfig]?.label || name} */}
                  <div className="flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    {value}
                    <span className="font-normal text-muted-foreground">
                      Session
                    </span>
                  </div>
                  {/* Add this after the last item */}
                  {index === 1 && (
                    <div className="mt-1.5 flex flex-col basis-full border-t pt-1.5 text-xs font-medium text-foreground">
                      Total
                      <div className="flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {item.payload.attended + item.payload.absent}
                        <span className="font-normal text-muted-foreground">
                          Sessions
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            />
          }
          cursor={false}
        />
        <Bar
          dataKey="attended"
          stackId="a"
          className="fill-primary"
          // fill="hsl(var(--primary))"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="absent"
          stackId="a"
          className="fill-destructive/50"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default AttendanceBarChart;
