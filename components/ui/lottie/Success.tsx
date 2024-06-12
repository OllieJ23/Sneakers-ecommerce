"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import lottieData from "@/components/ui/lottie/success.json";
import { HomeIcon } from "@heroicons/react/16/solid";
import { TextGenerateEffect } from "../aceternity/text-generate-effect";

function Success() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="z-50 flex flex-col items-center justify-center space-y-6">
        <Link href="/">
          <HomeIcon className="w-14 cursor-pointer fill-orange transition hover:scale-105 active:scale-95" />
        </Link>
        <h1 className="text-center text-6xl font-bold capitalize leading-normal text-darkBlue">
          <TextGenerateEffect words="Thank you for your Order!" />
        </h1>
        <Link href="/">
          <Lottie
            animationData={lottieData}
            className="h-96 w-96"
            loop={false}
          />
        </Link>
      </div>
    </div>
  );
}

export default Success;
