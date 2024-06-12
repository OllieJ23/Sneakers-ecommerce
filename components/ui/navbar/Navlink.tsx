import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navlink({ linkName }: { linkName: string }) {
  const pathname = usePathname();

  const isActive = pathname === `/${linkName}`;

  return (
    <li>
      <Link
        href={`/${linkName}`}
        aria-label={`Link to ${linkName}`}
        className={clsx(
          "font-700 z-99 relative block w-fit after:absolute after:my-2 after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-orange after:transition after:duration-300 after:content-[''] hover:text-black hover:transition-all after:hover:scale-x-100",
          isActive && "text-black after:scale-x-100 ",
        )}
      >
        {linkName}
      </Link>
    </li>
  );
}

export default Navlink;
