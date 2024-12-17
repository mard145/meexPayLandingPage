import Link from "next/link";
import IcWhatsapp from "@/assets/icons/whatsapp.svg";
import IcInstagram from "@/assets/icons/instagram.svg";
import LogoDollar from "@/assets/images/limo.svg";

import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="flex justify-between">
        <Logo />

        <section className="flex gap-2 ">
          <Link
            href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK!}
            target="_blank"
            className="rounded-lg bg-[#18212e] p-2"
          >
            <Image src={IcInstagram} alt="Instagram" />
          </Link>

          <Link
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK!}
            target="_blank"
            className="rounded-lg bg-[#18212e] p-2"
          >
            <Image src={IcWhatsapp} alt="WhatsApp" />
          </Link>
        </section>
      </div>

      <hr className="my-12 h-1 border-border" />
      <div className="flex items-center justify-between pb-[1rem]">
        <span className="text-sm text-[#A4AFBD]">
          © Meexpay 2024. Todos os direitos reservados.
        </span>

        <div className="flex items-center gap-3">
          <Link className="text-sm text-[#A4AFBD]" href={"/termos-de-uso"}>
            Termos
          </Link>

          <Link
            className="text-sm text-[#A4AFBD]"
            href={"/politicas-de-privacidade"}
          >
            Privacidade
          </Link>

          <Link
            className="text-sm text-[#A4AFBD]"
            href={"/politicas-de-conteudo"}
          >
            Conteúdo
          </Link>
        </div>
      </div>
    </footer>
  );
}
