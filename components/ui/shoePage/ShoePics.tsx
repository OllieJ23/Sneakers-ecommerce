"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ShoePics({
  thumbnailURLs,
  textID,
  imgType,
  type,
}: {
  thumbnailURLs: string[];
  textID: number;
  imgType: string;
  type?: string;
}) {
  const [activeImage, setActiveImage] = useState(1);
  const [open, setOpen] = useState(false);

  function onActiveImage(index: number) {
    setActiveImage(index + 1);
  }

  useEffect(() => {
    setActiveImage(1); // Reset active image when textID changes
  }, [textID]);

  function onNextImage() {
    setActiveImage((prevActiveImage) =>
      prevActiveImage < thumbnailURLs.length ? prevActiveImage + 1 : 1,
    );
  }

  function onPrevImage() {
    setActiveImage((prevActiveImage) =>
      prevActiveImage > 1 ? prevActiveImage - 1 : thumbnailURLs.length,
    );
  }

  return (
    <div className="no-select flex flex-col items-center ">
      <div
        className={clsx(
          "relative h-[16rem] w-[15rem] sm:h-[32rem] sm:w-[30rem]",
          {
            "mb-8": type !== "emberClassic",
            "mb-28": type === "emberClassic",
          },
        )}
      >
        <Image
          className="cursor-pointer rounded-2xl object-cover transition-all hover:opacity-90 sm:h-full sm:w-full"
          src={`/images/product-${textID}-images/product-${textID}-image-${activeImage}.${imgType}`}
          alt="Current Image of Product"
          width={500}
          height={500}
          onClick={() => setOpen(true)}
          priority
        />

        <ChevronRightIcon
          className="absolute -right-10 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform cursor-pointer rounded-full fill-orange transition hover:opacity-90 active:scale-90"
          onClick={onNextImage}
        />

        <ChevronLeftIcon
          className="absolute -left-10 top-1/2 z-10 h-10 w-10 -translate-y-1/2 transform cursor-pointer rounded-full fill-orange transition-transform "
          onClick={onPrevImage}
        />
      </div>

      <div className="mt-6 flex items-center gap-2 sm:w-full sm:justify-around">
        {thumbnailURLs.map((url, i) => (
          <Image
            style={{ width: "auto" }}
            className={clsx(
              "cursor-pointer",
              "rounded-xl",
              "transition-all",
              "hover:opacity-90",
              "sm:h-[6rem]",
              "object-cover",
              activeImage === i + 1 &&
                "scale-95 opacity-80 ring-2 ring-orange transition-all",
            )}
            key={i}
            src={url}
            alt={`Thumbnail Image ${i + 1} of Product`}
            width={88}
            height={88}
            onClick={() => onActiveImage(i)}
            priority
          />
        ))}
      </div>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        open={open}
        close={() => setOpen(false)}
        slides={thumbnailURLs.map((_, index) => ({
          src: `/images/product-${textID}-images/product-${textID}-image-${index + 1}.${imgType}`,
        }))}
      />
    </div>
  );
}

export default ShoePics;
