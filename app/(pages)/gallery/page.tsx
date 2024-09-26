"use client";
import Image from "next/image";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const imagesData = [
  { src: "/photos/pes-gallery/1.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/2.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/3.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/4.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/5.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/6.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/7.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/8.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/9.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/10.png", aspectRatio: "1800/2400" },
  { src: "/photos/pes-gallery/11.png", aspectRatio: "960/1280" },
  { src: "/photos/pes-gallery/12.png", aspectRatio: "960/1280" },
];

const page = () => {
  return (
    <main className="w-full max-w-none overflow-hidden">
      <section className="w-full">
        <div className="container flex flex-col items-start text-start section-px py-[100px] pt-[140px] text-foreground gap-10">
          <h1 className="text-h1 w-full max-w-[448px]">
            Take a look into our Classes & Sessions
          </h1>
          {/* Masonry Gallery */}
          <ResponsiveMasonry
            className="w-full"
            columnsCountBreakPoints={{ 360: 1, 744: 2, 1280: 3 }}
          >
            <Masonry className="w-full" gutter="8px">
              {/* Map over images */}
              {imagesData.map((image, idx) => (
                <div
                  key={idx}
                  className={`w-full relative`}
                  style={{ aspectRatio: `${image.aspectRatio}` }}
                >
                  <Image
                    fill
                    src={image.src}
                    alt="Gallery Image"
                    className="rounded-md"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </main>
  );
};

export default page;
