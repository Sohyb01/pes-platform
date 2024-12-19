"use client";

import { RevenueVsProfitChart } from "@/components/pes-custom/platform-components/RevenueVsProfitChart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BaggageClaim,
  CircleUser,
  DollarSign,
  SquareUser,
  User,
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function EmployeesPage() {
  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];

  // Monthly revenue example
  const amount = 2718;
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return (
    <div className="dashboard-tab-wrapper gap-4">
      <h3 className="text-h3">Finances</h3>
      <div className="grid gap-4 md:grid-cols-2 ">
        <Card>
          <CardHeader className="text-h3">Revenue</CardHeader>
          <CardContent className="flex items-center justify-between">
            <DollarSign size={32} />
            <h2 className="text-h2">{amount}</h2>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-h3">Profit</CardHeader>
          <CardContent className="flex items-center justify-between">
            <DollarSign size={32} />
            <h2 className="text-h2">{amount}</h2>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-12 w-full">
        <Card className="col-span-12 lg:col-span-8">
          <CardHeader>
            <CardTitle>Monthly Subscriptions Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <div className="flex flex-col md:flex-row lg:flex-col col-span-12 lg:col-span-4 gap-4 w-full">
          <Card className="w-full lg:h-full">
            <CardHeader className="gap-1">
              <CardDescription className="text-subtle">
                Monthly Revenue
              </CardDescription>
              <CardTitle className="text-h2">{formatted}</CardTitle>
            </CardHeader>
            <CardContent className="text-detail">
              <p className="text-muted-foreground">+25% from last month</p>
            </CardContent>
            <CardFooter>
              <Progress value={33} />
            </CardFooter>
          </Card>
          <Card className="w-full lg:h-full">
            <CardHeader className="gap-1">
              <CardDescription className="text-subtle">
                Target Revenue
              </CardDescription>
              <CardTitle className="text-h2">{formatted}</CardTitle>
            </CardHeader>
            <CardContent className="text-detail">
              <p className="text-muted-foreground">
                We've achieved 75% from our target
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={75} />
            </CardFooter>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader className="text-h3">Revenue vs Profit</CardHeader>
        <CardContent>
          <RevenueVsProfitChart />
        </CardContent>
      </Card>
    </div>
  );
}
