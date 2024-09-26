"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/lib/common-types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({
  testimonials,
}: TestimonialSliderProps) {
  return (
    <>
      <section className="w-full py-4">
        <div className="mx-auto lg:max-w-6xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[100%] md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col p-8 gap-6">
                    {/* Stars */}
                    <div className="flex gap-1 w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z"
                          fill="#FDE047"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z"
                          fill="#FDE047"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z"
                          fill="#FDE047"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z"
                          fill="#FDE047"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z"
                          fill="#FDE047"
                        />
                      </svg>
                    </div>
                    <q className="flex-1 text-foreground text-p">
                      {testimonial.quote}
                    </q>
                    <div className="flex w-full gap-3 items-center">
                      {/* <span className="inline-flex rounded-full">
                        <Image
                          loader={imageLoader}
                          className=" rounded-full"
                          height={48}
                          width={48}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </span> */}
                      <div>
                        <p className="text-small font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-small text-neutral-500 mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-16px] md:-left-8 top-1/2 -translate-y-1/2 fill-neutral-800" />
            <CarouselNext className="absolute right-[-16px] md:-right-8 top-1/2 -translate-y-1/2 fill-neutral-800" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
