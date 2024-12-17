import IcArrowRight from "@/assets/icons/arrow-right.svg";
import IcYellowArrowRight from "@/assets/icons/yellow-arrow-right.svg";
import { cn } from "@/lib/utils";

import { ssoUrl } from "@/utils/sso.url";
import { IconArrowRight } from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";

interface GetStartedLinkProps {
  variant?: "link" | "button";
}
interface VariantsProps {
  link: string;
  button: string;
}

export default function GetStartedLink({
  variant = "link",
}: GetStartedLinkProps) {
  const variants: VariantsProps = {
    link: "ml-2 mt-10  text-[#6426C8]  flex gap-4 self-center md:self-start rounded-xl",
    button:
      "mt-8 bg-[#6426C8] px-8 py-4 text-white  font-bold flex gap-4 md:self-start rounded-xl",
  };

  return (
    <Link href={`${ssoUrl}/register`} className={`${variants[variant]}`}>
      <h1
        className={cn(
          "flex animate-shine items-center bg-[length:200%_100%] bg-clip-text  text-base font-medium text-transparent",
          variant === "link"
            ? "bg-[linear-gradient(110deg,#6426C8,45%,#1e2631,55%,#6426C8)]"
            : "bg-[linear-gradient(110deg,#fff,45%,#1e2631,55%,#fff)]",
        )}
      >
        Quero começar agora
        <IconArrowRight
          className={cn(
            variant === "link" ? "text-[#6426C8]" : "text-white",
            "ml-2 mt-0.5 h-5 w-5",
          )}
        />
      </h1>
    </Link>
  );
}
