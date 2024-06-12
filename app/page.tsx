import BrowseBtn from "@/components/ui/home/BrowseBtn";
import Image from "next/image";
import Link from "next/link";
import landingImg from "@/public/images/landing-imgs/landing1.png";
import logoImg from "@/public/images/logo.svg";

function Page() {
  return (
    <main className=" relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={landingImg}
          layout="fill"
          className=" object-cover"
          alt="Background Landing Image of Sneakers"
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative  flex h-full -translate-y-[5rem] translate-x-[1rem] flex-col items-center justify-center  px-4">
        <Image
          src={logoImg}
          width={600}
          height={600}
          className="z-30 mr-4 w-full max-w-md object-contain md:max-w-lg lg:mr-0 lg:max-w-xl"
          alt="Picture of Logo"
          priority
        />
        <Link href="/Collections">
          <BrowseBtn />
        </Link>
      </div>
    </main>
  );
}

export default Page;
