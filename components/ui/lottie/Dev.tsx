"use client";
import Lottie from "lottie-react";
import lottieData from "@/components/ui/lottie/dev.json";

import Link from "next/link";

function Dev() {
  return (
    <div className="mt-6 flex w-full flex-col items-center">
      <h1 className="text-center text-6xl font-bold capitalize leading-normal text-darkBlue">
        Still <span className="text-orange">Lacing</span> Up!
      </h1>
      <h2 className="font-semi-bold text-center text-2xl leading-normal tracking-wide">
        Our Shop is a Work{" "}
        <span className="underline decoration-orange underline-offset-4">
          in Progress
        </span>{" "}
        :)
      </h2>
      <Link href="/">
        <Lottie animationData={lottieData} className="flex " loop={true} />
      </Link>
    </div>
  );
}

export default Dev;
