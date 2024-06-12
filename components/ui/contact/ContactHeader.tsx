"use client";
import { TypewriterEffectSmooth } from "../aceternity/typewriter-effect";
export function TypewriterEffect() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "In",
    },
    {
      text: "Touch",
    },
    {
      text: "With",
    },
    {
      text: "Us.",
      className: "text-orange dark:text-orange ",
    },
  ];
  return (
    <div className="flex h-[10rem] flex-col items-center justify-center  ">
      <p className="text-xs text-neutral-600 sm:text-base dark:text-neutral-400  ">
        *For Demonstrative Purposes Only.
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
