"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../aceternity/wobble-card";
import Link from "next/link";
import EmberMaxPic from "@/public/images/product-2-images/product-2-image-2.webp";
import CitrusPic from "@/public/images/product-3-images/product-3-image-1.webp";
import FallShoePic from "@/public/images/product-1-images/product-1-image-4.jpg";

export function WobbleCardDemo() {
  return (
    <div className=" mx-auto mt-16 grid w-3/4 max-w-7xl grid-cols-1 gap-4 lg:w-full lg:grid-cols-3">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full min-h-[300px] lg:min-h-[300px] bg-transparent lg:bg-darkBlue">
        <Link href="/products/emberstridemax">
          <Image
            src={EmberMaxPic}
            width={300}
            height={300}
            alt="Image of EmberStride MAX Sneaker"
            className="absolute -bottom-10 right-[0%]  -z-20 rounded-2xl object-cover brightness-75 lg:-bottom-28  lg:-right-[8%] lg:z-0 lg:brightness-100"
            priority
            style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
          />
          <div className="max-w-6xl">
            <h2 className="text-3xl font-bold tracking-normal text-white md:text-xl lg:text-5xl">
              <span className="text-4xl font-medium">Introducing</span> <br />
              EmberStride{" "}
              <span className="text-green lg:text-orange">MAX.</span>
            </h2>
            <p className="mt-4 text-left text-xl text-white">
              Now with{" "}
              <span className="underline decoration-paleOrange underline-offset-4">
                Maximum
              </span>{" "}
              Style.
            </p>
          </div>
        </Link>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[30px] bg-transparent">
        <Link href="/products/citrusstrideclassic">
          <Image
            src={CitrusPic}
            width={500}
            height={500}
            alt="Image of CitrusStride Classic Sneaker"
            priority
            className="absolute -bottom-28 right-0 -z-20 rounded-2xl object-cover  brightness-75 lg:-right-[0%]"
          />
          <h2 className=" mx-auto max-w-80 bg-gradient-to-r from-amber-100 to-amber-400 bg-clip-text text-center text-4xl font-semibold leading-loose tracking-[-0.015em] text-transparent md:text-2xl lg:mt-6 lg:text-5xl">
            <span className=" ">Citrus</span>
            Stride
          </h2>
          <p className="text-center text-lg text-white  lg:mt-2">
            Classically Different.
          </p>
        </Link>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3  bg-transparent lg:bg-darkOrange min-h-[300px] lg:min-h-[600px] xl:min-h-[300px]">
        <Link href="/products/fall-shoe">
          <Image
            src={FallShoePic}
            width={420}
            height={420}
            alt="Image of Limited Edition Sneaker"
            className="absolute -bottom-[0%] -left-[0%] -z-20 rounded-2xl object-cover brightness-75 lg:-bottom-[30%] lg:-left-[4%] lg:brightness-100"
            priority
          />
          <h2 className=" my-auto mt-6 bg-gradient-to-br from-neutral-50 to-neutral-200 bg-clip-text pt-4 text-center text-5xl font-semibold tracking-wide  text-transparent md:max-w-lg md:text-4xl lg:ml-[40%] lg:mt-0 lg:text-7xl">
            <span className="bg-gradient-to-br from-emerald-100 to-emerald-200 bg-clip-text ">
              50% OFF
            </span>{" "}
            <br /> Fall Collection
          </h2>
        </Link>
      </WobbleCard>
    </div>
  );
}
