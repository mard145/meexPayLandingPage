import { ssoUrl } from "@/utils/sso.url";
import logo from "@assets/images/limo.svg";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header
      className="h-[102px] flex justify-between py-6 px-2 sm:px-32 2xl:px-64  "
      style={{
        background:
          "radial-gradient(60% 90% at 50% 10%, rgba(19, 31, 51, 0.60) 0%, rgba(19, 30, 49, 0.00) 100%)",
      }}
    >
      <Link href={"/"}>
        <Logo />
      </Link>

      <section className="hidden sm:flex gap-4 items-center">
        <Link
          href={`${ssoUrl}/login`}
          className="px-5 py-3 gap-2 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 14V12.6667C4 11.9594 4.28095 11.2811 4.78105 10.781C5.28115 10.281 5.95942 10 6.66667 10H9.33333C10.0406 10 10.7189 10.281 11.219 10.781C11.719 11.2811 12 11.9594 12 12.6667V14M5.33333 4.66667C5.33333 5.37391 5.61428 6.05219 6.11438 6.55229C6.61448 7.05238 7.29276 7.33333 8 7.33333C8.70724 7.33333 9.38552 7.05238 9.88562 6.55229C10.3857 6.05219 10.6667 5.37391 10.6667 4.66667C10.6667 3.95942 10.3857 3.28115 9.88562 2.78105C9.38552 2.28095 8.70724 2 8 2C7.29276 2 6.61448 2.28095 6.11438 2.78105C5.61428 3.28115 5.33333 3.95942 5.33333 4.66667Z"
              stroke="#BFC7D2"
              stroke-width="1.33"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[#BFC7D2] font-semibold text-sm">
            Fazer login
          </span>
        </Link>

        <Link
          href={`${ssoUrl}/register`}
          className="px-5 py-3 gap-2 flex items-center border border-[#2E3C51] rounded-[10px]"
        >
          <span className="text-[#BFC7D2] font-semibold text-sm">
            Criar conta
          </span>
          <svg
            width="17"
            height="11"
            viewBox="0 0 17 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7521 10.1839L10.8572 9.29403L13.9645 6.19176H0.75V4.89915H13.9645L10.8572 1.7919L11.7521 0.90696L16.3906 5.54545L11.7521 10.1839Z"
              fill="#BFC7D2"
            />
          </svg>
        </Link>
      </section>

      <button
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className="sm:hidden relative"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#A4AFBD"
        >
          <path d="M3 5h18v1H3zm0 8h18v-1H3zm0 7h18v-1H3z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>

        {showMobileMenu && (
          <div
            style={{
              background:
                "radial-gradient(100% 100% at 80% 50%, rgba(19, 31, 51, 0.00) 40%, rgba(19, 31, 51, 0.60) 100%)",
            }}
            className="flex flex-col absolute left-[-10rem] top-[1.2rem] border border-[#2e3c5145] rounded-xl"
          >
            <>
              <Link
                href={`${ssoUrl}/login`}
                className="px-5 py-3 gap-2 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 14V12.6667C4 11.9594 4.28095 11.2811 4.78105 10.781C5.28115 10.281 5.95942 10 6.66667 10H9.33333C10.0406 10 10.7189 10.281 11.219 10.781C11.719 11.2811 12 11.9594 12 12.6667V14M5.33333 4.66667C5.33333 5.37391 5.61428 6.05219 6.11438 6.55229C6.61448 7.05238 7.29276 7.33333 8 7.33333C8.70724 7.33333 9.38552 7.05238 9.88562 6.55229C10.3857 6.05219 10.6667 5.37391 10.6667 4.66667C10.6667 3.95942 10.3857 3.28115 9.88562 2.78105C9.38552 2.28095 8.70724 2 8 2C7.29276 2 6.61448 2.28095 6.11438 2.78105C5.61428 3.28115 5.33333 3.95942 5.33333 4.66667Z"
                    stroke="#BFC7D2"
                    stroke-width="1.33"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[#BFC7D2] font-semibold text-sm">
                  Fazer login
                </span>
              </Link>
              <Link
                href={`${ssoUrl}/register`}
                className="px-5 py-3 gap-2 flex items-center  "
              >
                <span className="text-[#BFC7D2] font-semibold text-sm">
                  Criar conta
                </span>
                <svg
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7521 10.1839L10.8572 9.29403L13.9645 6.19176H0.75V4.89915H13.9645L10.8572 1.7919L11.7521 0.90696L16.3906 5.54545L11.7521 10.1839Z"
                    fill="#BFC7D2"
                  />
                </svg>
              </Link>
            </>
          </div>
        )}
      </button>
    </header>
  );
}
