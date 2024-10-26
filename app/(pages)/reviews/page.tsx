"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import FormLeaveReview from "@/components/pes-custom/forms/FormLeaveReview";

const ReviewsPage = () => {
  return (
    <section>
      <div className="container flex flex-col items-start text-start section-px py-20 text-foreground gap-10">
        <h1 className="text-h1">Read reviews from parents & students</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Leave a Review</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <FormLeaveReview />
          </DialogContent>
        </Dialog>

        {/* Carousels */}
        <div className="flex gap-4 flex-col w-full">
          <Carousel
            plugins={[
              // @ts-expect-error typescript issue
              Autoplay({
                delay: 3500,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardHeader className="flex flex-row gap-2 items-start space-y-0">
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                      </CardHeader>
                      <CardContent>
                        <span className="text-p">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos incidunt libero ullam explicabo at
                          mollitia repellat ab et quia corrupti.
                        </span>
                      </CardContent>
                      <CardFooter className="flex gap-3 items-center">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1 text-start items-start text-small w-full">
                          <span>Chase Rogers</span>
                          <span className="text-medium text-muted-foreground">
                            CEO at Company
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            plugins={[
              // @ts-expect-error typescript issue
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardHeader className="flex flex-row gap-2 items-start space-y-0">
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                        <StarIcon
                          className="fill-yellow-400 stroke-yellow-400"
                          size={16}
                        />
                      </CardHeader>
                      <CardContent>
                        <span className="text-p">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos incidunt libero ullam explicabo at
                          mollitia repellat ab et quia corrupti.
                        </span>
                      </CardContent>
                      <CardFooter className="flex gap-3 items-center">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1 text-start items-start text-small w-full">
                          <span>Chase Rogers</span>
                          <span className="text-medium text-muted-foreground">
                            CEO at Company
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
