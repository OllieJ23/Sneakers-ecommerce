import { TextGenerateEffect } from "../aceternity/text-generate-effect";
import Image from "next/image";
import BrowseBtn from "../home/BrowseBtn";
import Link from "next/link";

const words = `Fall Season is Here.`;

function CollectionsBanner() {
  return (
    <div className="relative z-20 h-screen max-h-screen w-full">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/shoe-banner-2.webp"
          width={1920}
          height={1080}
          alt="Picture of the author"
        />
        <div className="absolute right-20 top-1/4 flex-col items-center justify-end">
          <TextGenerateEffect className=" text-8xl" words={words} />{" "}
          {/* Add margin-bottom for spacing */}
          <Link href="\products\fall-shoe">
            <BrowseBtn text="Browse" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CollectionsBanner;
